import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ResetPassword from './pages/ResetPassword'
import ConfirmReset from './pages/ConfirmReset'
import ActivateAccount from './pages/ActivateAccount'
import { Provider } from 'react-redux'
import store from './Store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
              <Route path={'/'}  element={<Home/>} exact/>
              <Route path={'/login'}  element={<Login/>} exact/>
              <Route path={'/signup'}  element={<Signup/>} exact/>
              <Route path={'/reset-password'}  element={<ResetPassword/>} exact/>
              <Route path={'/password/reset/confirm/:uid/:token'}  element={<ConfirmReset/>} exact/>
              <Route path={'/activate/:uid/:token'}  element={<ActivateAccount/>} exact/>

          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
