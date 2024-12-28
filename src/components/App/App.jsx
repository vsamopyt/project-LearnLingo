import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

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

import css from './App.module.css';

const App = () => {
  return (
    <>
      <header>
        <GeneralNavigation/>
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
    </>
  );
};
export default App;
