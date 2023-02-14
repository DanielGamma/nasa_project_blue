import Logo from "../sub-components/Logo/Logo";
import NavLink from "../sub-components/NavLink/NavLink";

export default function Header (){
    return(
        <header className=" w-full box-border flex justify-between items-center px-7 bg-[#2A1C3D]">
            <Logo/>
            <ul className="flex justify-between gap-x-5 pr-4">
                <li><NavLink texto={"Home"} path={"/"}/></li>       
                <li><NavLink texto={"Map"} path={"landings"}/></li>       
                <li><NavLink texto={"Landings"} path={"landings/list"}/> </li>      
                <li><NavLink texto={"Favourites"} path={"favourites"}/> </li>      
            </ul>
        </header>
    )
}