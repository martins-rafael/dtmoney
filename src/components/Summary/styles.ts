import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    padding: 1.5rem 2rem;
    color: var(--text-title);
    background: var(--shape);
    border-radius: 0.25rem;
    box-shadow: 0px 1.5rem 4rem rgba(0, 0, 0, 0.06);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      color: #ffffff;
      background: linear-gradient(
        to right,
        var(--orange) 0%,
        var(--orange-light) 51%,
        var(--orange) 100%
      );
    }
  }
`;