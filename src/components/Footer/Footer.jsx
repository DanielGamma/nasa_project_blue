export default function Footer() {
    return (
        <>
            <div className="flex gap-14 justify-center items-start p-8 w-full bg-[#2A1C3D]">
                <div className="">
                    <p className="text-fuchsia-500 text-2xl p-4 mt-1.5 font-semibold">Contact</p>
                    <p className="font-medium text-white">nasa.api@nasa-api.com</p>
                    <p className="font-medium text-white">Work whith us.</p>
                </div>

                
                <div className=" bg-fuchsia-500 h-[150px] w-0.5" ><p></p></div>
                <div className="">
                    <p className="text-fuchsia-500 text-2xl p-4 mt-1.5 font-semibold">About</p>
                    <p className="font-medium text-white">Lorem ipsum dolor sit amet.</p>
                    <p className="font-medium text-white">Lorem ipsum dolor sit.</p>
                    <p className="font-medium text-white">Lorem ipsum dolor.</p>

                </div>

                <div className=" bg-fuchsia-500 h-[150px] w-0.5" ><p></p></div>

                <div className="">
                    <p className="text-fuchsia-500 text-2xl p-4 mt-1.5 font-semibold">Documentation</p>
                    <p className="font-medium text-white">API documentation.</p>

                </div>
            </div>
        </>
    )
}