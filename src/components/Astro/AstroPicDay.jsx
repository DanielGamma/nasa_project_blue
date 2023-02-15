
export default function AstroPicDay ({astro}){
    console.log(astro)
 
  return(<>
    <div className=" bg-background-purple flex flex-col items-center gap-2 py-6">
        <h1 className="text-white font-black my-2">{astro.title}({astro.date})</h1>
        <div className="w-1/2 mx-auto flex flex-col gap-4">
            <img src={astro.url}alt="" />
            <p className="text-white ">{astro.explanation}</p>
        </div>   
    </div>        
  </>)  
}