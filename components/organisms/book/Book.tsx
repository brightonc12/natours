import React from 'react';

// @ts-ignore
import css from './book.scss'

const Book = () => {
    return (
        <section className={css.section_book}>
            <div className={css.row}>
                <div className={css.book}>
                    <div className={css.book_form}>
                        <form className={css.form}>
                                <h2 className={`${css.headingSecondary} ${css.u_margin_bottom_medium}`}>
                                    Start booking now
                                </h2>
                            <div className={css.form_group}>
                                <input className={css.form_input} id='name' type={'text'} placeholder={'Full Name'}
                                       required/>
                                <label className={css.form_label} htmlFor='name'>Full Name</label>
                            </div>
                            <div className={css.form_group}>
                                <input className={css.form_input} id='email' type={'email'} placeholder={'Email'}
                                       required/>
                                <label className={css.form_label} htmlFor='email'>Email</label>
                            </div>

                            <div className={css.form_group}>
                                <div className={css.form_radio_group}>
                                    <input className={css.form_radio_input} id='small' type={'radio'} name={'size'} />
                                    <label className={css.form_radio_label} htmlFor='small'>
                                        <span className={css.form_radio_button}></span>
                                        Small tour group
                                    </label>
                                </div>

                                <div className={css.form_radio_group}>
                                    <input className={css.form_radio_input} id='large' type={'radio'} name={'size'} />
                                    <label className={css.form_radio_label} htmlFor='large'>
                                        <span className={css.form_radio_button}></span>
                                        Large tour group</label>
                                </div>
                                <div className={`${css.form_group } ${css.u_margin_top_big}`}>
                                    <button className={`${css.btn} ${css.btn_green}`}>
                                        Next step &rarr;
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Book;