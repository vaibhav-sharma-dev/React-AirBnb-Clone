export default function Card(props) {
    let badge_text;
    if (props.data.openSpots===0)
        badge_text = "SOLD OUT"

    else if (props.data.location==="Online")
        badge_text = "Online"


    return (
        <div className="card">
            {badge_text && <div className="card_badge">{badge_text}</div>}
            <img className="card_img"
                src={`"../../images/${props.data.coverImg}`}
            />
            <div className="card_stats">
                <img className="img_star"
                    src="./images/star.png" 
                />
                <span>{props.data.stats.rating}</span>
                <span>({props.data.stats.reviewCount}) •</span>
                <span>{props.data.location}</span>
            </div>
            <p className="card_title">
                {props.data.title}<br></br>
                <b>From ${props.data.price}</b> / person
            </p>
        </div>
    )
}