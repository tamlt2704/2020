import React, {useState} from 'react';
import './App.css';
import StarRating from './components/StarRating';
import ColorList from './components/ColorList';
import colorData from './components/color-data.json';
import AddColorForm from './components/AddColorForm.js';
import { v4 } from "uuid"

function App() {
    return (
        <div className="App">
            <AddColorForm />
            <ColorList />
        </div>
    );
}

export default App;
