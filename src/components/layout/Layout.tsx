import { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'

import Header from "../common/Header"
import Footer from "../common/Footer"
import BackToTopButton from "../BackToTopButton"

export default function Layout({ children, handlerServiceCate }: { children: React.ReactNode, handlerServiceCate(category: number): void }) {
    const [onScroll, setOnScroll] = useState(false)
    const [navhover, setNavhover] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 300) { // 스크롤이 300px 이상 이동했을 때
            setOnScroll(true);
        } else {
            setOnScroll(false);
        }
    }
    const handleNavhover = (hover: boolean) => {
        setNavhover(hover)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <>
            <div className="container">
                <div className={`nav-hover ${navhover ? 'active' : ''}`}/>
                <Header
                    onScroll={onScroll}
                    navhover={navhover}
                    handleNavhover={handleNavhover}
                    handlerServiceCate={handlerServiceCate}
                />
                {children}
                <Footer/>
            </div>
            <BackToTopButton
                onScroll={onScroll}
            />
        </>
    )
}