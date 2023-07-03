import ShowRecipes from './components/ShowRecipes';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import EditProfileForm from './components/EditProfileForm';
import EditRecipeForm from './components/EditRecipeForm';
import CreateRecipeForm from './components/CreateRecipeForm';
import NavBar from './components/NavBar';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import UserType from './types/auth'
import { useState } from 'react'


function App() {
  const [user, setUser]=useState<UserType|null>(null)
  

  return (

    <div>
      <NavBar/>
      <Routes>
          <Route path='/login' element={<LoginForm setUser={setUser}/>} />
          <Route path='/register' element={<RegisterForm />}/>
          <Route path='/' element={<ShowRecipes />} />
          <Route path='/editprofile' element={<EditProfileForm user={user}/>}/>
          <Route path='/createrecipe' element={<CreateRecipeForm user={user}/>}/>
          <Route path='/editrecipe' element={<EditRecipeForm user={user}/>}/>
      </Routes>

    </div>
  )
}

export default App
