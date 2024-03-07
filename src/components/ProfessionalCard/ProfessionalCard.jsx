import { Button, Card } from 'react-bootstrap'

const ProfessionalCard = ({

    firstName,
    lastName,
    membershipNumber,
    phone,
    email,
    password,
    schedule,
    emergencies,
    rate,
    reviews,
    name,
    street,
    zipCode,
    city,
    country,
    longitude,
    latitude

}) => {


    return (

        <Card style={{ width: '18rem' }}>

            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>

                <Card.Title>
                    <h1>{firstName}</h1>
                    <br />
                    <h2>{lastName}</h2>
                </Card.Title>

                <Card.Text>
                    <>
                        <strong>Especialidad:</strong> {schedule}
                        <br />
                        <strong>Emergencias?:</strong> {emergencies ? "Yes" : "No"}
                        <br />
                        <strong>Clinica:</strong> {name}
                        <br />
                        <strong>Donde encontrarme:</strong>
                        {street}
                        {zipCode}
                        {city}
                        {country}
                        <br />
                        <strong>Contacto:</strong>
                        {phone}
                        <br />
                        {email}
                        <br />

                        <strong>Valoración:</strong>{rate}
                        <br />
                        <strong>Comentarios:</strong>{reviews}
                    </>
                </Card.Text>

                <Button variant="primary"><strong> Consulta</strong> </Button>
            </Card.Body>
        </Card>

    )
}

export default ProfessionalCard