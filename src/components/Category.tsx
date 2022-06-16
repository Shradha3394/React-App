import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { CategoryModel } from "../models/Category";
import { updateCategoryList } from "../slice";
import { getFromStore } from "../utility";

const Category = () => {

    const categories: CategoryModel[] = useAppSelector(store => getFromStore(store, "categories"));
    const dispath = useAppDispatch();
    const updateCategorySelection = (id: number) => {
        debugger
        var updatedCategories = categories.map(c => {
            var category = { ...c };
            category.isSelected = category.id == id;
            return category;
        });
        dispath(updateCategoryList(updatedCategories));
    }

    return (
        <div className="container-fluid">
            {categories.map((c: CategoryModel) => {
                return (
                    <div key={c.name} className="row my-2" >
                        <button onClick={() => updateCategorySelection(c.id)} className={"btn btn-block " + (c.isSelected ? "btn-primary" : "btn-secondary")} >
                            {c.name}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Category;