import React from "react";
import "./GameTile.css";

const GameTile = props => (
    <img onClick={() => props.clickCount(props.id)} className="jsClickTrack img-thumbnail shadow my-3" alt={props.name} src={props.image} />
);
export default GameTile;