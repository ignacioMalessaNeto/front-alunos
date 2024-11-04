import { Link } from "react-router-dom";
import { Container } from "./styles";
import { useState } from "react";
import { useAuth } from "../../hooks/auth.jsx";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    if (password.length < 6) {
      return alert("A senha tem que ter no mínimo 6 caracteres");
    }
    signIn({ email, password });
  }
  

  return (
    <Container>
      <div>
        <h1 className="title-login">Faça seu login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input 
          placeholder="exemplo@exemplo.com.br" 
          type="email" 
          id="email" 
          onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input 
          placeholder="No mínimo 6 caracteres" 
          type="password" 
          id="password"
          onChange={(e) => setPassword(e.target.value)} 
          />
        </div> 
        <button type="button" className="buttonLogin" onClick={handleSignIn}>
          Entrar
        </button>
        <Link className="buttonCreateLogin" to="/register">
          Criar uma conta
        </Link>
      </div>
    </Container>
  );
}
