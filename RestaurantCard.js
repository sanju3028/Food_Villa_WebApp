
import { IMG_URL } from "../config"

export const RestaurantCard = ({name,cuisines,cloudinaryImageId,avgRatingString}) => {
    
    return (
        <div className="card">
            <img alt = "food-image" src= {
                IMG_URL 
                + cloudinaryImageId
                }
            />

            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            
            <h4>{avgRatingString}/5</h4>
        </div>
    )
}