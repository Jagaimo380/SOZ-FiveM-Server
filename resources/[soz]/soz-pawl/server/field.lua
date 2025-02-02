--- @class Field
Field = {}

function Field:new(identifier, field, refillDelay, position, radius)
    self.__index = self

    return setmetatable({
        identifier = identifier,
        field = field,
        refillDelay = refillDelay,
        position = position,
        radius = radius,
    }, self)
end

function Field:GetField()
    return self.field
end

function Field:GetFieldStats()
    return self:GetCuttedTrees(), self:GetTrees()
end

function Field:GetTrees()
    local count = 0

    for _ in pairs(self.field) do
        count = count + 1
    end

    return count
end

function Field:GetCuttedTrees()
    local count = 0

    for _, tree in pairs(self.field) do
        if self:TreeIsCutted(tree.harvestTime) then
            count = count + 1
        end
    end

    return count
end

---
--- Core
---
function Field:Save()
    MySQL.update.await("UPDATE field SET data = ? WHERE identifier = ? AND owner = 'pawl'", {
        json.encode({field = self.field, refillDelay = self.refillDelay, position = self.position, radius = self.radius}),
        self.identifier,
    })
end

---
--- Utils
---
function Field:TreeExistAtPosition(position)
    for _, tree in pairs(self.field) do
        if table.matches(tree.position, position) and not self:TreeIsCutted(tree.harvestTime) then
            return true
        end
    end
    return false
end

function Field:TreeIsCutted(time)
    return (os.time() - time) * 1000 <= self.refillDelay
end

---
--- Consume the field
---
function Field:RemoveTree(position)
    for _, tree in pairs(self.field) do
        if table.matches(tree.position, position) then
            tree.harvestTime = os.time()

            self:SyncField()
            return true
        end
    end
    return false
end

function Field:Harvest(position)
    if self:GetTrees() <= 0 then
        return false
    end

    if not self:TreeExistAtPosition(position) then
        return false
    end

    return self:RemoveTree(position)
end

---
--- Workers
---
function Field:RunBackgroundTasks()
    Citizen.CreateThread(function()
        while true do
            self:Save()

            Citizen.Wait(60 * 1000)
        end
    end)
    Citizen.CreateThread(function()
        local delta = 60
        while true do
            local syncNeeded = false
            for _, tree in pairs(self.field) do
                if (os.time() - tree.harvestTime) * 1000 > self.refillDelay and (os.time() - tree.harvestTime - delta) * 1000 <= self.refillDelay then
                    syncNeeded = true
                    TriggerEvent("pawl:server-tree-respawn", tree.position)
                end
            end

            if syncNeeded then
                self:SyncField()
            end

            Citizen.Wait(delta * 1000)
        end
    end)
end

function Field:SyncField()
    TriggerLatentClientEvent("pawl:client:syncField", -1, 16 * 1024, self.identifier, self.field or {})
end
