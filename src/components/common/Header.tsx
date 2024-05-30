import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import { Link as ScrollLink } from 'react-scroll'
import Image from "next/image"

import logoImg from '../../../public/images/nav-logo-new.png'

export default function Header({
    onScroll,
    navhover,
    handleNavhover,
    handlerServiceCate
}: {
    onScroll: boolean,
    navhover: boolean
    handleNavhover(hover: boolean): void,
    handlerServiceCate(category: number): void
}) {
    const router = useRouter()
    const [hoverMenu, setHoverMenu] = useState<null | number>(null)

    const handleScrollActive = () => {
        handleNavhover(false)
    }
    const handleServiceTab = (cateogry: number) => {
        handleNavhover(false)
        handlerServiceCate(cateogry)
    }

    return (
        <header
            className={onScroll ? 'active' : ''}
        >
            <nav>
                <div className='logo'>
                    <Link href='#'>
                        <Image src={logoImg} alt="site_logo" />
                    </Link>
                </div>
                <ul
                    className={['gnb', navhover ? 'active' : ''].join(' ')}
                >
                    <li
                        onMouseOver={() => {
                            handleNavhover(true)
                            setHoverMenu(0)
                        }}
                        onMouseOut={() => {
                            handleNavhover(false)
                            setHoverMenu(null)
                        }}
                    >
                        <a href="#none">Home</a>
                        <ul className={['depth_1', (navhover && hoverMenu === 0) ? 'active' : ''].join(' ')}>
                            <li><ScrollLink to="about-us" spy={true} smooth={true} offset={-100} onClick={handleScrollActive}>About us</ScrollLink></li>
                            <li><ScrollLink to="company-experts" spy={true} smooth={true} offset={-70} onClick={handleScrollActive}>Company Expert</ScrollLink></li>
                            <li><ScrollLink to="research-experts" spy={true} smooth={true} offset={-70} onClick={handleScrollActive}>Research Expert</ScrollLink></li>
                            <li><ScrollLink to="what-dms" spy={true} smooth={true} offset={-70} onClick={handleScrollActive}>What is SMART DMS</ScrollLink></li>
                            <li><ScrollLink to="what-we-do" spy={true} smooth={true} offset={-70} onClick={handleScrollActive}>What LEO do</ScrollLink></li>
                            <li><ScrollLink to="weekly-report" spy={true} smooth={true} offset={-70} onClick={handleScrollActive}>PCN/PDN notice</ScrollLink></li>
                        </ul>
                    </li>
                    <li
                        onMouseOver={() => {
                            handleNavhover(true)
                            setHoverMenu(1)
                        }}
                        onMouseOut={() => {
                            handleNavhover(false)
                            setHoverMenu(null)
                        }}
                    >
                        <a href="#none">Service</a>
                        <ul className={['depth_1', (navhover && hoverMenu === 1) ? 'active' : ''].join(' ')}>
                            <li><ScrollLink to="service" spy={true} smooth={true} offset={-70} onClick={() => handleServiceTab(0)}>Solution</ScrollLink></li>
                            {/* <li><ScrollLink to="service" spy={true} smooth={true} offset={-70} onClick={() => handleServiceTab(1)}>Tracking</ScrollLink></li> */}

                            <li><ScrollLink to="service" spy={true} smooth={true} offset={-70} onClick={() => handleServiceTab(2)}>Monitoring</ScrollLink></li>
                            <li><ScrollLink to="service" spy={true} smooth={true} offset={-70} onClick={() => handleServiceTab(3)}>Research</ScrollLink></li>
                            <li><ScrollLink to="service" spy={true} smooth={true} offset={-70} onClick={() => handleServiceTab(4)}>단종관리 보고서 작성</ScrollLink></li>
                        </ul>
                    </li>
                    <li
                        onMouseOver={() => {
                            handleNavhover(true)
                            setHoverMenu(2)
                        }}
                        onMouseOut={() => {
                            handleNavhover(false)
                            setHoverMenu(null)
                        }}
                    >
                        <a href="#none">Partners</a>
                        <ul className={['depth_1', (navhover && hoverMenu === 2) ? 'active' : ''].join(' ')}>
                            <li><ScrollLink to="partners" spy={true} smooth={true} offset={-70} onClick={handleScrollActive}>DMSMS Solution</ScrollLink></li>
                            <li><ScrollLink to="partners" spy={true} smooth={true} offset={-70} onClick={handleScrollActive}>Data</ScrollLink></li>
                            <li><ScrollLink to="partners" spy={true} smooth={true} offset={-70} onClick={handleScrollActive}>Agency</ScrollLink></li>
                        </ul>
                    </li>
                    <li
                        onMouseOver={() => {
                            handleNavhover(true)
                            setHoverMenu(3)
                        }}
                        onMouseOut={() => {
                            handleNavhover(false)
                            setHoverMenu(null)
                        }}
                    ><ScrollLink to="contact-us" spy={true} smooth={true} offset={-70} style={{ cursor: 'pointer' }} onClick={handleScrollActive}>Contact US</ScrollLink></li>
                </ul>
                <div className="lang">
                    <Link href={router.pathname} locale="ko" className={router.locale === 'ko' ? 'active' : ''}>KR</Link>
                    <Link href={router.pathname} locale="en" className={router.locale === 'en' ? 'active' : ''}>EN</Link>
                </div>
            </nav>
            <div
                className={['trigger', navhover ? 'active' : ''].join(' ')}
                onClick={() => {
                    handleNavhover(!navhover)
                }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}