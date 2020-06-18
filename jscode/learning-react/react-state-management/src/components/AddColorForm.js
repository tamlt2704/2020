import React, {useRef, useState} from 'react';
import { useInput } from './hooks'
/* useRef
function AddColorForm({
    onNewColor = f => f
}) {
    const txtTitle = useRef();
    const hexColor = useRef();
    const submit = e => {
        e.peventDefault()
        const title = txtTitle.current.value
        const color = hexColor.current.value
        onNewColor(title, color)
        txtTitle.current.value = ""
        hexColor.current.value = ""
    }
    return (
        <form onSubmit={submit}>
            <input ref={txtTitle} type="text" placeholder="color title..." required /> 
            <input ref={hexColor} type="color" required /> 
            <button>Add</button>
        </form>
    );
}
*/

/* useState
function AddColorForm({
    onNewColor = f => f
}) {
    const [title, setTitle] = useState("")
    const [color, setColor] = useState("#000000")
    const submit = e => {
        e.peventDefault()
        onNewColor(title, color)
        setTitle("")
        setColor("")
    }
    return (
        <form onSubmit={submit}>
            <input 
                value={title}
                onChange={event => setTitle(event.target.value)}
                type="text"
                required
            /> 
            <input 
                value={color}
                onChange={event => setColor(event.target.value)}
                type="color"
                required
            /> 
            <button>Add</button>
        </form>
    );
}
*/

function AddColorForm ({
    onNewColor = f => f
}) {
    const [titleProps, resetTitle] = useInput("") 
    const [colorProps, resetColor] = useInput("") 
    const submit = event => {
        event.preventDefault()
        onNewColor(titleProps.value, colorProps.value)
        resetTitle()
        resetColor()
    }
    return (
        <form onSubmit={submit}>
            <input 
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input {...colorProps} type="color" required />
            <button>Add</button>
        </form>
    )
}
export default AddColorForm;
