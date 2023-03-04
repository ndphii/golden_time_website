import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/Actions/UserActions";
import "./header_footer.css"
const Header = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const handleclick = () => {
    alert("ok");
  }

  return (
    <div>
      {/* Top Header */}
      <div className="Announcement " id="top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p className="d-flex">
                <i class="fa-solid fa-phone pe-2 pt-1"></i>
                : +84 788 030 999
                <i class="fa-solid fa-envelope pe-2 pt-1 ps-5" ></i>
                : goldentime@gmail.com
              </p>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.pinterest.com/">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand col-4 col-lg-2 ms-lg-5 ms-4" to="/">
            <img src="/images/logo.png" alt="" class="ms-lg-5 d-inline-block align-text-top" />
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto fs-5 mb-2 ms-lg-0 ms-3 mt-lg-0 mt-3 lh-lg mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#Product">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Watchnews">Watch News</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contacts
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#Contact">Contact Queries</a></li>
                  <li><a class="dropdown-item" href="#Emaillatestsale">RECEIVE SALE INFORMATION</a></li>
                  <li><hr class="dropdown-divider text-light" /></li>
                  <li><a class="dropdown-item" href="#">137 Nguyễn Thị Thập,..., Đà Nẵng <small className="text-primary">(map)</small></a></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex rounded-3 bg-dark p-2 me-lg-4">
              <Link to="/cart" className="cart-mobile-icon align-text-top d-flex me-2">
                <i className="fa-solid fa-cart-shopping mt-2 text-light  align-self-center fs-3 me-2"></i>
                <span className="fw-bold text-danger me-2">{cartItems.length}</span>
              </Link>
              {userInfo ? (
                <div class="dropdown  ">
                  <button class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-user pe-1"></i>{userInfo.name}
                  </button>

                  <ul class="dropdown-menu dropdown-menu-end margin-block-start" aria-labelledby="dropdownMenuLink">
                    <li><Link className="dropdown-item" to="/profile">
                      Profile
                    </Link></li>
                    <li><Link
                      className="dropdown-item"
                      to="#"
                      onClick={logoutHandler}
                    >
                      Logout
                    </Link></li>
                  </ul>
                </div>

              ) : (

                <div class="dropdown ">
                  <button class="btn btn-secondary dropdown-toggle " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-user"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end margin-block-start" aria-labelledby="dropdownMenuLink">
                    <li><Link className="dropdown-item" to="/login">
                      Login
                    </Link></li>
                    <li><Link className="dropdown-item" to="/register">
                      Register
                    </Link></li>
                  </ul>
                </div>
              )}
            </form>
          </div>
        </div>
      </nav>
      {/* Carousel */}

      <div id="carouselExampleCaptions" class="carousel container-fluid slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/images/slide3.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Lorem</h5>
              <p>A crown for every achievement.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/images/slide1.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Sunrise</h5>
              <p>Represents perfection and great achievement for the future..</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/images/slide2.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Benken</h5>
              <p>Represents creativity, non-stop efforts.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div >
  );
};

export default Header;
