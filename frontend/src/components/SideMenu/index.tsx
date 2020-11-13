import React from 'react';

import { Container, Logo, SideMenuButtons, SideMenuExitButton } from './styles';

import Button from '../Button';

import logoImg from '../../assets/logo.png';

const SideMenu: React.FC = () => {
  return (
    <Container>
      <Logo src={logoImg} />
      <SideMenuButtons>
        <Button>Painel</Button>
        <Button>Cadastro</Button>
      </SideMenuButtons>
      <SideMenuExitButton>Sair</SideMenuExitButton>
    </Container>
  );
};

export default SideMenu;
