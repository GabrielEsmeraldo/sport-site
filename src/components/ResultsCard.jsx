export default function ResultsCard(props) {
    return (
        <div className="resultsCard">
            <h4 className="data">{props.data}</h4>
            <p className="description">{props.description}</p>
        </div>
)
}