import { useState } from 'react'
import {AddCategory, GifGrid} from './components'
 export const GifExportA = () => {
     const [categories, setCategories] = useState(['One Punch Man', 'Dragon Ball']);
     const onAddCategory = (value) => {
         if(categories.includes(value))return
        setCategories(cat=>[ value,...cat])
         //console.log(value);
     }
    return (
        <>
            <h1>GifApp React</h1>
            <AddCategory onNewCategory={(value)=>onAddCategory(value) } />
   
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
        </>
    )
}