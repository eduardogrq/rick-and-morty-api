
const Card = ({character}) => {
    return(
        <div className="col-md-6 col-lg-3 mb-4 cursor-pointer">
            <div className="card shadow">
                <img src={character.image}/>
                <div className="card-body">
                    <h6>{character.name}</h6>
                    <small className="m-0 text-small">{character.species == 'Human' 
                        ? <div><i class="fa-solid fa-user mr-2"></i> Human</div>
                        : <div><i class="fa-brands fa-reddit-alien mr-2"></i> Alien</div>}
                    </small>
                    <small className="m-0">{character.status == 'Alive'
                        ? <div><i class="fa-solid fa-heart mr-2"></i> Vivo</div>
                        : character.status == 'Dead'
                        ? <div><i class="fa-solid fa-person-falling-burst mr-2"></i> Muerto</div>
                        : <div><i class="fa-solid fa-question mr-2"></i> Desconocido</div>}
                    </small>
                </div>
            </div>
        </div>
    )
}

export default Card;