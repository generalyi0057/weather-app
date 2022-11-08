import WeatherCard from "./WeatherCard";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const WeatherBoard = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Weather API</Navbar.Brand>
            {/*<Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>*/}
          </Container>
        </Navbar>
        <WeatherCard />
      </>
  );
};

export default WeatherBoard;
