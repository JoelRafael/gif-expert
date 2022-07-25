import { useState } from "react"

export const AddCategory = ({onNewCategory }) => {
    const [inputValue, setInputValue] = useState("")
    const onInputChange = ({ target}) => {
        setInputValue(target.value)
       // console.log(target.value)
    }
    const onSubmint = (event) => {
        event.preventDefault();
        onNewCategory(inputValue.trim())
        setInputValue('')
        //onCategories(category=>[inputValue, ...category])
    }
    return (
        <form onSubmit={(event)=>onSubmint(event)}>
             <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}