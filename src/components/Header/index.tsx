import NavLink from './NavLink';
import { Container, Nav } from './styles';
import logo from '../images/black.svg';
import box from '../images/winebox.svg';
import search from '../images/search.svg';

// interface HeaderProps {}

function Header() {
  return (
    <Container>
      <div className="content">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <Nav text>
          <NavLink>Clube</NavLink>
          <NavLink>Loja</NavLink>
          <NavLink>Produtores</NavLink>
          <NavLink>Ofertas</NavLink>
          <NavLink>Eventos</NavLink>
        </Nav>
        <Nav icon>
          <NavLink>
            <img src={search} alt="search" />
          </NavLink>
          <NavLink>
            <img src={search} alt="search" />
          </NavLink>
          <NavLink>
            <img src={box} alt="winebox" />
          </NavLink>
        </Nav>
      </div>
    </Container>
  );
}

export default Header;
