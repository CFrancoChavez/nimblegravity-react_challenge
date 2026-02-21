import JobItem from './JobItem';

const JobList = ({ jobs, onApply }) => {
  return (
    <div className="job-list-container">
      {jobs.length === 0 ? (
        <p>No hay posiciones disponibles.</p>
      ) : (
        jobs.map((job) => (
          <JobItem 
            key={job.id} 
            job={job} 
            onApply={onApply} 
          />
        ))
      )}
    </div>
  );
};

export default JobList;