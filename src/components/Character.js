import { useParams } from "react-router-dom";

const Character = () => {
    const params = useParams();
    return(
        <div>{params.id}</div>
    )
}

export default Character;