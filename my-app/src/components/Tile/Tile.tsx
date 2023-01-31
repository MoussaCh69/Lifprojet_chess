import React from 'react';
import './Tile.css';
import pion_noir from '../../assets/images/pion_noir.png';
import pion_blanc from '../../assets/images/pion_blanc.png'; //pour l'affichage

interface Props{
    number: number;
}

export default function Tile({number}: Props){
    if(number%2===0)
        return <div className="tile black-tile"><img src={pion_noir} alt="pion noir"/></div>; // pas encore au point
    else
        return <div className="tile white-tile"><img src={pion_blanc} alt="pion blanc"></img></div>;
}