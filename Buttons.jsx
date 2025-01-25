function Buttons() {
    // const handlet =alert("Ouchhh");
    const handler = (e) => e.target.textContent = "Ouchhh 😒";
    return (
        <>
        {/* <button onClick={handlet}>Click me😁</button>*/}

        {/* <button onClick={() => alert("Ouchhh")}>Click me😁</button> */}
        <button onClick={(e) => handler(e)} > Click me😊</button>
        </>
    )
}

export default Buttons
