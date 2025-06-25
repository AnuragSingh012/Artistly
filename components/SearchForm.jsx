import { Search } from "lucide-react";

const SearchForm = ({ query }) => {
  return (
    <form action="/" method="GET" className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Artists"
      />
      <button type="submit" className="search-btn text-white"><Search /></button>
    </form>
  );
};

export default SearchForm;

