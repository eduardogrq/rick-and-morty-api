import {Link} from 'react-router-dom'

const Card = ({character}) => {
    return(
        <div className="col-md-6 col-lg-3 mb-4 cursor-pointer">
            <Link to={`/characters/${character.id}`} className="text-decoration-none text-reset">
                <div className="card shadow">
                    <img src={character.image}/>
                    <div className="card-body">
                        <h6>{character.name}</h6>
                        <small className="m-0 text-small">{character.species == 'Human' 
                            ? <div><i className="fa-solid fa-user mr-2"></i> {character.species}</div>
                            : <div><i className="fa-brands fa-reddit-alien mr-2"></i> {character.species}</div>}
                        </small>
                        <small className="m-0">{character.status == 'Alive'
                            ? <div><i className="fa-solid fa-heart mr-2 text-success"></i> {character.status}</div>
                            : character.status == 'Dead'
                            ? <div><i className="fa-solid fa-person-falling-burst mr-2 text-danger"></i> {character.status}</div>
                            : <div><i className="fa-solid fa-question mr-2"></i> {character.status}</div>}
                        </small>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card;