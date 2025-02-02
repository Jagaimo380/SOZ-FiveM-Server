import { WardrobeConfig } from '../cloth';
import { Vector4 } from '../polyzone/vector';

export const StudioEnterZone = 'StudioEnterZone';
export const StudioExitZone = 'StudioExitZone';

export const NewsCloakroom: WardrobeConfig = {
    [GetHashKey('mp_m_freemode_01')]: {
        ['Tenue habillée']: {
            Components: {
                [3]: { Drawable: 1, Texture: 0, Palette: 0 },
                [4]: { Drawable: 24, Texture: 5, Palette: 0 },
                [6]: { Drawable: 104, Texture: 1, Palette: 0 },
                [7]: { Drawable: 22, Texture: 8, Palette: 0 },
                [8]: { Drawable: 26, Texture: 2, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 23, Texture: 3, Palette: 0 },
            },
            Props: {},
        },
        ['Tenue formelle']: {
            Components: {
                [3]: { Drawable: 11, Texture: 0, Palette: 0 },
                [4]: { Drawable: 22, Texture: 2, Palette: 0 },
                [6]: { Drawable: 104, Texture: 1, Palette: 0 },
                [8]: { Drawable: 0, Texture: 20, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 95, Texture: 1, Palette: 0 },
            },
            Props: {},
        },
        ['Tenue terrain']: {
            Components: {
                [3]: { Drawable: 11, Texture: 0, Palette: 0 },
                [4]: { Drawable: 0, Texture: 12, Palette: 0 },
                [6]: { Drawable: 22, Texture: 4, Palette: 0 },
                [8]: { Drawable: 9, Texture: 7, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 338, Texture: 2, Palette: 0 },
            },
            Props: {},
        },
        ['Tenue décontractée']: {
            Components: {
                [3]: { Drawable: 11, Texture: 0, Palette: 0 },
                [4]: { Drawable: 15, Texture: 8, Palette: 0 },
                [6]: { Drawable: 1, Texture: 0, Palette: 0 },
                [8]: { Drawable: 0, Texture: 2, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 346, Texture: 4, Palette: 0 },
            },
            Props: {},
        },
        ['Tenue hiver']: {
            Components: {
                [3]: { Drawable: 33, Texture: 0, Palette: 0 },
                [4]: { Drawable: 24, Texture: 0, Palette: 0 },
                [6]: { Drawable: 111, Texture: 1, Palette: 0 },
                [8]: { Drawable: 75, Texture: 6, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 192, Texture: 0, Palette: 0 },
            },
            Props: {},
        },
        ['Tenue hélico']: {
            Components: {
                [3]: { Drawable: 17, Texture: 0, Palette: 0 },
                [4]: { Drawable: 41, Texture: 0, Palette: 0 },
                [6]: { Drawable: 25, Texture: 0, Palette: 0 },
                [8]: { Drawable: 15, Texture: 0, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 54, Texture: 0, Palette: 0 },
            },
            Props: { [0]: { Drawable: 19, Texture: 0, Palette: 0 } },
        },
    },
    [GetHashKey('mp_f_freemode_01')]: {
        ['Tenue habillée']: {
            Components: {
                [3]: { Drawable: 5, Texture: 0, Palette: 0 },
                [4]: { Drawable: 133, Texture: 3, Palette: 0 },
                [6]: { Drawable: 108, Texture: 1, Palette: 0 },
                [8]: { Drawable: 23, Texture: 4, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 24, Texture: 0, Palette: 0 },
            },
            Props: {},
        },
        ['Tenue formelle']: {
            Components: {
                [3]: { Drawable: 9, Texture: 0, Palette: 0 },
                [4]: { Drawable: 34, Texture: 0, Palette: 0 },
                [6]: { Drawable: 108, Texture: 1, Palette: 0 },
                [7]: { Drawable: 22, Texture: 4, Palette: 0 },
                [8]: { Drawable: 7, Texture: 0, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 333, Texture: 0, Palette: 0 },
            },
            Props: {},
        },
        ['Tenue décontractée']: {
            Components: {
                [3]: { Drawable: 0, Texture: 0, Palette: 0 },
                [4]: { Drawable: 153, Texture: 0, Palette: 0 },
                [6]: { Drawable: 3, Texture: 4, Palette: 0 },
                [8]: { Drawable: 15, Texture: 0, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 428, Texture: 24, Palette: 0 },
            },
            Props: {},
        },
        ['Tenue terrain']: {
            Components: {
                [3]: { Drawable: 9, Texture: 0, Palette: 0 },
                [4]: { Drawable: 0, Texture: 0, Palette: 0 },
                [6]: { Drawable: 103, Texture: 1, Palette: 0 },
                [8]: { Drawable: 151, Texture: 11, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 8, Texture: 2, Palette: 0 },
            },
            Props: {},
        },
        ['Tenue hiver']: {
            Components: {
                [3]: { Drawable: 36, Texture: 0, Palette: 0 },
                [4]: { Drawable: 134, Texture: 23, Palette: 0 },
                [6]: { Drawable: 114, Texture: 1, Palette: 0 },
                [8]: { Drawable: 67, Texture: 3, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 194, Texture: 0, Palette: 0 },
            },
            Props: {},
        },
        ['Tenue hélico']: {
            Components: {
                [3]: { Drawable: 18, Texture: 0, Palette: 0 },
                [4]: { Drawable: 42, Texture: 0, Palette: 0 },
                [6]: { Drawable: 25, Texture: 0, Palette: 0 },
                [8]: { Drawable: 15, Texture: 0, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 47, Texture: 0, Palette: 0 },
            },
            Props: { [0]: { Drawable: 19, Texture: 0, Palette: 0 } },
        },
    },
};

export const YouNewsCloakroom: WardrobeConfig = {
    [GetHashKey('mp_m_freemode_01')]: {
        ['Tenue classe']: {
            Components: {
                [3]: { Drawable: 1, Texture: 0, Palette: 0 },
                [4]: { Drawable: 24, Texture: 4, Palette: 0 },
                [6]: { Drawable: 10, Texture: 0, Palette: 0 },
                [8]: { Drawable: 33, Texture: 0, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 29, Texture: 4, Palette: 0 },
            },
            Props: {},
        },
        ['Tenue casual']: {
            Components: {
                [3]: { Drawable: 4, Texture: 0, Palette: 0 },
                [4]: { Drawable: 10, Texture: 0, Palette: 0 },
                [6]: { Drawable: 10, Texture: 0, Palette: 0 },
                [8]: { Drawable: 75, Texture: 1, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 4, Texture: 0, Palette: 0 },
            },
            Props: {},
        },
        ['Tenue passe-Partout']: {
            Components: {
                [3]: { Drawable: 4, Texture: 0, Palette: 0 },
                [4]: { Drawable: 148, Texture: 2, Palette: 0 },
                [6]: { Drawable: 32, Texture: 12, Palette: 0 },
                [8]: { Drawable: 0, Texture: 2, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 122, Texture: 5, Palette: 0 },
            },
            Props: {},
        },
        ['Tenue de livraison']: {
            Components: {
                [3]: { Drawable: 4, Texture: 0, Palette: 0 },
                [4]: { Drawable: 31, Texture: 0, Palette: 0 },
                [6]: { Drawable: 50, Texture: 0, Palette: 0 },
                [8]: { Drawable: 15, Texture: 2, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 374, Texture: 8, Palette: 0 },
            },
            Props: {},
        },
    },

    [GetHashKey('mp_f_freemode_01')]: {
        ['Tenue classe']: {
            Components: {
                [3]: { Drawable: 3, Texture: 0, Palette: 0 },
                [4]: { Drawable: 23, Texture: 7, Palette: 0 },
                [6]: { Drawable: 108, Texture: 3, Palette: 0 },
                [8]: { Drawable: 40, Texture: 2, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 25, Texture: 0, Palette: 0 },
            },
            Props: {},
        },
        ['Tenue casual']: {
            Components: {
                [3]: { Drawable: 3, Texture: 0, Palette: 0 },
                [4]: { Drawable: 6, Texture: 0, Palette: 0 },
                [6]: { Drawable: 108, Texture: 1, Palette: 0 },
                [8]: { Drawable: 77, Texture: 1, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 7, Texture: 0, Palette: 0 },
            },
            Props: {},
        },
        ['Tenue passe-partout']: {
            Components: {
                [3]: { Drawable: 5, Texture: 0, Palette: 0 },
                [4]: { Drawable: 112, Texture: 1, Palette: 0 },
                [6]: { Drawable: 4, Texture: 0, Palette: 0 },
                [8]: { Drawable: 23, Texture: 1, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 35, Texture: 5, Palette: 0 },
            },
            Props: {},
        },
        ['Tenue de livraison']: {
            Components: {
                [3]: { Drawable: 3, Texture: 0, Palette: 0 },
                [4]: { Drawable: 30, Texture: 0, Palette: 0 },
                [6]: { Drawable: 51, Texture: 0, Palette: 0 },
                [8]: { Drawable: 14, Texture: 0, Palette: 0 },
                [9]: { Drawable: 0, Texture: 0, Palette: 0 },
                [10]: { Drawable: 0, Texture: 0, Palette: 0 },
                [11]: { Drawable: 392, Texture: 8, Palette: 0 },
            },
            Props: {},
        },
    },
};

export const NewsDeliveryZones: Vector4[] = [
    [-1028.855957, -214.12674, 36.920403, 333.26409912109],
    [-1054.103394, -1320.988403, 4.536674, 66.45777130127],
    [-1057.26123, -359.602783, 36.769562, 224.44247436523],
    [-1068.017578, -432.406769, 35.637085, 118.47242736816],
    [-1075.419556, -789.848755, 18.315536, 314.51092529297],
    [-1114.922607, -1571.92395, 3.37064, 39.999977111816],
    [-1158.484131, -1398.057129, 3.995689, 215.00003051758],
    [-1199.55249, -1195.991699, 6.663307, 99.0],
    [-1212.264648, -1388.784668, 3.073288, 119.33581542969],
    [-1231.988281, -1074.876465, 7.390663, 289.99993896484],
    [-1245.720093, -300.432068, 36.381485, 202.50395202637],
    [-1261.095581, -483.712677, 32.370239, 48.781097412109],
    [-1283.486328, -643.407532, 25.668545, 34.996604919434],
    [-1285.070557, -1130.245483, 5.786301, 325.27420043945],
    [-1352.528076, -388.885712, 35.72451, 27.389770507813],
    [-1356.213135, -559.459167, 29.181019, 35.000003814697],
    [-1389.584717, -229.708649, 43.103691, 299.54916381836],
    [-1419.981689, -299.439667, 43.118324, 219.14680480957],
    [-1430.188232, -94.767944, 50.747959, 26.667108535767],
    [-1433.152832, -603.047302, 29.725033, 27.454666137695],
    [-1441.242676, -721.77417, 22.769955, 171.50831604004],
    [-1452.583618, -417.978333, 34.651104, 211.07144165039],
    [-148.706848, -719.149597, 33.780556, 340.89144897461],
    [-149.353973, -399.452728, 32.694748, 71.327438354492],
    [-1501.807861, -150.109787, 51.532417, 42.549709320068],
    [-1558.648193, -484.136353, 34.476532, 212.42889404297],
    [-1674.408813, -584.710266, 32.645836, 233.24212646484],
    [-232.15036, -972.253113, 28.285147, 249.99996948242],
    [-252.504501, -344.527405, 28.94725, 102.06046295166],
    [-270.582306, -828.589783, 30.842215, 69.501159667969],
    [-279.216858, -23.278879, 48.351597, 160.03233337402],
    [-279.961395, -645.719177, 32.134071, 189.66546630859],
    [-389.526794, -235.539139, 35.027954, 258.26693725586],
    [-432.238647, 16.209444, 45.135651, 164.31434631348],
    [-523.404175, -849.59668, 29.249039, 0.0],
    [-54.679993, -98.464668, 56.814148, 163.00003051758],
    [-549.18811, -1023.730591, 21.820786, 269.57159423828],
    [-555.079468, -681.515747, 32.243011, 270.0],
    [-62.858543, -954.057068, 28.363523, 340.00003051758],
    [-626.395264, -975.007874, 20.357086, 89.304527282715],
    [-65.844994, -1127.686523, 24.801497, 179.99998474121],
    [-658.944458, -671.271118, 30.589294, 358.44686889648],
    [-741.504395, -356.11441, 34.402359, 339.4944152832],
    [-751.379395, -790.350342, 23.432053, 269.70727539063],
    [-751.963623, -679.045166, 29.307114, 270.0],
    [-768.917236, -1091.19751, 9.645004, 122.07983398438],
    [-853.097656, -679.02832, 26.826675, 90.850791931152],
    [-874.94342, -174.356049, 36.915871, 28.735105514526],
    [-875.788635, -1196.405762, 3.875984, 29.174617767334],
    [-878.733398, -899.821655, 14.803177, 125.24696350098],
    [-880.759644, -837.844116, 18.022568, 0.0],
    [-921.570557, -419.739227, 36.454262, 26.836490631104],
    [-957.553528, -1243.053589, 4.426014, 29.174617767334],
    [106.503113, -10.535351, 66.938751, 163.59280395508],
    [122.304443, -165.676849, 53.672775, 157.99998474121],
    [186.254913, -1011.962585, 28.323034, 161.48391723633],
    [186.254913, -1011.962585, 28.323034, 161.48391723633],
    [2.561432, -1124.813232, 27.215322, 180.0],
    [208.226044, -850.632141, 29.543875, 341.93173217773],
    [209.075562, -334.644836, 43.015038, 159.74560546875],
    [235.885681, -604.609558, 41.282051, 247.57110595703],
    [241.092529, -59.502419, 68.618217, 162.68226623535],
    [259.807892, -216.211914, 52.974228, 158.99993896484],
    [29.111824, -736.694275, 43.203011, 249.47077941895],
    [307.621307, -869.748596, 28.279646, 0.3774231672287],
    [310.513794, -1070.810059, 28.402929, 90.55827331543],
    [327.52002, 166.682861, 102.571884, 159.33210754395],
    [380.935486, -95.208458, 65.908051, 191.66044616699],
    [419.233429, -997.792175, 28.217978, 269.68365478516],
    [419.335419, -817.91925, 28.196287, 179.99996948242],
    [523.547852, -158.802887, 55.60788, 267.17138671875],
    [53.516266, -278.182373, 46.611259, 160.29583740234],
    [541.101318, 88.713493, 95.2938, 160.45596313477],
];
