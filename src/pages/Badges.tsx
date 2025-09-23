interface BadgeData {
  badge: string;
  description: string;
  requirements: string;
  difficultyStars: string;
  reward: string;
  image: string;
}

const badgesData: BadgeData[] = [
  {
    badge: "Survive 10 days",
    description: "Survive until day 10",
    requirements: "Reach the 10 day mark for the first time.",
    difficultyStars: "1 star",
    reward: "2",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/0/04/Survive_10_Days.webp/revision/latest?cb=20250810172330"
  },
  // ... all fetched
];

const Badges: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Badges</h1>
      <p>Badges are achievements given to the player for completing certain tasks...</p>
      <img src="https://static.wikia.nocookie.net/99-nights-in-the-forest/images/b/bd/Badges.png/revision/latest?cb=20250814133605" alt="Badges" />
      <table>
        <thead>
          <tr>
            <th>Badge</th>
            <th>Description</th>
            <th>Requirements</th>
            <th>Difficulty</th>
            <th>Reward</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {badgesData.map((badge, index) => (
            <tr key={index}>
              <td>{badge.badge}</td>
              <td>{badge.description}</td>
              <td>{badge.requirements}</td>
              <td>{badge.difficultyStars}</td>
              <td>{badge.reward}</td>
              <td><img src={badge.image} alt={badge.badge} width="50" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Badges;