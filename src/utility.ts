import { CategoryModel } from "./models/Category";

export const getMenuListFromAPi = (categories : CategoryModel[] = [], searchText : string = "") => {
    let url = "http://localhost:8084/menu";
    const selectedCategory = categories.find((x : CategoryModel) => x.isSelected == true);
    let separator = "?";
    if(selectedCategory && selectedCategory.name !== "All" ){
        url +=  separator + 'category=' + selectedCategory.name;
        separator = "&";
    }

    if(searchText){
        url +=  separator + 'q=' + searchText;
    }

    return fetch(url).then(res => res.json());
 
}

export const getCategoryList = () => {
    return fetch("http://localhost:8084/categories").then(res => res.json());
 
}

// export const getSelectedCategory = (categories) =>{
//     const selectedCategory = categories.find((x : CategoryModel) => x.isSelected == true);
//     if(selectedCategory && selectedCategory.name !== "All" ){

// }

export const getFromStore = (store: any, key: string) => store.AppReducer[key];