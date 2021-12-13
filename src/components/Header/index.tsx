import NavLink from './NavLink';
import { Container, Nav } from './styles';
import logo from '../../images/black.svg';
import box from '../../images/winebox.svg';
import search from '../../images/search.svg';
import profile from '../../images/profile.svg';
import menu from '../../images/menu.svg';

function Header() {
  const openMenu = ({ target }) =>
    target.parentNode.nextSibling.nextSibling.classList.toggle('active');
  return (
    <Container>
      <div className="content">
        <div className="menu" onClick={openMenu} aria-hidden="true">
          <img src={menu} alt="menu" />
        </div>
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <Nav text>
          <NavLink>Clube</NavLink>
          <NavLink className="selected">Loja</NavLink>
          <NavLink>Produtores</NavLink>
          <NavLink>Ofertas</NavLink>
          <NavLink>Eventos</NavLink>
          <NavLink className="profile-mobile">
            <img src={profile} alt="profile" />
          </NavLink>
        </Nav>
        <Nav icon>
          <NavLink>
            <img src={search} alt="search" />
          </NavLink>
          <NavLink className="profile">
            <img src={profile} alt="profile" />
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
