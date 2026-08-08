import './main.style.scss'
import { useRef } from "react"
import { Outlet, useLocation } from "react-router"
import Nav from "../Nav/Nav.jsx"
import useElementSize from "../hooks/useElementSize.js"

function Main() {

    const navRef = useRef(null)
    const { width } = useElementSize(navRef)
    const location = useLocation()
    const page = location.pathname.split("/")[1] || 'Home'

    return <>
        <Nav ref={navRef} />
        <main style={{ paddingLeft: width }}>
            <div className='container-logo'>
                <h2>{page[0].toUpperCase() + page.slice(1)}</h2>
                <img src="/favicon.png" alt="logo"/>
            </div>
            <Outlet />
        </main>
    </>
}

export default Main