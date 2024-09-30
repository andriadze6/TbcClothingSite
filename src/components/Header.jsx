import '../assets/css/Header.css'
import instagramIcon from '../assets/img/InstagramIcon.png'
import facebookIcon from '../assets/img/facebookIcon.png';
import twitterIcon from '../assets/img/twitterIcon.png';
import searchIcon from '../assets/img/icon-search.png';
import logo from '../assets/img/Logo.png';
import cartIcon from '../assets/img/icon-cart.png';
import { Link } from 'react-router-dom';
function Header(){
    return(
        <header>
            <div className="header1-Div">
                <div className='header1-content'>
                    <div className='language'>
                        <div>
                            <Link>ქართული</Link>
                        </div>
                        <div className='lang-divider'></div>
                        <div>
                            <Link>English</Link>
                        </div>
                    </div>
                    <div className='socialNetwork'>
                        <img src={facebookIcon} alt="" />
                        <img src={instagramIcon}alt=''/>
                        <img src={twitterIcon} alt=''/>
                    </div>
                    <div className='login-Account'>
                        <button className='sign-button'>Sign up</button>
                    </div>
                </div>
            </div>
            <div className='header2-div'>
                <div className='header2-content'>
                    <div className='search-Div'>
                        <input placeholder='Search...' className='search-input'/>
                        <button id='search-button'><img src={searchIcon} alt="" /></button>
                    </div>
                    <div className='Logo-Div'>
                        <img className='header-logo-img' src={logo} alt="" />
                    </div>
                    <div className='cart-Div'>
                        <div className='img-container'>
                            <img className='header-logo-img' src={cartIcon} alt="" /> 
                            <p id='HeaderCartID'>6</p>
                        </div>
                        <p>Item(s) - <span>50$</span></p>                   
                    </div>
                </div>
            </div>
            <div className='header3-div'>
                <nav className='header3-content'>
                    <div className='navName-div'>
                        <Link to="/" className='navName'>Home</Link>
                    </div>
                    <div className='navName-div'>
                        <Link className='navName'>Women <i className="fa fa-angle-down"></i></Link>
                        <div className='drop-down-manu'>
                            <div>
                                <h3 className='category-name'>Clothing</h3>
                                <ul>
                                    <li>Shirt</li>
                                    <li>Tops</li>
                                    <li>Jeans</li>
                                    <li>View all</li>
                                </ul>
                            </div>
                            <div>
                            <h3 className='category-name'>Shoes</h3>
                                <ul>
                                    <li>Shirt</li>
                                    <li>Tops</li>
                                    <li>Jeans</li>
                                    <li>View all</li>
                                </ul>
                            </div>
                            <div className='category-name'>
                                <h3>Shoes</h3>
                                <ul>
                                    <li>Shirt</li>
                                    <li>Tops</li>
                                    <li>Jeans</li>
                                    <li>View all</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='navName-div'>
                        <Link className='navName'>Mens <i className="fa fa-angle-down"></i></Link>
                        <div className='drop-down-manu'>
                            <div>
                                <h3 className='category-name'>Clothing1</h3>
                                <ul>
                                    <li>Shirt</li>
                                    <li>Tops</li>
                                    <li>Jeans</li>
                                    <li>View all</li>
                                </ul>
                            </div>
                            <div>
                            <h3 className='category-name'>Shoes2</h3>
                                <ul>
                                    <li>Shirt</li>
                                    <li>Tops</li>
                                    <li>Jeans</li>
                                    <li>View all</li>
                                </ul>
                            </div>
                            <div className='category-name'>
                                <h3>Shoes3</h3>
                                <ul>
                                    <li>Shirt</li>
                                    <li>Tops</li>
                                    <li>Jeans</li>
                                    <li>View all</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='navName-div'>
                        <Link className='navName'>Kids <i className="fa fa-angle-down"></i></Link>
                        <div className='drop-down-manu'>
                            <div>
                                <h3 className='category-name'>test</h3>
                                <ul>
                                    <li>Shirt</li>
                                    <li>Tops</li>
                                    <li>Jeans</li>
                                    <li>View all</li>
                                </ul>
                            </div>
                            <div>
                            <h3 className='category-name'>tes2</h3>
                                <ul>
                                    <li>Shirt</li>
                                    <li>Tops</li>
                                    <li>Jeans</li>
                                    <li>View all</li>
                                </ul>
                            </div>
                            <div className='category-name'>
                                <h3>test3</h3>
                                <ul>
                                    <li>Shirt</li>
                                    <li>Tops</li>
                                    <li>Jeans</li>
                                    <li>View all</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='navName-div'>
                        <Link to={'/aboutUs'} className='navName'>About us</Link>
                    </div>
                    <div className='navName-div'>
                        <Link to={'/contact'}className='navName'>Contact</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header;