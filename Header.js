export const Title = ()=> {
    return (
        <a href="/">

            <img className="logo" alt= "logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86tYjrHWG7yuib2FlQU0llpvL1gMwcZibUQ&usqp=CAU"/>
        </a>

);
};

const Header = ()=> {
    return (
        <div className="header">
          <Title/>
          <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
          </div>
        </div>
    ); 
};
export default Header;