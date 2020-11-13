import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.nav`
  position: fixed;
  height: 100vh;
  max-width: 14rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

export const Logo = styled.img`
  width: 100%;
  height: 3rem;
  padding: 0 1.5rem;
`;

export const SideMenuButtons = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SideMenuExitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    display: none;
    transition: display 2000ms;
  }

  margin-top: auto;
  margin-bottom: 1rem;

  background: #10cf58;
  border: none;
  border-radius: 24px;
  height: 3rem;
  width: 70%;
  text-align: center;
  transition: background-color 200ms;

  color: #fff;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background: ${shade(0.2, '#10cf58')};

    svg {
      display: inline-block;
    }
  }
`;
