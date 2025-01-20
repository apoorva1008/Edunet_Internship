import {IMG_CDN_URL} from "../utils/constants"
const RestaurantCard=(props)=>{
    const {resData}=props;

    // const {
    //     cloudinaryImageId,
    //     name,
    //     cuisines,
    //     area,
    //     avgRating
    //     }=resData?.info;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo"
                alt="res-logo"
                // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/22939c1457c1502d40c8440325e60cb5"/>
                src={IMG_CDN_URL + resData?.info?.cloudinaryImageId} />
                <h3>{resData?.info?.name}</h3>
                <h3>{resData?.info?.areaName}</h3>
                <h4>{resData?.info?.cuisines.join(', ')}</h4>
                <h4>{resData?.info?.costForTwo}</h4>
                <h4>{resData?.info?.avgRating}</h4>
                {/* <h4>{resData?.info?.area}</h4> */}
                
         
        </div>
    )
}
export default RestaurantCard;