import './ImageShape.css'

export function ImageShape(props) {
    return (
        <img className={`${props.shape} ${props.border? "border" : ""}`} src={props.path}/>
    )
}
