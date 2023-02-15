import Logo from "../sub-components/Logo/Logo";
import NavLink from "../sub-components/NavLink/NavLink";
export default function Header (){
    return(
        <header className=" w-full flex justify-between items-center px-7 bg-[#2A1C3D]">
            <Logo/>
            <nav className="flex justify-between gap-x-5 pr-4">
                <NavLink path={"/"} texto={"Home"} />
                <NavLink path={"/landings"} texto={"Map"} />
                <NavLink path={"/landings/list"} texto={"Landing"} />
                <NavLink path={"/favourites"} texto={"Favourites"} />
                <NavLink path={"/landings/create"} texto={"Create"} />
            </nav>
        </header>
    )
}