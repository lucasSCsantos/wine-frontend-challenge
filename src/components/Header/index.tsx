import { useState, useEffect } from 'react';
import NavLink from './NavLink';
import { Container, Nav, SearchButton, ShoppingCartButton } from './styles';
import logo from '../../images/black.svg';
import box from '../../images/winebox.svg';
import search1 from '../../images/search.svg';
import profile from '../../images/profile.svg';
import menu from '../../images/menu.svg';
import SearchBar from './SearchBar';
import ShoppingCart from '../ShoppingCart';

function Header() {
  const [search, setSearch] = useState('');
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    setCartCount(cartItems?.totalItems || 0);
  }, []);

  const openMenu = ({ target }) =>
    target.parentNode.nextSibling.nextSibling.classList.toggle('active');

  const openSearch = ({ target }) => {
    target.parentNode.parentNode.parentNode.nextSibling.classList.toggle(
      'searchActive'
    );
  };

  const openShoppingCart = ({ target }) => {
    target.parentNode.parentNode.parentNode.nextSibling.nextSibling.classList.add(
      'shoppingCartActive'
    );
    document.body.classList.add('no-scroll');
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
          <SearchButton onClick={openSearch} data-testid="search-button">
            <img src={search1} alt="search" />
          </SearchButton>
          <NavLink className="profile">
            <img src={profile} alt="profile" />
          </NavLink>
          <ShoppingCartButton onClick={openShoppingCart}>
            <div className="cart-count" data-testid="cart-count">{cartCount}</div>
            <img src={box} alt="winebox" />
          </ShoppingCartButton>
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
