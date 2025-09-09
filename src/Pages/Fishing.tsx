interface FishData {
  fish: string;
  hungerValues: string;
  sources: string;
  image: string;
}

const fishData: FishData[] = [
  {
    fish: "Mackerel",
    hungerValues: "•🍴 (raw), •🍴🍴(cooked)",
    sources: "Fresh Pond",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/7/7a/Mackerel2.png/revision/latest?cb=20250816045644"
  },
  {
    fish: "Salmon",
    hungerValues: "•🍴 (raw), •🍴🍴(cooked)",
    sources: "Fresh Pond, Algal Pond",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/0/08/Salmon2.png/revision/latest?cb=20250816113913"
  },
  {
    fish: "Clownfish",
    hungerValues: "•🍴 (raw), •🍴🍴(cooked)",
    sources: "Fresh Pond, Algal Pond, Bone Pond",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/7/77/Clownfish2.png/revision/latest?cb=20250817032942"
  },
  {
    fish: "Swordfish",
    hungerValues: "•🍴 (raw), •🍴🍴(cooked)",
    sources: "Fresh Pond, Algal Pond, Bone Pond",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/f/f7/Swordfish.png/revision/latest?cb=20250815221433"
  },
  {
    fish: "Jellyfish",
    hungerValues: "⚡",
    sources: "Algal Pond, Bone Pond",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/f/ff/Jellyfish2.png/revision/latest?cb=20250817063104"
  },
  {
    fish: "Char",
    hungerValues: "•🍴 (raw), •🍴🍴 (cooked)",
    sources: "Cold Pond",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/a/ac/Char2.png/revision/latest?cb=20250817064252"
  },
  {
    fish: "Eel",
    hungerValues: "•🍴 (raw), •🍴🍴 (cooked)",
    sources: "Cold Pond",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/1/16/Eel2.png/revision/latest?cb=20250817070551"
  },
  {
    fish: "Shark",
    hungerValues: "•🍴🍴 (raw), •🍴🍴🍴🍴 (cooked)",
    sources: "Algal Pond, Bone Pond",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/c/c3/Shark2.png/revision/latest?cb=20250817062108"
  },
  {
    fish: "Old Boot",
    hungerValues: "None",
    sources: "Bone Pond",
    image: "https://static.wikia.nocookie.net/99-nights-in-the-forest/images/1/18/OldBoot.png/revision/latest?cb=20250817142652"
  },
];

const Fishing: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Fishing</h1>
      <p>Fishing is a game mechanic in 99 Nights in the Forest.</p>
      <p>To go fishing, players need to obtain the Old Rod first, either from the Pelt Trader or from the Fishing Shack, marked by a fishing pole on The Map. The Fisherman Class starts with an old rod.</p>
      <p>You can fish in any pond at any time by simply clicking on the pond with your fishing rod equipped and waiting for a bite. Some ponds may have white, transparent, ripples on them, which indicate a "fast" fishing spot. Casting your rod into this spot will result in a faster bite on your rod. After a certain number of catches, the ripples will disappear. If you fish in a pond without a fast-fishing spot, it will take up to 15 seconds before you get a bite. An algal pond, a bone pond, or a cold pond will often not have any ripples in it for a "fast" fishing spot but can still be fished.</p>
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