import { CDN_IMG } from "../utils/constants";

const Foods = (props) => {
    const {RestData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, locality, areaName} = RestData?.info;
    
    return (
      <div className='card'>
        <div className='card_img'>
          <img src={CDN_IMG + cloudinaryImageId } alt='mydata'></img>
        </div>
        <div className='class_details'>
          <p className='name'>{name}</p>
          <p className='cuisines'><span>{cuisines.join(", ")}</span></p>
          <p>{avgRating} Stars • 50-55 min</p>
          <p>{locality}, {areaName}</p>
        </div>
      </div>
    )
  }

  export default Foods;