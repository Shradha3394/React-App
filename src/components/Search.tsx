import React from 'react'
import { useAppDispatch } from '../app/hooks';
import { getMenuList } from '../slice';

const Search = (props : { searchText: string, setSearchText : any }) => {
 
  const dispatch = useAppDispatch();

  const searchByDish = () => {
    dispatch(getMenuList({searchText : props.searchText}))
  }

  return (
    <div className='m-2 text-left row'>
      <input className='col-9 form-control' onChange={(e) => props.setSearchText(e.target.value)} id="Search-Box"  placeholder="Search by dish name" />
      <button className='btn btn-primary' onClick={searchByDish}>Search</button>
    </div>
  )
}

export default Search