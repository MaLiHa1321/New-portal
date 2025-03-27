import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Latestnews from "../components/latestNews/Latestnews";
import Navbar from "../components/header/Navbar";


const Home = () => {
    return (
        <div>
            <Header />
            <section className="w-11/12 mx-auto">
                <Latestnews />
            </section>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer />
            
        </div>
    );
};

export default Home;