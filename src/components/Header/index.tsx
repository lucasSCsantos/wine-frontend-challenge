import { useState } from 'react';
import NavLink from './NavLink';
import { Container, Nav, SearchButton } from './styles';
import logo from '../../images/black.svg';
import box from '../../images/winebox.svg';
import search1 from '../../images/search.svg';
import profile from '../../images/profile.svg';
import menu from '../../images/menu.svg';
import SearchBar from './SearchBar';
import ShoppingCart from '../ShoppingCart';

function Header() {
  const [search, setSearch] = useState('');
  const openMenu = ({ target }) =>
    target.parentNode.nextSibling.nextSibling.classList.toggle('active');

  const openSearch = ({ target }) => {
    target.parentNode.parentNode.parentNode.nextSibling.classList.toggle(
      'searchActive'
    );
  };
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
          <SearchButton onClick={openSearch}>
            <img src={search1} alt="search" />
          </SearchButton>
          <NavLink className="profile">
            <img src={profile} alt="profile" />
          </NavLink>
          <NavLink>
            <img src={box} alt="winebox" />
          </NavLink>
        </Nav>
      </div>
      <SearchBar
        onChange={({ target }) => setSearch(target.value)}
        value={search}
      />
      <ShoppingCart />
    </Container>
  );
}

export default Header;
