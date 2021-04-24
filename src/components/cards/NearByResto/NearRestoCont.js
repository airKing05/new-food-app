import React from 'react';
import NearRestoCardWithAD from './NearRestoCardWithAD';
import NearRestoCardWithoutAD from './NearRestoCardWithoutAD';

export default function NearRestoCont() {
    return (
        <div className="nearRestoContContainer">
            <h2>All Restaurants Nearby</h2>
            <p>Discover unique tastes near you</p>
            <NearRestoCardWithAD/>
            <NearRestoCardWithoutAD/>
            <NearRestoCardWithoutAD/>
            <NearRestoCardWithAD/>
            <NearRestoCardWithoutAD/>
        </div>
    )
}
