function Card({disponibile}) {
    return (
        <div className="card">
            <h2>Card Title</h2>
            <p>This is a simple card component.</p>


            {/* rendering condiizionale */}
            {disponibile ? <button>Acquista</button> : <span>Non disponibile</span>}


        </div>
    );
}
export default Card