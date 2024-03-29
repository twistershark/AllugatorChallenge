import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosApps, IoIosPerson } from 'react-icons/io';

import { Container, ButtonText } from './styles';

interface buttonProps {
  selected?: boolean;
  iconName: string;
  route: string;
}

const Button: React.FC<buttonProps> = ({
  children,
  selected,
  route,
  iconName,
}) => {
  const history = useHistory();

  return (
    <Container onClick={() => history.push(route)} selected={selected}>
      {iconName === 'apps-outline' ? (
        <IoIosApps size={18} fill={selected ? '#10cf58' : '#babdc2'} />
      ) : (
        <IoIosPerson size={18} fill={selected ? '#10cf58' : '#babdc2'} />
      )}
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
