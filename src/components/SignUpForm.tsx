import { Link } from "react-router-dom";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "firebaseApp";
import { toast } from "react-toastify"

export default function SignUpComponent (){
    const [ error , setError ] = useState<string>("");
    const [ email , setEmail ] = useState<string>("");
    const [ password , setPassword ] = useState<string>("");
    const [ passwordConfirm , setPasswordConfirm ] = useState<string>("");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const auth = getAuth(app);
            await createUserWithEmailAndPassword(auth, email, password);
            
            toast.success("회원가입에 성공했습니다.");
        }catch (error: any){
            console.log(error);
            toast.error(error?.message);
        }
    }
    const validation = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target : { name , value },
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
            const passwordRegEx = /^[A-Za-z0-9]{8,20}$/
            if(!value?.match(passwordRegEx)){
                setError("비밀번호 양식을 맞춰주시기 바랍니다.");
            } else if (passwordConfirm?.length > 0 && value !== passwordConfirm) {
                setError("비밀번호와 비밀번호 확인 란의 입력값이 다릅니다. 다시 확인해주세요.");
            } else {
                setError("");
            }
        }
        // 패스워드 확인부분
        if(name === 'password_confirm'){
            setPasswordConfirm(value);

            if(value !== password){
                setError("입력한 비밀번호와 다릅니다.");
            } else {
                setError("");

            }
        }
       
    };
    
    return  (
        <form onSubmit={onSubmit} className="form form--lg">
        <h1 className="form__title" >회원가입</h1>
        <div className="form__block">
            <label htmlFor="email">이메일</label>
            <input type="email" name="email" id="email" required onChange={validation}/>
        </div>
        <div className="form__block">
            <label htmlFor="password">비밀번호</label>
            <input type="password" name="password" id="password" required onChange={validation}/>
        </div>
        <div className="form__block">
            <label htmlFor="password_confirm">비밀번호 확인</label>
            <input type="password" name="password_confirm" id="password_confirm" required onChange={validation} />
        </div>
        {/* 에러에 따른 화면 처리 */}
        {error && error?.length > 0 && (
            <div className="form__block">
                <div className="form__error">{error}</div>
            </div>
        )}
        <div className="form__block">
            계정이 이미 있으시다면 ?
            <Link to="/login" className="form__link"> 로그인 하기
            </Link>
        </div>
        <div className="form__block">
            <input type="submit" value="회원가입" className="form__btn--submit"  />
        </div>
    </form>
    )
}