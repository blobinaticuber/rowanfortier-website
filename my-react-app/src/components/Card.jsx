import './Card.css'
import { ImageCircle } from '../components/ImageCircle'

export function Card(props) {

    return (
        <div className="card-box" style={{background: `${props.color}`}}>
            {props.children}
        </div>
    )
}
