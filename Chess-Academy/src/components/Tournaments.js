import React, { useState } from 'react';
import './Tournaments.css';

const TournamentPage = () => {
  const [isOnline, setIsOnline] = useState(true);

  const onlineTournaments = [
    {
      id: 1,
      title: "Virtual Chess Championship",
      description: "In the Virtual Chess Championship, where players from around the globe compete online. With a prize pool of $10,000, this is a must-attend event for every chess enthusiast!,players must acquire the level of fide-master",
      image: "https://img-cdn.pixlr.com/image-generator/history/66a778613da6bb56a46753df/7352deab-fbc7-427f-9134-a95d39d2eaec/preview.webp",
    },
    {
      id: 2,
      title: "Online Blitz Tournament",
      description: "Test your skills in our Online Blitz Tournament! Fast-paced games with a time control of 3 minutes per player. Perfect for those who thrive under pressure!, with a cash price of exciting over $5,000!",
      image: "https://i.pinimg.com/originals/b2/30/90/b23090886a0d747b04e17474e79621dc.jpg",
    },
    {
      id: 3,
      title: "International Online Open",
      description: "Compete in our International Online Open, featuring players from various countries. This tournament is open to all skill levels!,there is no age restriction and there is no minimum skill level!",
      image: "https://img-cdn.pixlr.com/image-generator/history/66a778c20f73a68a3a7546e8/249f323f-3a01-4152-bf48-df988b7051ac/preview.webp",
    },
  ];

  const offlineTournaments = [
    {
      id: 1,
      title: "Annual Chess Championship",
      description: "Join us for our flagship event, the Annual Chess Championship. Compete against the best players from around the world in this prestigious tournament held in downtown. With a prize pool of $50,000, it's an opportunity do not to be missed!",
      image: "https://img-cdn.pixlr.com/image-generator/history/66a778613da6bb56a46753df/0be2796e-5ea8-47f1-bfe5-4533ca6a0b7b/preview.webp",
    },
    {
      id: 2,
      title: "Summer Open Tournament",
      description: "Open to players of all skill levels, the Summer Open Tournament is a friendly competition held during the summer months. Are you a beginner or an experienced player seeking a challenge or have to gain experience, this tournament is for you.",
      image: "https://img-cdn.pixlr.com/image-generator/history/66a779316a69655cbd7b22ce/7ac2dc7c-922e-4ed1-98fa-4123764ae775/preview.webp",
    },
    {
      id: 3,
      title: "Fall Classic",
      description: "The Fall Classic is a highly competitive chess tournament that attracts top players from various regions. This exciting event promises a weekend filled with intense matches, providing participants with an opportunity to showcase their skills and compete for prestigious titles.",
      image: "https://img-cdn.pixlr.com/image-generator/history/66a778c20f73a68a3a7546e8/c95f9d7b-eff2-4bcf-8b21-fe7e6025f0c5/preview.webp",
    },
  ];

  const recentWinnersOnline = [
    {
      id: 1,
      name: "Grandmaster Alice",
      tournament: "Virtual Chess Championship",
      year: 2023,
      image: "https://media.istockphoto.com/id/1297832726/photo/portrait-of-a-smiling-young-businessman.jpg?s=612x612&w=0&k=20&c=32Qg7TnqfGkrDwTL3q0X0Kx9ab3JDzuqxzp4poH39zc=",
    },
    {
      id: 2,
      name: "Mistress Vincy",
      tournament: "Online Blitz Tournament",
      year: 2022,
      image: "https://i.pinimg.com/564x/36/1a/34/361a34ce60663eb1a2de802aba0de696.jpg",
    },
    {
      id: 3,
      name: "Champion Charlie",
      tournament: "International Online Open",
      year: 2023,
      image: "https://i.pinimg.com/564x/ca/59/60/ca5960071f5543f86cb730bb9ffb1743.jpg",
    },
  ];

  const recentWinnersOffline = [
    {
      id: 1,
      name: "Grandmaster John Doe",
      tournament: "Annual Chess Championship",
      year: 2023,
      image: "https://www.realmenrealstyle.com/wp-content/uploads/2023/08/How-To-Buy-The-Right-Watch-Sizes-For-Your-Wrist.jpg",
    },
    {
      id: 2,
      name: "Woman Grandmaster Jane Smith",
      tournament: "Summer Open Tournament",
      year: 2022,
      image: "https://media.istockphoto.com/id/178503108/photo/beautiful-young-businesswoman.jpg?s=612x612&w=0&k=20&c=HngZdK_tnEI-k6juTLTO8EdQAOWkcOvpRTqkO6QN7tA=",
    },
    {
      id: 3,
      name: "Master David",
      tournament: "Fall Classic",
      year: 2023,
      image: "https://media.istockphoto.com/id/1391718981/photo/portrait-of-a-confident-young-businessman-standing-with-his-arms-crossed-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=N8WxUng80PkPIxTSFGjN69BMUZIe9TuxFzrvRc7kOI8=",
    },
  ];

  return (
    <div className="tournament-page">
      <h1>Chess Academy Tournaments</h1>

      <div className="toggle-buttons">
        <button onClick={() => setIsOnline(true)} className={isOnline ? 'active' : ''}>Online Tournaments</button>
        <button onClick={() => setIsOnline(false)} className={!isOnline ? 'active' : ''}>Offline Tournaments</button>
      </div>

      <h2>{isOnline ? "Upcoming Online Tournaments" : "Upcoming Offline Tournaments"}</h2>
      <div className="tournaments-grid">
        {(isOnline ? onlineTournaments : offlineTournaments).map((tournament) => (
          <div key={tournament.id} className="tournament-card">
            <img src={tournament.image} alt={tournament.title} />
            <h3>{tournament.title}</h3>
            <p>{tournament.description}</p>
            <a href={`/tournaments/${tournament.id}`} className="cta-button02">Participate now</a>
          </div>
        ))}
      </div>

      <h2>{isOnline ? "Recent Winners of Online Tournaments" : "Recent Winners of Offline Tournaments"}</h2>
      <div className="winners-grid">
        {(isOnline ? recentWinnersOnline : recentWinnersOffline).map((winner) => (
          <div key={winner.id} className="winner-card">
            <img src={winner.image} alt={winner.name} />
            <h3>{winner.name}</h3>
            <p>Won the {winner.tournament} in {winner.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentPage;
