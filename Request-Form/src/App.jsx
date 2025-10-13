import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RequestForm from './pages/RequestForm'
import Login from './pages/Login'
import RootLayout from './layouts/RootLayout'
import GeneralRequestForm from './pages/GeneralRequestForm'
import OverloadRegistrationForm from './pages/OverloadRegistrationForm'
import UnderloadRegistrationForm from './pages/UnderloadRegistrationForm'
import RetakeRegistrationForm from './pages/RetakeRegistrationForm'
import ElectiveChangeRequestForm from './pages/ElectiveChangeRequestForm'
import CourseSectionChangeForm from './pages/CourseSectionChangeForm'
import CourseWithdrawalWithWForm from './pages/CourseWithdrawalWithWForm'
import LateAddDropForm from './pages/LateAddDropForm'
import LateRegistrationForm from './pages/LateRegistrationForm'
import CourseCancellationForm from './pages/CourseCancellationForm'
import ConfirmRegistrationForm from './pages/ConfirmRegistrationForm'


const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />,
    children: [
      { path: '/' , element: <Home /> },
      { path: 'request-form' , element: <RequestForm />},
      { path: 'login', element: <Login />},
      { path: 'general-request-form', element: <GeneralRequestForm />},
      { path: 'overload-registration-form', element: <OverloadRegistrationForm />},
      { path: 'underload-registration-form', element: <UnderloadRegistrationForm />},
      { path: 'retake-registration-form', element: <RetakeRegistrationForm />},
      { path: 'elective-change-request-form', element: <ElectiveChangeRequestForm />},
      { path: 'course-section-change-form', element: <CourseSectionChangeForm />},
      { path: 'course-withdrawal-with-w-form', element: <CourseWithdrawalWithWForm />},
      { path: 'late-add-drop-form', element: <LateAddDropForm />},
      { path: 'late-registration-form', element: <LateRegistrationForm />},
      { path: 'course-cancellation-form', element: <CourseCancellationForm />},
      { path: 'confirm-registration-form', element: <ConfirmRegistrationForm />}
    ]
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}  />
    </div>
  )
}

export default App