interface Greetprop {
    name : string,
    favemoji : string
}

function FunctionalGreetComponent(props : Greetprop) {
    // destructuring syntax: entpacken der einzelteile von props in einzelne Konstanten
    const {name, favemoji} : Greetprop = props

    return (
        <div>
            <h2>Hi {name} {favemoji}</h2>
        </div>
    );
}

export default FunctionalGreetComponent;
