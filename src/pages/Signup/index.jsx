import { Link, useNavigate } from "react-router-dom";
import { Container } from "./styles";
import api from "../../services/api";
import { useState } from "react";

export function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if (!username || !password || !email) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/register", { username, password, email })
      .then((response) => {
        alert(response.data.message || "Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          // Captura a mensagem de erro do servidor
          const errorMsg = error.response.data.error || "Erro desconhecido!";
          alert(errorMsg);
        } else {
          // Não houve resposta do servidor
          alert("Não foi possível cadastrar. Tente novamente.");
        }
      });
  }

  return (
    <Container>
      <div>
        <h1>Crie sua conta</h1>
        <form>
          <label htmlFor="name">Seu nome</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <div>
          <button
            className="buttonCreateLogin"
            type="button"
            onClick={handleSignUp}
          >
            Criar Conta
          </button>
          <Link className="buttonLogin" to="/">
            Já tenho uma conta
          </Link>
        </div>
      </div>
    </Container>
  );
}
