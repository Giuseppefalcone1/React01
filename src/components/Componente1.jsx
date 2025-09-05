import Subcomponente1 from "./Subcomponente1.jsx"
function Componente1({titolo, imgURL}){
    
    return(
    <>
        <h1>Ciao sono il componente 1</h1>
        <Subcomponente1/>

        <h2>Sono la prop {titolo}</h2>
        <img src={imgURL} alt="" />
    </>
    )

}

export default Componente1