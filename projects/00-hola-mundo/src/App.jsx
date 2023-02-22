import React from "react";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import "./App.css";

/**
 * The function app() returns a div with a h1 element inside it
 * @returns A div with a h1 inside of it.
 */
export function App() {
    return (
        <section className="App">
            <TwitterFollowCard userName="billgates" >
                <strong>miguel duran</strong>
            </TwitterFollowCard>
            <TwitterFollowCard  userName="elonmusk">
                <strong>elon musk</strong>
            </TwitterFollowCard>
            <TwitterFollowCard  userName="jamesbond">
                <strong>james bond</strong>
            </TwitterFollowCard>
            <TwitterFollowCard >
                <strong>desconocido</strong>
            </TwitterFollowCard>
        </section>
    );
}
