import React, { Fragment } from 'react';

// @ts-ignore
import css from './header.scss'
import Link from 'next/link';

const Header = () => {
    return (
        <Fragment>
            <div className={css.navigation}>
                <input className={css.navigation_checkbox} id={'navi-toggle'} type={'checkbox'}/>
                <label className={css.navigation_button} htmlFor={'navi-toggle'}>
                    <span className={css.navigation_icon}>&nbsp;</span>
                </label>
                <div className={css.navigation_background}>&nbsp;</div>
                <nav className={css.navigation_nav}>
                    <ul className={css.navigation_list}>
                        <li className={css.navigation_item}>
                            <Link href={'#'}>
                                <a className={css.navigation_link}><span>01</span>About Natours</a>
                            </Link>
                        </li>
                        <li className={css.navigation_item}>
                            <Link href={'#'}>
                                <a className={css.navigation_link}><span>02</span>Your Benefits</a>
                            </Link>
                        </li>
                        <li className={css.navigation_item}>
                            <Link href={'#'}>
                                <a className={css.navigation_link}><span>03</span>Popular tours</a>
                            </Link>
                        </li>
                        <li className={css.navigation_item}>
                            <Link href={'#'}>
                                <a className={css.navigation_link}><span>04</span>Stories</a>
                            </Link>
                        </li>

                        <li className={css.navigation_item}>
                            <Link href={'#'}>
                                <a className={css.navigation_link}><span>05</span>Book Now</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <header className={css.header}>
                <div className={css.header__logoBox}>
                    <img className={css.header__logo} src={'/static/images/logo-white.png'} alt={'Logo'}/>
                </div>

                <div className={css.header__textBox}>
                    <h1 className={css.headingPrimary}>
                        <span className={css.headingPrimaryMain}>Outdoors</span>
                        <span className={css.headingPrimarySub}>is where life happens</span>
                    </h1>

                    <Link href={'#'}><a className={`${css.btn} ${css.btnWhite} ${css.btnAnimated}`}>Discover our
                        tours</a></Link>
                </div>

            </header>
        </Fragment>
    )
};

export default Header