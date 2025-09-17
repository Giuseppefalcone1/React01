function Card({id,marca,modello,anno}){
    return(
        <>
            <div>
                <p>{marca}</p>
                <p>{modello}</p>
                <p>{anno}</p>
            </div>
        </>
    )
}

export default Card