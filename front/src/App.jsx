import './App.css';
import DefaultLayout from './app/layout/DefaultLayout';
import PopInsertPage from './features/pop/pages/PopInsertPage';
import PopListPage from './features/pop/pages/PopListPage';
import PopDetailPage from './features/pop/pages/PopDetailPage';
import PopEditPage from './features/pop/pages/PopEditPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<DefaultLayout />}>
          <Route index element={<h1>HOME PAGE ~~~</h1>}></Route>
          <Route path="pop/*">
            <Route path="insert" element={<PopInsertPage />}></Route>
            <Route path="list" element={<PopListPage />}></Route>
            <Route path="detail/:id" element={<PopDetailPage />}></Route>
            <Route path="edit/:id" element={<PopEditPage />}></Route>
          </Route>
          <Route path="*" element={<h1>Error PAGE ~~~</h1>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
