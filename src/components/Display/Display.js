import "./Display.scss"

export default function Display({activePlant}) {
    // Further destructuring of activePlant object
    const {name, avatar, age, description} = activePlant;

    return (
        // Render all details from current active plants
        <div className="plant-details">
            <h1>{name}</h1>
            <img alt="my special plant" className="plant-details__photo" src={avatar} />
            <p>{age}</p>
            <p>{description}</p>
        </div>
    )
}