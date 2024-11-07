import{useState } from 'react'
import "./style.css"

export function App(props){


    const [count   , setCOunt] = useState(18)

    const increase = () => setCOunt(count+1)
    const dincrease = () => setCOunt(count-1)
    return(
    <div>
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={dincrease}>-</button>
    </div>
    )
    
}