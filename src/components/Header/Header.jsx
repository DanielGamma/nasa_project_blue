import Logo from "../sub-components/Logo/Logo";
import NavLink from "../sub-components/NavLink/NavLink";

export default function Header (){
    return(
        <header className=" w-full box-border flex justify-between items-center px-7 bg-[#2A1C3D]">
            <Logo/>
            <nav className="flex justify-between gap-x-5 pr-4">
                <NavLink texto={"Home"} path={"/"}/>       
                <NavLink texto={"Map"} path={"landings"}/>       
                <NavLink texto={"Landings"} path={"landings/list"}/>       
                <NavLink texto={"Favourites"} path={"favourites"}/>       
            </nav>
        </header>
    )
}