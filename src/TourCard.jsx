function TourCard({ tour, onRemove }) {
    const { id, name, info, image, price } = tour;
  
    return (
      <div style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem' }}>
        <img src={image} alt={name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>{info}</p>
        <button onClick={() => onRemove(id)}>Not Interested</button>
      </div>
    );
  }
  
  export default TourCard;
  