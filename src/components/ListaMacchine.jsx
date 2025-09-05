import data from '../data/data.json';
function ListaMacchine ({/*id, marca, modello, anno,*/}) {
 
    return (
        <>
            {data.map((macchina) => 
            <div key={macchina.id}>
                <p>{macchina.marca}</p>
                <p>{macchina.modello}</p>
                <p>{macchina.anno}</p>
            </div>)}
        </>
    )
}

export default ListaMacchine;