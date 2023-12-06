import "./ArrayVisual.css"
import { useState } from "react";

function ArrayVisual() {
    const [numElements, setNumElements] = useState(12);
    let elements = []
    for(let i = 0; i < numElements; i++) {
        elements.push(
            <>
            <div className="element" key={i}>
                0
            </div>
            </>
        )
    }

    return (
        <>
        <input type="text" placeholder={"number of elements"} id = "input" onChange={
            () => {
                setNumElements(parseInt(document.getElementById("input").value))
            }
        }/>
        
        <div className="ArrayVisual" style={ {"gridTemplateColumns" : `repeat(${numElements}, [element] 1fr)`, "aspectRatio" : `${numElements}`} }>
            {elements}
        </div>
        </>
    )
}

export default ArrayVisual