import Card from "./Card";
import Pagination from "./Pagination";

const AllCharacters = ({prev, next, onPrev, onNext, characters}) => {
    return(
        <div>
            <Pagination prev={prev} next={next} onPrev={onPrev} onNext={onNext}/>
            <div className="row">
                {characters.map((item, key) => (
                    <Card character={item} key={key}/>
                ))}
            </div>
            
        </div>
    )
}

export default AllCharacters;