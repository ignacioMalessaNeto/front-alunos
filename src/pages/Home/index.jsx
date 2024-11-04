import { useState, useEffect } from "react";
import { Container } from "./styles";
import api from "../../services/api.js";
import { useAuth } from "../../hooks/auth.jsx";
import { Modal } from "../../components/Modal";
export function Home() {
  const { user } = useAuth();
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isViewOnly, setIsViewOnly] = useState(false);

  useEffect(() => {
    if (user) {
      api
        .get("/students")
        .then((response) => {
          setStudents(response.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  function handleView(student) {
    setSelectedStudent(student);
    setIsViewOnly(true);
    setIsModalOpen(true);
  }
  function handleDelete(id) {
    if (window.confirm("Tem certeza que deseja excluir este aluno?")) {
      api
        .delete(`/students/${id}`)
        .then(() => {
          setStudents((prev) => prev.filter((s) => s.id !== id));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  function handleEdit(student) {
    setSelectedStudent(student);
    setIsViewOnly(false);
    setIsModalOpen(true);
  }

  function handleSave() {
    setIsModalOpen(false);
    api
      .get("/students")
      .then((response) => {
        setStudents(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao atualizar a lista de alunos:", error);
      });
  }
  
  return (
    <Container>
      <main>
        <h1>Gerenciador de alunos</h1>
        <button
          className="addStudent"
          onClick={() => {
            setSelectedStudent(null);
            setIsViewOnly(false);
            setIsModalOpen(true);
          }}
        >
          Adicionar Aluno
        </button>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Endereço</th>
                <th>Foto</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} onClick={() => handleView(student)}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phoneNumber}</td>
                  <td>{student.address}</td>
                  <td>
                    <img src={student.photo} alt={`Foto de ${student.name}`} />
                  </td>
                  <td>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(student);
                      }}
                    >
                      Editar
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(student.id);
                      }}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        student={selectedStudent}
        isViewOnly={isViewOnly}
        onSave={handleSave}
      />
    </Container>
  );
}
