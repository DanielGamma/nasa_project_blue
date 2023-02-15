export default function Form() {
    return (
        <>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="id">Id</label>
            <input type="text" id="id" />
            <label htmlFor="class">Class</label>
            <input type="text" id="class" />
            <label htmlFor="mass">Mass</label>
            <input type="text" id="mass" />
            <label htmlFor="latitud">Latitud</label>
            <input type="text" id="latitud" />
            <label htmlFor="longitud">Longitud</label>
            <input type="text" id="longitud" />
            <button type="submit"></button>
        </>
    )
}