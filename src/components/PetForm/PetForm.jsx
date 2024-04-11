import { Button, Form, Col, Row } from "react-bootstrap"
import '../../components/PetForm/PetForm.css'
import { useContext, useState } from "react"
import { useNavigate, Link } from 'react-router-dom'
import uploadServices from "../../services/upload.services"
import PetServices from "../../services/pet.services"
import { AuthContext } from "../../context/auth.context"


const PetForm = () => {

    const { user } = useContext(AuthContext)

    const [petData, setPetData] = useState({
        name: "",
        chipOwner: "",
        type: "",
        weight: "",
        breed: "",
        birth: "",
        sex: "",
        chipNumber: "",
        image: "",
        owner: user._id
    })


    const navigate = useNavigate()
    const [loadingImage, setLoadingImage] = useState(false)

    const handleFormSubmit = (event) => {
        event.preventDefault()

        PetServices
            .saveNewPet(petData)
            .then(() => navigate('/'))
            .catch(err => console.log(err))

    }

    const handleInputChange = (event) => {
        const { value, name } = event.target
        setPetData({ ...petData, [name]: value })

    }

    const handleFileUpload = e => {
        setLoadingImage(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setPetData({ ...petData, image: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }


    return (

        <div className="FormBack">
            <Form onSubmit={handleFormSubmit} className="PetForm">

                <h1 className="h1Petform">Registra tu <span className="h1Petform1">mascota:</span></h1>

                <Form.Group className="mb-3 m-t3" controlId="image">
                    <Form.Label className="PetFormLabel">Imagen (URL)</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={handleFileUpload}
                        className="PetFormInput"
                    />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} variant="dark" className="mb-3" controlId="formGridPetName">
                        <Form.Label className="PetFormLabel">Nombre:</Form.Label>
                        <Form.Control
                            className="PetFormInput"
                            type="text"
                            placeholder="Nombre de tu mascota"
                            onChange={handleInputChange}
                            value={petData.name}
                            name={"name"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} variant="dark" className="mb-3" controlId="formGridPetOwner">
                        <Form.Label className="PetFormLabel">Nombre propietari@:</Form.Label>
                        <Form.Control
                            className="PetFormInput"
                            type="text"
                            placeholder="Titutar de la mascota"
                            onChange={handleInputChange}
                            value={petData.chipOwner}
                            name={"chipOwner"}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} variant="dark" controlId="formGridStateAnimals">
                        <Form.Label className="PetFormLabel">Tipo de mascota:</Form.Label>
                        <Form.Select
                            className="PetFormInput"
                            type="text"
                            placeholder="Tipo de mascota"
                            onChange={handleInputChange}
                            value={petData.type}
                            name={"type"}
                        >
                            <option>Seleccionar</option>
                            <option>Perro</option>
                            <option>Gato</option>
                            <option>Conejo</option>
                            <option>Pájaro</option>
                            <option>Reptil</option>
                            <option>Hurón</option>
                            <option>Otros</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridWeight">
                        <Form.Label className="PetFormLabel">Peso en Kg:</Form.Label>
                        <Form.Control
                            className="PetFormInput"
                            type="number"
                            placeholder="Peso de la mascota"
                            onChange={handleInputChange}
                            value={petData.weight}
                            name={"weight"}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} variant="dark" controlId="formGridStatebreed ">
                        <Form.Label className="PetFormLabel">Raza:</Form.Label>
                        <Form.Control
                            className="PetFormInput"
                            type="text"
                            placeholder="Raza de la mascota"
                            onChange={handleInputChange}
                            value={petData.breed}
                            name={"breed"}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridBirth">
                        <Form.Label className="PetFormLabel">Fecha de nacimiento:</Form.Label>
                        <Form.Control
                            className="PetFormInput"
                            type="date"
                            placeholder="Fecha de nacimiento"
                            onChange={handleInputChange}
                            value={petData.birth}
                            name={"birth"}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} variant="dark" controlId="formGridStatePetSex">
                        <Form.Label className="PetFormLabel">Sexo:</Form.Label>
                        <Form.Select
                            className="PetFormInput"
                            type="text"
                            placeholder="Sexo de la mascota"
                            onChange={handleInputChange}
                            value={petData.sex}
                            name={"sex"}
                        >
                            <option>Seleccionar</option>
                            <option>Macho</option>
                            <option>Hembra</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridChip">
                        <Form.Label className="PetFormLabel">Número de Chip:</Form.Label>
                        <Form.Control
                            className="PetFormInput"
                            type="number"
                            placeholder="Número de chip"
                            onChange={handleInputChange}
                            value={petData.chipNumber}
                            name={"chipNumber"}
                        />
                    </Form.Group>
                </Row>


                <Link disabled={loadingImage} className="PetFormButton" type="submit" >
                    {loadingImage ? 'Cargando imagen...' : 'Dar de alta'}
                </Link>
            </Form>
        </div>
    )
}

export default PetForm








