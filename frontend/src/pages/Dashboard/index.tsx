import React from 'react';

import {
  Container,
  SideMenu,
  Logo,
  SideMenuButtons,
  SideMenuButton,
  SideMenuExitButton,
} from './styles';

import logoImg from '../../assets/logo.png';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <SideMenu>
        <Logo src={logoImg} />
        <SideMenuButtons>
          <SideMenuButton>Início</SideMenuButton>
          <SideMenuButton>Cadastro</SideMenuButton>
        </SideMenuButtons>
        <SideMenuExitButton>Sair</SideMenuExitButton>
      </SideMenu>
    </Container>
  );
};

export default Dashboard;
