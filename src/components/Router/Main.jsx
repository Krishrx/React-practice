import React from 'react'
import { BrowserRouter,Routes,Route,Link,Outlet } from 'react-router-dom'
function Main() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<NavBar/>}>
                  <Route index element={<Home/>} />
                    <Route path='profile' element={<Profile />}>
                          <Route path='view' element={<ViewProfile />} />
                          <Route path="edit" element={<EditProfile />} />
                    </Route>
                  <Route path='contact' element={<Contact/>} />
                  <Route path='report' element={<Report />} />
                </Route>
              </Routes>
          </BrowserRouter>
    </div>
  )
}

export function NavBar() {

    return (
        <div>
            <nav>
            <ul className='flex justify-around bg-pink-400'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/report">Report</Link>
                </li>
            </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export function Home() {
    return (
        <div>
            Home
        </div>
    )
}

export function Profile() {
    return (
        <div>
            Profile
            <ul className='flex justify-around bg-orange-400'>
                <li><Link to={'/profile/view'}>View Profile</Link></li>
                <li><Link to={'/profile/edit'}>Edit Profile</Link></li>
            </ul>
            <Outlet /> 
            {/* this line is must to nest route */}
        </div>
    )
}

export function Contact() {
    return (
        <div>
            Contact
        </div>
    )
}

export function Report() {
    return (
        <div>
            Report
        </div>
    )
}

export function ViewProfile() {
    return (
        <div>
            in ViewProfile
        </div>
    )
}

export function EditProfile() {
    return (
        <div>
            in EditProfile
        </div>
    )
}



export default Main