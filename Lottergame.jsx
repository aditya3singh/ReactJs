import { useState } from "react"
// import "./Lottergame.css"
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
export default function LotteryGame({n, winningSum}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket)=== winningSum;
    let buyTicket = () =>{
        setTicket(genTicket(n));
    }
    return (
        <>
            <h1>Lottery Ticket</h1>

            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>generate</button>
            <h3>{isWinning && "Here we go"}</h3>
        </>
    );
}
