import { useState } from 'react';

const JobItem = ({ job, onApply }) => {
  const [repoUrl, setRepoUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!repoUrl.includes('github.com')) {
      alert("Por favor, ingresa una URL válida de GitHub");
      return;
    }
    onApply(job.id, repoUrl);
  };

  return (
    <div className="job-card" style={{ border: '1px solid #ddd', padding: '15px', margin: '10px 0', borderRadius: '8px' }}>
      <h3>{job.title}</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="url" 
          placeholder="https://github.com/usuario/repositorio" 
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          required
          style={{ 
                  flex: '1', 
                  padding: '8px', 
                  minWidth: '250px',
                  color: 'white',        
                  backgroundColor: '#333', 
                  border: '1px solid #555'
                }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobItem;