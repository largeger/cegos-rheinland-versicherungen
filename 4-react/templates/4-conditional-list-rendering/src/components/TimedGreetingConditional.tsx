
function TimedGreetingConditional() {
    const hours = new Date().getHours();

    return (
        <div>
            <h1>
                {hours < 12 ? "Good Morning" : "Good Afternoon"}
            </h1>
        </div>
    );
}

export default TimedGreetingConditional;
