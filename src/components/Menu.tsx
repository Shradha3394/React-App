import React from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addorUpdateCart, getMenuList } from "../slice";
import { getFromStore } from '../utility';
import Pager from "./Pager";
import { SelectedItem } from "../models/Dish";
import { MenuModel } from "../models/Menu";


const Menu = ({ searchText, cart }: { searchText: string, cart : SelectedItem[] }) => {
    const menuList: MenuModel[] = useAppSelector(store => getFromStore(store, "menu"));
    const pageSize: number = useAppSelector(store => getFromStore(store, "pageSize"));
    const currentPage: number = useAppSelector(store => getFromStore(store, "currentPage"));
    const categories = useAppSelector(store => getFromStore(store, "categories"));
    const isLoading = useAppSelector(store => getFromStore(store, "isLoading"));

    const index = (currentPage - 1) * pageSize;
    const filetredList = menuList.slice(index, index + pageSize);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getMenuList({ searchText: searchText }))

    }, [categories]);

    const addOrUpdateItemInCart = (item : MenuModel) => {
        let updatedCart = structuredClone(cart);
        let data = updatedCart.find(x => x.dish.id == item.id);
        if(data){
            data.quantity++;
        }
        else{
            updatedCart.push({dish: item, quantity: 1 });
        }
        dispatch(addorUpdateCart(updatedCart));
    }

    return (
        <div className={isLoading ? "loader" : ""}> { filetredList && filetredList.length > 0 ? (
            <div>
                {
                    filetredList.map((m: MenuModel) => (

                        <div key={m.id} className="card m-1 p-1 bg-light">
                            <h4>
                                {m.name}
                                <span className="badge badge-pill badge-primary float-right">
                                    {m.price}
                                </span>
                            </h4>
                            <div className="card-text bg-white p-1">{m.category}</div>
                            <div className="card-text bg-white p-1">
                                {m.description}
                                <button onClick={() =>addOrUpdateItemInCart(m)} className="btn btn-success btn-sm float-right">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ))
                }
                <Pager totalData={menuList.length}></Pager>
            </div>
        ) : (
            <div className="card m-1 p-1 bg-light">Oops! Your search returned no results. Try changing your filters above to broaden your search.</div>
        )
        }
            
        </div>
    )
}

export default Menu;