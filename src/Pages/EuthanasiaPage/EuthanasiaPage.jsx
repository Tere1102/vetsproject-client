import './../../Pages/EuthanasiaPage/EuthanasiaPage.css'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
//testingg
const EuthanasiaPage = () => {

    return (
        <div >

            <Row>
                <div className="imgEuthaContainer">
                    <img className="euthaImage" src='https://res.cloudinary.com/dxfey6stw/image/upload/v1712856753/izbzr7r3aacam1erisf6.png' alt="homePage pic" />
                </div>
                <div className="euthaParagraph1">
                    <p><span>Servicio <br /> Eutanasia <span className="euthaParagraphstrong"></span> </span> <span className="euthaParagraphstrong" >de</span> <br /> <span className="euthaParagraphstrong" >24 horas</span> </p>
                    <p className="euthaParagraph2">Ofrecemos un servicio compasivo y respetuoso de eutanasia.<br /> Brindándote apoyo y comprensión en este difícil momento.</p>

                </div>
            </Row>

            <div className="servText">
                <h2><span className="servicetxt1">Servicios especializados </span> <br /> <span className="servicetxt2">eutanasia compasiva</span></h2>
                <p className="servicetxt3"> <br /> Sentimos mucho que hayas tenido que llegar hasta aquí... <br />
                    En Miauyuda proporcionamos servicios de eutanasia para mascotas de todas las edades, asegurando atención médica <br /> apropiada y asequible tanto para cachorros, adultos como para mascotas mayores.</p>
            </div>


            <Row className="services">
                <Col md={4} className="services-col">
                    <Card style={{ width: '29rem' }} className="services-card">
                        <Card.Title className="servicesBody">
                            <div>
                                <img className='crossIcon' src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712916369/ellxsb9l72fhj8vb6ydz.png" alt="crossIcon" /></div>
                            <div>
                                <h2 className="servicesCategories">Eutanasia en clínica</h2>
                            </div>
                        </Card.Title>
                        <hr />
                        <Card.Body>
                            <Card.Text className="cardservicesText">
                                <ul>
                                    <li><img className="checkIcon" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Servicio de despedida en clínica</li>
                                    <li><img className="checkIcon" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Incluye sedación y anestesia </li>
                                    <li><img className="checkIcon" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Servicio incluído de incineración</li>
                                </ul>
                            </Card.Text>
                            <Link className="button-plans" to="/professionals">Leer mas</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="services-col">
                    <Card style={{ width: '29rem' }} className="services-card">
                        <Card.Title className="servicesBody" >
                            <div>
                                <img className='crossIcon' src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712916369/ellxsb9l72fhj8vb6ydz.png" alt="crossIcon" /></div>
                            <div>
                                <h2 className="servicesCategories">Eutanasia a domicilio</h2>
                            </div>
                        </Card.Title>
                        <hr />
                        <Card.Body>
                            <Card.Text className="cardservicesText">
                                <ul>
                                    <li><img className="checkIcon" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Visita a domicilio y valoración</li>
                                    <li><img className="checkIcon" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Cuidado paliativo previo a la eutanasia</li>
                                    <li><img className="checkIcon" src="https://res.cloudinary.com/dxfey6stw/image/upload/v1712597206/uk1tyxumki37qjjzqged.png" alt="check-image" />  Despedida personalizada en el hogar</li>
                                </ul>
                            </Card.Text>
                            <Link className="button-services" to="/professionals">Leer mas</Link>
                        </Card.Body>

                    </Card>
                </Col>

            </Row>




            <Row className="psico-row">

                <Col md={2} className='containerPsico'>
                    <img className="psico-icon" src='https://res.cloudinary.com/dxfey6stw/image/upload/v1712846539/flb5lblyowirukkpkn13.png' alt="psico-icon" />
                </Col>
                <Col md={9}>
                    <div>
                        <br />
                        <p>
                            <span className="rowTextPsico">Nunca estás solo en tu camino hacia la </span> <span className="rowTextPsico2">sanación emocional✨</span>
                        </p>

                        <p className='textMentalia'>En momentos difíciles de despedida, contar con un espacio de apoyo puede ser fundamental. Mentalia, fundada por <span className="mentaliaStrong" >Lara Aguerre y Fran Pazos</span>, ofrece recursos y herramientas para ayudarte en tu proceso emocional.
                            Explora artículos, terapia en línea y grupos de apoyo. Únete a nuestra comunidad en línea y encuentra la luz en la oscuridad.
                            Visita Mentalia y da el primer paso hacia la sanación emocional.
                        </p>
                        <div>
                            <Link className='mentalia-button' to="https://mentalia.netlify.app">Entra en Mentalia</Link>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    )
}

export default EuthanasiaPage