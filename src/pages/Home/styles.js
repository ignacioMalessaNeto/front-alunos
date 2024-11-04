import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 20px;

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    > h1 {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      font-size: 28px;
      margin-bottom: 20px;
    }

    > .addStudent {
      background-color: ${({ theme }) => theme.COLORS.PRIMARY};
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          border: none;
          padding: 8px 12px;
          margin: 0 5px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
          margin-bottom: 10px;

          &:hover {
            background-color: ${({ theme }) => theme.COLORS.PRIMARY1};
          }
    }

    > .table-wrapper {
      width: 100%;
      max-width: 1200px;
      max-height: 400px; 
      overflow: auto;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

      scrollbar-width: thin;
      scrollbar-color: ${({ theme }) => theme.COLORS.PRIMARY} ${({ theme }) => theme.COLORS.LIGHT_300};
      > table {
        width: 100%;
        min-width: 800px;
        border-collapse: collapse;
        background-color: ${({ theme }) => theme.COLORS.LIGHT_200};

        th,
        td {
          padding: 15px;
          text-align: center;
          color: ${({ theme }) => theme.COLORS.DARK_700};
          border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};
        }

        thead th {
          position: sticky;
          top: 0;
          background-color: ${({ theme }) => theme.COLORS.PRIMARY};
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          font-weight: bold;
          z-index: 1;
        }

        tbody tr:hover {
          background-color: ${({ theme }) => theme.COLORS.LIGHT_300};
          cursor: pointer;
        }

        td img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }

        td button {
          background-color: ${({ theme }) => theme.COLORS.SECONDARY};
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          border: none;
          padding: 8px 12px;
          margin: 0 5px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;

          &:hover {
            background-color: ${({ theme }) => theme.COLORS.DARK_500};
          }
        }

        td button:last-child {
          background-color: ${({ theme }) => theme.COLORS.DANGER};

          &:hover {
            background-color: ${({ theme }) => theme.COLORS.DARK_400};
          }
        }
      }
    }
  }
`;
