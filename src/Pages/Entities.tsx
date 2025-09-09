const Entities: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Entities</h1>
      <p>Entities are a fundamental part of the game 99 Nights in the Forest. On the map, players will always encounter a variety of different entities and animals each with its own differentiation. Some entities may present hostile, passive, or neutral behavior.</p>
      <section>
        <h2>Missing Children</h2>
        <p>These kids are the children you must rescue as the main objective of the game.</p>
        {/* Add details and images from wiki */}
      </section>
      <section>
        <h2>Animals</h2>
        <p>Bunnies and horses are both passive entities. They are friendly to all other entities.</p>
        {/* Add table or list */}
      </section>
      <section>
        <h2>Traders</h2>
        <ul>
          <li>The Pelt Trader gives various items to the player if given the right animal product...</li>
          <li>The Furniture Trader gives various Furniture...</li>
          <li>The Fairy gives various usable Seed Packs...</li>
          <li>The Bird watcher offers Fuel Canisters...</li>
        </ul>
      </section>
      <section>
        <h2>Hostile Entities</h2>
        <p>These are hostile enemies that will attack on sight and attempt to kill the player.</p>
        {/* Add list */}
      </section>
      <section>
        <h2>Neutral Entities</h2>
        <p>Neutral entities will attack the player only under certain circumstances...</p>
        {/* Add list */}
      </section>
    </div>
  );
};

export default Entities;