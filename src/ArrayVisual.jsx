import "./ArrayVisual.css"

function ArrayVisual() {
    var numCols = 12;
    var numRows = 1;
    let elements = []
    for(let i = 0; i < numCols; i++) {
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
        <div className="ArrayVisual" style={ {"gridTemplateColumns" : `repeat(${numCols}, [element] 1fr)`} }>
            {elements}
        </div>
        </>
    )
}

export default ArrayVisual