export default function Form() {
    return (
        <div className="bg-indigo-700">
            <form className="flex flex-col justify-center  items-center pt-8">
                <label className="text-white" htmlFor="name">Name:</label>
                <input className="rounded-full border-2 border-fuchsia-500" type="text" id="name" />
                <label className="text-white" htmlFor="id">Id:</label>
                <input className="rounded-full border-2 border-fuchsia-500" type="text" id="id" />
                <label className="text-white" htmlFor="class">Class:</label>
                <input className="rounded-full border-2 border-fuchsia-500" type="text" id="class" />
                <label className="text-white" htmlFor="mass">Mass:</label>
                <input className="rounded-full border-2 border-fuchsia-500" type="text" id="mass" />
                <label className="text-white" htmlFor="latitud">Latitud:</label>
                <input className="rounded-full border-2 border-fuchsia-500" type="text" id="latitud" />
                <label className="text-white" htmlFor="longitud">Longitud:</label>
                <input className="rounded-full border-2 border-fuchsia-500" type="text" id="longitud" />
                <button type="submit"></button>
            </form>
        </div>

    )
}

