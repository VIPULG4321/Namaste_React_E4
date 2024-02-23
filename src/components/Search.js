// import restourantData from "../utils/restourant";

// export var modified_res_data = [];
// modified_res_data = restourantData;

const search_style = {
  color: "red",
};
const btn_style = {
  color: "black",
  margin: "10px",
  cursor: "pointer",
  border: "20px",
};

// export var mydata = [
//   {
//     info: {
//       id: "395334",
//       name: "McDonald's Gourmet Burger Collection",
//       cloudinaryImageId: "txirbmikcfw5yijtcfs5",
//       locality: "Kalina Artista",
//       areaName: "Scruz Bandra East",
//       avgRating: 4.2,
//       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
//     },
//   },
//   {
//     info: {
//       id: "395335",
//       name: "McDonald's Gourmet Burger Collection",
//       cloudinaryImageId: "txirbmikcfw5yijtcfs5",
//       locality: "Kalina Artista",
//       areaName: "Scruz Bandra East",
//       avgRating: 4.2,
//       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
//     },
//   },
//   {
//     info: {
//       id: "395336",
//       name: "McDonald's Gourmet Burger Collection",
//       cloudinaryImageId: "txirbmikcfw5yijtcfs5",
//       locality: "Kalina Artista",
//       areaName: "Scruz Bandra East",
//       avgRating: 4.2,
//       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
//     },
//   },
// ];

const Search = function () {
  return (
    <div className="search">
      <input type="text"></input>
      <button>Search</button>
      <p style={search_style}>Please select pincode here..</p>
      {/* <button
        className="filter"
      >
        Top rated - restaurants
      </button> */}
    </div>
  );
};

export default Search;
