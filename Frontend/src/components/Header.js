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
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end  d-flex align-items-center ">
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
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top  ">
        <div class="container-fluid">
          <Link className="navbar-brand col-lg-2 col-4 d-flex justify-content-center" to="/">
            <img alt="logo" src="/images/logo.png" />
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll overflow-y " >
              <li class="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Product">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#Watchnews">Watch News</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contact
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a class="dropdown-item" href="#Contact">Contact Queries</a></li>
                  <li><a class="dropdown-item" href="#Emaillatestsale">Sign up for free and get the latest sale</a></li>
                  <li><hr class="dropdown-divider text-white" /></li>
                  <li><a class="dropdown-item" href="https://goo.gl/maps/7tgZTdygqcfWtonm9">137 Nguyễn Thị Thập...Đà Nẵng<small className="text-primary"> (map)</small></a></li>
                </ul>
              </li>
            </ul>
            <span class="navbar-text me-5">
              BEGIN YOUR OWN TRADITIONAL
            </span>
            <div class="d-flex btn btn-dark">
              <Link to="/cart" className="d-flex me-4 ms-1 ">
                <i class="fa-solid fa-cart-shopping pt-3 fs-5 text-light"></i>
                <p class="d-flex align-text-top text-danger ms-1 fw-bold ">{cartItems.length}</p>
              </Link>
              {userInfo ? (
                <div class="dropdown">
                  <button class="btn  btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fas fa-user fs-5 pt-1"></i> {userInfo.name}
                  </button>
                  <ul class="margin-block-start dropdown-menu dropdown-menu-end " aria-labelledby="dropdownMenuButton1">
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#" onClick={logoutHandler}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fas fa-user"></i>
                  </button>
                  <ul class="margin-block-start dropdown-menu dropdown-menu-end  " aria-labelledby="dropdownMenuButton1">
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/register">
                        Register
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
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
