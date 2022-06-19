import React from 'react'
import { useAppDispatch } from '../app/hooks';
import { getMenuList } from '../slice';

const Search = ({ searchText, setSearchText  }  :
   { searchText : string, setSearchText : (val: string) => void}) => {
 
  const dispatch = useAppDispatch();

  const searchByDish = () => {
    dispatch(getMenuList({searchText : searchText}))
  }

  return (
    <div className='m-2 text-left row'>
      <input className='col-9 form-control' onChange={(e) => setSearchText(e.target.value)} id="Search-Box"  placeholder="Search by dish name" />
      <button className='btn btn-primary' onClick={searchByDish}>Search</button>
    </div>
  )
}

export default Search