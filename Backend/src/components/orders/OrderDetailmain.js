import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deliveredOrder,
  getOrderDetails,
} from "./../../redux/Actions/OrderActions";
import Message from "./../LoadingError/Error";
import Loading from "./../LoadingError/Loading";
import OrderDetailInfo from "./OrderDetailInfo";
import OrderDetailProducts from "./OrderDetailProducts";
import moment from "moment";
import Toast from "../LoadingError/Toast";
import { toast } from "react-toastify";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 3000,
};

const OrderDetailmain = (props) => {
  const { orderId } = props;
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  const orderDelivered = useSelector((state) => state.orderDelivered);
  const { loading: loadingDelivered, success: successDelivered } =
    orderDelivered;

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId, successDelivered]);

  const deliverHandler = () => {
    if (!order.isPaid) {
      toast.warning("Order is not paid.", ToastObjects);
    } else {
      dispatch(deliveredOrder(order));
      toast.success("DELIVERED.", ToastObjects);

    }
  };

  const state = {
    value_stt: false
  }

  const handleChangePaid = (event) => {
    state.value_stt = Boolean(event.target.value);
    event.preventDefault();
  }


  const handleSubmitPaid = (event) => {
    //alert('Your favorite flavor is: ' + this.state.value_stt);
    console.log(state.value_stt);
    event.preventDefault();
    //this.setState({ value_status: this.target.value })
  }
  return (
    <>
      <Toast />
      <section className="content-main">
        <div className="content-header">
          <Link to="/orders" className="btn btn-dark text-white">
            Back To Orders
          </Link>
        </div>

        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <div className="card">
            <header className="card-header p-3 Header-green">
              <div className="row align-items-center ">
                <div className="col-lg-6 col-md-6">
                  <span>
                    <i className="far fa-calendar-alt mx-2"></i>
                    <b className="text-white">
                      {moment(order.createdAt).format("llll")}
                    </b>
                  </span>
                  <br />
                  <small className="text-white mx-3 ">
                    Order ID: {order._id}
                  </small>
                </div>
                <div className="col-lg-6 col-md-6 ms-auto d-flex justify-content-end align-items-center">
                  <form onSubmit={handleSubmitPaid} className="d-flex" onsubmit="return false">
                    <select onChange={handleChangePaid}
                      className="form-select"
                      style={{ maxWidth: "200px" }}

                    >
                      <option value=''>Unpaid</option>
                      <option value="Ispaid">Ispaid</option>
                    </select>
                    <button type="submit" value="submit" className="btn btn-success ms-2" >
                      <i className="fas fa-archive"></i>
                    </button>
                  </form>
                </div>
              </div>
            </header>
            <div className="card-body">
              {/* Order info */}
              <OrderDetailInfo order={order} />

              <div className="row">
                <div className="col-lg-9">
                  <div className="table-responsive">
                    <OrderDetailProducts order={order} loading={loading} />
                  </div>
                </div>
                {/* Payment Info */}
                <div className="col-lg-3">
                  <div className="box shadow-sm bg-light">
                    {order.isDelivered ? (
                      <button className="btn btn-success col-12">
                        DELIVERED AT ({" "}
                        {moment(order.deliveredAt).format("MMM Do YY")})
                      </button>
                    ) : (
                      <>
                        {loadingDelivered && <Loading />}
                        <button
                          onClick={deliverHandler}
                          className="btn btn-dark col-12"
                        >
                          MARK AS DELIVERED
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default OrderDetailmain;
