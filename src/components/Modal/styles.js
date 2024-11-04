import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 24px;
  }

  > .details {
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: ${({ theme }) => theme.COLORS.DARK_100};
    > .photoStudent {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  .buttonClose {
    width: 100px;
    cursor: pointer;
  }

  .buttonSave {
    width: 100px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    label {
      display: flex;
      flex-direction: column;
      color: ${({ theme }) => theme.COLORS.DARK_700};
      font-weight: 500;
      font-size: 16px;

      input {
        padding: 8px;
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};
        border-radius: 4px;
        margin-top: 5px;
      }
    }
    > .actions {
      display: flex;
      gap: 15px;
    }
    .photoStudent {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* Estilo para o botão Salvar */
    button[type="submit"] {
      background-color: ${({ theme }) => theme.COLORS.PRIMARY};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-weight: bold;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.DARK_500};
      }
    }
  }

  /* Estilo para o botão Fechar */
  button[type="button"] {
    background-color: ${({ theme }) => theme.COLORS.DANGER};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.DARK_400};
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
