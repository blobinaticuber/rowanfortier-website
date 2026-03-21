import './Card.css'

export function Card(props) {

    return (
        <div className="card-box" style={{background: `${props.color}`}}>
            {props.link ?
            <a target='_blank' href={props.link}>{props.children}</a> :
            props.children}
        </div>
    )
}
