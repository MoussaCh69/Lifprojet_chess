import React from 'react';
import Tile from '../Tile/Tile';
import './Chessboard.css';

import pion_noir from '../../assets/images/pion_noir.png';
import pion_blanc from '../../assets/images/pion_blanc.png';
import cavalier_noir from '../../assets/images/cavalier_noir.png';
import cavalier_blanc from '../../assets/images/cavalier_blanc.png';
import dame_noir from '../../assets/images/dame_noir.png';
import dame_blanc from '../../assets/images/dame_blanc.png';
import fou_noir from '../../assets/images/fou_noir.png';
import fou_blanc from '../../assets/images/fou_blanc.png';
import roi_noir from '../../assets/images/roi_noir.png';
import roi_blanc from '../../assets/images/roi_blanc.png';
import tour_noir from '../../assets/images/tour_noir.png';
import tour_blanc from '../../assets/images/tour_blanc.png';

const horizontalAxis = ["a","b","c","d","e","f","g","h"];
const verticalAxis = ["1","2","3","4","5","6","7","8"];
const pieces: Piece[] = [];

interface Piece{
    image: string;
    x: number;
    y: number;
}

for(let i=0; i<8; i++){
    pieces.push({image: `${pion_noir}`, x: i, y: 6});
}

for(let i=0; i<8; i++){
    pieces.push({image: `${pion_blanc}`, x: i, y: 1});
}

pieces.push({image: `${tour_noir}`, x: 0, y: 7});
pieces.push({image: `${tour_noir}`, x: 7, y: 7});
pieces.push({image: `${cavalier_noir}`, x: 1, y: 7});
pieces.push({image: `${cavalier_noir}`, x: 6, y: 7});
pieces.push({image: `${fou_noir}`, x: 2, y: 7});
pieces.push({image: `${fou_noir}`, x: 5, y: 7});
pieces.push({image: `${dame_noir}`, x: 3, y: 7});
pieces.push({image: `${roi_noir}`, x: 4, y: 7});

pieces.push({image: `${tour_blanc}`, x: 0, y: 0});
pieces.push({image: `${tour_blanc}`, x: 7, y: 0});
pieces.push({image: `${cavalier_blanc}`, x: 1, y: 0});
pieces.push({image: `${cavalier_blanc}`, x: 6, y: 0});
pieces.push({image: `${fou_blanc}`, x: 2, y: 0});
pieces.push({image: `${fou_blanc}`, x: 5, y: 0});
pieces.push({image: `${dame_blanc}`, x: 3, y: 0});
pieces.push({image: `${roi_blanc}`, x: 4, y: 0});

let activePiece: HTMLElement | null = null;

function grabPiece(e: React.MouseEvent){
    const element = e.target as HTMLElement;
    if(element.classList.contains("chess-piece")){
        const x = e.clientX-50;
        const y = e.clientY-50;
        element.style.position = "absolute";
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        activePiece = element;
    }
}

function movePiece(e: React.MouseEvent){
    if(activePiece){
        const x = e.clientX-50;
        const y = e.clientY-50;
        activePiece.style.position = "absolute";
        activePiece.style.left = `${x}px`;
        activePiece.style.top = `${y}px`;
    }
}

function dropPiece(e: React.MouseEvent){
    if(activePiece)
        activePiece = null;
}

export default function Chessboard(){
    let board = [];
    for(let j=verticalAxis.length-1; j>=0; j--){
        for(let i=0; i<horizontalAxis.length; i++){
            const number = j+i+2;
            let image = undefined;
            
            pieces.forEach(p => {
                if(p.x === i && p.y === j){
                    image = p.image;
                }
            });

            board.push(
                <Tile key={`${j},${i}`} 
                image={image} 
                number={number}/>
            );
        }
    }
    return(
        <div 
            onMouseMove={e => movePiece(e)} 
            onMouseDown={e => grabPiece(e)}
            onMouseUp={e => dropPiece(e)}
            id="chessboard">
            {board}
        </div>
    );
}