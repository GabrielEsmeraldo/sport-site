export default function MainCard(props) {
    return (
        <div className="main-card">
            <img className="main-card-img" src={props.img} alt="" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}