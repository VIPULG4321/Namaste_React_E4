
const search_style = {
  color: "red",
};
const btn_style = {
  color: "black",
  margin: "10px",
  cursor: "pointer",
  border: "20px",
};

const Search = function () {

  return (
    <div className="search">
      <input type="text"></input>
      <button style={btn_style}>Search</button>
      <p style={search_style}>Please select pincode here..</p>
    </div>
  );
};

export default Search;