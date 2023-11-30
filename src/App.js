import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
