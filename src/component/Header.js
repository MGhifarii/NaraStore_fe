import React, {Component} from 'react';
import { FaSignOutAlt, FaEdit,FaPlusSquare} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, reset } from '../features/auth/authSlice';


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
      };
    return (
        <>
            <header className="spacing-sm sticky-top">
            <div className="container-fluid w-100 p-0">
                <bottom>
                    <div className="navbar navbar-expand-lg navbar-light bg-primary">
                        <a className="navbar-brand mb-0 h1 text-light" href="/" >
                         <span>NaraStore</span></a>
                        <div className="collapse-navbar-collapse ml-auto">
                            <ul className="navbar-nav ">
                                <li className="nav-item ">
                                <div class="ml-12 flex">
                                    <button class="flex self-center ml-2 text-sm whitespace-nowrap text-white">
                                        <span className="self-center">
                                            <FaPlusSquare/>
                                        </span>
                                    <Link to={"/add"}>
                                        <span className="ml-2">Add</span>
                                    </Link>
                                    </button>
                                </div>
                                <div class="ml-12 flex">
                                    <button
                                    class="flex self-center ml-2 text-sm whitespace-nowrap text-white">
                                        <span className="self-center">
                                            <FaEdit/>
                                        </span>
                                    <Link to={"/edit-product"}>
                                        <span className="ml-2">Edit</span>
                                    </Link>
                                    </button>
                                </div>
                                <div class="ml-12 flex">
                                    <button
                                    onClick={onLogout}
                                    class="flex self-center ml-2 text-sm whitespace-nowrap text-white">
                                        <span className="self-center">
                                            <FaSignOutAlt/>
                                        </span>
                                    <span className="ml-2">Keluar</span>
                                    </button>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </bottom>
            </div>
        </header>
            {/* <nav class="navbar navbar-light bg-dark ">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1 text-light">Nara Shop</span>
                    <li class="nav-item">
                        <a class="nav-link">logout</a>
                    </li>
                </div>
            </nav> */}
        </>
      )
}

export default Header