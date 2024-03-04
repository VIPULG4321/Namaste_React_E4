import { CDN_IMG } from "../utils/constants";
// import { Img } from 'react-image';
// import star from "../utils/star.jpg";

const Foods = (props) => {
    const {RestData} = props; //object destructuring
    const {cloudinaryImageId, name, cuisines, avgRating, locality, areaName, costForTwo} = RestData?.info; //optional chaining.
    var mycus = cuisines.join(", ").length;
    var myresName = name.length;
    var myaddress = (locality+areaName).length;

    return (
      <div className='card'>
        <div className='card_img'>
          <img src={CDN_IMG + cloudinaryImageId } alt='mydata'></img>
          <h1 className="costfortwo">{costForTwo}</h1>
        </div>
        <div className='class_details'>
          {
            (myresName>40) ? <h3 className='res-name'>{name.substring(0,40)}...</h3> 
            : <h3 className='res-name'>{name}</h3>
          }
          <p>{avgRating} Stars • 50-55 min</p>
          {
            (mycus>55) ? <p className='cuisines'><span>{cuisines.join(", ").substring(0,55)}..</span></p>
             : <p className='cuisines'><span>{cuisines.join(", ")}</span></p>
          } 
          {
            (myaddress>50) ? <p className="loc">{locality.substring(0,25)}.., {areaName.substring(0,25)}</p> : 
            <p className="loc">{locality}, {areaName}</p>
          }
          
        </div>
      </div>
    )
    
  }

  export default Foods;