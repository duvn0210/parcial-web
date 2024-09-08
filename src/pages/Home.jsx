import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; 
import tenis1 from '../assets/tenis1.png'; 

const Home = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/register'); 
  };

  return (
    <div className="home-container">
      <div className="content-wrapper">
        <div className="text-and-image">
          <h1 className="nike-text">NIKE</h1>
          <img src={tenis1} alt="Nike Shoe" className="shoe-image" />
        </div>
        <div className="title-subtitle">
          <h2>Start Journey With Nike</h2>
          <p>Smart, Georgeous & fashionable collection </p>
        </div>
        <button className="get-started-button" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
