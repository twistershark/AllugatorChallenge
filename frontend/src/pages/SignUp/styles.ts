import styled from 'styled-components';

export const Container = styled.div``;

export const FormContainer = styled.div`
  margin-left: 20rem;
  max-width: 900px;
  background: #fff;
  border-radius: 8px;
  padding: 2rem 2rem;

  box-shadow: 0 3px 8px #d1d1d1;
`;

export const FormTitle = styled.h2`
  color: #10cf58;
  font-weight: bold;
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
  align-items: center;

  .MuiIconButton-colorSecondary {
    color: #10cf58 !important;
  }
`;

export const InputName = styled.span`
  color: #363f5f;
`;

export const InputField = styled.input`
  background: #f0f0f5;
  margin: 0 20px;
  width: 100%;
  border-radius: 8px;
  border: 0;
  padding: 16px 24px;
  font-size: 1rem;
  color: #10cf58;

  &::placeholder {
    font-size: 0.9rem;
    color: #c8c8c8;
  }

  &:focus {
    border: 2px solid #10cf58;
  }
`;

export const SendButton = styled.button`
  width: 20%;
  background: #8ef5b5;
  border: none;
  border-radius: 24px;
  height: 3rem;
  text-align: center;
  transition: background-color 400ms;

  margin-top: 40px;

  color: #363f5f;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background: #10cf58;
  }
`;
