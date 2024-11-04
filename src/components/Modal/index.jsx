import { useState, useEffect } from "react";
import PropTypes from "prop-types"; 
import { Container, Overlay } from "./styles";
import api from "../../services/api"; 

export function Modal({ isOpen, onClose, student, isViewOnly, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    photo: null,
  });

  
  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name || "",
        email: student.email || "",
        phoneNumber: student.phoneNumber || "",
        address: student.address || "",
        photo: null, 
      });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSave = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      formDataToSend.append("address", formData.address);
      if (formData.photo) {
        formDataToSend.append("photo", formData.photo);
      }
  
      if (student) {
        await api.post(`/students/${student.id}?_method=PUT`, formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        await api.post("/students", formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
  
      onSave();  // Chama onSave para atualizar a lista no Home
      onClose();
    } catch (error) {
      console.error("Erro ao salvar o aluno:", error);
    }
  };
  

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <h2>
          {isViewOnly
            ? "Detalhes do Aluno"
            : student
            ? "Editar Aluno"
            : "Adicionar Novo Aluno"}
        </h2>

        {isViewOnly ? (
          <div className="details">
            <p><strong>Nome:</strong> {student?.name}</p>
            <p><strong>Email:</strong> {student?.email}</p>
            <p><strong>Telefone:</strong> {student?.phoneNumber}</p>
            <p><strong>Endereço:</strong> {student?.address}</p>
            {student?.photo && (
              <p className="photoStudent">
                <strong>Foto:</strong>
                <img
                  src={student.photo}
                  alt={`Foto de ${student.name}`}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                />
              </p>
            )}
            <button className="buttonClose" type="button" onClick={onClose}>
              Fechar
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
          >
            <label>
              Nome:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Telefone:
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Endereço:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Foto:
              <input type="file" name="photo" onChange={handleChange} />
            </label>
            <div className="actions">
              <button type="submit" className="buttonSave">
                Salvar
              </button>
              <button type="button" onClick={onClose} className="buttonClose">
                Fechar
              </button>
            </div>
          </form>
        )}
      </Container>
    </Overlay>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  student: PropTypes.object,
  isViewOnly: PropTypes.bool,
  onSave: PropTypes.func,
};
