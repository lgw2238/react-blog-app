import { useState } from "react";

import { Route, Routes, Navigate } from 'react-router-dom';
import PostList from '../pages/posts/postList';
import PostDetail from '../pages/posts/detailPage';
import PostNew from '../pages/posts/newPost';
import PostEdit from '../pages/posts/editPage';
import LoginPage from '../pages/login/loginPage';
import ProFile from '../pages/profile/profilePage';
import HomePage from '../pages/home/homePage';
import SignUp from '../pages/signup/signup';



export default function Router() {
  // firebase 인증시 -> true 전환
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    return (
    <>
      <Routes>
        { isAuthenticated ? (
          <>
            <Route path="/" element={ <HomePage/>} />
            <Route path="/posts" element={ <PostList />} />
            <Route path="/posts/:id" element={ <PostDetail /> }/>
            <Route path="/posts/new" element={ <PostNew /> }/>
            <Route path="/posts/edit:id" element={ <PostEdit />} />
            <Route path="/profile" element={ <ProFile />} />
            <Route path="/login" element={ <LoginPage/>} />
            <Route path="/signUp" element={ <SignUp/>} />
            <Route path="*" element={<Navigate replace to="/" />}/>
          </>
        ) : ( // 인증 없을 시 false
          <>
            <Route path="/login" element={ <LoginPage/>} />
            <Route path="/signUp" element={ <SignUp/>} />
            <Route path="*" element={ <LoginPage/>} />
          </>
        )
      }
      </Routes>
    </>
    );

}