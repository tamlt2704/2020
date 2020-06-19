import React, {useContext} from 'react';
import Color from './Color';
import { useColors } from './useColors'

function ColorList() {
    const { colors } = useColors()
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
                    />
                    ))
                )
            }
        </div>
    );
}

export default ColorList;
