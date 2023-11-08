/* eslint-disable react/prop-types */
import { useState } from "react";

export default function TwitterFollowCard({ name, userName }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const followText = isFollowing ? "Following" : "Follow";
  const followCardButtonClass = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-follorCard-header">
        <img
          className="tw-followCard-avatar"
          alt="avatar"
          src={`https://unavatar.io/twitter/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUsername">@{userName}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleFollow} className={followCardButtonClass}>
          {followText}
        </button>
      </aside>
    </article>
  );
}
