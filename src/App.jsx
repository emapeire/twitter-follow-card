import "./App.css";
import TwitterFollowCard from "./components/TwitterFollowCard";

export default function App() {
  return (
    <section className="tw-followCard-container">
      <TwitterFollowCard
        name="Emanuel Peire"
        userName="emapeire"
        initialIsFollowing={true}
      />
      <TwitterFollowCard name="Elon Musk" userName="elonmusk" />
      <TwitterFollowCard name="Guillermo Rauch" userName="rauchg" />
      <TwitterFollowCard name="Evil Rabbit" userName="evilrabbit_" />
    </section>
  );
}
