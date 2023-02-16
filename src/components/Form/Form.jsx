import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Form() {

    function createApiObjet(event) {
        return JSON.stringify({
            name:event.target.elements[0].value,
            id:event.target.elements[1].value,
            recclass:event.target.elements[2].value,
            mass:event.target.elements[3].value,
            year:event.target.elements[4].value,
            reclat:event.target.elements[5].value,
            reclong:event.target.elements[6].value

        })

    }
    const submitForm = (event) => {
        event.preventDefault();
        if (id) {

            fetch(`https://nasa-api-us5g.onrender.com/api/landings/edit/${id}`,{
                method: 'PUT',
                body: createApiObjet(event),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response));

        }else {

            fetch("https://nasa-api-us5g.onrender.com/api/landings/create", {
                method: 'POST',
                body: createApiObjet(),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response));
        }
    }

    const [asteroid, setAsteroid] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetch(`https://nasa-api-us5g.onrender.com/api/landings/id/${id}`)
                .then(res => res.json())
                .then(res => setAsteroid(res.landings[0]))
        } else {
            setAsteroid(null);
        }

    }, [id, asteroid])


    return (
        <div className="bg-background-purple w-full pb-4 ">
            <form className="flex flex-col justify-center  items-center pt-8 gap-2" onSubmit={submitForm}>
                <label className="text-slate-300" htmlFor="name">Name:</label>
                <input className="rounded-full border border-fuchsia-700 bg-background-purple" type="text" id="name" required placeholder={asteroid ? asteroid.name : ""} />
                <label className="text-slate-300" htmlFor="id">Id:</label>
                <input className="rounded-full border border-fuchsia-700 bg-background-purple" type="text" id="id" required placeholder={asteroid ? asteroid.id : ""} />
                <label className="text-slate-300" htmlFor="class">Class:</label>
                <input className="rounded-full border border-fuchsia-700 bg-background-purple" type="text" id="class" required placeholder={asteroid ? asteroid.recclass : ""} />
                <label className="text-slate-300" htmlFor="mass">Mass:</label>
                <input className="rounded-full border border-fuchsia-700 bg-background-purple" type="text" id="mass" required placeholder={asteroid ? asteroid.mass : ""} />
                <label className="text-slate-300" htmlFor="date">Date:</label>
                <input className="rounded-full border border-fuchsia-700 bg-background-purple  w-[179px]" type="date" id="date" required placeholder={asteroid ? asteroid.year : ""} />
                <label className="text-slate-300" htmlFor="latitud">Latitud:</label>
                <input className="rounded-full border border-fuchsia-700 bg-background-purple" type="text" id="latitud" required placeholder={asteroid ? asteroid.reclat : ""} />
                <label className="text-slate-300" htmlFor="longitud">Longitud:</label>
                <input className="rounded-full border border-fuchsia-700 bg-background-purple" type="text" id="longitud" required placeholder={asteroid ? asteroid.reclong : ""} />
                <input type="submit" className="text-slate-300 text-xs border rounded-full border-fuchsia-700 p-2 font-light w-20" ></input>
            </form>
        </div>

    )
}

