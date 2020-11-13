import React from 'react';

import { Container } from './styles';

interface buttonProps {
  selected?: boolean;
}

const Button: React.FC<buttonProps> = ({ children, selected }) => (
  <Container selected={selected}>{children}</Container>
);

export default Button;
