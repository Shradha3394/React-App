import React, { useState } from "react";
import { useAppSelector } from "../app/hooks";
import { SelectedItem } from "../models/Dish";
import { getFromStore } from "../utility";
import CartSummary from "./CartSummary";
import Category from "./Category";
import Menu from "./Menu";
import Search from "./Search";
import "font-awesome/css/font-awesome.min.css";


const Home = () => {
    const [SearchText, setSearchText] = useState("");
    const cart : SelectedItem[] = useAppSelector(store => getFromStore(store, "cart"));
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 bg-dark text-white">
                    <a className="navbar-brand">Restaurant Menu</a>
                </div>
                <div className="col bg-dark text-white">
                    <Search searchText={SearchText} setSearchText={setSearchText}/>
                </div>
                <div className="col bg-dark text-white">
                    <CartSummary totalItems={totalItems}/>
                </div>
            </div>
            <div className="row">
                <div className="col-3 bg-info p-2">
                    <Category />
                </div>
                <div className="col-9 p-2 ">
                    <Menu cart={cart} searchText={SearchText} />
                </div>
            </div>
        </div>
    )
}

export default Home;