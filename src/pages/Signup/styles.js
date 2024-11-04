import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_200}; // Cor de fundo da página
  color: ${({ theme }) => theme.COLORS.DARK_100}; // Cor do texto principal

  > div {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_100}; // Cor de fundo do formulário
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;

    h1 {
      text-align: center;
      margin-bottom: 20px;
      color: ${({ theme }) => theme.COLORS.DARK_100}; // Cor do título
    }

    & > form {
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px; // Espaço entre os campos

      > label {
        color: ${({ theme }) => theme.COLORS.DARK_300}; // Cor do label
      }

    }

    button {
      width: 100%;
      padding: 10px;
      background-color: ${({ theme }) => theme.COLORS.PRIMARY}; // Cor do botão
      color: ${({ theme }) => theme.COLORS.LIGHT_100}; // Cor do texto do botão
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.DARK_600}; // Cor ao passar o mouse
      }
    }

    a {
      display: block; // Faz o link ocupar toda a linha
      text-align: center; // Centraliza o texto do link
      margin-top: 15px; // Espaço acima do link
      color: ${({ theme }) => theme.COLORS.PRIMARY}; // Cor do link
      text-decoration: none; // Remove o sublinhado
      font-size: 14px; // Tamanho da fonte do link

      &:hover {
        text-decoration: underline; // Sublinha ao passar o mouse
      }
    }
  }
`;
