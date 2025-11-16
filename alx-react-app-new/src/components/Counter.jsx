import React, {useState, useEffect,useRef} from "react"

function Counter() {
    const [count,setCount]=useState(0)
    const myEffect = useRef(null)
    function Increase (){
        setCount(count +1)
    }
    function Reset(){
        setCount(0)
    }
     function Decrease (){
        setCount(count -1)
    }
    useEffect(()=>{
        myEffect.current.textContent=`You have clicked the button ${count} times`
    }, [count])
    return(
        <div className="container">
            <h1>Counter</h1>
            <div className="counter">
                <h1>{count}</h1>
                <p ref={myEffect}></p>
                <div className="but">
                <button onClick={Increase}>Increment</button>

                <button onClick={Reset}>Reset</button>


                <button onClick={Decrease}>Decrement</button>

                </div>
            </div>
        </div>
    )
}
export default Counter