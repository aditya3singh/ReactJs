import { useState } from 'react';

function MyComponents() {
    let [name, setName] = useState("Guest");
    let [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    let updateName = () => {
        setName("John");
    }

    let updateAge = () => {
        setAge(age + 2);
    }

    const toggledEmployeesStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>Set Age</button>
            <p>Employed: {isEmployed? "yes": "no"}</p>
            <button onClick={toggledEmployeesStatus}>Set Employees</button>
        </div>
    );
}

export default MyComponents;
