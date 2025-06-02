import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import LandingPage from './LandingPage'
import { SearchProvider } from './SearchContext';

const All = () => {
  return (
    <div>
      <SearchProvider>

<BrowserRouter>

<Routes>
<Route path='/' element= {<LandingPage/>} />
<Route path='/home' element= {<Home/>} />
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
</Routes>

</BrowserRouter>

</SearchProvider>

</div>
  )
}

export default All