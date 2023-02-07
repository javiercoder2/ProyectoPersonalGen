import { Col } from "react-bootstrap";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import './footer.css';

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={16} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
       <button className='btn'>{link}</button>
     </div>
        </div>
      </div>
    </Col>
  )
}