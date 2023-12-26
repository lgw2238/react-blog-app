import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';
import HomePage from '../pages/home/homePage';


export default function Router() {
    return (
    <>
      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/posts" element={<h1>Post List Page</h1>}/>
        <Route path="/posts:id" element={<h1>Post Detail Page</h1>}/>
        <Route path="/posts/new" element={<h1>Post New Page</h1>}/>
        <Route path="/posts/edit:id" element={<h1>Post Edit Page</h1>}/>
        <Route path="/profile" element={<h1>profile Page</h1>}/>
        <Route path="/login" element={ <LoginPage/>} />
        <Route path="*" element={<Navigate replace to="/" />}/>
      </Routes>
    </>
    );

}