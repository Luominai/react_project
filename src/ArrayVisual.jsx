import "./ArrayVisual.css"
import { useState } from "react";


function ArrayVisual() {
    const [array, setArray] = useState(["", "", "", "", "", "", "", "", "", "", "", ""])
    // const [numElements, setNumElements] = useState(12);
    let elements = []
    for(let i = 0; i < array.length; i++) {
        elements.push(
            <>
            <div className="element" key={i}>
                {array[i]}
            </div>
            </>
        )
    }

    function ClearExcept(excludedID) {
        let buttons = document.querySelectorAll('input[type="radio"]:checked')
        for(let i = 0; i < buttons.length; i++) {
            if (buttons[i].id != excludedID) {
                buttons[i].checked = false;
            }
        }
    }

    function InitWithDefault() {
        if (document.getElementById("InitWithDefault").checked) {
            // get array size and default value
            let size = parseInt(document.getElementById("size").value)
            let initial = parseInt(document.getElementById("initial").value)

            let newArray = [];
            for(let i = 0; i < size; i++) {
                newArray.push(initial)
            }

            setArray(newArray) 
        }
    }

    function InitExplicit() {
        if (document.getElementById("InitExplicit").checked) {
            // parse list
            let input = document.getElementById("explicit").value.split(",")
            let newArray = []
            for(let i = 0; i < input.length; i++) {
                newArray.push(parseInt(input[i]))
            }   
            setArray(newArray)
        }
    }

    return (
        <>
        <form>
            <label>
                <input type="radio" id="InitWithDefault" onClick={
                    () => {
                        ClearExcept("InitWithDefault")
                        InitWithDefault()
                    }
                }></input>
                <span style={ {fontWeight : "bold"} }>
                    int array[
                    <input type="text" size={1} maxLength={2} id = "size" onChange={InitWithDefault}/>
                    ] = &#123; 
                    <input type="text" size={1} maxLength={2} id = "initial" onChange={InitWithDefault}/>
                    &#125;
                </span>

                <br></br>

                <input type="radio" id="InitExplicit" onClick={
                    () => {
                        ClearExcept("InitExplicit")
                        InitExplicit()
                    }
                }></input>
                <span style={ {fontWeight : "bold"} }>
                    int array[] = &#123; 
                    <input type="text" size={15} id = "explicit" onChange={InitExplicit}/>
                    &#125;
                </span>
            </label> 
        </form>
        
        <div className="ArrayVisual" style={ {"gridTemplateColumns" : `repeat(${array.length}, [element] 1fr)`, "aspectRatio" : `${array.length}`} }>
            {elements}
        </div>
        </>
    )
}

export default ArrayVisual