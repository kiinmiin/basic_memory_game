import React from 'react';
import Navbar from './Navbar/Navbar';
import GameSection from './Game/GameSection';
import ContactForm from './Contact/ContactForm';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GameSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
