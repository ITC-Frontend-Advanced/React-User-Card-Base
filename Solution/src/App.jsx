import './App.css'
import { participants } from "./data/users"

export default function App() {
  return (
    <div className="container">
      {participants.map((participant) => (
        <div className="user-card " key={participant.id}>
          <img className="avatar" src={participant.image ?? "/profile.svg"} alt={participant.username} />

          <div className="card-content">

            <div className="card-header">
              <span className="user-name">{participant.username}</span>
              <span className={`role-badge ${participant.team === "First team" ? "primary" : "secondary"}`} >
                {participant.team ?? "NoN"}
              </span>
            </div>

            <span className={`status-badge ${participant.isOnline ? "online" : "offline"}`}>
              {participant.isOnline ? "Online" : "Offline"}
            </span>

          </div>
        </div>
      ))}
    </div>
  )
}


/*
  * use Condition Rendering +2
  * using .map() to render a list +2
  * if else short hand +1
  * respect styling rules +1
  * import data/users +1
  * import App.css +1
  * use user id for key +1
  * Display User Team +1
*/