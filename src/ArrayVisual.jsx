import "./ArrayVisual.css"
import { useState } from "react";

function ArrayVisual() {
    const [numElements, setNumElements] = useState(12);
    const [initial, setInitial] = useState();
    let elements = []
    for(let i = 0; i < numElements; i++) {
        elements.push(
            <>
            <div className="element" key={i}>
                {initial}
            </div>
            </>
        )
    }

    return (
        <>
        <p style={ {fontWeight : "bold"} }>
            int array[
            <input type="text" size={1} maxLength={2} id = "size" onChange={
                () => {
                    setNumElements(parseInt(document.getElementById("size").value))
                }
            }/>
            ] = &#123; 
            <input type="text" size={1} maxLength={2} id = "initial" onChange={
                () => {
                    if (isNaN (parseInt(document.getElementById("initial").value))) {
                        setInitial()
                    } else {
                        setInitial(parseInt(document.getElementById("initial").value))
                    }
                    
                }
            }/>
            &#125;
        </p>
        
        <div className="ArrayVisual" style={ {"gridTemplateColumns" : `repeat(${numElements}, [element] 1fr)`, "aspectRatio" : `${numElements}`} }>
            {elements}
        </div>
        </>
    )
}

export default ArrayVisual