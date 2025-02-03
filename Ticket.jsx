import TicketNum from "./Ticketnum";
import "./ticketVal.css"
export default function Ticket({ticket}){
    return (
        <div className="ticketVal">
            {ticket.map((num, idx) =>(
                <TicketNum num={num} key={idx}/>
            ))}
        </div>
    );
}
