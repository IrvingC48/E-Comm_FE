import React from 'react';
import { HiHome, HiOutlineShoppingCart, HiOutlineInformationCircle } from "react-icons/hi";
import { GrFavorite, GrArticle } from "react-icons/gr";
import { MdExpandMore, MdOutlineContactPhone } from "react-icons/md";
import { Popover, Menu, Position, IconButton } from 'evergreen-ui'

//pages
import Home from '../../pages/Home';
import CatalogProducts from '../../pages/CatalogProducts';
import DetailProducts from '../../pages/DetailProducts';
import Signin from '../../pages/Signin';
import Signup from '../../pages/Signup';
import Cart from '../../pages/Cart';

//components
import MenuProfile from '../ProfileHeader/MenuProfile';
import Search from '../SearchInput/Search';

//styles
import './header.scss'

//Context
import CartContext from '../../context/Cart/CartState';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <Router>
            <div>
                <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <h1 className="navbar-item">The Shoe House</h1>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a role="button" className="navbar-burger is-active" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbar" className="navbar-menu is-active">
                        <div className="navbar-start">
                            <Link className="navbar-item" to="/">
                                <span className="icon">
                                    <HiHome/>
                                </span>
                                Home
                            </Link>

                            <Link className="navbar-item" to="/categories">
                                Categories
                            </Link>

                            <Link className="navbar-item" to="/products">
                                Products
                            </Link>

                            <Link className="navbar-item" to="/brands">
                                Brands
                            </Link>

                            <Popover
                                trigger='hover'
                                position={Position.BOTTOM_LEFT}
                                content={
                                    <Menu>
                                        <Menu.Group>
                                            <Menu.Item icon={<HiOutlineInformationCircle/>}>
                                                <Link to="/about_us">About Us...</Link>
                                            </Menu.Item>
                                            <Menu.Item icon={<MdOutlineContactPhone/>}>
                                                <Link to="/contact_us">Contact Us</Link>
                                            </Menu.Item>
                                            <Menu.Item icon={<GrArticle/>}>
                                                <Link to="/blog">Blog</Link>
                                            </Menu.Item>
                                        </Menu.Group>
                                    </Menu>
                                }
                                >
                                <Link className="navbar-item" to="/about_us">
                                    Pages
                                    <span className="icon">
                                        <MdExpandMore/>
                                    </span>
                                    </Link>
                            </Popover>
                        </div>

                        <div className="navbar-end">
                            <Search/>
                            <div className="navbar-item">
                                <Link to='/favorites'><IconButton icon={<GrFavorite/>}/></Link>
                            </div>
                            <Link className="navbar-item" to="/cart">
                                <IconButton icon={<HiOutlineShoppingCart/>} />
                            </Link>
                            <MenuProfile />
                        </div>
                    </div>
                </nav>
            </div>

            <CartContext>
                <Switch>
                        <Route path="/cart">
                            <Cart/>
                        </Route>
                        <Route path="/signin">
                            <Signin />
                        </Route>
                        <Route path="/signup">
                            <Signup/>
                        </Route>
                        <Route path="/products">
                            <CatalogProducts />
                        </Route>
                        <Route path="/detail_product/:productId">
                            <DetailProducts />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                </Switch>
            </CartContext>
        </Router>
    )
}

export default Header
