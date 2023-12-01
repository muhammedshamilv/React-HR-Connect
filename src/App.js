import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/homePage';
import Project from './pages/projectPage';
import Login from './pages/login';
import PrivateOutlet from './utils/PrivateOutlet';
import PublicOutlet from './utils/PublicOutlet';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicOutlet />}>
            <Route element={<Login />} path='/' />
          </Route>
          <Route element={<PrivateOutlet />}>
            <Route element={<Home />} path='/home' />
            <Route element={<Project />} path='/project' />
            <Route element={<>employee</>} path='/employee' />
            <Route element={<>grievance</>} path='/grievance' />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
