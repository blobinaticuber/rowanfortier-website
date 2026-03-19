import './Card.css'

export function Card(props) {

    return (
        <div className="card-box" style={{background: `${props.color}`}}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}
