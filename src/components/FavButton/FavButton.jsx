export default function FavButton({fromDetail,asteroid,setFavAstro}){
    const fav = () => {
        
        setFavAstro(prev => {
            console.log(prev)
            if(prev === false){
                return [asteroid.id]
            }else{
                return [...prev,asteroid.id]
            }
        })
    }
    return(
        <i onClick={fav} className={`fa-regular fa-heart cursor-pointer ${fromDetail ? 'text-4xl' : ''} hover:scale-110 transition-transform duration-300`}></i>
    )
} 