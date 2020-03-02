import React from 'react';
import Link from 'next/link';
// @ts-ignore
import css from './about.scss';
import { mediaPhone, mediaTabPort } from '../../../style/abstracts/mixins';

const About = () => {
    return (
        <section className={`${css.sectionAbout} ${css.u_margin_bottom_huge}`}>
            <div className={css.u_center_text}>
                <h2 className={`${css.headingSecondary} ${css.u_margin_bottom_huge}`}>
                    Exciting tours for adventurous people
                </h2>
            </div>

            <div className={css.row}>
                <div className={css.col_1_of_2}>
                    <h3 className={`${css.headingTertiary} ${css.u_margin_bottom_small}`}>
                        You are going to fall in love with nature
                    </h3>
                    <p className={css.paragraph}>
                        The padding along the left and right edges has been increased from 1 em to 4 em.
                        The padding on all sides of the hero image text has also been increased, allowing for a
                        larger graphic. The additional styles are shown in listing. The padding along the left and right
                        edges has been increased from 1 em to 4 em.
                        The padding on all sides of the hero image text has also been increased, allowing for a
                        larger graphic. The additional styles are shown in listing
                    </p>

                    <h3 className={`${css.headingTertiary} ${css.u_margin_bottom_small}`}>
                        Live adventurous like you have never before
                    </h3>
                    <p className={css.paragraph}>
                        The padding along the e padding on all sides of the hero image text has also been increased,
                        allowing for a
                        larger graphic. The additional styles are shown in listing. The padding along the left and right
                        edges has been increased from 1 em to 4 em.
                    </p>
                    <Link href={'#'}>
                        <a className={css.btnText}>Learn more &rarr;</a>
                    </Link>
                </div>
                <div className={css.col_1_of_2}>
                    <div className={css.composition}>

                        <img
                            className={`${css.composition__photo} ${css.composition__photo_p1}`}
                            srcSet={'/static/images/nat-1.jpg 300w, /static/images/nat-1-large.jpg 1000w'}
                            sizes={`${mediaTabPort} 20vw, ${mediaPhone} 30vw, 300px`}
                            alt={`image 1`}
                            src={'/static/images/nat-1-large.jpg'}
                        />

                        <img
                            className={`${css.composition__photo} ${css.composition__photo_p2}`}
                            srcSet={'/static/images/nat-2.jpg 300w, /static/images/nat-2-large.jpg 1000w'}
                            sizes={`${mediaTabPort} 20vw, ${mediaPhone} 30vw, 300px`}
                            alt={`image 2`}
                            src={'/static/images/nat-2-large.jpg'}
                        />

                        <img
                            className={`${css.composition__photo} ${css.composition__photo_p3}`}
                            srcSet={'/static/images/nat-3.jpg 300w, /static/images/nat-3-large.jpg 1000w'}
                            sizes={`${mediaTabPort} 20vw, ${mediaPhone} 30vw, 300px`}
                            alt={`image 3`}
                            src={'/static/images/nat-3-large.jpg'}
                        />

                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;