import React, { Component } from "react";
import "./css/shop.css";
import Header from "../ecommerceHeader/Header";
import Nav from "../ecommerceHeader/Nav";
import Footer from "../ecommerceFooter/Footer";
import Copyright from "../ecommerceFooter/Copyright";
import FooterCarousel from "../ecommerceFooter/FooterCarousel";
// import "../ecommerceMainContent/css/mainContent.css";
import * as ShopProductSvc from "../../../services/shopProductServices";
import Modal from "react-awesome-modal";

class Shop extends Component {
  state = {
    id: "",
    shopProdName: "",
    shopProdPrice: "",
    shopProdId: 0,
    shopProdImg: "",
    shopProdAbout: "",
    pageSize: 0,
    pageIndex: 9,
    totalCount: 10,
    currentList: 0,
    list: [],
    hasNext: "",
    hasPrev: "",
    prodViewModal: false
  };

  componentDidMount() {
    this.getShopProducts();
    this.getCurr();
  }

  getCurr = () => {
    console.log("success");
  };

  getShopProducts = () => {
    ShopProductSvc.getAllShopProducts(this.state.pageIndex, this.state.pageSize)
      .then(this.getSuccess)
      .catch(this.getError);
  };

  getSuccess = res => {
    console.log(res, "Success");
    let shopProd = res.item.pagedItems;
    this.setState({
      list: shopProd
    });
  };

  getError = err => {
    console.log(err, "Error");
  };

  viewProduct = e => {
    this.setState({
      prodViewModal: true
    });
    this.getProdId(e);
  };

  getProdId = e => {
    debugger;
    e.preventDefault();
    let shopId = e.target.id;
    ShopProductSvc.getProductById(shopId)
      .then(this.onGetProdSuccess)
      .catch(this.onGetProdError);
  };

  onGetProdSuccess = res => {
    console.log(res, "success");

    this.setState({
      shopProdImg: res.item.shopProdImg,
      shopProdName: res.item.shopProdName,
      shopProdPrice: res.item.shopProdPrice,
      shopProdId: res.item.shopProdId,
      shopProdAbout: res.item.shopProdAbout
    });
  };

  onGetProdError = err => {
    console.log(err, "error");
  };

  closeViewModal = () => {
    this.setState({
      prodViewModal: false
    });
  };

  addToCart = e => {
    e.preventDefault();
  };

  addToWishlist = e => {
    e.preventDefault();
  };

  render() {
    const list = this.state.list.map(item => {
      return (
        <React.Fragment>
          <div className="col-md-4">
            <div className="productBox">
              <div className="productImage">
                <img
                  className="productImg"
                  src={item.shopProdImg}
                  alt="shopProcduct"
                />
                <div className="productMasking">
                  <ul className="list-inline btn-group" role="group">
                    <li>
                      <a
                        href="..."
                        className="btn btn-light btn-wishlist"
                        tabIndex="-1"
                        id={this.addToWishlist}
                      >
                        <i className="far fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="..."
                        onClick={this.addToCart}
                        className="btn btn-light"
                        tabIndex="-1"
                      >
                        <i
                          className="fas fa-shopping-basket"
                          id={item.shopProdId}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href={() => this.viewProduct()}
                        onClick={this.viewProduct}
                        className="btn btn-light"
                        tabIndex="-1"
                        id="prodView"
                      >
                        <i className="fas fa-eye" id={item.shopProdId} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="productCaption">
                <a href="..." className="caption">
                  <h5>{item.shopProdName}</h5>
                </a>
                <h3>${item.shopProdPrice}</h3>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });
    return (
      <React.Fragment>
        <Header />
        <Nav />
        <section className="mainContent productContent">
          <div className="container">
            <div className="row">{list}</div>
          </div>
        </section>
        <Modal
          visible={this.state.prodViewModal}
          width="1030"
          height="650"
          effect="fadeInUp"
          onClickAway={() => this.closeViewModal()}
        >
          <div className="quick-view" tabIndex="-1" role="dialog">
            <div className="modal-dial">
              <div className="modal-cont">
                <div className="modal-bod">
                  <button
                    type="button"
                    className="close"
                    onClick={() => this.closeViewModal()}
                  >
                    X
                  </button>
                  <div className="media flex-wrap">
                    <div className="media-left px-0">
                      <img
                        className="media-object"
                        src={this.state.shopProdImg}
                        alt="view-img"
                      />
                    </div>
                    <div className="media-body">
                      <h2>{this.state.shopProdName}</h2>
                      <h3>${this.state.shopProdPrice}</h3>
                      <p className="descrip">{this.state.shopProdAbout}</p>
                      <div className="btn-area">
                        <a
                          href="..."
                          onClick={this.addToCart}
                          className="btn btn-warning btn-block"
                        >
                          Add to Cart
                          <i className="fas fa-angle-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <FooterCarousel />
        <Footer />
        <Copyright />
      </React.Fragment>
    );
  }
}

export default Shop;
