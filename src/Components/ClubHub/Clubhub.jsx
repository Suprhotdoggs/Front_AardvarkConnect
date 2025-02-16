import { useState } from "react";
import "./ClubHub.css";
import Navbar from "../Navbar";

export default function ClubHub() {
  const [joinedClubs, setJoinedClubs] = useState({});

  const clubs = [
    { name: "Neon Nights", promo: "NEON10", attending: 120, capacity: 500 },
    {
      name: "Midnight Madness",
      promo: "MIDNITE20",
      attending: 300,
      capacity: 800,
    },
    { name: "Bass Drop", promo: "BASS30", attending: 150, capacity: 600 },
    { name: "Electric Pulse", promo: "PULSE40", attending: 200, capacity: 700 },
  ];

  const handleJoin = (clubName) => {
    setJoinedClubs((prev) => ({ ...prev, [clubName]: true }));
  };

  return (
    <>
      <div className="clubhub-layout">
        <div className="clubhub-content">
          <h1 className="clubhub-title">Club Hub</h1>
          <div className="clubhub-promo">
            <h2 className="clubhub-promo-title">Promo Codes</h2>
            {clubs.map((club) => (
              <p key={club.name}>
                {club.name}:{" "}
                <span className="clubhub-promo-code">{club.promo}</span>
              </p>
            ))}
          </div>
          <div className="clubhub-list">
            {clubs.map((club) => (
              <div key={club.name} className="clubhub-card">
                <h2 className="clubhub-card-title">{club.name}</h2>
                <p>
                  Promo Code:{" "}
                  <span className="clubhub-promo-code">{club.promo}</span>
                </p>
                <p>
                  Attending: {club.attending} / {club.capacity}
                </p>
                <div className="clubhub-progress-bar">
                  <div
                    className="clubhub-progress-fill"
                    style={{
                      width: `${(club.attending / club.capacity) * 100}%`,
                    }}
                  ></div>
                </div>
                <p className="clubhub-attendance">
                  {((club.attending / club.capacity) * 100).toFixed(1)}% of app
                  users attending
                </p>
                <button
                  className={`clubhub-button ${
                    joinedClubs[club.name]
                      ? "clubhub-button-disabled"
                      : "clubhub-button-active"
                  }`}
                  onClick={() => handleJoin(club.name)}
                  disabled={joinedClubs[club.name]}
                >
                  {joinedClubs[club.name] ? "Joined" : "Join Now"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
