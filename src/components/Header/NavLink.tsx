import Link from 'next/link';
import { ReactNode } from 'react';
import { Heading } from '../DefaultDesignComponents/Typography';
import { NavLinkContainer } from './styles';

interface NavLinkProps {
  path?: string;
  children: ReactNode;
}

const defaultProps = {
  path: '/'
};

function NavLink({ path = '/', children }: NavLinkProps) {
  return (
    <NavLinkContainer>
      <Link href={path}>
        <Heading level={3} size="medium" weight="regular" type="gray">
          {children}
        </Heading>
      </Link>
    </NavLinkContainer>
  );
}

NavLink.defaultProps = defaultProps;

export default NavLink;
