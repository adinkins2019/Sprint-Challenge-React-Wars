import React from 'react'

export default function PersonInfo(props){
    return (
        <div>
        <h2>Name: {props.name}</h2>
        <h2>Birth Year: {props.birthYear}</h2>
        <h2>height: {props.height}</h2>
        <h2>mass: {props.mass}</h2>
        <h2>birthYear: {props.birth_year}</h2>
        <h2>Eye Color: {props.eye_color}</h2>
        <h2>Gender: {props.gender}</h2>
        <h2>Hair Color: {props.hair_color}</h2>
        <h2>Web Address: {props.url}</h2>
        <h2>homeworld:  {props.homeworld}</h2>
        <p>Species: {props.species} </p>
        <p>Starships: {props.starships}</p>
        <p>Vehicles: {props.vehicles}</p>
        <p>Films: {props.films}</p>
        </div>
    )
}