// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// const user = localStorage.getItem("isAuthenticated");
// const admin = (
//   <>
//     <br />
//     <Navbar bg="primary" variant="dark">
//       <Container>
//         <Navbar.Brand href="/menu">Bank Admin Portal</Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link href="/menu">Home</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>

//     <br />
//   </>
// );
// const nonadmin = (
//   <>
//     <br />
//     <Navbar bg="primary" variant="dark">
//       <Container>
//         <Navbar.Brand href="/">Bank Admin Portal</Navbar.Brand>
//         <Nav className="me-auto"></Nav>
//       </Container>
//     </Navbar>

//     <br />
//   </>
// );
// function ColorSchemesExample() {
//   return user == true ? admin : nonadmin;
// }

// export default ColorSchemesExample;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function ColorSchemesExample() {
  return (
    <>
      <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/menu">Bank Admin Portal</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/menu">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;
