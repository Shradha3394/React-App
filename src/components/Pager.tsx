import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setCurrentPage, setPageSize, setTotalPages } from "../slice";
import { getFromStore } from "../utility";

const Pager = (props: any) => {

    const currentPage = useAppSelector(store => getFromStore(store, "currentPage"));
    const totalPages = useAppSelector(store => getFromStore(store, "totalPages"));
    const dispatch = useAppDispatch();
    
    const updatePageSize = (e: any) => {
        var newPageSize = +e.target.value;
        var totalRecords = props.totalData;
        dispatch(setPageSize(newPageSize));
        dispatch(setTotalPages(Math.ceil(totalRecords / newPageSize)));
    }

    const updateCurrentPage = (isNext: boolean) => {
        const newPage = isNext ? currentPage + 1 : currentPage - 1;
        dispatch(setCurrentPage(newPage));
    }

    return (
        <div className="row mt-2">
            <div className="col-2 form-group">
                <select className="form-control" onChange={(e) => updatePageSize(e)} >
                    <option value="4">4 per page</option>
                    <option value="8">8 per page</option>
                    <option value="12">12 per page</option>
                </select>
            </div>
            <div className="text-right col">
                <button className="btn btn-secondary mx -1" disabled={currentPage == 1} onClick={() => updateCurrentPage(false)}>Previous</button>
                <span className="btn">{currentPage}</span>
                of
                <span className="btn">{totalPages}</span>
                <button className="btn btn-secondary mx -1" disabled={currentPage == totalPages} onClick={() => updateCurrentPage(true)}>Next</button>
            </div>
        </div>
    );
}

export default Pager;