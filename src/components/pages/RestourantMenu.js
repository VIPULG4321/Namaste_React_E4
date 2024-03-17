import { useEffect, useState } from "react";
import Shimmer from "../shimmerUI";
// import { logDOM } from "@testing-library/react";
// import { CDN_IMG } from "../../utils/constants";
import { useParams } from "react-router-dom";
import {res_Menu} from "../../utils/constants"

const RestourantMenu = () => {
  const [resMenu, setresMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const {resID} = useParams();


  console.log(resID);

  const fetchData = async () => {
    let data = await fetch(res_Menu+resID);
    let json = await data.json();
    setresMenu(json.data);
  };

  if(resMenu === null) return <Shimmer />
  // console.log(resMenu);
  
  //hotel name
  const {name} = resMenu?.cards[0]?.card?.card?.info;

  const {itemCards} = resMenu?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  // console.log(itemCards);
  
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        {
          itemCards.map((item)=> (
            <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>
          ) )
        }
      </ul>
    </div>
  );
};

// item.card.info.name

export default RestourantMenu;
