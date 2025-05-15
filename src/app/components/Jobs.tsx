import JobRow from './JobRow';
import jobs from '../../jobs.json';
import { nanoid } from 'nanoid';

export default function Jobs() {
    console.log('jobList-->', jobs);
    return (
        <div className="bg-gray-200 py-6 rounded-xl">
            <div className="container mx-auto">
                <h2 className="font-bold mb-4">Recent job</h2>
                <div className="flex flex-col gap-4">
                    <ul>
                        {jobs.map(jobItem => {
                            return (
                                <li key={nanoid()}>
                                    <JobRow job={jobItem} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
