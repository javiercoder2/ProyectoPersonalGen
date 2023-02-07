import Card from 'react-bootstrap/Card';
import './Cards.css';
import ProgressBar from 'react-bootstrap/ProgressBar';


function Polyglot() {
  return (
    <div className='view'>
    <><><Card className="bg-dark text-white">
      <Card.Img className="flags" src="https://static.vecteezy.com/system/resources/previews/012/056/805/original/chile-flag-with-grunge-texture-png.png" alt="Card image" />
      <Card.ImgOverlay >
        <Card.Title className='cardtitle'>Spanish</Card.Title>
        <Card.Text>
My mother Language which is in a Native/Advanced language
        </Card.Text>
        <Card.Text>Life Experience and years of communication</Card.Text>
        <div>
      Spoken
      <ProgressBar className="progress"striped variant="success" animated now={100} />
      Written
      <ProgressBar className="progress" striped variant="info" animated now={100} />
      Translation
      <ProgressBar className="progress"striped variant="warning" animated now={100} />
      Listening
      <ProgressBar  className="progress"striped variant="danger" animated now={100} />
    </div>
      </Card.ImgOverlay>
    </Card><Card className="bg-dark text-white">
        <Card.Img className="flags" src="https://i.pinimg.com/originals/7d/e3/4d/7de34da4cf9bbf8695b427eb1e80e378.png" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className='cardtitle'>English</Card.Title>
          <Card.Text>
I studied this language for over 5 years in college. I speake it in an advanced level
          </Card.Text>
          <Card.Text>+6 years of experience in Jobs</Card.Text>
          Spoken
      <ProgressBar className="progress"striped variant="success" animated now={90} />
      Written
      <ProgressBar className="progress" striped variant="info" animated now={100} />
      Translation
      <ProgressBar className="progress"striped variant="warning" animated now={100} />
      Listening
      <ProgressBar  className="progress"striped variant="danger" animated now={90} />
        </Card.ImgOverlay>
      </Card><Card className="bg-dark text-white">
        <Card.Img className="flags" src="https://png.pngtree.com/png-vector/20220730/ourmid/pngtree-download-brazil-flag-template-style-scribble-brush-png-image_6093092.png" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className='cardtitle'>Portuguese</Card.Title>
          <Card.Text>
            I learned it at a previous job anbd i had interaction with Brazilian and portuguese people
          </Card.Text>
          <Card.Text>+3 years of experience at job environments </Card.Text>
          Spoken
      <ProgressBar className="progress"striped variant="success" animated now={80} />
      Written
      <ProgressBar className="progress" striped variant="info" animated now={50} />
      Translation
      <ProgressBar className="progress"striped variant="warning" animated now={70} />
      Listening
      <ProgressBar  className="progress"striped variant="danger" animated now={70} />
        </Card.ImgOverlay>
      </Card><Card className="bg-dark text-white">
        <Card.Img className="flags" src="https://png.pngtree.com/png-vector/20220723/ourmid/pngtree-vintage-france-flag-in-brush-stroke-free-png-png-image_6034037.png" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className='cardtitle'>French</Card.Title>
          <Card.Text>
           I learned this language working in Tourism in a basic level
          </Card.Text>
          <Card.Text>+1 year of experience in job environmets</Card.Text>
          Spoken
      <ProgressBar className="progress"striped variant="success" animated now={40} />
      Written
      <ProgressBar className="progress" striped variant="info" animated now={20} />
      Translation
      <ProgressBar className="progress"striped variant="warning" animated now={60} />
      Listening
      <ProgressBar  className="progress"striped variant="danger" animated now={30} />
        </Card.ImgOverlay>
      </Card></></>
      </div>
    
  );
}

export default Polyglot;