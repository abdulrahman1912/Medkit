import React from 'react'
import Style from './Dashboard.module.css'
import logobig from '../../assets/logobig.svg'
import { Row, Nav } from '../../components'
import { useNavigate, Outlet } from "react-router-dom";
import profile from '../../assets/profile.svg'


export const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <div className={Style.Container}>
            <Nav />
            <div className={Style.left}>
                <div className={Style.status}>
                    <form>
                        <input type="search" placeholder="Search..."/>
                            <button type="submit">Search</button>
                    </form>
                   <Row img={profile} text={'Hi, Raji'} style={{flexDirection:"row-reverse"}}/>
                </div>
                <Outlet />
            </div>

        </div>
    )
}