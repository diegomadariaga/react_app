import React from "react";
import { useState } from "react";

export function TwitterFollowCard({  children, userName = "unknown" }) {
    const [isFollowing, setIsFollowing] = useState(false);
    const followText = isFollowing ? "Siguiendo" : "Seguir";
    const buttonFollowClass = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button";
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" alt={`avatar de @${userName}`} src={`https://unavatar.io/${userName}`} />
                <div className="tw-followCard-info">
                    {children}
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonFollowClass} onClick={handleClick}>{followText}</button>
            </aside>
        </article>
    );
}
