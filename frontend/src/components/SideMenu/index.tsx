import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import { Container, Logo, SideMenuButtons, SideMenuExitButton } from './styles';

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
      <SideMenuExitButton>
        <IoIosArrowBack size={16} fill="#fff" />
        Sair
      </SideMenuExitButton>
    </Container>
  );
};

export default SideMenu;
