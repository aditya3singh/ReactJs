//Show a hello msg to the user in different colors
//pass 2 values as props to the component : username and textColor

// import React from 'react';

export default function Activity({userName, textColor}) {
    return (
        <>
        <h1 style = {{color: textColor}}>Hello, {userName}</h1>;
        </>
    )

}
