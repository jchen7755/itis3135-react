import { useEffect, useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.error("Error fetching students:", err));
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>ITIS 3135 Student Introductions</h1>

      {students.length === 0 ? (
        <p>Loading...</p>
      ) : (
        students.map((s, i) => (
          <div
            key={i}
            style={{
              border: "1px solid rgba(255, 180, 17, 1)",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "25px",
              background: "rgba(255, 248, 225, 0.9)"
            }}
          >
            {/* Name */}
            <h2>
              {s.name?.first} {s.name?.middleInitial} {s.name?.last}
            </h2>

            {/* Image */}
            {s.media?.hasImage && (
              <div style={{ marginBottom: "15px" }}>
                <img
                  src={`https://dvonb.xyz${s.media.src}`}
                  alt={s.media.caption}
                  style={{ maxWidth: "200px", borderRadius: "10px" }}
                />
                <p><em>{s.media.caption}</em></p>
              </div>
            )}

            {/* Mascot */}
            <p><strong>Mascot:</strong> {s.mascot}</p>

            {/* Platform */}
            <p>
              <strong>Platform:</strong> {s.platform?.device} ({s.platform?.os})
            </p>

            <hr />

            {/* Backgrounds */}
            <h3>Background</h3>
            <p><strong>Personal:</strong> {s.backgrounds?.personal}</p>
            <p><strong>Professional:</strong> {s.backgrounds?.professional}</p>
            <p><strong>Academic:</strong> {s.backgrounds?.academic}</p>
            <p><strong>Web Dev Experience:</strong> {s.backgrounds?.subject}</p>

            <hr />

            {/* Courses */}
            <h3>Courses</h3>
            <ul>
              {s.courses?.map((c, idx) => (
                <li key={idx}>
                  {c.code} — {c.name}: <em>{c.reason}</em>
                </li>
              ))}
            </ul>

            <hr />

            {/* Personal Statement */}
            {s.personalStatement && (
              <>
                <h3>Personal Statement</h3>
                <p>{s.personalStatement}</p>
              </>
            )}

            {/* Quote */}
            {s.quote?.text && (
              <>
                <h3>Quote</h3>
                <blockquote>
                  “{s.quote.text}” — <strong>{s.quote.author}</strong>
                </blockquote>
              </>
            )}

            {/* Fun fact */}
            <p><strong>Fun Fact:</strong> {s.funFact}</p>

            {/* Additional */}
            {s.additional && (
              <p><strong>Additional:</strong> {s.additional}</p>
            )}

            <hr />

            {/* Links */}
            <h3>Links</h3>
            <ul>
              {Object.entries(s.links || {}).map(([key, value]) => (
                value ? (
                  <li key={key}>
                    <strong>{key}:</strong>{" "}
                    <a href={value} target="_blank" rel="noreferrer">
                      {value}
                    </a>
                  </li>
                ) : null
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}