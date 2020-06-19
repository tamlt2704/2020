import React from 'react';
import Color from './Color';

function ColorList({ 
    colors = [],
    onRemoveColor = f => f,
    onRateColor = f => f
}) {
    return (
        <div>
            {colors.map((c, i) => (
                <Color 
                    key={c.id} 
                    {...c} 
                    onRemove={onRemoveColor}
                    onRate={onRateColor}
                />
            ))}
        </div>
    );
}


export default ColorList;
