import { FormEvent, useState } from "react";
import "./SearchForm.css";

interface Props {
  onFormSubmit: (searchTerm: string) => void;
}

const SearchForm = ({ onFormSubmit }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onFormSubmit(searchTerm);
  };

  return (
    <div className="SearchForm" onSubmit={(e) => handleSubmit(e)}>
      <form>
        <label htmlFor="searchForm">Search Term</label>
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
