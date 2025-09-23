import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple redirect to page if query matches (expand with full search logic)
    if (query.toLowerCase().includes('craft')) navigate('/crafting');
    // ... add more matches
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search guides..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;