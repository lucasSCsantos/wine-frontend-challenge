import Filters from './Filters';
import Products from './Products';
import Container from './styles';

function Body() {
  return (
    <Container>
      <div className="content">
        <Filters />
        <Products />
      </div>
    </Container>
  );
}

export default Body;
