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

export const SideMenuExitText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: auto;
  margin-bottom: 1rem;

  height: 3rem;
  width: 70%;
  text-align: center;

  color: #10cf58;
  font-size: 0.8rem;
  font-weight: normal;
`;
