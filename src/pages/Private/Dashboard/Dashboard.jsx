import { NavbarBrand } from "../../../components"
import { Table } from 'react-bootstrap'

const Dashboard = () => {

  return (
    <>
      <NavbarBrand />
      <h1>Dashboard</h1>
      <div className="m-3">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Acctions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>✏ 🗑 👁‍🗨</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>✏ 🗑 👁‍🗨</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
              <td>✏ 🗑 👁‍🗨</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Dashboard