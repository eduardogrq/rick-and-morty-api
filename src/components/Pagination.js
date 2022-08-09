
const Pagination = ({prev, next, onPrev, onNext}) => {

    const handlePrev = () => {
        onPrev();
    }

    const handleNext = () => {
        onNext();
    }

    return(
        <div>
            <ul className="pagination d-flex justify-content-center mb-4">
                {prev ? <li className="page-item"><a className="page-link" href="#" onClick={handlePrev}>Previous</a></li> : 'null'}
                {next ? <li className="page-item"><a className="page-link" href="#" onClick={handleNext}>Next</a></li> : 'null'}    
            </ul>
        </div>
    )
}

export default Pagination