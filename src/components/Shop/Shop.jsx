import React, { useState } from 'react'
import { Ecomerce } from '../pages/Ecomerce'

export const Shop = () => {
    const [counter, setCounter] = useState(0);

    const updateCounter = (newCounterValue) => {
        setCounter(newCounterValue);
    };

    return (
        <div>
            <Ecomerce counter={counter} updateCounter={updateCounter} />
        </div>
    );
}
