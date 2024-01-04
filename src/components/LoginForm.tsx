import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { app } from "firebaseApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginFormComponent(){
    const [ error, setError ] = useState<string>("");
    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");
    
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try{
            const auth = getAuth(app);
            await signInWithEmailAndPassword(auth, email, password);            
            toast.success("로그인에 성공했습니다.")
        }catch (error: any){    
            toast.error(error?.code);
            console.log(error?.code);
        }
    }

    const validation = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name , value },

        } = e;

        // 이메일
        if ( name === 'email'){
            setEmail(value);
            const validRegex =
             /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
            
            if (!value?.match(validRegex)){
                setError("이메일 형식이 옳바르지 않습니다.");
            } else {
                setError("");
            }
        } 

        // 패스워드 
        if (name === 'password'){
            setPassword(value);
           
            if(value?.length < 8 ){
                setError("비밀번호는 최소 8자리 입니다.");
            } else {
                setError("");
            }
        }
    }
    return (
        <form onSubmit={onSubmit} className="form form--lg">
        <h1 className="form__title" >로그인</h1>
        <div className="form__block">
            <label htmlFor="email">이메일</label>
            <input type="email"
            name="email" 
            id="email" 
            onChange={validation}
            value={email}
            required />
        </div>
        <div className="form__block">
            <label htmlFor="password">비밀번호</label>
            <input type="password"
            name="password"
            id="password" 
            onChange={validation}
            value={password} 
            required
            />
        </div>
        {error && error?.length > 0 && (
            <div className="form__block">
                <div className="form_error">{error}</div>    
             </div>
        )}
        <div className="form__block">
            계정이 없으시다면 ? 
            <Link to="/signup" className="form__link">회원가입 하기
            </Link>
        </div>
        <div className="form__block">
            <input type="submit"
            value="로그인"
            className="form__btn--submit"
            disabled={error?.length > 0} />
        </div>
    </form>
    )
}