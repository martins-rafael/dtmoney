import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --orange: #ff512f;
    --orange-light: #f09819;
    --gray-dark: #121214;
    --gray-light: #202024;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
  }
  
  .react-modal-content {
    position: relative;
    padding: 3rem;
    width: 100%;
    max-width: 576px;
    background: var(--background);
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    border: 0;
    transition: filter 0.2s ease-in-out;
    
    &:hover {
      filter: brightness(0.8);
    }
  }
`;