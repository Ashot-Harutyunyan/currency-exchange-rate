import './nav.style.scss'
import { useState } from 'react'
import { NavLink } from 'react-router'
import { IoHome } from "react-icons/io5"
import { MdCurrencyExchange } from "react-icons/md"
import { PiChartLineUp } from "react-icons/pi"
import { LiaSearchSolid } from "react-icons/lia"
import { IoIosArrowForward } from "react-icons/io"

function Nav({ref}) {

    const [isOpen, setIsOpen] = useState(false)

    return <nav ref={ref} className={isOpen ? "collapsed" : ""}>
        <div className={`panel-left ${isOpen ? 'open' : 'close'}`}
            onClick={() => setIsOpen(!isOpen)}>
            <div className="panel-left-element">
                <IoIosArrowForward className='panel-left-icon'/>
            </div>
        </div>
        <ul>
            <li><NavLink to='/'><IoHome /><span>Home</span></NavLink></li>
            <li><NavLink to='converter'><MdCurrencyExchange /><span>Converter</span></NavLink></li>
            <li><NavLink to='search'><LiaSearchSolid /><span>Search</span></NavLink></li>
            <li><NavLink to='analytics'><PiChartLineUp /><span>Analytics</span></NavLink></li>
        </ul>
    </nav>
}

export default Nav