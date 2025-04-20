import TourCard from './TourCard';

function Gallery({ tours, loading, error, onRemove, onRefresh }) {
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2 style={{ color: 'red' }}>{error}</h2>;

  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours left. Refresh to reload.</h2>
        <button onClick={onRefresh}>Refresh</button>
      </div>
    );
  }

  return (
    <div>
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default Gallery;
