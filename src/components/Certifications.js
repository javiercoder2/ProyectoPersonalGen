import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function Certifications() {
  return (
    <><>

          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="dark" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="dark" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="dark" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="dark" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="dark" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="dark" />
      </><Row xs={1} md={3} className="g-4">
              {Array.from({ length: 1 }).map((_, idx) => (
                  <><>
                  <Col>
                      <Card>
                          <Card.Img variant="top" src="images/certificadopython.png" />
                          <Card.Body>
                              <Card.Title>Conviertete en especialista en desarrollo Python</Card.Title>
                              <Card.Text>
                                  Course related to python, its versions, modules, packages, iteration, dictionaries among other perspectives. Everything we could do, practise and develop with this technology. Close to 25 hours. Enero 2023
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col>
                      <Card>
                          <Card.Img variant="top" src="images/Certificado1.png" />
                          <Card.Body>
                              <Card.Title>Generation Chile-Inacap</Card.Title>
                              <Card.Text>
                                  Certificate in Full Stack Developer where these technologies were learned : Java, SQL, CSS, SpringBoot,HTML, JS, Typescript, React and Node.  Three intensive months, close to 500 hours. 2022-2023
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col><Col>
                          <Card>
                              <Card.Img variant="top" src="images/certificado2.png" />
                              <Card.Body>
                                  <Card.Title>Scrum Foundation Professional Certificate (SFPC)-(English)</Card.Title>
                                  <Card.Text>
                                      Certificate in Scrum Master where I learned the perspectives, definitions, ways of work and how to work in a team. Over 12 hours. 2022
                                  </Card.Text>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col>
                          <Card>
                              <Card.Img variant="top" src="images/certificado4.png" />
                              <Card.Body>
                                  <Card.Title>Basic Python Course</Card.Title>
                                  <Card.Text>
                                      Certificate in learning Python and its functions as a Back-end tool. over 25 hours. 2021
                                  </Card.Text>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col>
                          <Card>
                              <Card.Img variant="top" src="images/certificado3.png" />
                              <Card.Body>
                                  <Card.Title>Spanish-Speakers Portuguese</Card.Title>
                                  <Card.Text>
                                      I was taught the basict-intermediate matters of Communication and expression. The difficulties we may have and how to board them. Over 25 hours. 2021
                                  </Card.Text>
                              </Card.Body>
                          </Card>
                      </Col>
                  </><Col>
                          <Card>
                              <Card.Img variant="top" src="images/certificado5.png" />
                              <Card.Body>
                                  <Card.Title>Leadership</Card.Title>
                                  <Card.Text>
                                      Certificate in leadership where I learned how to manage big and small groups with good communication and professionalism. Over 15 hours. 2018
                                  </Card.Text>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col>
                          <Card>
                              <Card.Img variant="top" src="images/certificado6.png" />
                              <Card.Body>
                                  <Card.Title>English Teacher Facilator</Card.Title>
                                  <Card.Text>
                                      I worked as an English teacher for Poliglota as a certified member of teaching from Education Ministery. 2019
                                  </Card.Text>
                              </Card.Body>
                          </Card>
                      </Col></>

              ))}
          </Row></>
  );
}

export default Certifications;