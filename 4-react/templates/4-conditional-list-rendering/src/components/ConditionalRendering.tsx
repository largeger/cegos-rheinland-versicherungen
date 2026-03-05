function ConditionalRendering(props) {
    const wetterIstSchoen = props.weatherGood

    // Das ist noch kein Conditional Rendering
    // if (wetterIstSchoen) {
    //     return (<h1>🌞</h1>)
    // } else {
    //     return (<h1>🌧️</h1>)
    // }

    return (
        <div>
            { wetterIstSchoen ? <h1>🌞</h1> : <h1>🌧️</h1>}
            { wetterIstSchoen && <h2>Wow, what a day! 🎉</h2>}
            { !wetterIstSchoen && <h2>Raining....</h2>}
        </div>

    );

}

export default ConditionalRendering;
