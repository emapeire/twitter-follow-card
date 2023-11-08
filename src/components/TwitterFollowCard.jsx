/* eslint-disable react/prop-types */
import { useState } from "react";

export default function TwitterFollowCard({ name, userName }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [disableHover, setDisableHover] = useState(false);

  const followText = isFollowing ? "Following" : "Follow";
  const buttonClass = `tw-followCard-button ${
    isFollowing ? "is-following" : ""
  } ${disableHover ? "" : "enable-hover"}`;

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setDisableHover(true);
  };

  const handleMouseEnter = () => {
    if (disableHover) {
      setDisableHover(false);
    }
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
        <button
          onMouseEnter={handleMouseEnter}
          onClick={handleFollow}
          className={buttonClass}
        >
          {followText}
        </button>
      </aside>
    </article>
  );
}
