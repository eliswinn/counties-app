import React from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

const Countries = () =>{
    const [countries, setContries] = React.useState([])
    const { country } = useParams()

    React.useEffect(() => {
        fetch(`https://restcountries.com/v3.1/region/${country}`)
            .then(res => res.json())
            .then(res => setContries(res))
            .catch(err => console.error(err))
    }, [country])


    return (
        <div className="flex flex-wrap justify-center px-6 py-4">
            {countries.map(country => (
                <Card 
                    name={country.name.common}
                    flags={country.flags.svg}
                    capital={country.capital}
                    area={country.area}
                    borders={country.borders}
                    population={country.population}
                    maps={country.maps.common}
                />
            ))}
        </div>
    )
}

export default Countries;