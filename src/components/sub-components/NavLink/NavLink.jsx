import { Link } from "react-router-dom";
export default function NavLink({path,texto}) {
    return (
        <div className="m-2 flex flex-col justify-between items-center h-8 w-16 group" >
            <div className="w-0 h-1 bg-white transition-all duration-500 group-hover:w-[100px]"></div>
                <Link to={path} className="text-xl text-white">{texto}</Link>
            <div className="w-0 h-1 bg-white transition-all duration-500 group-hover:w-[100px]"></div>
        </div>
    )
}