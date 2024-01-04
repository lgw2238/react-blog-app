import { Link } from "react-router-dom";


export default function FooterComponent (){
    return (
        <header className="footer">
            <div>
                <Link to="/post/new"> 글쓰기 </Link>
                <Link to="/posts"> 게시글  </Link>
                <Link to="/profile"> 프로필  </Link>
            </div>
        </header>

    );
}