import { CategoryModel } from "./models/Category";

export const getMenuList = (categories : CategoryModel[]) => {
    let url = "http://localhost:8084/menu";
    const selectedCategory = categories.find((x : CategoryModel) => x.isSelected == true);

    if(selectedCategory && selectedCategory.name !== "All" ){
        url += '?category=' + selectedCategory.name;
    }

    return fetch(url).then(res => res.json());
 
}

export const getCategoryList = () => {
    return fetch("http://localhost:8084/categories").then(res => res.json());
 
}

export const getFromStore = (store: any, key: any) => store.AppReducer[key];