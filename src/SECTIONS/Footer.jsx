import Logo from "../REUSABLE COMPONENTS/Logo";

function Footer() {

return (
    <footer>
       <div className="footer-logo-links-group">

                <div className="footer-Logo-container-small">
                <Logo/>  
                </div>

                <div className="footer-links">
                    <div>
                        <a className='footer-link' href="#">FAQs</a>
                    </div>
                    <div>
                        <a className='footer-link' href="#">Privacy Policy</a>
                    </div>
                    <div>
                        <a className='footer-link'  href="#">Install Guide</a>
                    </div>
                    <div>
                        <a className='footer-link'  href="#">Contact Us</a>
                    </div>
                    <div>
                        <a className='footer-link'  href="#">Press kit</a>
                    </div>
                </div>

            </div>


            <div className="footer-social-links">
                <div>
                    <a className="social-link" href="#"><i className="fa-brands fa-square-facebook"></i></a>
                </div>
                <div>
                    <a className="social-link" href="#"><i className="fa-brands fa-twitter"></i></a>
                </div>
                <div>
                    <a className="social-link" href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>


            </div>

    </footer>



);

}

export default Footer;