import React from "react";

const Card =(props) => {
    return(
        <div className="my-5 mx-5 text-sm w-[25rem] bg-slate-200 rounded-[10px] border-2 border-slate-500p-3 px-3">
            <img src={props.flags} alt="picture" className="w-50 rounded-[10px] pb-5 py-2"/> 
            <div className="py-1">страна: {props.name}</div>
            <div className="py-1">площадь: {props.area}</div>
            <div className="py-1">границы: {props.borders}</div>
            <div className="py-1">столица: {props.capital}</div>
            <div className="">население: {props.population}</div>
            <a>{props.maps}</a>
        </div>
    )
}

export default Card;