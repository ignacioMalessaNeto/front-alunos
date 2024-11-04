import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.GRADIENTS_200};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Roboto Slab', serif;
        //font-family: 'Poppins', sans-serif;

        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        outline: none;
    }

    a{
    text-decoration: none;
    }
    
    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
    filter: brightness(0.9);
    }

    input {
        padding: 5px 10px;
        border: 2px solid lightgray;
        border-radius: 5px;
        transition: 0.5s;
    }

    input:focus {
        border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY};
        border-radius: 5px;
        transition: 0.5s;
    }
`;