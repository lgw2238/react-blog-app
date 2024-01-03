import {Link} from "react-router-dom";
import { useState } from 'react';
 
interface PostListProps {
    hasNavigation?: boolean;
}

type TabType = "all" | "my" ;

export default function PostListComponent ({ hasNavigation = true}: PostListProps) {
    const [activeTap, setActiveTap] = useState<TabType>("all");
    return (
         <>
            { hasNavigation && (
            <div className="post__navigation">
                <div 
                role="presentation" onClick={() => setActiveTap("all")}
                className={activeTap === "all" ? "post__navigation--active" : ""}>
                    전체
                </div>
                <div
                role="presentation" onClick={() => setActiveTap("my")}
                className={activeTap === "my" ? "post__navigation--active" : ""}>
                    나의 글
                </div>
            </div>
            )}
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
        ))}
        </div>
    </>
    );
}