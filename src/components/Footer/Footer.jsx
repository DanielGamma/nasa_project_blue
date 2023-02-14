export default function Footer() {
    return (
        <>
            <div className="flex gap-14 justify-center items-center p-8">
                <div>
                    <p className="text-fuchsia-500 text-2xl p-4 mt-1.5 font-semibold">Contact</p>
                    <p className="font-medium">nasa.api@nasa-api.com</p>
                    <p className="font-medium">Work whith us.</p>
                </div>

                <div className="text-fuchsia-500 h-8 w-1" ></div>

                <div>
                    <p className="text-fuchsia-500 text-2xl p-4 mt-1.5 font-semibold">About</p>
                    <p className="font-medium">Lorem ipsum dolor sit amet.</p>
                    <p className="font-medium">Lorem ipsum dolor sit.</p>
                    <p className="font-medium">Lorem ipsum dolor.</p>

                </div>

                <div className="text-fuchsia-500 h-8 w-1" ></div>

                <div>
                    <p className="text-fuchsia-500 text-2xl p-4 mt-1.5 font-semibold">Documentation</p>
                    <p className="font-medium">API documentation.</p>

                </div>
            </div>
        </>
    )
}