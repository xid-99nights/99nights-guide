const TipsAndTricks: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Tips And Tricks</h1>
      <p>Tips and Tricks can increase your strategic gameplay for 99 Nights in the Forest...</p>
      <section>
        <h2>Starting Your Journey</h2>
        <ul>
          <li>This game contains a multiplayer function...</li>
          <li>To play the game, you have to start your own run...</li>
          <li>If you are hungry, kill nearby animals...</li>
        </ul>
      </section>
      <section>
        <h2>As You Spawn In</h2>
        <ul>
          <li>You should start getting wood right as you spawn in.</li>
          <li>Note: When the game starts, there is always one Coal...</li>
          <li>Upgrade the campfire to level 3 or 4 in the first day.</li>
        </ul>
      </section>
      {/* Add other sections like Pelts, Scavenging */}
    </div>
  );
};

export default TipsAndTricks;