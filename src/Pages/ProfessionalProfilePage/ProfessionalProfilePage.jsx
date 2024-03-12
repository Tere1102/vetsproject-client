import { useState, useEffect, useContext } from "react"
import ProfessionalCard from "../../components/ProfessionalCard/ProfessionalCard"
import professionalServices from "../../services/professional.services"
import RequestList from './../../components/RequestsList/RequestsList'
import { AuthContext } from "../../context/auth.context"
import requestServices from "../../services/request.services"

const ProfessionalProfilePage = () => {

    const [professional, setProfesional] = useState([])
    const [requests, setRequests] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        loadRequests()
        loadProfessional()
    }, [])

    const loadProfessional = () => {
        professionalServices
            .getProfessional(user._id)
            .then(({ data }) => setProfesional(data))
            .catch(err => console.log(err))
    }

    const loadRequests = () => {
        requestServices
            .getAllProfessionalRequests(user._id)
            .then(({ data }) => setRequests(data))
            .catch(err => console.log(err))

    }

    return (
        <div className="ProfessionalProfilePage">
            <div className="Section">
                <h1 className="profileTitle">Datos de tu perfil:</h1>
                <ProfessionalCard {...professional} />
            </div>
            <div>
                <RequestList requests={requests} />
            </div>
        </div>

    )
}

export default ProfessionalProfilePage