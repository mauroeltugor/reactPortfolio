import React from 'react';

export const EcomerceHeader = ({ counterValue }) => {
    return (
        <div className="flex flex-row justify-between">
            <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
            <h1 className="bg-white h-full p-2 rounded-lg">
                Products in cart: {counterValue}
            </h1>
        </div>
    );
};
