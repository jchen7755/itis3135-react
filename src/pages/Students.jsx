import { useState, useEffect } from 'react';

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all students data
    fetch('https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch student data');
        }
        return response.json();
      })
      .then(data => {
        setStudents(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main>
        <h2>Loading student data...</h2>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <h2>Error loading student data</h2>
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main>
      <h2>ITIS 3135 Student Introductions</h2>
      <p>Total Students: {students.length}</p>
      
      <div className="students-container">
        {students.map((student, index) => (
          <div key={index} className="student-card">
            <h3>{student.name || 'Name not provided'}</h3>
            
            {student.image && (
              <img 
                src={student.image} 
                alt={student.name || 'Student'} 
                className="student-image"
              />
            )}
            
            <div className="student-info">
              {student.personal && (
                <p><strong>Personal Background:</strong> {student.personal}</p>
              )}
              
              {student.professional && (
                <p><strong>Professional Background:</strong> {student.professional}</p>
              )}
              
              {student.academic && (
                <p><strong>Academic Background:</strong> {student.academic}</p>
              )}
              
              {student.webdev && (
                <p><strong>Web Development:</strong> {student.webdev}</p>
              )}
              
              {student.platform && (
                <p><strong>Primary Platform:</strong> {student.platform}</p>
              )}
              
              {student.courses && (
                <p><strong>Courses:</strong> {student.courses}</p>
              )}
              
              {student.funny && (
                <p><strong>Interesting Fact:</strong> {student.funny}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Students;