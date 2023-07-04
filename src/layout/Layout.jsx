import { Link, Outlet } from "react-router-dom"
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Layout = () => {
    return (
        <>
        <header>
            <Header />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
    )
}

export {Layout}

//<header>
//<Header />
//</header>