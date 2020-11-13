import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const SideMenu = styled.nav`
  height: 100vh;
  max-width: 14rem;
  background: #14213d;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-top: 2rem;
`;

export const Logo = styled.img`
  width: 100%;
  height: 3rem;
  padding: 0 1.5rem;
`;

export const SideMenuButtons = styled.div`
  margin-top: 4rem;
`;
export const SideMenuButton = styled.button`
  background: ${shade(0.2, '#14213d')};
  border: none;
  border-top: 1px solid ${shade(0.8, '#14213d')};
  height: 3.5rem;
  width: 100%;
  text-align: center;
  transition: background-color 200ms;

  color: #fff;
  font-size: 1rem;
  font-weight: bold;

  & + button {
    border-bottom: 1px solid ${shade(0.8, '#14213d')};
  }

  &:hover {
    background: ${shade(0.5, '#14213d')};
  }
`;

export const SideMenuExitButton = styled.button`
  margin-top: auto;

  background: #10cf58;
  border: none;
  border-top: 1px solid ${shade(0.8, '#14213d')};
  height: 3rem;
  width: 100%;
  text-align: center;
  transition: background-color 200ms;

  color: #14213d;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background: ${shade(0.2, '#10cf58')};
  }
`;
