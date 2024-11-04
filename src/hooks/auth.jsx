import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../services/api.js";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  const TOKEN_EXPIRATION_TIME = 60 * 60 * 1000; // 1 hora em milissegundos

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/login", { email, password });
      const { user, token } = response.data;

      const loginTime = Date.now();

      sessionStorage.setItem("@gerenciaAlunos:user", JSON.stringify(user));
      sessionStorage.setItem("@gerenciaAlunos:token", token);
      sessionStorage.setItem("@gerenciaAlunos:loginTime", loginTime);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  async function signOut() {
    await api.post("/logout");
    api.defaults.headers.common["Authorization"] = null;

    sessionStorage.removeItem("@gerenciaAlunos:token");
    sessionStorage.removeItem("@gerenciaAlunos:user");
    sessionStorage.removeItem("@gerenciaAlunos:loginTime");

    setData({});
  }

  useEffect(() => {
    const token = sessionStorage.getItem("@gerenciaAlunos:token");
    const user = sessionStorage.getItem("@gerenciaAlunos:user");
    const loginTime = sessionStorage.getItem("@gerenciaAlunos:loginTime");

    if (token && user && loginTime) {
      const currentTime = Date.now();
      const elapsed = currentTime - Number(loginTime);

      if (elapsed >= TOKEN_EXPIRATION_TIME) {
        // Token expirado
        alert("Sua sessão expirou. Por favor, faça login novamente.");
        signOut();
      } else {
        // Token válido, configura o cabeçalho de autorização
        api.defaults.headers.authorization = `Bearer ${token}`;
        setData({
          token,
          user: JSON.parse(user),
        });

        // Verifica periodicamente se o token expirou
        const interval = setInterval(() => {
          const elapsed = Date.now() - Number(sessionStorage.getItem("@gerenciaAlunos:loginTime"));
          if (elapsed >= TOKEN_EXPIRATION_TIME) {
            alert("Sua sessão expirou. Por favor, faça login novamente.");
            signOut();
          }
        }, 1000 * 60); // Verifica a cada minuto

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(interval);
      }
    }

    // Intercepta respostas com erro 401 para redirecionar o usuário para login
    const interceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          alert("Sua sessão expirou. Por favor, faça login novamente.");
          signOut();
        }
        return Promise.reject(error);
      }
    );

    // Remove o interceptor quando o componente for desmontado
    return () => {
      api.interceptors.response.eject(interceptor);
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
