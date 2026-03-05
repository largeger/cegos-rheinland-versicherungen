function ChangingGreet(props: {greet :string, setGreeting: (greeting:string) => void}) {

    const bayrisch = "Servus";
    const nordisch = "Moin";



    function toggleGreeting() {
        if (props.greet == bayrisch) {
            props.setGreeting(nordisch);
        } else {
            props.setGreeting(bayrisch);
        }
    }

    return (
        <>
            <h1>{props.greet}</h1>
            <button onClick={toggleGreeting}>Von München nach Hamburg und zurück....</button>
        </>
    );
}

export default ChangingGreet
