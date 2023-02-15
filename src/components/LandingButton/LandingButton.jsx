import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const LandingButton = ({isDeleteBtn, url}) => {


    const navigate = useNavigate()
    return(<>
        {
            !isDeleteBtn 
            ? <i onClick={() => navigate(url)} className="fa-solid fa-pen-to-square text-green-700 cursor-pointer active:scale-90"></i>
            : <i className="fa-solid fa-trash-can text-red-600 cursor-pointer active:scale-90"></i>
            
        }
    </>)
}

export default LandingButton