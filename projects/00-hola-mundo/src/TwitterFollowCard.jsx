import React from "react";

export function TwitterFollowCard({ addAt, name, userName, isFollowing}) {
    const followText = isFollowing ? "Siguiendo" : "Seguir";
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" alt="El avatar de midudev" src={`https://unavatar.io/${userName}`} />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">{addAt(userName)}</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">{followText}</button>
            </aside>
        </article>
    );
}