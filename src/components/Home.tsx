import React, { useState } from "react";
import Category from "./Category";
import Menu from "./Menu";
import Search from "./Search";


const Home = () => {
    const [SearchText, setSearchText] = useState("");

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
                </div>
            </div>
            <div className="row">
                <div className="col-3 bg-info p-2">
                    <Category />
                </div>
                <div className="col-9 p-2 ">
                    <Menu searchText={SearchText} />
                </div>
            </div>
        </div>
    )
}

export default Home;