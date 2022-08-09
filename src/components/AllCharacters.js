import Card from "./Card";

const AllCharacters = ({characters}) => {
    return(
        <div className="row">
            {characters.map((item, key) => (
                <Card character={item} key={key}/>
            ))}
        </div>
    )
}

export default AllCharacters;