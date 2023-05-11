import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Signin = React.lazy(() => import('./views/pages/signin/Signin'))
const SavePassword = React.lazy(() => import('./views/pages/savePassword/SavePassword'))
const RecoverAccount = React.lazy(() => import('./views/pages/recoverAccount/RecoverAccount'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
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
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/signin" name="Signin Page" element={<Signin />} />
            <Route exact path="/savePassword" name="SavePassword Page" element={<SavePassword />} />
            <Route exact path="/recoverAccount" name="recoverAccount Page" element={<RecoverAccount />} />
            <Route exact path="/Student_Home" name="studentHome Page" element={<StudentHome />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route exact path="/courses" name="Courses" element={<Courses />} />
            <Route exact path="/settings" name="Settings" element={<Settings />} />
            <Route exact path="/students" name="Students" element={<Students />} />
            <Route path="*" name="Dashboard" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
