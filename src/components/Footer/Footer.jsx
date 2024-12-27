import { Container, Row, Col } from "react-bootstrap";
function Footer() {

    let date = new Date();
    let year = date.getFullYear();
    return (
          <Container fluid className="footer">
            <Row>
              <Col md="4" className="footer-copywright">
                <span> Projet App 3 - Equipe NOVA</span>
              </Col>
              <Col md="4" className="footer-copywright">
                <span>Copyright © {year}</span>
              </Col>
            </Row>
          </Container>
    )
}

export default Footer
