import Logo from "../sub-components/Logo/Logo";
import NavButton from "../sub-components/NavButtons/NavButton";
export default function Header (){
    return(
        <header className=" w-full flex justify-between items-center px-7 bg-[#2A1C3D]">
            <Logo/>
            <NavButton/>
        </header>
    )
}