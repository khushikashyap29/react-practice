import { useState } from "react";
import "./App.css";
function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Krish", score: 50 },
    { id: 2, name: "Rahul", score: 30 }
  ]);

  const updateScore = (id, score) => {
    setStudents(students.map(s =>
      s.id === id ? { ...s, score } : s
    ));
  };

  const addStudent = () => {
    const name = prompt("Enter name:");
    const score = Number(prompt("Enter score:"));
    if (!name) return;

    setStudents([...students, { id: Date.now(), name, score }]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Student Scoreboard</h1>

      <button onClick={addStudent}>Add Student</button>

      <table border="1" style={{ margin: "20px auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>
                <input
                  type="number"
                  value={s.score}
                  onChange={(e) =>
                    updateScore(s.id, Number(e.target.value))
                  }
                />
              </td>
              <td style={{ color: s.score >= 40 ? "green" : "red" }}>
                {s.score >= 40 ? "Pass" : "Fail"}
              </td>
              <td className={s.score >= 40 ? "pass" : "fail"}>
  {s.score >= 40 ? "Pass" : "Fail"}
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;