import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from 'react-router-dom'
import blogs from '../../utils/Blogs'
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
                  <Route path='blogs' element={<Blogs />} />
                  <Route path='blog/:bid' element={<Blog/>} />  
                  <Route path='contact' element={<Contact/>} />
                  <Route path='report' element={<Report />} />
                  <Route path='*' element={<NoPage />}/> 
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
                    <Link to="profile">Profile</Link>
                </li>
                <li>
                    <Link to="blogs">Blogs</Link>
                </li>   
                <li>
                    <Link to="contact">Contact</Link>
                </li>
                <li>
                    <Link to="report">Report</Link>
                </li>  
            </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export function Home() {
    const navBlogs = blogs.map(({ id }) => {
        return (<Link key={id} className='bg-fuchsia-500 text-white px-4 py-2 rounded-md' to={`/blog/${id}`}>Blog {id}</Link>)
    });
    return (
        <div>
            Home
            <div className='flex flex-wrap gap-4'>
               {navBlogs}
            </div>
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
            {/* this line is must to nest route,
            An <Outlet> should be used in parent route components to render their child route components*/}
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

export function NoPage() {
    return (
        <div className='flex flex-col justify-center items-center space-y-2'>
            <h1 className='text-2xl font-medium'>You're looking for wat'son? </h1>
        </div>
    )
}

export function Blogs() {
    const wrappedBlogs = blogs.map(({ id, title, content }) => {
        return (
            <div key={id} className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-medium'>{title}</h1>
                <p className='text-center text-lg'>{content}</p>
            </div>
        )
    })
    return (
        <div className='flex flex-col justify-center items-center p-5 bg-sky-200 space-y-5'>
            <h1 className='text-4xl font-bold'>Blogs</h1>
            {wrappedBlogs}
        </div>
    )
}

export function Blog() {
    let {bid} = useParams();
    const blog = blogs.find(({ id }) => id === parseInt(bid));

    const navBlogs = blogs.map(({ id }) => {
        return (<Link key={id} className='bg-fuchsia-500 text-white px-4 py-2 rounded-md' to={`/blog/${id}`}>Blog {id}</Link>)
    });

    return (
        <div className='flex flex-col justify-center items-center p-5 bg-sky-200 space-y-5'>
            { blog!==undefined ? (<div key={blog.id} className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-medium'>{blog.title}</h1>
                <p className='text-center text-lg'>{blog.content}</p>
            </div>) : (<div className='flex flex-col justify-center items-center space-y-2'>
                    <h1 className='text-2xl font-medium'>You're looking for wat'son? </h1>
                    <small className='italic'>check with your blog id and try again</small>
            </div>)}
            <div className='flex flex-wrap gap-4'>
               {navBlogs}
            </div>
        </div>
    )
}



export default Main