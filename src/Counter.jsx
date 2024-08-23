import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        //document.title = count;
        console.log(count);

    });

    return (
        <button onClick={() => setCount(count + 1)}>
        {count}</button>

    );
}

export default Counter 

/*class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                {this.state.count}
            </button>
            </div>
        );
    }
}
export default Counter */


/*export default function Counter() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count+1)
    }
    return (
    <button onClick={handleClick}>{count}</button>
    )
} */




