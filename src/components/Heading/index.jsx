import { Title } from './styles';
import P from 'prop-types';
import { theme } from '../../styles/theme';

export const Heading = ({ children }) => {
  return <Title theme={theme}>{children}</Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
};
