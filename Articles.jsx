import React, { Component } from "react";
import "./css/articles.css";
import "./css/mainContent.css";

class Articles extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-header">
          <h4>Latest Articles</h4>
        </div>
        <div className="row latestArticles">
          <div className="col-md-4">
            <div className="thumbnail">
              <a href="...">
                <img
                  className="article"
                  src="http://themes.iamabdus.com/bigbag/2.1/img/home/articles/articles-01.jpg"
                  alt="article-img"
                />
              </a>
              <div className="date-holder">
                <p>08</p>
                <span>NOV</span>
              </div>
              <h5>
                <a href="..." className="article">
                  Leo Vitae Nibh Malesuada.
                </a>
              </h5>
              <span className="article">
                {" "}
                by{" "}
                <a className="pr01" href="...">
                  Abdus
                </a>{" "}
                /{" "}
                <a href="..." className="pl01">
                  5 Comments
                </a>
              </span>
              <div className="caption article">
                <text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque convallis nulla sed turpis pharetra pretium nec eu
                  sem.
                </text>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail">
              <a href="...">
                <img
                  className="article"
                  src="http://themes.iamabdus.com/bigbag/2.1/img/home/articles/articles-02.jpg"
                  alt="article-img"
                />
              </a>
              <div className="date-holder">
                <p>12</p>
                <span>NOV</span>
              </div>
              <h5 className="article">
                <a href="...">Malesuada Pulvinar Quis Fring.</a>
              </h5>
              <span className="article">
                {" "}
                by{" "}
                <a className="pr01" href="...">
                  Abdus
                </a>{" "}
                /{" "}
                <a href="..." className="pl01">
                  4 Comments
                </a>
              </span>
              <div className="caption article">
                <text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque convallis nulla sed turpis pharetra pretium nec eu
                  sem.
                </text>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="thumbnail">
              <a href="...">
                <img
                  className="article"
                  src="http://themes.iamabdus.com/bigbag/2.1/img/home/articles/articles-03.jpg"
                  alt="article-img"
                />
              </a>
              <div className="date-holder">
                <p className="date-text">23</p>
                <span>NOV</span>
              </div>
              <h5 className="article">
                <a href="...">Proin Lectus Sed Tincidunt Auctor.</a>
              </h5>
              <span className="article">
                {" "}
                by{" "}
                <a className="pr01" href="...">
                  Abdus
                </a>{" "}
                /{" "}
                <a href="..." className="pl01">
                  3 Comments
                </a>
              </span>
              <div className="caption article">
                <text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque convallis nulla sed turpis pharetra pretium nec eu
                  sem.
                </text>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Articles;
