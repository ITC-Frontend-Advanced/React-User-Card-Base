import "./assets/App.css";
import { participants } from "./data/users";
import profileFallback from "./assets/profile.svg";

function App() {
  return (
    <div className="container">
      {participants.map((participant) => (
        <div key={participant.id} className="user-card">
          <img
            src={participant.image && participant.image !== "" ? participant.image : profileFallback}
            alt="profile default image"
            className="avatar"
          />
          <div className="card-content">
            <div className="card-header">
              <h2 className="user-name">{participant.username}</h2>
              {participant.team && (
                <span className={`role-badge ${participant.team === "First team" ? "primary" : "secondary"}`}>
                  {participant.team}
                </span>
              )}
            </div>
            <span className={`status-badge ${participant.isOnline ? "online" : "offline"}`}>
              {participant.isOnline ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
