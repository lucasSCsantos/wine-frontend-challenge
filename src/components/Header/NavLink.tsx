import { NextPage } from 'next';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Heading } from '../DefaultDesignComponents/Typography';
import { NavLinkContainer } from './styles';

interface NavLinkProps {
  path?: string;
  children: ReactNode;
  className?: string;
}

const defaultProps = {
  path: '/'
};

const NavLink: NextPage<NavLinkProps> = ({
  path = '/',
  children,
  className
}) => (
  <NavLinkContainer className={className}>
    <Link href={path}>
      <Heading level={3} size="medium" weight="regular" type="gray">
        {children}
      </Heading>
    </Link>
  </NavLinkContainer>
);

NavLink.defaultProps = defaultProps;

export default NavLink;
