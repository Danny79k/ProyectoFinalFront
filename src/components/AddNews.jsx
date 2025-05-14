import React, { use } from 'react'
import UseFetch from './UseFetch';

export const AddNews = () => {
  const token = sessionStorage.getItem("token")

  const { data, error, loading } = UseFetch('https://jeffrey.informaticamajada.es/api/categories', token);

  if (loading) return <div className="flex justify-center items-center h-full">Cargando...</div>;
  if (error) return <div className="flex justify-center items-center h-full">Error: {error}</div>;
  const categories = data.data
  console.log(categories)


  return (
    <div>

      <form>
        <label htmlFor="">title</label>
        <input type="text" />
        <label htmlFor="">Content</label>
        <textarea name="" id=""></textarea>
        <label htmlFor="">date</label>
        <input type="date" />
        <label htmlFor="">image</label>
        <input type="image" />
        <label htmlFor="">type</label>
        <select>
          <option value="local">local</option>
          <option value="regional">regional</option>
          <option value="nacional">nacional</option>
          <option value="internacional">internacional</option>
        </select>
        <label htmlFor="">urgent</label>
        <input type="checkbox" value='urgent' />
        <label htmlFor="">premium</label>
        <input type="checkbox" value='premium' />
        <label htmlFor="">category</label>
        <select name="" id="">
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.type}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}
