const Campfire: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Campfire</h1>
      <p>The Campfire is the primary focus of the game. At night, it acts as a vital line of defense...</p>
      <img src="https://static.wikia.nocookie.net/99-nights-in-the-forest/images/c/c5/Campfire_2.png/revision/latest?cb=20250624204437" alt="Campfire" />
      <p>The Campfire is a constantly depleting fire that is a safe zone for players during nighttime...</p>
      <section>
        <h2>Level 1</h2>
        <p>Tier 1 has no decorations but has logs placed on...</p>
        <img src="https://static.wikia.nocookie.net/99-nights-in-the-forest/images/c/c6/CampfireLevel0.png/" alt="Level 1" />
      </section>
      {/* Add other levels, weather types from content */}
    </div>
  );
};

export default Campfire;