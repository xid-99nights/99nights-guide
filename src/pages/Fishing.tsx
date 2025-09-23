interface FishData {
  fish: string;
  hungerValues: string;
  sources: string;
  image: string;
}

const fishData: FishData[] = [
  { fish: "Mackerel", hungerValues: "•🍴 (raw) •🍴🍴(cooked)", sources: "Fresh Pond", image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/7/7a/Mackerel2.png/revision/latest?cb=20250816045644" },
  // ... all
];

const Fishing: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Fishing</h1>
      <p>Fishing is a game mechanic in 99 Nights in the Forest.</p>
      <p>To go fishing, players need to obtain the Old Rod first...</p>
      <table>
        <thead><tr><th>Fish</th><th>Hunger Values</th><th>Source(s)</th><th>Image</th></tr></thead>
        <tbody>
          {fishData.map((fish, i) => (
            <tr key={i}><td>{fish.fish}</td><td>{fish.hungerValues}</td><td>{fish.sources}</td><td><img src={fish.image} alt={fish.fish} width="50" /></td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fishing;