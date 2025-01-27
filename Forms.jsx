import Handlers from "./Handlers";
function handleFormSubmit(event){
    event.preventDefault();
    console.log("form is submitted");
    
}

export default function Forms(){
    return (
        <>
        <form>
        <input placeholder="write something here" />
        <button onClick={handleFormSubmit}>
            Submit
        </button>
        </form>
        </>
    )
}
