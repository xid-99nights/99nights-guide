const Home: React.FC = () => {
  return (
    <div className="page-container">
      <h1>99 Nights in the Forest Wiki</h1>
      <p>Pages: 135 • Photos: 1k • Videos: 3</p>
      <p>Build a camp with friends. Something is watching you.</p>
      <p>This unofficial wiki is about the Roblox game, 99 Nights in the Forest, developed by Grandma’s Favorite Games. In 99 Nights in the Forest, players have to build a camp with their friends and find and rescue the 4 missing children, whilst avoiding a vicious Deer, its Cultists, and other hostile beasts.</p>
     //# <section>
     //#   <h2>Statistics</h2>
     //#   <ul>
     //#     <li>11,324 Wiki Edits</li>
       //#   <li>135 Articles</li>
       //#   <li>1,007 Files/Images</li>
       //#   <li>363 Active Users</li>
      //#  </ul>
     //# </section>
      {/* External links */}
      <section>
        <h2>Links</h2>
        <ul>
          <li><a href="https://www.roblox.com/games/79546208627805/99-Nights-in-the-Forest">Play the Game</a></li>
          <li><a href="https://www.roblox.com/communities/6042520/Grandmas-Favourite-Games#!/about">Developer Group</a></li>
        </ul>
      </section>
      {/* Images */}
      <img src="https://static.wikia.nocookie.net/99-nights-in-the-forest/images/0/0d/Gamethumbnail.png" alt="Game Thumbnail" />
    </div>
  );
};

export default Home;