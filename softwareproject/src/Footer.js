import React from "react";
import "./Footer.css";
import { Helmet } from "react-helmet";

class Footer extends React.Component {
    render() {
        return (

            <div class="Parent_error_class">
                <div className="application">
                    <head>
                        <Helmet>
                            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css' />
                            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css' />
                            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' />
                            <link rel='stylesheet' href='https://themify.me/wp-content/themes/themify-v32/themify-icons/themify-icons.css'/>
                            {/* <link rel="stylesheet" href="./footer.css" /> */}

                </Helmet>
            </head>
        </div>
        
                    <footer class="new_footer_area bg_color">
                        <div class="new_footer_top">
                            <div class="container">
                                
                            </div>
                            <div class="footer_bg">
                                <div class="footer_bg_one"></div>
                                <div class="footer_bg_two"></div>
                            </div>
                        </div>
                        <div class="footer_bottom">
                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-lg-6 col-sm-7">
                                        <p class="mb-0f_400 ">© ISI Inc.. 2020 All rights reserved.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>

                );
              }
            }
            export default Footer;
