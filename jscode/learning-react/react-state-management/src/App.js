import React, {useState} from 'react';
import './App.css';
import StarRating from './components/StarRating';
import ColorList from './components/ColorList';
import colorData from './components/color-data.json';
import AddColorForm from './components/AddColorForm.js';
import { v4 } from "uuid"

function App() {
    const [colors, setColors] = useState(colorData)
    return (
        <div className="App">
            <AddColorForm 
                onNewColor={(title, color) => {
                    console.log( color )
                    const newColors = [
                        ...colors,
                        {
                            id: v4(),
                            rating: 0,
                            title,
                            color
                        }
                    ]
                    setColors(newColors)
                }}
            />
            <ColorList 
                colors={colors}
                onRateColor={ (id, rating) => {
                    const newColors = colors.map(color =>
                        color.id === id ? {...color, rating} : color
                    );
                    setColors(newColors)
                }}
                onRemoveColor={ id => {
                    const newColors = colors.filter(color => color.id !== id);
                    setColors(newColors)
                }}
            />
        </div>
    );
}

export default App;
