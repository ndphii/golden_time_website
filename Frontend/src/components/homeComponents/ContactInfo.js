import React from "react";
import "./contact.css";
const ContactInfo = () => {
  return (
    <>
      <div className="container pt-4  ">
        <h2 class="section-title px-5"><span class="px-2">WATCH NEWS</span></h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src="images/WATCHNEWS1.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Đồng hồ nam mặt chữ nhật Orient giá bao nhiêu, mua ở đâu?</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div class="card-footer d-flex justify-content-between ">
                <small class="text-muted">Last updated 1 month ago</small>
                <a className="card-link  text-primary " href="#">Đọc tiếp</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="images/WATCHNEWS2.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">7 Cách Kiểm Tra Đồng Hồ Orient Chính Hãng Đơn Giản Nhất</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div class="card-footer d-flex justify-content-between ">
                <small class="text-muted">Last updated 5 day ago</small>
                <a className="card-link  text-primary " href="#">Đọc tiếp</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="images/WATCHNEWS3.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Cách lên dây cót đồng hồ cơ Orient đúng và đủ cho người mới</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div class="card-footer d-flex justify-content-between ">
                <small class="text-muted">Last updated 5 day ago</small>
                <a className="card-link  text-primary " href="#">Đọc tiếp</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid pt-5 text-contact">
        <div class="text-center mb-4">
          <h2 class="section-title px-5"><span class="px-2">Contact Queries</span></h2>
        </div>
        <div class="row px-xl-5">
          <div class="col-lg-7 mb-5">
            <div class="contact-form">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" novalidate="novalidate">
                <div class="control-group">
                  <input type="text" class="form-control" id="name" placeholder="Your Name"
                    required="required" data-validation-required-message="Please enter your name" />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input type="email" class="form-control" id="email" placeholder="Your Email"
                    required="required" data-validation-required-message="Please enter your email" />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <input type="text" class="form-control" id="subject" placeholder="Subject"
                    required="required" data-validation-required-message="Please enter a subject" />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="control-group">
                  <textarea class="form-control" rows="6" id="message" placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"></textarea>
                  <p class="help-block text-danger"></p>
                </div>
                <div>
                  <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send
                    Message</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-5 mb-5 ">
            <h5 class="font-weight-semi-bold mb-3">Get In Touch</h5>
            <p>Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.</p>
            <div class="d-flex flex-column mb-3 mt-2">
              <h5 class="font-weight-semi-bold mb-3">Store 1</h5>
              <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>137 Nguyễn Thị Thập, Thanh Khê Tây, Liên Chiểu, Đà Nẵng 550000, Việt Nam</p>
              <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>goldentime@gmail.com</p>
              <p class="mb-2"><i class="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
            </div>
            <div class="d-flex flex-column">
              <h5 class="font-weight-semi-bold mb-3">Store 2</h5>
              <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>137 Nguyễn Thị Thập, Thanh Khê Tây, Liên Chiểu, Đà Nẵng 550000, Việt Nam</p>
              <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>goldentime@gmail.com</p>
              <p class="mb-0"><i class="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card mb-3" >
              <div class="row g-0">
                <div class="col-md-4">
                  <iframe loading="lazy" title="Đồng Hồ Orient" width="1170" height="658" src="https://www.youtube.com/embed/videoseries?list=PLYNNji2ShyuAgr92B8LPsrNBv3G6zniqI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" data-rocket-lazyload="fitvidscompatible" class="img-fluid rounded-start lazyloaded" data-ll-status="loaded"></iframe>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">VIDEO INSTRUCTIONS FOR USE</h5>
                    <p class="card-text">Đồng hồ Bambino là 1 dòng sản phẩm nổi tiếng của Orient Nhật Bản kiểu dáng Hoài cổ khi được trang bị kính cong tạo nên hiệu ứng thị giác đẹp mắt.Mời bạn tham khảo 5 sản phẩm đồng hồ kính cong Bambino </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-3" >
              <div class="row g-0">
                <div class="col-md-4">
                  <iframe className="img-fluid rounded-start" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.802446510125!2d108.16775494970574!3d16.075738143480606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218e6e07b1c3f%3A0x459e4bf5a2af323e!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYyDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1677693695249!5m2!1svi!2s" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Store address on the map</h5>
                    <p class="card-text">137 Nguyễn Thị Thập, Thanh Khê Tây, Liên Chiểu, Đà Nẵng 550000, Việt Nam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div>
    </>
  );
};
{/*
<iframe loading="lazy" title="Đồng Hồ Orient" width="1170" height="658" src="https://www.youtube.com/embed/videoseries?list=PLYNNji2ShyuAgr92B8LPsrNBv3G6zniqI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" data-rocket-lazyload="fitvidscompatible" class="lazyloaded" data-ll-status="loaded"></iframe>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.802446510125!2d108.16775494970574!3d16.075738143480606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218e6e07b1c3f%3A0x459e4bf5a2af323e!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYyDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1677693695249!5m2!1svi!2s" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
*/} export default ContactInfo;

