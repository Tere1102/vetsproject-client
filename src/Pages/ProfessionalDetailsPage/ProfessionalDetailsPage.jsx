import { useParams } from 'react-router-dom'
import professionalServices from '../../services/professional.services'
import { useState, useEffect } from "react"
import ProfessionalCardDetails from '../../components/ProfessionalCardDetails/ProfessionalCardDetails'
import { Col, Row, Container } from "react-bootstrap"
import ClinicMap from '../../components/ClinicMap/ClinicMap'
import './ProfessionalDetailsPage.css'

const ProfessionalDetails = () => {

    const [professional, setProfessional] = useState([])

    useEffect(() => loadProfesional(), [])

    const { professionalId } = useParams()

    const loadProfesional = () => {
        professionalServices
            .getProfessional(professionalId)
            .then(({ data }) => setProfessional(data))
            .catch(err => console.log(err))
    }


    return (
        <div className='ProfessionalDetailsPage'>
            <Row>
                <Col md='12'>
                    <ProfessionalCardDetails {...professional} />
                </Col>
            </Row>
            <div className='mapDetails'>  {professional.location && <ClinicMap coordinates={professional.location.coordinates} />}</div>
        </div>

    )
}
export default ProfessionalDetails