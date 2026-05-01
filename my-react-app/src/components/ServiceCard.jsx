import './ServiceCard.css'

export function ServiceCard(props) {

    return (
        <div className="service-card-box" style={{background: `${props.color}`}}>
            <div className={"vstack"}>
                {props.children}
            </div>
        </div>
    )
}
