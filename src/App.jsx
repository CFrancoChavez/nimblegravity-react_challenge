import { useEffect, useState } from 'react';
import { getCandidateByEmail, getJobsList, applyToJob } from './services/api';
import JobList from './components/JobList';

function App() {
  const [candidate, setCandidate] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Step 2: Datos de candidato
        const candidateData = await getCandidateByEmail('franco.chvez@gmail.com');
        // Step 3: Lista de posiciones
        const jobsData = await getJobsList();
        
        setCandidate(candidateData);
        setJobs(jobsData);
      } catch (error) {
        console.error("Error inicializando app:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleApply = async (jobId, repoUrl) => {
    
     const payload = {
      uuid: candidate.uuid,
      candidateId: candidate.candidateId,
      applicationId: candidate.applicationId, 
      jobId: String(jobId),
      repoUrl: repoUrl.trim()
    };
    console.log("Enviando este Payload:", payload);
    
    try {
      const result = await applyToJob(payload);
      
      alert("¡Postulación enviada con éxito!");
      //console.log("Respuesta servidor:", result);
    } catch (error) {
      // Aquí capturamos el mensaje descriptivo que pide el mail
      //console.error("Error detallado:", error.message);
      alert(`Error: ${error.message}`);
    }
  };

  if (loading) return <div style={{ padding: '20px' }}>Cargando desafío...</div>;

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ borderBottom: '2px solid #eee', marginBottom: '20px', paddingBottom: '10px' }}>
        <h1 style={{ marginBottom: '5px' }}>Open Positions</h1>
        {candidate && (
          <p style={{ color: '#666', margin: 0 }}>
            Candidato: <strong>{candidate.firstName} {candidate.lastName}</strong>
          </p>
        )}
      </header>

      {/* Step 4: Mostrar listado */}
      <JobList jobs={jobs} onApply={handleApply} />
    </main>
  );
}

export default App;