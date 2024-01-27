import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";


//import {Title} from "./components/Header";

// if we have many components to import, we use import * as obj from"path" and we can access them as obj.Title etc 
/**
             Header
              -logo
              -nav items(right side)
              -cart
             Body
              -Search bar
              -Restaurant list
                -Restaurant card(many cards)
                  -image
                  -name
                  -rating
                  -cuisines
            Footer
             -links
             -copy rights
             * 
             * 
             * 
             * 
             */
//props - properties
//all arguments will be passed are taken by props
//you pass in arguements, you will receive parameters

//destructing data


//config-driven UI, backend will control how website should be displayed according to various places.

// we can use for loops to fill reataurantcard info, but we will not use in industry, we generally use map.

const AppLayout = ()=>{
    return (
       <>
       
        <Header/>
        <Body/>
        <Footer/>
       
       </>
       
    
        
       
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)