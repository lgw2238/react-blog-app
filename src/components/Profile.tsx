
import {Link} from "react-router-dom";

export default function ProfileComponent (){
    return <div className="profile__box">
        <div className="flex__box-lg">
            <div className="profile__image" />
            <div>
                <div className="profile__email">lgw2236@naver.com</div>
                <div className="profile__name">임건우</div>
            </div>
        </div>
        <Link to="/" className="profile__logout">
            로그아웃
        </Link>
    </div>
}