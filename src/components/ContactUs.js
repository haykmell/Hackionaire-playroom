import React, { useState } from 'react'
import Header from './Header'
import emailjs from 'emailjs-com';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm('service_zl9hs09', 'template_uxmjtsm', e.target, 'user_Lt8CidRi57uxSXsWaqqBB')
            .then((result) => {
                alert('Thank you for message!')
                setName('')
                setEmail('')
                setMessage('')
            }, (error) => {
                console.log(error.text);
            });

    }

    return (
        <div>
            {/* HEADER BEGIN */}
            <div className="top-panel">
                <div className="l-page-width clearfix">
                    <div className="wrapper">
                        <div className="widget widget_cws_tweets">
                            <div className="cws-widget-content ">
                                <div className="latest_tweets ">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*/ .top-panel*/}
            <div className="kids-bg-level-1">
                <div className="bg-level-1" />
                <Header page={"contact-us"} />
                {/*/ #kids_header*/}
                {/* HEADER END */}
            </div>
            {/* .bg-level-1 */}
            <div id="kids_middle_container">
                {/* .content */}
                <div className="kids_top_content">
                    <div className="kids_top_content_middle ">
                        <div className="header_container ">
                            <div className="l-page-width">
                                <h1>Contact</h1>
                                <ul id="breadcrumbs">
                                    <li><a href="/" title="Home">Home</a></li> <span className="delimiter">&gt;</span>
                                    <li><span className="current_crumb">Contact</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* .kids_top_content_middle */}
                </div>
                <div className="bg-level-2-full-width-container kids_bottom_content">
                    <div className="bg-level-2-page-width-container no-padding">
                        <section className="kids_bottom_content_container">
                            {/* ***************** - START Image floating - *************** */}
                            <div className="page-content">
                                <div className="bg-level-2 first-part" />
                                <div className="container l-page-width">
                                    <div className="entry-container ">
                                        <main>
                                            <div className="grid-row clearfix">
                                                <div className="grid-col grid-col-12">
                                                    <section className="cws-widget">
                                                        <div className="widget-title">How to find us</div>
                                                        <section className="cws_widget_content">
                                                            {/* map */}
                                                            <div className="map-container">
                                                                <div id="map" className="google-map" />
                                                            </div>
                                                            {/*/ map */}
                                                        </section>
                                                    </section>
                                                </div>
                                            </div>
                                            <div className="grid-row clearfix">
                                                <div className="grid-col grid-col-9">
                                                    <section className="cws-widget">
                                                        <div className="widget-title">Get In Touch</div>
                                                        <section className="cws_widget_content">
                                                            <div role="form" className="wpcf7" id="wpcf7-f622-p199-o1" lang="en-US" dir="ltr">
                                                                <div className="screen-reader-response" />
                                                                <form onSubmit={handleSubmit} className="wpcf7-form contact-form">
                                                                    <p><span className="wpcf7-form-control-wrap your-name">
                                                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" size={49} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-invalid="false" placeholder="Name" /></span> <span className="wpcf7-form-control-wrap your-email">
                                                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" size={49} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="E-mail" /></span><span className="wpcf7-form-control-wrap your-message">
                                                                            <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} cols={103} rows={8} className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Message" /></span>
                                                                        <input type="submit" defaultValue="Send" className="wpcf7-form-control wpcf7-submit" />
                                                                    </p>
                                                                </form>
                                                                <div id="email_server_responce" />
                                                                <div className="message_box error-box  close">
                                                                    <div className="message_box_header">Error Box</div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </section>
                                                </div>
                                                <div className="grid-col grid-col-3">
                                                    <section className="cws-widget">
                                                        <div className="widget-title">Contact Details</div>
                                                        <section className="cws_widget_content">
                                                            <p><strong>Street Name</strong></p>
                                                            <p><strong>Suite 1&nbsp;New York</strong></p>
                                                            <p><strong>Phone: + 1 800 123 4567</strong></p>
                                                            <p><strong>Questions: + 1 800 691 7652</strong></p>
                                                            <p><strong>Support: <a className="link" href="mailto:support@support.com">support@playroom.com</a></strong>
                                                            </p>
                                                        </section>
                                                    </section>
                                                </div>
                                            </div>
                                            {/* comments block */}
                                            {/* //end comments block */}
                                        </main>
                                        <div className="kids_clear" />
                                    </div>
                                    {/* .entry-container */}
                                </div>
                                <div className="bg-level-2 second-part" />
                            </div>
                            {/* ***************** - END Image floating - *************** */}
                        </section>
                        {/* .bottom_content_container */}
                    </div>
                    <div className="content_bottom_bg" />
                </div>
            </div>
            {/* .end_content */}
            {/* FOOTER BEGIN */}
            <div className="kids_bottom_container footer">
                <div className="l-page-width">
                    <div className="wrapper">
                        <div className="widget widget_text">
                            <div className="textwidget">
                                <div className="shortcode_carousel" data-carousel-column={1}>
                                    <div className="carousel_header clearfix">
                                        <div className="widget-title">Gallery</div>
                                    </div>
                                    <div className="carousel_content">
                                        {/* see gallery_shortcode() */}
                                        <div id="ngallery-1" className="ngallery clearfix column-1">
                                            <dl className="gallery-item">
                                                <dt className="gallery-icon ">
                                                    <div className="content-wrapper">
                                                        <figure>
                                                            <a href="pic/HappyFeet_1st4.jpg" data-rel="prettyPhoto[12135]" className="prettyPhoto kids_picture">
                                                                <img src="pic/300x300-img-4.jpg" alt="" />
                                                            </a>
                                                        </figure>
                                                    </div>
                                                </dt>
                                            </dl>
                                            <dl className="gallery-item">
                                                <dt className="gallery-icon">
                                                    <div className="content-wrapper">
                                                        <figure>
                                                            <a href="pic/Tangled_3rd5.jpg" data-rel="prettyPhoto[12135]" className="prettyPhoto kids_picture">
                                                                <img src="pic/300x300-img-12.jpg" alt="" />
                                                            </a>
                                                        </figure>
                                                    </div>
                                                </dt>
                                            </dl>
                                            <dl className="gallery-item">
                                                <dt className="gallery-icon ">
                                                    <div className="content-wrapper">
                                                        <figure>
                                                            <a href="pic/LegoMovie_3rd4.jpg" data-rel="prettyPhoto[12135]" className="prettyPhoto kids_picture">
                                                                <img src="pic/300x300-img-9.jpg" alt="" />
                                                            </a>
                                                        </figure>
                                                    </div>
                                                </dt>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="widget widget_calendar">
                            <h3 className="widget-title">Calendar</h3>
                            <div id="calendar_wrap">
                            </div>
                        </div>
                    </div>
                    {/* /wrapper */}
                </div>
                {/*/ l-page-width*/}
            </div>
            {/* .kids_bottom_container */}
            <div className="kids-footer-copyrights footer">
                <div className="l-page-width  clearfix">
                    <div className="wrapper">
                        <ul className="kids_social">
                            <li><a href="/" title="Google Plus" target="_blank"><i className="fa fa-google-plus fa-2x" /></a><span style={{ backgroundColor: '#dd4b39' }} /></li>
                            <li><a href="/" title="Facebook" target="_blank"><i className="fa fa-facebook fa-2x" /></a><span style={{ backgroundColor: '#3b5998' }} /></li>
                            <li><a href="/" title="Youtube" target="_blank"><i className="fa fa-youtube-play fa-2x" /></a><span style={{ backgroundColor: '#b31217' }} /></li>
                            <li><a href="/" title="Twitter" target="_blank"><i className="fa fa-twitter fa-2x" /></a><span style={{ backgroundColor: '#4099ff' }} /></li>
                        </ul>
                        <div className="widget widget_text">
                            <div className="textwidget">Copyrights @2020: Playroom -Quiz and Games</div>
                        </div>
                    </div>
                </div>
                <div className="dark-mask" />
            </div>
        </div>
    )
}

export default ContactUs
