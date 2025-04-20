function DestinationSelector({ tours, selected, onChange }) {
    const uniqueNames = ['All', ...new Set(tours.map((tour) => tour.name))];
  
    return (
      <div>
        <label htmlFor="destination">Select Destination: </label>
        <select
          id="destination"
          value={selected}
          onChange={(e) => onChange(e.target.value)}
        >
          {uniqueNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  export default DestinationSelector;
  