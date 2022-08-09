
const Card = ({character}) => {
    return(
        <div className="col-md-6 col-lg-3 mb-4 cursor-pointer">
            <div className="card shadow">
                <img src={character.image}/>
                <div className="card-body">
                    <h6>{character.name}</h6>
                    <p>{character.species}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;