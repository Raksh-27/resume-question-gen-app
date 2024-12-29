import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './src/Components/Nav.jsx';
import './App.css';
import background from './assets/Background.png';
import Text from './Components/Text.jsx';
import Startbtn from './Components/Startbtn.jsx';
import Application from './Components/Application.jsx'; // Import the Application component
import Login from './Components/Login.jsx';

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover', // Ensures the image covers the entire background
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh', // Full height of the viewport
    width: '100%', // Full width
  };

  return (
    <div style={backgroundStyle}>
      <BrowserRouter>
        <Nav /> {/* Navbar is included here to display on all pages */}
        <Routes>
          {/* Main page */}
          <Route
            path="/"
            element={
              <div className="main">
                <div className="headder">
                  <Text />
                  <div className="startbtn">
                    <Startbtn />
                  </div>
                </div>
              </div>
            }
          />

          {/* New Application page */}
          <Route path="/application" element={<Application />} />

          {/* Login page */}
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
