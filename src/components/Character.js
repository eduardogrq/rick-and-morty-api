import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Character = () => {
    const params = useParams();
    const url = 'https://rickandmortyapi.com/api/character'

    const [character, setCharacter] = useState([]);
    const [dataEpisode, setDataEpisode] = useState([])

    const getCharacter = async (url) => {
        const res = await fetch(`${url}/${params.id}`)
        const data = await res.json();

        const resEpisode = await fetch(data.episode)
        const dataEpisode = await resEpisode.json();

        setCharacter(data)
        setDataEpisode(dataEpisode)

    } 

    useState(() => {
        getCharacter(url)
    }, [])


    return(
        <div>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={character.image} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{character.name}</h4>

                            <div className="m-0 text-small card-text">{character.species == 'Human' 
                                ? <div><i className="fa-solid fa-user mr-2"></i> {character.species}</div>
                                : <div><i className="fa-brands fa-reddit-alien mr-2"></i> Al{character.species}ien</div>}
                            </div>
                            <div className="m-0 card-text">{character.status == 'Alive'
                                ? <div><i className="fa-solid fa-heart mr-2 text-success"></i> {character.status}</div>
                                : character.status == 'Dead'
                                ? <div><i className="fa-solid fa-person-falling-burst mr-2 text-danger"></i> {character.status}</div>
                                : <div><i className="fa-solid fa-question mr-2"></i> {character.status}</div>}
                            </div>
                            { character.type ? <p className="card-text">Type: {character.type}</p> : null}
                            { character.gender ? <p className="card-text mt-3">Gender: {character.gender}</p> : null}
                            { character.origin ? <p className="card-text ">Origin: {character.origin.name}</p> : null}
                            { character.location ? <p className="card-text ">Location: {character.location.name}</p> : null}
                            { dataEpisode.name ? <p className="card-text ">Episode: {dataEpisode.name}</p> : null}

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Link to='/'>
                    <button className="btn btn-secondary">Go back</button>    
                </Link>
            </div>    
        </div>
    )
}

export default Character;