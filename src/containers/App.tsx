import React, { useState, useEffect, useMemo, ChangeEvent } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

export interface Robot {
  id: number;
  name: string;
  email: string;
}

function useDebounce(value: string, delay: number): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

const App: React.FC = () => {
  const [robots, setRobots] = useState<Robot[]>([]);
  const [searchfield, setSearchfield] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const debouncedSearch = useDebounce(searchfield, 300);

 useEffect(() => {
  const fetchRobots = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const users: Robot[] = await response.json();
      setRobots(users);
      console.log('Fetched robots:', users); // <-- Add this line
    } catch {
      setError('Failed to fetch robot users. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  fetchRobots();
}, []);

  const filteredRobots = useMemo(() => {
    return robots.filter(robot =>
      robot.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [robots, debouncedSearch]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchfield(event.target.value);
  };

  if (loading) return <h2 className="tc">Loading robots...</h2>;
  if (error) return <h2 className="tc red">{error}</h2>;

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox
        searchChange={onSearchChange}
        searchValue={searchfield}
        ariaLabel="Search robots"
      />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;