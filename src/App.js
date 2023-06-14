import React, { Component, Suspense} from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import PrivateRoute from './PrivateRoute';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const ForgetPassword = React.lazy(() => import('./views/pages/admin/ForgetPassword'))
const RecoverPassword = React.lazy(() => import('./views/pages/admin/RecoverPassword'))
const Signin = React.lazy(() => import('./views/pages/signin/Signin'))
const SavePassword = React.lazy(() => import('./views/pages/savePassword/SavePassword'))
const RecoverAccount = React.lazy(() => import('./views/pages/recoverAccount/RecoverAccount'))
const Courses = React.lazy(() => import('./courses'))
const Settings = React.lazy(() => import('./settings'))
const Students = React.lazy(() => import('./students'))
const StudentHome = React.lazy(() => import('./student/StudentHome'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route  path="/" name="Login Page" element={<Login />} />
            <Route  exact path="/signin" name="Signin Page" element={<Signin />} />      
            <Route   path="/forgetPassword" name="ForgetPassword Page" element={<ForgetPassword />} />
            <Route   path="/recoverPassword" name="RecoverPassword Page" element={<RecoverPassword />} />
            <Route  exact path="/savePassword" name="SavePassword Page" element={<SavePassword />} />
            <Route  exact path="/recoverAccount" name="recoverAccount Page" element={<RecoverAccount />} />

            <Route  exact path="/Student_Home" name="studentHome Page" element={<PrivateRoute/>} >
                <Route  exact path="/Student_Home" name="studentHome Page" element={<StudentHome />} />
            </Route>           
            <Route  exact path="/courses" name="Courses" element={<PrivateRoute/>} >
                <Route  exact path="/courses" name="Courses" element={<Courses />} />
            </Route>
            <Route  exact path="/settings" name="Settings" element={<PrivateRoute/>} >
                <Route  exact path="/settings" name="Settings" element={<Settings />} />
            </Route>
            <Route  exact path="/students" name="Students" element={<PrivateRoute/>}>
                <Route  exact path="/students" name="Students" element={<Students />} />
            </Route>
            <Route  exact path="/dashboard" name="Dashboard"  element={ <PrivateRoute/>}>
                <Route exact path="/dashboard" name="Dashboard"  element={ <DefaultLayout />}/>
            </Route>
            <Route  exact path="*" name="Dashboard"  element={ <PrivateRoute/>}>
                <Route  path="*" name="Dashboard"  element={<DefaultLayout />} />
            </Route>
          </Routes>
            
        </Suspense>
      </HashRouter>
    )
  }
}


export default App
