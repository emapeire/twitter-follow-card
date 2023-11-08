/* eslint-disable react/prop-types */
export default function TwitterFollowCard({ name, userName, isFollowing }) {
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
        <button className="tw-followCard-button">{isFollowing}</button>
      </aside>
    </article>
  );
}
