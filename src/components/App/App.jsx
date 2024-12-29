import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useState } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const TeachersPage = lazy(() =>
  import('../../pages/TeachersPage/TeachersPage')
);
const FavouritesPage = lazy(() =>
  import('../../pages/FavouritesPage/FavouritesPage')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

import CommonBarLoader from '../CommonBarLoader/CommonBarLoader';
import GeneralNavigation from '../GeneralNavigaton/GeneralNavigaton';
import GeneralAuthenticationBar from '../GeneralAuthenticationBar/GeneralAuthenticationBar';
import CommonModalWindow from '../CommonModalWindow/CommonModalWindow';

import css from './App.module.css';

const App = () => {

  // Modal window ------
  // const [isOpenLogIn, setIsOpenLogIn] = useState(false);
  // const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [isOpen, setIsOpen ]= useState({logIn:false, signIn:false, logOut:false})
  // console.log(isOpen);
  // setIsOpen({logIn=true, signIn:true, logOut:true})
  // console.log(isOpen);
// const onOpen = () =>{
//   setIsOpen({logIn:true, signIn:true, logOut:true})

// }

// const [isOpenLogIn, setIsOpenLogIn] = useState(false);
// console.log(isOpenLogIn);

// const onOpen =()=>{
//   setIsOpenLogIn(true)
// }

const onOpen =(isOpen, key)=>{
  setIsOpen({...isOpen, [key]:true})
}
const onClose =(isOpen, key)=>{
  setIsOpen({...isOpen, [key]:false})
}


console.log({isOpen});

  return (
    <>
      <header>
        <GeneralNavigation/>
        <GeneralAuthenticationBar onOpen={onOpen} isOpen={isOpen} />
        <p onClick ={onOpen}>aaaa </p>

      </header>

      <main>
        <Suspense fallback={<CommonBarLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/Favourites" element={<FavouritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <footer></footer>
     
      

<CommonModalWindow isOpen ={isOpen.logIn} onClose={()=>{onClose(isOpen,"logIn")}}>aaaaa</CommonModalWindow>
<CommonModalWindow isOpen ={isOpen.signIn} onClose={()=>{onClose(isOpen,"signIn")}}>aaaaa</CommonModalWindow>
<CommonModalWindow isOpen ={isOpen.logOut} onClose={()=>{onClose(isOpen,"logOut")}}>aaaaa</CommonModalWindow>
{/* <CommonModalWindow isOpen ={isOpen.signIn} onClose={()=>{}}>{isOpen}</CommonModalWindow> */}
    </>
  );
};
export default App;
