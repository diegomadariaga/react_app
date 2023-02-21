import React from "react";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import "./App.css";

/**
 * The function app() returns a div with a h1 element inside it
 * @returns A div with a h1 inside of it.
 */
export function App() {
    const addAt = (userName) => {
        if (userName.startsWith("@")) {
            return userName;
        }
        return `@${userName}`;
    };
    return (
        <section className="App">
            <TwitterFollowCard isFollowing={true} name="midudev" userName="midudev" addAt={addAt} />
            <TwitterFollowCard isFollowing={false} name="elon musk" userName="elonmusk" addAt={addAt} />
            <TwitterFollowCard isFollowing name="james bond" userName="jamesbond" addAt={addAt} />
        </section>
    );
}
