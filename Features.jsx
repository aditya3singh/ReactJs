

function Features({ colors, times, days,feature, features }) {
    const list = feature.map((item) => <li>{item}</li>);
    return (
        <div className="Features">
            <h3>{colors}</h3>
            <h3>Time: {times}</h3>
            <h3>Day: {days}</h3>
            <h1>{feature}</h1>
            <h1>{list}</h1>
            {/* <h1>{features.a}</h1> */}
        </div>
    );
}

