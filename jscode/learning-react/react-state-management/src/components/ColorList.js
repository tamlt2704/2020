import React from 'react';
import Color from './Color';

function ColorList({ 
    colors = [], 
    onRemoveColor = f => f,
    onRateColor = f => f 
}) {
    console.log(colors)
    return (
        <div>
            {
                colors.length === 0 ? (
                    <p>No Colors listed. (Add a Color)</p>
                ) : (
                colors.map((color, i) => (
                    <Color 
                        key={color.id} 
                        {...color} 
                        onRemove={onRemoveColor}
                        onRate={onRateColor}
                    />
                    ))
                )
            }
        </div>
    );
}

export default ColorList;
