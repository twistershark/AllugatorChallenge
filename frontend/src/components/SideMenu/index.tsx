import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import { Container, Logo, SideMenuButtons, SideMenuExitButton } from './styles';

import Button from '../Button';

import logoImg from '../../assets/logo.png';

const SideMenu: React.FC = () => {
  return (
    <Container>
      <Logo src={logoImg} />
      <SideMenuButtons>
        <Button selected iconName="apps-outline">
          Painel
        </Button>
        <Button iconName="person-outline">Cadastro</Button>
      </SideMenuButtons>
      <SideMenuExitButton>
        <IoIosArrowBack size={16} fill="#fff" />
        Sair
      </SideMenuExitButton>
    </Container>
  );
};

export default SideMenu;
