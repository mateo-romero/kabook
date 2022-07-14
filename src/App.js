
import { useState } from 'react';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import Category from './views/Category';
import MakeProduct from './views/MakeProduct';
import Home from './views/Home';
import Product from './views/Product';
import Reserve from './views/Reserve';

function App() {
  
  const [kabookLogged, setKabookLogged]=useState("unlogged")
  const [jwt, setJwt]=useState(null)
  const takeJwt=(jwt)=>{
    setJwt(jwt)
  }

  const isLoged=()=>{
      setKabookLogged("logged")
      
  }
  const isAdmin=()=>{
    setKabookLogged("admin")
    
}
  const notLoged=()=>{
    setKabookLogged("unlogged")
    setJwt("")
  }
  const signInKabook=()=>{
    setKabookLogged("sign-in")
    setJwt("")
  }
  const signUpKabook=()=>{
    setKabookLogged("sign-up")
    setJwt("")
  }



  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home jwt={jwt} takeJwt={takeJwt} signInKabook={signInKabook} signUpKabook={signUpKabook} notLoged={notLoged} isAdmin={isAdmin} isLoged={isLoged} kabookLogged={kabookLogged}/>}/>
        <Route path="/lodging/:productId" element={<Product jwt={jwt} takeJwt={takeJwt} signInKabook={signInKabook} signUpKabook={signUpKabook} isAdmin={isAdmin} notLoged={notLoged} isLoged={isLoged} kabookLogged={kabookLogged}/>}/> 
        {kabookLogged==="admin"? <Route path="/makeLodging" element={<MakeProduct jwt={jwt} takeJwt={takeJwt} signInKabook={signInKabook} signUpKabook={signUpKabook}  notLoged={notLoged} isAdmin={isAdmin} isLoged={isLoged} kabookLogged={kabookLogged}/>}/> :"" }
       <Route path="/lodging/:productId/reserve/:productId" element={<Reserve jwt={jwt} takeJwt={takeJwt} signInKabook={signInKabook} signUpKabook={signUpKabook} isAdmin={isAdmin} notLoged={notLoged} isLoged={isLoged} kabookLogged={kabookLogged}/>}/>
        <Route path="/categoria/:categoryId" element={<Category jwt={jwt} takeJwt={takeJwt} signInKabook={signInKabook} signUpKabook={signUpKabook}  notLoged={notLoged} isAdmin={isAdmin} isLoged={isLoged} kabookLogged={kabookLogged}/>}/> 
                
        <Route path="*"  element={<Navigate replace to="/"/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
