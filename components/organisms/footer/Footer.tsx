import React, { Fragment } from 'react';
import Link from 'next/link';

// @ts-ignore
import css from './footer.scss';
import { mediaPhone } from '../../../style/abstracts/mixins';

const Footer = () => {
    return (
        <Fragment>
            <footer className={css.footer}>
                <div className={css.footer_logo_box}>
                    <picture className={css.footer_logo}>
                        <source
                            srcSet={'static/images/logo-green-small-1x.png 1x, static/images/logo-green-small-2x.png 2x'}
                            media={mediaPhone}/>

                        <img
                            srcSet={'static/images/logo-green-1x.png 1x, static/images/logo-green-2x.png 2x'}
                            alt={'logo'}/>
                    </picture>

                </div>

                <div className={css.row}>
                    <div className={css.col_1_of_2}>
                        <nav className={css.footer_navigation}>
                            <ul>
                                <li className={css.footer_item}>
                                    <Link href={'#'}>
                                        <a className={css.footer_link}>Company</a>
                                    </Link>
                                </li>
                                <li className={css.footer_item}>
                                    <Link href={'#'}>
                                        <a className={css.footer_link}>Contact us</a>
                                    </Link>
                                </li>
                                <li className={css.footer_item}>
                                    <Link href={'#'}>
                                        <a className={css.footer_link}>Careers</a>
                                    </Link>
                                </li>
                                <li className={css.footer_item}>
                                    <Link href={'#'}>
                                        <a className={css.footer_link}>Privacy policy</a>
                                    </Link>
                                </li>

                                <li className={css.footer_item}>
                                    <Link href={'#'}>
                                        <a className={css.footer_link}>Terms</a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={css.col_1_of_2}>
                        <div className={css.footer_copyright}>
                            Build by <Link href={'#'}><a className={css.footer_link}>Brighton Chabula</a></Link> for
                            online
                            something <Link href={'#'}><a className={css.footer_link}>Advanced css and
                            sass.</a></Link> Copyright &copy; by Brighton Chabula
                        </div>
                    </div>
                </div>

            </footer>

            <div className={css.popup} id='popup'>
                <div className={css.popup_content}>
                    <div className={css.popup_left}>
                        <img className={css.popup_image} src={'/static/images/nat-8.jpg'} alt={'tours image'}/>
                        <img className={css.popup_image} src={'/static/images/nat-9.jpg'} alt={'tours image'}/>
                    </div>
                    <div className={css.popup_right}>
                        <Link href={'#section_tours'}><a className={css.popup_close}>&times;</a></Link>
                        <h2 className={`${css.headingSecondary} ${css.u_margin_bottom_small}`}>Start booking now</h2>
                        <h3 className={`${css.headingTertiary} ${css.u_margin_bottom_small}`}>Important &ndash; Please
                            read these term before booking</h3>
                        <p className={css.popup_text}>Full integration with GitHub, GitLab and Bitbucket. Support for
                            other Git-based static optimization can be very beneficial and knowing immediately
                            in development if the page qualifies can be useful. When a page qualifies for Automatic
                            Static Optimization we show an indicator to let you know. GitLab and Bitbucket. Support for
                            other Git-based repositories, including monorepos and self-hosted repositories. This is
                            helpful since automatic static optimization can be very beneficial and knowing immediately
                            in development if the page qualifies can be useful. When a page qualifies for Automatic
                            method:</p>
                        <Link href={'#'}>
                            <a className={`${css.btn} ${css.btn_green} ${css.u_margin_top_medium}`}>Book now</a>
                        </Link>
                    </div>
                </div>
            </div>

        </Fragment>
    )
};

export default Footer;