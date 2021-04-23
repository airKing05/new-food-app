import React from 'react';
import NearRestoCardWithAD from './NearRestoCardWithAD';

export default function NearRestoCont() {
    return (
        <div className="nearRestoContContainer">
            <h2>All Restaurants Nearby</h2>
            <p>Discover unque tastes near you</p>
            <NearRestoCardWithAD/>
        </div>
    )
}
