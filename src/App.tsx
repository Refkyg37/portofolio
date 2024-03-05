import React from 'react';
import './index.css';
import myPhoto from './assets/img/ai_korea-removebg-preview.png';


const App: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
    <header className="py-7 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center" style={{ backgroundColor: '#ffdab9' }}>
        <h1 className="text-4xl font-bold"> Portfolio</h1>
      </header>

      <main className="my-8">

        <div className="flex justify-center">
          <img src={myPhoto} alt="Refky Ghandy" className="w-48 h-48 rounded-full transform hover:rotate-6 transition duration-300" />
        </div>
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Hi, my name is Refky Ghandy</h2>
          <p className="text-lg">I'm a Full Stack Web Developer Programmer.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Tools & Skills</h2>
          <div className="flex flex-wrap items-center gap-4">
            <span className="bg-blue-500 text-white p-2 rounded-lg hover:bg-yellow-500 hover:text-black transition duration-300">React</span>
            <span className="bg-yellow-500 text-black p-2 rounded-lg hover:bg-red-500 hover:text-white transition duration-300">JavaScript</span>
            <span className="bg-red-500 text-white p-2 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">HTML</span>
            <span className="bg-green-500 text-white p-2 rounded-lg hover:bg-purple-500 hover:text-white transition duration-300">CSS</span>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-blue-300 to-blue-500 p-4 shadow-md rounded-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">Project 1</h3>
              <p className="text-white">Description of Project 1</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-300 to-green-500 p-4 shadow-md rounded-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">Project 2</h3>
              <p className="text-white">Description of Project 2</p>
            </div>

            <div className="bg-gradient-to-r from-purple-300 to-purple-500 p-4 shadow-md rounded-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">Project 3</h3>
              <p className="text-white">Description of Project 3</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg">Email: refkighandi027@gmail.com</p>
          <p className="text-lg">Phone: 081944433216</p>
        </section>
      </main>

      <footer className="py-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center" style={{ backgroundColor: '#ffdab9' }}>
        <p>&copy; 2024</p>
      </footer>
    </div>
  );
};

export default App;


