import { Injectable } from '../../core/decorators/injectable';
import { JobGrade, JobType } from '../../shared/job';
import { RepositoryType } from '../../shared/repository';
import { Repository } from './repository';

@Injectable(JobGradeRepository, Repository)
export class JobGradeRepository extends Repository<RepositoryType.JobGrade> {
    public type = RepositoryType.JobGrade;

    public getGradesByJob(jobId: JobType, maxGradeWeight?: number): JobGrade[] {
        if (!maxGradeWeight) {
            return this.get(grade => grade.jobId === jobId);
        } else {
            return this.get(grade => grade.jobId === jobId && grade.weight < maxGradeWeight);
        }
    }
}
