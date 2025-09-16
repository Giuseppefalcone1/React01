import React, { useState } from "react";
function Navbar(){
    

    const[count, update] = useState(0);
    function incrementa(){
        update(count+1);
    }

    const newItem = "nuovo elemento aggiunto";
    const[array, setArray] = useState([1,2,3])
    const addItem = ()=>{
        setArray([...array,newItem])
        console.log(array)
    }

    return(
    <>
        <p>valore - {count}</p>
        <button onClick={incrementa}>incrementa</button>
        <button onClick={addItem}>aggiungi</button>
       <nav style={{ borderRadius: "5px", padding: "10px", backgroundColor: "#494949ff" }}>
           <ul style={{ display: "flex", gap: "5px", listStyle: "none", margin: 0, padding: 0, color: "white" }}>
           <button>Home</button>
           <button>Contatti</button>
           <button>Auto</button>
           </ul>
       </nav>
    </>
    )

}

export default Navbar