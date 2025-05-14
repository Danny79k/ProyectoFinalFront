import React from 'react'

export const AddNews = () => {
  return (
    <div>

        <form>
            <input type="text" />
            <textarea name="" id=""></textarea>
            <input type="date" />
            <input type="image" />
            <select>
                <option value="local">local</option>
                <option value="regional">regional</option>
                <option value="nacional">nacional</option>
                <option value="internacional">internacional</option>
            </select>
            <input type="check" value='urgent' />
            <input type="check" value='premium' />
            <input type="number" />
        </form>
    </div>
  )
}
