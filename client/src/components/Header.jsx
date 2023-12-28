import React from 'react'
import myImage from "../pages/author.jpg";
export const Header = () => {
    return (
        <header className='header'>
            <div className="container p-2 rounded">
                <div className="navbar w-full">
                    <div className="nav-left">
                        <div className="new-quote-btn">
                            {/* <div className=" d-flex align-items-center justify-content-center">
                                <a href=''><box-icon name='plus' color="#ffffff"></box-icon></a>
                                <a href="">New <br /> Quote</a>
                            </div> */}
                            <a href="" className='d-flex'><box-icon name='plus' color="#ffffff"></box-icon> Add <br /> quote</a>
                        </div>
                    </div>
                    <div className="nav-middle">
                        <div className="logo-holder">
                            <a href="" className='logo'>15DaysWisdom</a>
                        </div>
                    </div>
                    <div className="nav-right">
                        <a className="author-holder d-flex align-items-center justify-content-center">
                            <div className="author-image">
                                <a href=""><img src={myImage} alt="" /></a>
                            </div>
                            <div className="author-info">
                                By <br />
                                <span>Harsh</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
