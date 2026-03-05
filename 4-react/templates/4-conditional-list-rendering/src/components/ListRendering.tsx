
function ListRendering() {
    const myLittleFarm =  ['🐔', '🐮', '🐷', '🐑', '🐘'];

    function generateListItem(animal : string, index : number) {
        return (<li key={index}>{animal}</li>)
    }

    return (
        <div>
            <h2>My little farm</h2>
            <ul>
                {/*List Rendering*/}
                {myLittleFarm.map(generateListItem)}
            </ul>
            <ul>
                {/*List Rendering*/}
                {myLittleFarm.map((animal, index) => {
                    return (<li key={index}>{animal}</li>)
                })}
            </ul>
        </div>
    );
}

export default ListRendering;
