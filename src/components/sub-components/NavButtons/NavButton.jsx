import "./navButton.css"
export default function NavButton() {
    return (
    <nav>
        <div className="navButton">
            <div className="nav-linea"></div>
                <div className="nav-link">Home</div>
            <div className="nav-linea"></div>
        </div>
        <div className="navButton">
            <div className="nav-linea"></div>
                <div className="nav-link">Map</div>
            <div className="nav-linea"></div>
        </div>
        <div className="navButton">
            <div className="nav-linea"></div>
                <div className="nav-link">Landings</div>
            <div className="nav-linea"></div>
        </div>
        <div className="navButton">
            <div className="nav-linea"></div>
                <div className="nav-link">Favourites</div>
            <div className="nav-linea"></div>
        </div>
    </nav>    
    )
}