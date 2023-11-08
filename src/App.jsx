import "./App.css";
import TwitterFollowCard from "./components/TwitterFollowCard";
import { users } from "./lib/data";

export default function App() {
  return (
    <section className="tw-followCard-container">
      {users.map(({ name, userName, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          name={name}
          userName={userName}
          initialIsFollowing={isFollowing}
        />
      ))}
    </section>
  );
}
