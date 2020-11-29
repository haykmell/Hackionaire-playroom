import React from 'react'

const Header = ({ page }) => {


    return (
        <>
            <header id="kids_header">
                <div className="l-page-width clearfix">
                    {/* .kids_social */}
                    <div className="kids_clear" />
                    <div id="kids_logo_block" className="logo-position-left">
                        <a id="kids_logo_text" href="/"><img src="images/logo.png" alt="HappyKids - Premium Children HTML Template" title="HappyKids - Premium Children HTML Template" /></a>
                    </div>
                    <nav id="kids_main_nav" className="menu-position-right">
                        <div className="menu-button">
                            <span className="menu-button-line" />
                            <span className="menu-button-line" />
                            <span className="menu-button-line" />
                        </div>
                        <ul id="menu-main" className="clearfix flexnav " data-breakpoint={800}>
                            <li className={page === "home" ? "menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item" : "menu-item"}>
                                <a href="/">Home</a></li>
                            <li className={page === "game-gallery" ? "menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item" : "menu-item"}><a href="/game-gallery">Game Gallery</a>
                            </li>
                            <li className={page === "contact-us" ? "menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item" : "menu-item"}><a href="/contact-us">Contact</a></li>
                        </ul>
                    </nav>
                    {/* #kids_main_nav */}
                </div>
                {/*/ .l-page-width*/}
            </header>
        </>
    )
}

export default Header
