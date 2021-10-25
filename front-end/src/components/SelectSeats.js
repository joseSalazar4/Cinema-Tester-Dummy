import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './SelectSeats.css';

function selectSeats(props)
{
    return (
        <div className="selectSeats">
            <div class="container">
                <div class="screen"></div>
                <div class="row">
                    <div class="seat" id="seat1" /*onClick={}*/></div>
                </div>
        </div>

        <p class="text">
            You have selected <span id="count">0</span> seats for a price of $<span id="total">0</span>
        </p>

    </div>
);
}

export default selectSeats;