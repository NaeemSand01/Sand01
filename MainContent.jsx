import React, { Component } from "react";
import "./css/mainContent.css";
import Articles from "./Articles";

class MainContent extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="mainContent main">
          <div className="container">
            <div className="page-header">
              <h4>Featured Collection</h4>
            </div>
            <div className="row featuredCollection">
              <div className="col-md-4 col-12">
                <div
                  className="thumbnail"
                  onclick="if (!window.__cfRLUnblockHandlers) return false; location.href='single-product.html';"
                  data-cf-modified-eec38fbc6349d7ac4f3e88d2-=""
                >
                  <div className="imageWrapper">
                    <img
                      src="http://themes.iamabdus.com/bigbag/2.1/img/home/featured-collection/featured-collection-01.jpg"
                      alt="featured-collection-img"
                      className="collectionImg"
                    />
                    <div className="masking">
                      <a href="..." className="btn viewBtn">
                        View Products
                      </a>
                    </div>
                    <div className="caption">
                      <h3>Shoes Collections</h3>
                      <span>Starts From $59.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div
                  className="thumbnail"
                  onclick="if (!window.__cfRLUnblockHandlers) return false; location.href='single-product.html';"
                  data-cf-modified-eec38fbc6349d7ac4f3e88d2-=""
                >
                  <div className="imageWrapper">
                    <img
                      src="http://themes.iamabdus.com/bigbag/2.1/img/home/featured-collection/featured-collection-02.jpg"
                      alt="featured-collection-img"
                    />
                    <div className="masking">
                      <a href="..." className="btn viewBtn">
                        View Products
                      </a>
                    </div>
                    <div className="caption">
                      <h3>Bags & Backpacks</h3>
                      <span>Starts From $150.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div
                  className="thumbnail"
                  onclick="if (!window.__cfRLUnblockHandlers) return false; location.href='single-product.html';"
                  data-cf-modified-eec38fbc6349d7ac4f3e88d2-=""
                >
                  <div className="imageWrapper">
                    <img
                      src="http://themes.iamabdus.com/bigbag/2.1/img/home/featured-collection/featured-collection-03.jpg"
                      alt="featured-collection-img"
                    />
                    <div className="masking">
                      <a href="..." className="btn viewBtn">
                        View Products
                      </a>
                    </div>
                    <div className="caption">
                      <h3 className="collectionText">Glasses Collections</h3>
                      <span>Starts From $25.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-header">
              <div className="controls-top">
                <a
                  className="btn-floating-1"
                  href="#multi-item-example"
                  data-slide="prev"
                >
                  <i className="fa fa-chevron-left" />
                </a>
                <a
                  className="btn-floating-2"
                  href="#multi-item-example"
                  data-slide="next"
                >
                  <i className="fa fa-chevron-right" />
                </a>
              </div>
              <h4>Featured Products</h4>
            </div>
            {/* SLider template */}
            <div>
              <div className="container my-4">
                <strong>
                  {/*Carousel Wrapper*/}
                  <div
                    id="multi-item-example"
                    className="carousel slide carousel-multi-item"
                    data-ride="carousel"
                  >
                    {/*Controls*/}

                    {/*/.Controls*/}
                    {/*Indicators*/}
                    {/* <ol className="carousel-indicators">
                      <li
                        data-target="#multi-item-example"
                        data-slide-to={0}
                        className="active"
                      />
                      <li data-target="#multi-item-example" data-slide-to={1} />
                      <li data-target="#multi-item-example" data-slide-to={2} />
                    </ol> */}
                    {/*/.Indicators*/}
                    {/*Slides*/}
                    <div className="carousel-inner" role="listbox">
                      {/*First slide*/}
                      <div className="carousel-item active">
                        <div className="row featuredProductsSlider">
                          <div className="col-md-4">
                            <div className="card mb-2 productImage">
                              <img
                                className="card-img-top"
                                src="http://themes.iamabdus.com/bigbag/2.1/img/home/featured-product/product-01.jpg"
                                alt="Card img cap"
                              />
                              <div className="productMasking">
                                <ul
                                  className="list-inline btn-group"
                                  role="group"
                                >
                                  <li>
                                    <a
                                      href="..."
                                      className="btn btn-light btn-wishlist"
                                      tabIndex="-1"
                                    >
                                      <i className="far fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="..."
                                      onClick={this.addToCart}
                                      className="btn btn-light"
                                      id="featProduct1"
                                      tabIndex="-1"
                                    >
                                      <i className="fas fa-shopping-basket" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="..."
                                      className="btn btn-light"
                                      tabIndex="-1"
                                    >
                                      <i className="fas fa-eye" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="productCaption">
                              <a href="..." tabIndex="-1">
                                <h4>Nike Sportswear</h4>
                              </a>
                              <h3>$199</h3>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="card mb-2 productImage">
                              <img
                                className="card-img-top"
                                src="http://themes.iamabdus.com/bigbag/2.1/img/home/featured-product/product-02.jpg"
                                alt="Card img cap"
                              />
                              <div className="productMasking">
                                <ul
                                  className="list-inline btn-group"
                                  role="group"
                                >
                                  <li>
                                    <a
                                      href="..."
                                      className="btn btn-light btn-wishlist"
                                      tabIndex="-1"
                                    >
                                      <i className="far fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="..."
                                      onClick={this.addToCart}
                                      className="btn btn-light"
                                      id="featProduct1"
                                      tabIndex="-1"
                                    >
                                      <i className="fas fa-shopping-basket" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="..."
                                      className="btn btn-light"
                                      tabIndex="-1"
                                    >
                                      <i className="fas fa-eye" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="productCaption">
                              <a href="..." tabIndex="-1">
                                <h4>Dip Dyed Sweater</h4>
                              </a>
                              <h3>$149.00</h3>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="card mb-2 productImage">
                              <img
                                className="card-img-top"
                                src="http://themes.iamabdus.com/bigbag/2.1/img/home/featured-product/product-03.jpg"
                                alt="Card img cap"
                              />
                              <div className="productMasking">
                                <ul
                                  className="list-inline btn-group"
                                  role="group"
                                >
                                  <li>
                                    <a
                                      href="..."
                                      className="btn btn-light btn-wishlist"
                                      tabIndex="-1"
                                    >
                                      <i className="far fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="..."
                                      onClick={this.addToCart}
                                      className="btn btn-light"
                                      id="featProduct1"
                                      tabIndex="-1"
                                    >
                                      <i className="fas fa-shopping-basket" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="..."
                                      className="btn btn-light"
                                      tabIndex="-1"
                                    >
                                      <i className="fas fa-eye" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="productCaption">
                              <a href="..." tabIndex="-1">
                                <h4>Scarf Ring Corner</h4>
                              </a>
                              <h3>$79</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*/.First slide*/}
                      {/*Second slide*/}
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card mb-2 productImage">
                              <img
                                className="card-img-top"
                                src="http://themes.iamabdus.com/bigbag/2.1/img/home/featured-product/product-04.jpg"
                                alt="Card img cap"
                              />
                              <div className="productMasking">
                                <ul
                                  className="list-inline btn-group"
                                  role="group"
                                >
                                  <li>
                                    <a
                                      href="..."
                                      className="btn btn-light btn-wishlist"
                                      tabIndex="-1"
                                    >
                                      <i className="far fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="..."
                                      onClick={this.addToCart}
                                      className="btn btn-light"
                                      id="featProduct1"
                                      tabIndex="-1"
                                    >
                                      <i className="fas fa-shopping-basket" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="..."
                                      className="btn btn-light"
                                      tabIndex="-1"
                                    >
                                      <i className="fas fa-eye" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="productCaption">
                              <a href="..." tabIndex="-1">
                                <h4>Sun Buddies</h4>
                              </a>
                              <h3>$109</h3>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="card mb-2 productImage">
                              <img
                                className="card-img-top"
                                src="http://themes.iamabdus.com/bigbag/2.1/img/home/featured-product/product-05.jpg"
                                alt="Card img cap"
                              />
                              <div className="productMasking">
                                <ul
                                  className="list-inline btn-group"
                                  role="group"
                                >
                                  <li>
                                    <a
                                      href="..."
                                      className="btn btn-light btn-wishlist"
                                      tabIndex="-1"
                                    >
                                      <i className="far fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="..."
                                      onClick={this.addToCart}
                                      className="btn btn-light"
                                      id="featProduct1"
                                      tabIndex="-1"
                                    >
                                      <i className="fas fa-shopping-basket" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="..."
                                      className="btn btn-light"
                                      tabIndex="-1"
                                    >
                                      <i className="fas fa-eye" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="productCaption">
                              <a href="..." tabIndex="-1">
                                <h4>Scarf Ring Corner</h4>
                              </a>
                              <h3>$79</h3>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="card mb-2 productImage">
                              <img
                                className="card-img-top"
                                src="http://themes.iamabdus.com/bigbag/2.1/img/home/featured-product/product-06.jpg"
                                alt="Card img cap"
                              />
                              <div className="productMasking">
                                <ul
                                  className="list-inline btn-group"
                                  role="group"
                                >
                                  <li>
                                    <a
                                      href="..."
                                      className="btn btn-light btn-wishlist"
                                      tabIndex="-1"
                                    >
                                      <i className="far fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="..."
                                      onClick={this.addToCart}
                                      className="btn btn-light"
                                      id="featProduct1"
                                      tabIndex="-1"
                                    >
                                      <i className="fas fa-shopping-basket" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="..."
                                      className="btn btn-light"
                                      tabIndex="-1"
                                    >
                                      <i className="fas fa-eye" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="productCaption">
                              <a href="..." tabIndex="-1">
                                <h4>Addidas Collection</h4>
                              </a>
                              <h3>$309</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*/.Second slide*/}
                      {/*Third slide*/}
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card mb-2 productImage">
                              <img
                                className="card-img-top"
                                src="http://themes.iamabdus.com/bigbag/2.1/img/home/featured-product/product-07.jpg"
                                alt="Card img cap"
                              />
                              <div className="productMasking">
                                <ul
                                  className="list-inline btn-group"
                                  role="group"
                                >
                                  <li>
                                    <a
                                      href="..."
                                      className="btn btn-light btn-wishlist"
                                      tabIndex="-1"
                                    >
                                      <i className="far fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="..."
                                      onClick={this.addToCart}
                                      className="btn btn-light"
                                      id="featProduct1"
                                      tabIndex="-1"
                                    >
                                      <i className="fas fa-shopping-basket" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="..."
                                      className="btn btn-light"
                                      tabIndex="-1"
                                    >
                                      <i className="fas fa-eye" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="productCaption">
                              <a href="..." tabIndex="-1">
                                <h4>Off White Collection</h4>
                              </a>
                              <h3>$3000</h3>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="card mb-2 productImage">
                              <img
                                className="card-img-top"
                                src="http://themes.iamabdus.com/bigbag/2.1/img/home/featured-product/product-08.jpg"
                                alt="Card img cap"
                              />
                              <div className="productMasking">
                                <ul
                                  className="list-inline btn-group"
                                  role="group"
                                >
                                  <li>
                                    <a
                                      href="..."
                                      className="btn btn-light btn-wishlist"
                                      tabIndex="-1"
                                    >
                                      <i className="far fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="..."
                                      onClick={this.addToCart}
                                      className="btn btn-light"
                                      id="featProduct1"
                                      tabIndex="-1"
                                    >
                                      <i className="fas fa-shopping-basket" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="..."
                                      className="btn btn-light"
                                      tabIndex="-1"
                                    >
                                      <i className="fas fa-eye" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="productCaption">
                              <a href="..." tabIndex="-1">
                                <h4>PahnDaBlac Collection</h4>
                              </a>
                              <h3>$2000</h3>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="card mb-2 productImage">
                              <img
                                className="card-img-top"
                                src="http://themes.iamabdus.com/bigbag/2.1/img/home/featured-product/product-09.jpg"
                                alt="Card img cap"
                              />
                              <div className="productMasking">
                                <ul
                                  className="list-inline btn-group"
                                  role="group"
                                >
                                  <li>
                                    <a
                                      href="..."
                                      className="btn btn-light btn-wishlist"
                                      tabIndex="-1"
                                    >
                                      <i className="far fa-heart" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="..."
                                      onClick={this.addToCart}
                                      className="btn btn-light"
                                      id="featProduct1"
                                      tabIndex="-1"
                                    >
                                      <i className="fas fa-shopping-basket" />
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="..."
                                      className="btn btn-light"
                                      tabIndex="-1"
                                    >
                                      <i className="fas fa-eye" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="productCaption">
                              <a href="..." tabIndex="-1">
                                <h4>Pink Dolphin</h4>
                              </a>
                              <h3>$309</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*/.Third slide*/}
                    </div>
                    {/*/.Slides*/}
                  </div>
                  {/*/.Carousel Wrapper*/}
                </strong>
              </div>
              <strong></strong>
            </div>
            {/* Slider end */}
            <Articles />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default MainContent;
