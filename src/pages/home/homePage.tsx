// import { Link } from "react-router-dom";
import Footer from "components/Footer";
import Header from "components/Header";
import PostList from "components/PostList";
import Carousel from "components/Carousel";


export default function homePage() {
    return (
        <>
        <Header />
        <Carousel />
        <PostList hasNavigation={true} />
        <Footer />
        </>
    );

}