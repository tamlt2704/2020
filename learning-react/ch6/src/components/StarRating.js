import React  from 'react';
import { FaStar } from 'react-icons/fa'


const Star = ({
    selected =  false,
    onSelect = f => f
}) => (
    <FaStar 
        color={selected ? "red" : "grey"} 
        onClick={onSelect}
    />
)

const createArray = length => [...Array(length)]

function StarRating({
    totalStars=5, 
    selectedStars=0,
    onRate = f => f
}) {
    return (
        <>
        {
            createArray(totalStars).map((c, i) => (
                <Star 
                    key={i} 
                    selected={selectedStars > i} 
                    onSelect={() => onRate(i+1)}
                />
            ))
        }            
        <p>
            {selectedStars} of {totalStars} stars
        </p>
        </>
    )
}


export default StarRating;
