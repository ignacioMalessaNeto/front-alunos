import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center; // Centraliza horizontalmente
  align-items: center; // Centraliza verticalmente
  height: 100vh; // Ocupa toda a altura da tela
  background-color: ${({ theme }) => theme.COLORS.LIGHT_200}; // Cor de fundo da página

  > div {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_100}; // Cor de fundo do formulário
    padding: 40px; // Adiciona espaço interno
    border-radius: 8px; // Cantos arredondados
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Sombra para dar destaque
    width: 100%; // Faz o formulário ocupar toda a largura disponível
    max-width: 400px; // Largura máxima do formulário

    h1 {
      text-align: center; // Centraliza o título
      margin-bottom: 20px; // Espaço abaixo do título
      color: ${({ theme }) => theme.COLORS.DARK_100}; // Cor do título
    }

    div {
      margin-bottom: 15px; // Espaço entre os campos do formulário
      display: flex; // Flexbox para alinhar label e input
      flex-direction: column; // Coloca label e input em coluna

      label {
        margin-bottom: 5px; // Espaço entre label e input
        color: ${({ theme }) => theme.COLORS.DARK_300}; // Cor do label
      }

    }

    button {
      width: 100%; // Faz o botão ocupar toda a largura do formulário
      padding: 10px; // Espaço interno do botão
      background-color: ${({ theme }) => theme.COLORS.PRIMARY}; // Cor do botão
      color: ${({ theme }) => theme.COLORS.LIGHT_100}; // Cor do texto do botão
      border: none; // Remove a borda padrão
      border-radius: 5px; // Cantos arredondados
      cursor: pointer; // Altera o cursor para indicar que é clicável
      transition: background-color 0.3s; // Efeito de transição ao passar o mouse

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.DARK_600}; // Cor do botão ao passar o mouse
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
