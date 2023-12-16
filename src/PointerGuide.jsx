import "./PointerGuide.css";
import { useState } from "react";


function PointerGuide() {
    //const [ptr1, setPtr1] = useState("0x7ffc6336c570");
    const ptr1 = "0x7ffc6336c570";
    const [ptr1val, setPtr1Val] = useState("Pizza");
    //const [ptr2, setPtr2] = useState("0x7ffcd05882f0");
    const ptr2 = "0x7ffcd05882f0";
    const [ptr2val, setPtr2Val] = useState("Burger");
    const [ptr3, setPtr3] = useState("");
    const [ptr3val, setPtr3Val] = useState("");

    return (
        <>
            <h3> Pointer Guide </h3>
            <div>
                Starting Code:
                <br></br>
                string word1 = "Pizza"; <br></br>
                string word2 = "Burger"; <br></br>
                string* ptr1 = &word1; <br></br>
                string* ptr2 = &word2; <br></br> <br></br>
            </div>
            <form>
                <label>
                    <div>
                        *ptr1 = "<input type="text" id="ptr1newval"></input>";
                        <button type="button" onClick={
                            () => {
                                let newVal = document.getElementById("ptr1newval").value;
                                setPtr1Val(newVal);
                                if (ptr3 == ptr1) {
                                    setPtr3Val(newVal);
                                }
                            }
                        }>run
                        </button> <br></br>
                        *ptr2 = "<input type="text" id="ptr2newval"></input>";
                        <button type="button" onClick={
                            () => {
                                let newVal = document.getElementById("ptr2newval").value;
                                setPtr2Val(newVal);
                                if (ptr3 == ptr2) {
                                    setPtr3Val(newVal);
                                }
                            }
                        }>run
                        </button> <br></br>
                        string *ptr3 = <input type="radio" id="ptr1adr" name="newadr" value="0x7ffc6336c570"></input>ptr1 <input type="radio" id="ptr2adr" name="newadr" value="0x7ffcd05882f0"></input> ptr2;
                        <button type="button" onClick={
                            () => {
                                if (document.getElementById("ptr1adr").checked) {
                                    setPtr3(document.getElementById("ptr1adr").value);
                                    setPtr3Val(ptr1val);
                                }
                                else if (document.getElementById("ptr2adr").checked) {
                                    setPtr3(document.getElementById("ptr2adr").value);
                                    setPtr3Val(ptr2val);
                                }
                            }
                        }>run
                        </button> <br></br> <br></br>
                    </div>
                </label>
            </form>
            <div className="PointerDisplay">
                ptr1 = {ptr1} <br></br>
                ptr2 = {ptr2} <br></br>
                ptr3 = {ptr3} <br></br>
                *ptr1 = {ptr1val} <br></br>
                *ptr2 = {ptr2val} <br></br>
                *ptr3 = {ptr3val} <br></br>
            </div>
        </>
    )
}

export default PointerGuide