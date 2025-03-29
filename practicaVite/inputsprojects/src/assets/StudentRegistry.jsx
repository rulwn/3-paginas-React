import React, { useState } from 'react';

const StudentRegistry = () => {
  const [students, setStudents] = useState([
    { name: 'Wilfredo', age: 26, id: '20140155' },
    { name: 'Bryan Miranda', age: 25, id: '20202020' }
  ]);
  const [newStudent, setNewStudent] = useState({ name: '', age: '', id: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent(prev => ({ ...prev, [name]: value }));
  };

  const addStudent = (e) => {
    e.preventDefault();
    if (newStudent.name && newStudent.age && newStudent.id) {
      setStudents([...students, newStudent]);
      setNewStudent({ name: '', age: '', id: '' });
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h1 className="mb-0">Registro de Estudiantes</h1>
        </div>
        
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h2 className="h5 mb-0">Agregar Estudiante</h2>
                </div>
                <div className="card-body">
                  <form onSubmit={addStudent}>
                    <div className="mb-3">
                      <label className="form-label">Nombre:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={newStudent.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Edad:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="age"
                        value={newStudent.age}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Carnet:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="id"
                        value={newStudent.id}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Agregar Estudiante
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h2 className="h5 mb-0">Listado de Estudiantes</h2>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-hover">
                      <thead className="table-dark">
                        <tr>
                          <th>Nombre</th>
                          <th>Edad</th>
                          <th>Carnet</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.map((student, index) => (
                          <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.id}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistry;go