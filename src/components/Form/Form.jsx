export default function Form() {
    const submitForm = (event) => {
        event.preventDefault();
        fetch("https://nasa-api-us5g.onrender.com/api/landings/create", {
            method: 'POST',
            body: JSON.stringify({
                name: event.target.elements[0].value,
                id: event.target.elements[1].value,
                recclass: event.target.elements[2].value,
                mass: event.target.elements[3].value,
                year: event.target.elements[4].value,
                reclat: event.target.elements[5].value,
                reclong: event.target.elements[6].value
            }),

            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));

    }
    return (
        <div className="bg-background-purple w-full pb-4 ">
            <form className="flex flex-col justify-center  items-center pt-8 gap-2" onSubmit={submitForm}>
                <label className="text-slate-300" htmlFor="name">Name:</label>
                <input className="rounded-full border border-fuchsia-700 bg-background-purple" type="text" id="name" required />
                <label className="text-slate-300" htmlFor="id">Id:</label>
                <input className="rounded-full border border-fuchsia-700 bg-background-purple" type="text" id="id" required />
                <label className="text-slate-300" htmlFor="class">Class:</label>
                <input className="rounded-full border border-fuchsia-700 bg-background-purple" type="text" id="class" required />
                <label className="text-slate-300" htmlFor="mass">Mass:</label>
                <input className="rounded-full border border-fuchsia-700 bg-background-purple" type="text" id="mass" required />
                <label className="text-slate-300" htmlFor="date">Date:</label>
                <input className="rounded-full border border-fuchsia-700 bg-background-purple  w-[179px]" type="date" id="date" required />
                <label className="text-slate-300" htmlFor="latitud">Latitud:</label>
                <input className="rounded-full border border-fuchsia-700 bg-background-purple" type="text" id="latitud" required />
                <label className="text-slate-300" htmlFor="longitud">Longitud:</label>
                <input className="rounded-full border border-fuchsia-700 bg-background-purple" type="text" id="longitud" required />
                <input  type="submit"className="text-slate-300 text-xs border rounded-full border-fuchsia-700 p-2 font-light w-20"></input>
            </form>
        </div>

    )
}

