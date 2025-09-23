const Lore: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Lore</h1>
      <p>This page documents any and all developments to the game's story as they appear.</p>
      <p>99 Nights in the Forest is based on a true story and a few myths...</p>
      <img src="https://static.wikia.nocookie.net/99-nights-in-the-forest/images/4/48/True_Story.webp/revision/latest?cb=20250820141914" alt="True Story" />
      <ul>
        <li>Reports were made of a DEER standing on two legs...</li>
        {/* All lists */}
      </ul>
      <section>
        <h2>History of the Deer</h2>
        <ul>
          <li>The Deer might have been used as an experiment...</li>
        </ul>
      </section>
      {/* Add other sections */}
    </div>
  );
};

export default Lore;