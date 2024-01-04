
import './App.css';
import Router from './components/Router';
import { useEffect, useState } from 'react';
import { app } from 'firebaseApp';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoaderComponent from 'components/Loader';

function App() {
  const auth = getAuth(app);
  // auth 체크하기 전에 loader 띄워주는 용도 ,... 
  const [init, setInit] = useState<boolean>(false);
  // auth의 currnetuser가 있으면 authenticated로 변경
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  useEffect(()=> {
  // 상위 컴포넌트에서 계정인증 정보 받아 하위 노드에 전달.
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuthenticated(true);
      // ...
    } else {
      setIsAuthenticated(false);
    }
    setInit(true);
  });
}, [auth]);
  // firebase 인증시 -> true 전환 app -> router로 인증 결과 boolean 값 주입 
  return (
    <>
      <ToastContainer />
     {init ? <Router isAuthenticated={isAuthenticated} /> : <LoaderComponent/> }
    </>
  );
}

export default App;
