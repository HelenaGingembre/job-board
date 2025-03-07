import JobRow from './JobRow';

export default function Jobs() {
  return (
    <div className="bg-gray-200 py-6 rounded-xl">
      <div className="container mx-auto">
        <h2 className="font-bold mb-4">Recent job</h2>
        <div className="flex flex-col gap-4">
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
        </div>
      </div>
    </div>
  );
}
