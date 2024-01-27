
import { restaurantList } from "../config";
import { RestaurantCard } from "./RestaurantCard";
import { useState } from "react";



function filterData(searchText,restaurants){
       const filterData = restaurants.filter((restaurant) => restaurant.info.name.includes(searchText));
       return filterData;

}
const Body = ()=> {
    //react uses one-way data-binding
    //when we try to change text in search bar it will not change unlike in html on by using onchange() also it won't change. because localvariables doesnot support for react, react supports state variables.. every componnent in react maintain a state.

    // everytime  use local variable, we use state in it.

    //use state hook 
    //hooks are nothing like normal function. every hook as specific function. useState() is used for creating state variables. it is imported as named variable from react library. 

    //react does not have any idea of what happening to variables.so, it won't change. to make it sync with changes, we use state varaiables.

    const [searchText, setSearchText] = useState();
    
    const [restaurants, setRestaurants] = useState(restaurantList);
    
    // this function returns an array, first element in that array will be the  variable.
    //we cannot directly change react variable normally or by using onclick() , we can change it only by using functions,useState will give that function for us,
    return (
        <>
      
        <div className="search-container">

            <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={(e) => {
                setSearchText(e.target.value);
            } }/>

            <button className="search-btn"
            onClick={()=>{
               const data= filterData(searchText, restaurants);
               setRestaurants(data);
            }}
            
            >Search</button>
        </div>
        <div className="restaurant">
            {
                restaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
                })
            }
        </div>


        </>
    );
};

export default Body;