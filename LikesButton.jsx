import { useState } from "react";

export default function LikesButton() {

    let [isLiked, setIsLiked] = useState(false);
    let toggledLiked = () => {
        setIsLiked(!isLiked);
    }

    let likeStyle = { color: "red" };
    return (
        <>
            <p onClick={toggledLiked}>
                {isLiked ? (
                    <i className="fa-solid fa-heart " style={likeStyle}></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </>
    );
}

