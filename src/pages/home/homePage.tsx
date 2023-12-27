import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function homePage() {
    return (
        <div>
        <Header />
         <div className="post__navigation">
            <div className="post__navigation--active">전체</div>
            <div>나의 글</div>
         </div>
         <div className="post__list"> 
            {[...Array(10)].map((e, index) => (
                <div key={index} className="post__box">
                <Link to={`/posts/${index}`}> 
                <div className="post__profile-box">
                    <div className="post__profile" />
                    <div className="post__author-name">lgw</div> 
                    <div className="post__date">2023.12.27 토</div> 
                </div>
                <div className="post__title"> 게시글 {index} </div>
                <div className="post__text" > 게시물 내용 </div>
                <div className="post__utils-box">
                    <div className="post__delete">삭제</div>
                    <div className="post__edit">수정</div>
                </div>
                </Link>
                </div>
              
            ))
            }
         </div>
            <Footer />
        </div>
        
    )

}