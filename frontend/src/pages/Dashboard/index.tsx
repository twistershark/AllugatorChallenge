import React from 'react';

import { Container } from './styles';

import SideMenu from '../../components/SideMenu';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <SideMenu />
    </Container>
  );
};

export default Dashboard;
