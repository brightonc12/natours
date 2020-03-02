import React from 'react';
import { GiWorld, GiCompass, GiTreasureMap, GiHearts } from 'react-icons/gi'

// @ts-ignore
import css from './features.scss'


const Feature = () => {


    return (
        <section className={css.section_features}>
            <div className={css.row}>
                <div className={css.col_1_of_4}>
                    <div className={css.featureBox}>
                            <GiWorld className={css.featureBox_icon}/>
                        <h3 className={`${css.headingTertiary} ${css.u_margin_bottom_small}`}>Explore the world</h3>
                        <p className={css.featureBox_text}>
                            The padding on all sides of the hero image text has also been
                            increased, allowing for a</p>
                    </div>
                </div>

                <div className={css.col_1_of_4}>
                    <div className={css.featureBox}>
                            <GiCompass className={css.featureBox_icon}/>
                        <h3 className={`${css.headingTertiary} ${css.u_margin_bottom_small}`}>Explore the world</h3>
                        <p className={css.featureBox_text}>
                            The padding on all sides of the hero image text has also been
                            increased, allowing for a</p>
                    </div>
                </div>

                <div className={css.col_1_of_4}>
                    <div className={css.featureBox}>
                            <GiTreasureMap className={css.featureBox_icon}/>
                        <h3 className={`${css.headingTertiary} ${css.u_margin_bottom_small}`}>Explore the world</h3>
                        <p className={css.featureBox_text}>
                            The padding on all sides of the hero image text has also been
                            increased, allowing for a</p>
                    </div>
                </div>

                <div className={css.col_1_of_4}>
                    <div className={css.featureBox}>
                            <GiHearts className={css.featureBox_icon}/>
                        <h3 className={`${css.headingTertiary} ${css.u_margin_bottom_small}`}>Explore the world</h3>
                        <p className={css.featureBox_text}>
                            The padding on all sides of the hero image text has also been
                            increased, allowing for a</p>
                    </div>
                </div>
            </div>

        </section>
    )
};

export default Feature;