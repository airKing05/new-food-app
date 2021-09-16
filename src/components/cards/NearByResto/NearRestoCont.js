import React from 'react';
import NearRestoCardWithAD from './NearRestoCardWithAD';
import NearRestoCardWithoutAD from './NearRestoCardWithoutAD';
import './NearByResto.css';

export default function NearRestoCont() {
    return (
        <div className="container mt-5">
            <h2 className="tsn-heading-1">All Restaurants Nearby</h2>
            <p className="tsn-text-1">Discover unique tastes near you</p>
            <NearRestoCardWithAD/>
            <NearRestoCardWithoutAD/>
            <NearRestoCardWithoutAD/>
            <NearRestoCardWithAD/>
            <NearRestoCardWithoutAD/>
        </div>
    )
}
