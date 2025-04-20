import { useEffect, useState } from 'react';
import Gallery from './Gallery';
import DestinationSelector from './DestinationSelector';

function App() {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState('All');

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://cors-anywhere.herokuapp.com/https://course-api.com/react-tours-project');

      if (!res.ok) throw new Error('Failed to fetch tours.');
      const data = await res.json();
      setTours(data);
      setFilteredTours(data);
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleFilterChange = (destination) => {
    setSelected(destination);
    if (destination === 'All') {
      setFilteredTours(tours);
    } else {
      const filtered = tours.filter((tour) => tour.name === destination);
      setFilteredTours(filtered);
    }
  };

  const removeTour = (id) => {
    const newTours = filteredTours.filter((tour) => tour.id !== id);
    setFilteredTours(newTours);
  };

  return (
    <main>
      <h1>Tour Explorer</h1>
      <DestinationSelector
        tours={tours}
        selected={selected}
        onChange={handleFilterChange}
      />
      <Gallery
        tours={filteredTours}
        loading={loading}
        error={error}
        onRemove={removeTour}
        onRefresh={fetchTours}
      />
    </main>
  );
}

export default App;
