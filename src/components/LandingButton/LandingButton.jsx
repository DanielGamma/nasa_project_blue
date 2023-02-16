import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { asteroidContext } from '../../App'



const LandingButton = ({ isDeleteBtn, url, fromDetail, asteroid }) => {

    const {setAsteroids} = useContext(asteroidContext)
    
    const navigate = useNavigate()

    const handleClick = () => {


        fetch(`https://nasa-api-us5g.onrender.com/api/landings/delete/${asteroid.id}`, {

            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(asteroid)

        }).then(res => res.json())
        .then(res => {
            
            setAsteroids(prev => {
                const holdPrev = [...prev]
                
                return holdPrev.filter(asteroid => asteroid.id !== res.landing.id)
            })
            navigate('/landings/list')
        } )
        
    }

    return (<>
        {
            !isDeleteBtn
                ? <i onClick={() => navigate(url)} className={`fa-solid fa-pen-to-square text-green-700 cursor-pointer ${fromDetail ? 'text-4xl' : ''} hover:scale-110 transition-transform duration-300`}></i>
                : <i onClick={handleClick} className={`fa-solid fa-trash-can text-red-600 cursor-pointer ${fromDetail ? 'text-4xl' : ''} hover:scale-110 transition-transform duration-300`}></i>

        }
    </>)
}

export default LandingButton