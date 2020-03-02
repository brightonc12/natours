import React from 'react';

// @ts-ignore
import css from './stories.scss';
import Link from 'next/link';

const Stories = () => {
    return (
        <section className={css.section_stories}>
            <div className={css.bg_video}>
                <video className={css.bg_video_content} autoPlay muted loop>
                    <source src={'static/videos/video.mp4'} type={'video/mp4'}/>
                    <source src={'static/videos/video.webm'} type={'video/webm'}/>
                    Your browser is not supported!
                </video>
            </div>
            <div className={css.u_center_text}>
                <h2 className={`${css.headingSecondary} ${css.u_margin_bottom_big}`}>
                    We make people genuinely happy
                </h2>
            </div>

            <div className={css.row}>

                <div className={css.story}>
                    <figure className={css.story_shape}>
                        <img className={css.story_img} src={'static/images/nat-8.jpg'} alt={'person on a tour'} />
                        <figcaption className={css.story_caption}>Sally Johnson</figcaption>
                    </figure>

                    <div className={css.story_text}>
                        <h3 className={`${css.heading_tertiary} ${css.u_margin_bottom_small}`}>I had the best week ever
                            with my family</h3>
                        <p>It works fine for me, but if you find an element "shaking" (esp in Chrome), it's likely
                            because of the translate function not working with the z-index correctly. but if you find an
                            element "shaking" (esp in Chrome), it's likely
                            because of the translate function not working with the z-index correctly. but if you find an
                            element "shaking" (esp in Chrome), it's likely
                            because of the translate function not working with the z-index correctly</p>
                    </div>
                </div>
            </div>

            <div className={css.row}>

                <div className={css.story}>
                    <figure className={css.story_shape}>
                        <img className={css.story_img} src={'static/images/nat-9.jpg'} alt={'person on a tour'} />
                        <figcaption className={css.story_caption}>William Roberts</figcaption>
                    </figure>

                    <div className={css.story_text}>
                        <h3 className={`${css.heading_tertiary} ${css.u_margin_bottom_small}`}>WOW! My life is completely different now</h3>
                        <p>It works fine for me, but if you find an element "shaking" (esp in Chrome), it's likely
                            because of the translate function not working with the z-index correctly. but if you find an
                            element "shaking" (esp in Chrome), it's likely
                            because of the translate function not wo</p>
                    </div>
                </div>
            </div>

            <div className={`${css.u_center_text} ${css.u_margin_top_huge}`}>
                <Link href={'#'}><a className={`${css.btnText}`}>Read all stories &rarr;</a></Link>

            </div>
        </section>
    )
};

export default Stories;