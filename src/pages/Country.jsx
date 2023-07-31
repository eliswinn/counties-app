import React from "react";
import { useParams } from "react-router-dom";

const Country = () => {
    const [countries, setCountries] = React.useState([])
    const { country } = useParams()

    React.useEffect(() => {
            fetch(`https://restcountries.com/v3.1/name/${country}`)
            .then(res => res.json())
            .then(res => setCountries(res[0]))
            .catch(err => console.error(err))
    }, [country])

    if (!countries.flags) return <h1>Loading</h1>
    return(
        <div className="my-5 mx-5 text-sm w-[25rem] bg-slate-200 rounded-[10px] border-2 border-slate-500p-3 px-3 ">
            <img className="w-50 rounded-[10px] pb-5 p-5" src={countries.flags.svg}/>
            <div className="px-6">{countries.name.common}</div>
            <div className="px-6 py-3">Capital: {countries.capital.map(item => <span key={item}>(item)</span>)}</div>
        </div>
    )
}

export default Country;