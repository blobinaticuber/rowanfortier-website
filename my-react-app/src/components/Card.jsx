import './Card.css'
import { ImageCircle } from '../components/ImageCircle'

export function Card(props) {

    return (
        <div className="card-box" style={{background: `${props.color}`}}>
            {props.img &&
                <ImageCircle path={props.img}/>
            }
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}
