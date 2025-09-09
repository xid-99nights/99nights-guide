interface BadgeData {
  badge: string;
  description: string;
  requirements: string;
  difficultyStars: number;
  reward: string;
  image: string;
}

const badgesData: BadgeData[] = [
  {
    badge: "Survive 10 days",
    description: "Survive until day 10",
    requirements: "Reach the 10 day mark for the first time.",
    difficultyStars: 1,
    reward: "2 Diamond Icon",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/0/04/Survive_10_Days.webp/revision/latest?cb=20250810172330"
  },
  {
    badge: "Survive 20 days",
    description: "Survive until day 20",
    requirements: "Reach the 20 day mark for the first time.",
    difficultyStars: 2,
    reward: "4 Diamond Icon",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/5/5d/Survive_20_Days.webp/revision/latest?cb=20250810172356"
  },
  {
    badge: "Survive 30 days",
    description: "Survive until day 30",
    requirements: "Reach the 30 day mark for the first time.",
    difficultyStars: 2,
    reward: "4 Diamond Icon",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/1/19/Survive_30_Days.webp/revision/latest?cb=20250810172414"
  },
  {
    badge: "Survive 40 days",
    description: "Survive until day 40",
    requirements: "Reach the 40 day mark for the first time.",
    difficultyStars: 2,
    reward: "4 Diamond Icon",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/d/dd/Survive_40_Days.webp/revision/latest?cb=20250810172433"
  },
  {
    badge: "Survive 50 days",
    description: "Survive until day 50",
    requirements: "Reach the 50 day mark for the first time.",
    difficultyStars: 2,
    reward: "4 Diamond Icon",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/a/a1/Survive_50_Days.webp/revision/latest?cb=20250810172448"
  },
  {
    badge: "Survive 60 days",
    description: "Survive until day 60",
    requirements: "Reach the 60 day mark for the first time.",
    difficultyStars: 2,
    reward: "4 Diamond Icon",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/9/92/Survive_60_Days.webp/revision/latest?cb=20250810172504"
  },
  {
    badge: "Survive 70 days",
    description: "Survive until day 70",
    requirements: "Reach the 70 day mark for the first time.",
    difficultyStars: 2,
    reward: "4 Diamond Icon",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/a/a1/Survive_70_Days.webp/revision/latest?cb=20250810172520"
  },
  {
    badge: "Survive 80 days",
    description: "Survive until day 80",
    requirements: "Reach the 80 day mark for the first time.",
    difficultyStars: 2,
    reward: "4 Diamond Icon",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/2/2e/Survive_80_Days.webp/revision/latest?cb=20250810172542"
  },
  {
    badge: "Survive 90 days",
    description: "Survive until day 90",
    requirements: "Reach the 90 day mark for the first time.",
    difficultyStars: 2,
    reward: "4 Diamond Icon",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/6/65/Survive_90_Days.webp/revision/latest?cb=20250810172600"
  },
  // Note: Fetched data truncated at "Survive 90 days". Add remaining badges from the wiki.
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