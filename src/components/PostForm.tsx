export default function PostFormComponent (){
    return (
     <form action="/post" method="POST" className="form">
        <div className="form__block">
            <label htmlFor="title">제목</label>
            <input type="text" name="title" id="title" required />
        </div>
        <div className="form__block">
            <label htmlFor="summary">세부 설명</label>
            <input type="text" name="summary" id="summary" required />
        </div>
        <div className="form__block">
            <label htmlFor="contents">내용</label>
            <textarea name="contents" id="contents" required />
        </div>
        <div className="form__block">
            <input type="submit" value="전송" className="form__btn--submit"  />
        </div>
    </form>
    );
}