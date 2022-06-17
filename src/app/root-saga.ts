import { takeLatest, put, select, call } from "@redux-saga/core/effects";
import { CategoryModel } from "../models/Category";
import { MenuModel } from "../models/menu";
import { getMenuList, setCurrentPage, setMenuList, setTotalPages, updateIsLoading } from "../slice";
import { getFromStore, getMenuListFromAPi } from "../utility";

export function* RootSaga() {
    yield takeLatest(getMenuList.type, handleGetMenuList)
}

export function* handleGetMenuList({ payload }: { payload: any }) {
    yield put(updateIsLoading(true));
    const categories: CategoryModel[] = yield select(store => getFromStore(store, "categories"));
    const pageSize: number = yield select(store => getFromStore(store, "pageSize"));
    const result: MenuModel[] = yield call(getMenuListFromAPi, categories, payload.searchText)
    yield put(setMenuList(result));
    yield put(setTotalPages(Math.ceil(result.length / pageSize)));
    yield put(setCurrentPage(1));
    yield put(updateIsLoading(false));
}