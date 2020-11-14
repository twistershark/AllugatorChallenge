import React from 'react';

import { Container, Logo, SideMenuButtons, SideMenuExitText } from './styles';

import Button from '../Button';

import logoImg from '../../assets/logo.png';

interface Props {
  selected?: boolean;
}

const SideMenu: React.FC<Props> = ({ selected }) => {
  return (
    <Container>
      <Logo src={logoImg} />
      <SideMenuButtons>
        <Button route="/" selected={selected} iconName="apps-outline">
          Painel
        </Button>
        <Button route="/signup" selected={selected} iconName="person-outline">
          Cadastro
        </Button>
      </SideMenuButtons>
      <SideMenuExitText>Desenvolvido por Paulo Victor </SideMenuExitText>
    </Container>
  );
};

export default SideMenu;
