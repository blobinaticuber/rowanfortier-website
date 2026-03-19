import './Card.css'

export function Card(props) {

    return (
        <div className="card-box" style={{background: `linear-gradient(${props.color} 0%, #090a0f 100%)`}}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}
