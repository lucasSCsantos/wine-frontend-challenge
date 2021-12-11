import NavLink from './NavLink';
import { Container, Nav } from './styles';
import logo from '../images/black.svg';

// interface HeaderProps {}

function Header() {
  return (
    <Container>
      <div className="content">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <Nav>
          <NavLink>Clube</NavLink>
          <NavLink>Loja</NavLink>
          <NavLink>Produtores</NavLink>
          <NavLink>Ofertas</NavLink>
          <NavLink>Eventos</NavLink>
        </Nav>
        <ul className="iconLinks">
          {/* ---------------Resolver erro forwardRef neste componente--------- */}
          {/* <IconLink path={GIT_HUB}>
        </IconLink>
        <IconLink path={LINKEDIN}>
        </IconLink> */}
          {/* ---------------Resolver erro forwardRef neste componente--------- */}
        </ul>
      </div>
    </Container>
  );
}

export default Header;
