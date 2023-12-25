import { UserKey, createUser, resetUser } from "../../redux/states/user"
import { PrivateRoutes, PublicRoutes, Roles } from "../../models"
import { clearLocalStore } from "../../utilities"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
// import { getMorty } from "../../services"
import { useEffect } from "react"
import { Card, Form, Button, Container } from "react-bootstrap"
import { useState } from "react"
import { useReduceLogin } from "../../stores"

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [logged, setLogged] = useState(false)

  const { loginChange } = useReduceLogin()

  useEffect(() => {
    clearLocalStore(UserKey)
    dispatch(resetUser())
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
  }, [])

  const getLogin = async () => {
    try {
      // const result = await getMorty()

      // este seria el proceso normal, pero para el test cargamos los datos a mano
      // dispatch(createUser(result))
      dispatch(createUser({ ...result, rol: Roles.USER }))
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true })
      setLogged(!logged)
      loginChange(logged)
    } catch (error) {
      console.log('Error en getLogin (creacteUser): ', error)
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh', width: '100vw' }}>
      <Card border="dark" bg="light" text="dark" style={{ width: '20rem' }}>
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Card.Title>Ingrese sus credenciales</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We&lsquo;ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Container className="d-grid gap-2">
              <Button variant="success" type="button" onClick={getLogin}>
                ingresar
              </Button>
              <Button variant="danger" type="cancel" onClick={() => navigate(`${PublicRoutes.LANDING}`, { replace: true })}>
                Cancelar
              </Button>
            </Container>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login