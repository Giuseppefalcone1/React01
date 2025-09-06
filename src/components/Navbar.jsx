function Navbar(){
    
    return(
    <>
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