import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
      </><Row xs={1} md={3} className="g-4">
              {Array.from({ length: 1 }).map((_, idx) => (
                  <><><Col>
                      <Card>
                          <Card.Img variant="top" src="https://th.bing.com/th/id/R.11c3a289cb8454e73d3dc9d54bd8b6eb?rik=GT7vxLxRhMBrcw&riu=http%3a%2f%2fs4consultores.cl%2fpublic_html%2fs4consultores.cl%2fwp-content%2fuploads%2f2015%2f06%2fLogo-ciisa.jpg&ehk=tFLBVkdsmEt2mLSsm1F2bccZi8hWR%2bHBRMenvMHmSF0%3d&risl=&pid=ImgRaw&r=0" />
                          <Card.Body>
                              <Card.Title>Technician in Analysis and Systems (Studying)</Card.Title>
                              <Card.Text>
                                  I've seen many topics: Basic Java, Advanced Java, HTML,CSS,JS (Front-end) and the regular subjects at Institutions. I started studying in 2022.
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
                      <Col>
                          <Card>
                              <Card.Img variant="top" src="images/titulo2.png" />
                              <Card.Body>
                                  <Card.Title>Technician in Foreign Trade</Card.Title>
                                  <Card.Text>
                                      I polished my Portuguese and English in terms of technic knowledge, I learned Excel and bussiness treatments in documents, personal relationships and at work environments.  2018-2020
                                  </Card.Text>
                              </Card.Body>
                          </Card>
                      </Col>
                      <Col>
                          <Card>
                              <Card.Img variant="top" src="images/titulo4.png" />
                              <Card.Body>
                                  <Card.Title>Degree in English/Spanish Literature and linguistics </Card.Title>
                                  <Card.Text>
                                      I learned Literature and Lingusitics but in English. All the classes, test ,books, etc. were in english which helped me improve my English faster than usual. 2010-2015
                                  </Card.Text>
                              </Card.Body>
                          </Card>
                      </Col>
                  </><Col>
                          <Card>
                              <Card.Img variant="top" src="images/titulo6.png" />
                              <Card.Body>
                                  <Card.Title>English/Spanish Translation</Card.Title>
                                  <Card.Text>
                                      I learned the structure of English in written texts in order to translate it into Spanish correctly. This improved my English and way of thinking. 2010-2013
                                  </Card.Text>
                              </Card.Body>
                          </Card>
                      </Col>
                  </>

              ))}
          </Row></>
  );
}

export default Certifications;