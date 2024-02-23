import myimage from'../logo.jpg';

const Header = () => {
    return (
      <div id='Header'>
        <div className="logo">
          <img src={myimage} alt='logo'></img>
        </div>
        <div className='banner'>
          <h2>Shine Restaurant</h2>
        </div>
        <div className='nav_items'>
          <h2>Home</h2>
          <h2>Contact</h2>
          <h2>About US</h2>
          <h2>Cart</h2>
        </div>
      </div>
    );
  };

  export default Header;