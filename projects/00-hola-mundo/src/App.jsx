import React from "react";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import "./App.css";

/**
 * The function app() returns a div with a h1 element inside it
 * @returns A div with a h1 inside of it.
 */
export function App() {
    const users = [
        {
            userName: "billgates",
            name: "Bill Gates",
            initialIsFollowing: true,
        },
        {
            userName: "elonmusk",
            name: "Elon Musk",
        },
        {
            userName: "jamesbond",
            name: "James Bond",
        },
    ];
    return (
        <section className="App">
            {users.map((user) => (
                <TwitterFollowCard
                    key={user.userName}
                    userName={user.userName}
                    children=<strong>{user.name}</strong>
                    initialIsFollowing={user.initialIsFollowing}
                />
            ))}
        </section>
    );
}
