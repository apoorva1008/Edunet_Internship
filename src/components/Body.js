import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Shimmer from "./Shimmer";
import { Form, Link } from "react-router-dom";


const Body=()=>{

    const[listOfRestaurants,setlistOfRestaurants]=useState([]); //here restaurantList = listOfRestaurants
    
    const[filteredRestaurants,setFilteredRestaurants]=useState([]);
    
    const [searchText,setSearchText]=useState("");


    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        const json= await data.json();
        console.log("This is entire data")
        console.log(json);
        
        console.log("This is only requried data data")

        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
   
    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">

                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                    onChange={(e)=>setSearchText(e.target.value)}></input>

                    <button onClick={()=>{
                        console.log(searchText);
                      const filteredRestaurants = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                      setFilteredRestaurants(filteredRestaurants);
                     
                    }}>Search</button>
                </div>

                <button className="filter-btn" onClick={()=>{
                    const filterdList=listOfRestaurants.filter((res)=>res.info.avgRating>4.4);
                    setFilteredRestaurants(filterdList); 
                    

                }}>TOP RATED RESTAURANTS</button>
            </div>
            
            <div className="res-container">
               
                {
                    filteredRestaurants.map(restaurant=>(
                    <Link key={restaurant?.info?.id} to={"/restaurant/"+restaurant?.info?.id}>
                        <RestaurantCard  resData={restaurant}/></Link>
                    ))}
                    {/* {Array.isArray(listOfRestaurants) && listOfRestaurants.length > 0 ? (
                    listOfRestaurants.map((restaurant, index) => {
                    const restaurantId = restaurant?.info?.id || index; // Use index as fallback key if id is undefined
                    // console.log('Restaurant:', restaurant); // Log each restaurant
                    return (
                      <RestaurantCard key={restaurantId} resData={restaurant} />
                    );
  })
) : (
  <p>No restaurants available</p>
)} */}

                 
                
            </div>
        </div>
    )
}

export default Body;