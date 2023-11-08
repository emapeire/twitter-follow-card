import "./App.css";
import TwitterFollowCard from "./components/TwitterFollowCard";

export default function App() {
  return (
    <>
      <TwitterFollowCard
        name="Emanuel Peire"
        userName="emapeire"
        isFollowing="Follow"
      />
      <TwitterFollowCard
        name="Elon Musk"
        userName="elonmusk"
        isFollowing="Follow"
      />
      <TwitterFollowCard
        name="Guillermo Rauch"
        userName="rauchg"
        isFollowing="Follow"
      />
      <TwitterFollowCard
        name="Evil Rabbit"
        userName="evilrabbit_"
        isFollowing="Follow"
      />
    </>
  );
}
