import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="card2">
                <h1>Counter App</h1>
                <h2>Count: {count}</h2>
                <button onClick={() => setCount(count + 1)}>increment</button>
                <button onClick={() => setCount(count - 1)}>decrement</button>
            </div>
        </>
    )
}

export default Counter;