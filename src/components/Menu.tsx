import React from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setMenuList, setTotalPages } from "../slice";
import { getFromStore, getMenuList } from '../utility';
import { MenuModel } from '../models/menu';
import Pager from "./Pager";


const Menu = () => {
    const menuList: MenuModel[] = useAppSelector(store => getFromStore(store, "menu"));
    const pageSize: number = useAppSelector(store => getFromStore(store, "pageSize"));
    const currentPage: number = useAppSelector(store => getFromStore(store, "currentPage"));
    const categories = useAppSelector(store => getFromStore(store, "categories"));

    const index = (currentPage - 1) * pageSize;
    const filetredList = menuList.slice(index, index + pageSize);
    const dispatch = useAppDispatch();
    useEffect(() => {
        getMenuList(categories).then((data) => {
            dispatch(setMenuList(data));
            dispatch(setTotalPages(Math.ceil(data.length / pageSize)));
        })
    }, [categories]);

    return (
        <div> {filetredList.map((m: MenuModel) => {
            return (
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
                        <button className="btn btn-success btn-sm float-right">
                            Add To Cart
                        </button>
                    </div>
                </div>
            )
        })}
            <Pager totalData={menuList.length} />
        </div>
    )
}

export default Menu;