import { Link } from "react-router-dom";
export default function NavButton() {
    return (
    <nav className="flex justify-between gap-x-5 pr-4">
        <div className="m-2 flex flex-col justify-between items-center h-8 w-16 group" >
            <div className="w-0 h-1 bg-white transition-all duration-500 group-hover:w-[100px]"></div>
                <Link to="/" className="text-xl text-white">Home</Link>
            <div className="w-0 h-1 bg-white transition-all duration-500 group-hover:w-[100px]"></div>
        </div>
        <div className="m-2 flex flex-col justify-between items-center h-8 w-16 group">
            <div className="w-0 h-1 bg-white transition-all duration-500 group-hover:w-[100px]"></div>
                <Link to="landings" className="text-xl text-white">Map</Link>
            <div className="w-0 h-1 bg-white transition-all duration-500 group-hover:w-[100px]"></div>
        </div>
        <div className="m-2 flex flex-col justify-between items-center h-8 w-16 group">
            <div className="w-0 h-1 bg-white transition-all duration-500 group-hover:w-[100px]"></div>
                <Link to="landings/list" className="text-xl text-white">Landings</Link>
            <div className="w-0 h-1 bg-white transition-all duration-500 group-hover:w-[100px]"></div>
        </div>
        <div className="m-2 flex flex-col justify-between items-center h-8 w-16 group">
            <div className="w-0 h-1 bg-white transition-all duration-500 group-hover:w-[100px]"></div>
                <Link to="favourites" className="text-xl text-white">Favourites</Link>
            <div className="w-0 h-1 bg-white transition-all duration-500 group-hover:w-[100px]"></div>
        </div>
    </nav>    
    )
}