import React from 'react';

// @ts-ignore
import css from './tours.scss'
import Link from 'next/link';

const Tours = () => {
    return (
        <section className={css.section_tours}>
            <div className={css.u_center_text}>
                <h2 className={`${css.headingSecondary} ${css.u_margin_bottom_big}`}>
                    Exciting tours for adventurous people
                </h2>
            </div>

            <div className={css.row}>
                <div className={css.col_1_of_3}>
                    <div className={css.card}>
                        <div className={`${css.card_side} ${css.card_side_front}`}>
                            <div className={`${css.card_picture} ${css.card_picture_1}`}>
                            </div>
                            <h4 className={css.card_heading}>
                                <span className={`${css.card_heading_span} ${css.card_heading_span_1}`}>The sea explorer</span>
                            </h4>
                            <div className={css.card_details}>
                                <ul>
                                    <li>3 days tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy</li>
                                    <li>Difficulty: easy</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${css.card_side} ${css.card_side_back} ${css.card_side_back_1}`}>
                           <div className={`${css.card_cta}`}>
                               <div className={`${css.card_price_box}`}>
                                   <p className={`${css.card_price_only}`}>Only</p>
                                   <p className={`${css.card_price_value}`}>$249</p>
                               </div>
                               <Link href={'#popup'}><a className={`${css.btn} ${css.btnWhite}`}>Book now!</a></Link>
                           </div>
                        </div>
                    </div>
                </div>

                <div className={css.col_1_of_3}>
                    <div className={css.card}>
                        <div className={`${css.card_side} ${css.card_side_front}`}>
                            <div className={`${css.card_picture} ${css.card_picture_2}`}>
                            </div>
                            <h4 className={css.card_heading}>
                                <span className={`${css.card_heading_span} ${css.card_heading_span_2}`}>The forest hiker</span>
                            </h4>
                            <div className={css.card_details}>
                                <ul>
                                    <li>7 days tours</li>
                                    <li>Up to 40 people</li>
                                    <li>6 tour guides</li>
                                    <li>Sleep in provided tents</li>
                                    <li>Difficulty: medium</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${css.card_side} ${css.card_side_back} ${css.card_side_back_2}`}>
                           <div className={`${css.card_cta}`}>
                               <div className={`${css.card_price_box}`}>
                                   <p className={`${css.card_price_only}`}>Only</p>
                                   <p className={`${css.card_price_value}`}>$497</p>
                               </div>
                               <Link href={'#popup'} as={'#popup'}><a className={`${css.btn} ${css.btnWhite}`}>Book now!</a></Link>
                           </div>
                        </div>
                    </div>
                </div>

                <div className={css.col_1_of_3}>
                    <div className={css.card}>
                        <div className={`${css.card_side} ${css.card_side_front}`}>
                            <div className={`${css.card_picture} ${css.card_picture_3}`}>
                            </div>
                            <h4 className={css.card_heading}>
                                <span className={`${css.card_heading_span} ${css.card_heading_span_3}`}>The snow adventurer</span>
                            </h4>
                            <div className={css.card_details}>
                                <ul>
                                    <li>5 days tours</li>
                                    <li>Up to 15 people</li>
                                    <li>3 tour guides</li>
                                    <li>Sleep in provided tents</li>
                                    <li>Difficulty: hard</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${css.card_side} ${css.card_side_back} ${css.card_side_back_3}`}>
                           <div className={`${css.card_cta}`}>
                               <div className={`${css.card_price_box} `}>
                                   <p className={`${css.card_price_only}`}>Only</p>
                                   <p className={`${css.card_price_value}`}>$897</p>
                               </div>
                               <Link href={'#popup'}><a className={`${css.btn} ${css.btnWhite} ${css.u_center_text}`}>Book now!</a></Link>
                           </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={`${css.u_center_text} ${css.u_margin_top_huge}`}>
                    <Link href={'#'}><a className={`${css.btn} ${css.btn_green}`}>Discover all tours</a></Link>
            </div>
        </section>
    )
};

export default Tours;