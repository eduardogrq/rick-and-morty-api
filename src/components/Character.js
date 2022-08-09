import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
    const params = useParams();
    const url = 'https://rickandmortyapi.com/api/character'

    const [character, setCharacter] = useState([]);

    const getCharacter = async (url) => {
        const res = await fetch(`${url}/${params.id}`)
        const data = await res.json();
        // console.log(data)

        setCharacter(data)

    } 

    useState(() => {
        getCharacter(url)
    }, [])
    // let character = characters.filter(character => character.id == params.id)
    // character = character[0]

    return(
        <div>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={character.image} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Character;