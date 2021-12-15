import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { SearchBarContainer } from './styles';
import search2 from '../../images/search2.svg';

interface SearchBarProps {
  onChange: ({ target }: any) => void;
  value: string;
}

const SearchBar: NextPage<SearchBarProps> = ({ onChange, value }) => {
  const router = useRouter();
  const handleSearchClick = () => {
    router.push(`/1/query=${value}`);
  };

  return (
    <SearchBarContainer>
      <input
        type="text"
        placeholder="Pesquisar"
        onChange={onChange}
        value={value}
        onKeyUp={({ keyCode }) => {
          if (keyCode === 13) handleSearchClick();
        }}
      />
      <button type="button" onClick={handleSearchClick}>
        <img src={search2} alt="search" />
      </button>
    </SearchBarContainer>
  );
};

export default SearchBar;
