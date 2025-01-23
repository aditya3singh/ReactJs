import logo from './assets/LOGO.png';

function Card(){
    return(
    <div className="card">
        <img className="card-img" src={logo} alt="logo"/>
        <h2 className='card-title'>Hi Hello! </h2>
        <p className='card-text'>I am student and learning React library</p>
    </div>
    );
}

export default Card;
