import { createSlice } from "@reduxjs/toolkit";

let categoryList = [
    { id: 101, name: "All", isSelected: true },
    { id: 102, name: "Indian", isSelected: false },
    { id: 103, name: "Italian", isSelected: false },
    { id: 104, name: "Chinese", isSelected: false },
    { id: 105, name: "Continental", isSelected: false }
];

const initialState = {
    menu: [],
    categories: categoryList,
    totalPages: 0,
    currentPage: 1,
    pageSize: 4
}

const appSlice: any = createSlice({
    name: "appSlice",
    initialState: initialState,
    reducers: {
        setMenuList: (state, action): any => { return { ...state, menu: [...action.payload] } },
        setTotalPages: (state, action): any => { return { ...state, totalPages: action.payload } },
        setPageSize: (state, action): any => { return { ...state, pageSize: action.payload } },
        setCurrentPage: (state, action): any => { return { ...state, currentPage: action.payload } },
        updateCategoryList: (state, action) => { return { ...state, categories: [...action.payload] } },
    }
})

export const {
    setMenuList,
    setTotalPages,
    setPageSize,
    setCurrentPage,
    updateCategoryList
} = appSlice.actions;

export default appSlice.reducer;
