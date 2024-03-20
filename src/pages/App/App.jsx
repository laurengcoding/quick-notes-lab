import AuthPage from '../AuthPage/AuthPage';
import './App.css'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import NotesPage from '../NotesPage/NotesPage';


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main>
      {
        user ? 
        <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
            <Route path="/" element={<NotesPage  />} />
        </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
