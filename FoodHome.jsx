import React, { Component } from "react";
import FoodNav from "../common/FoodNav";
import "../css/foodHome.css";
import "../css/foodNav.css";
import * as restSvc from "../services/restuarantSvc";
import PropTypes from "prop-types";
import RestuarantCard2 from "../../recipeComponents/Recipes/functional/RestuarantCard_V2";

class FoodHome extends Component {
  state = {
    foodHeroImg:
      "https://www.oldpasadena.org/assets/Images/HomePageSlideShow/FairOaksBlvd-2732x1200px.jpg",
    expand: false,
    month: "",
    date: "",
    day: "",
    year: "",
    page: 6,
    size: 0,
    totalPages: 0,
    hasNext: "",
    hasPrev: "",
    profileArr: [],
    modList: [],
    mappedRestuarant: [],
    restName: "",
    restType: "",
    restPrice: "",
    latitude: "",
    longitude: "",
    center: { lat: 34.0211, lng: -118.39665 },
    showMap: false
  };

  componentDidMount() {
    console.log("Mounting Food Home");
    this.imgChange();
    this.setDate();
    this.loadRestuarants();
  }

  loadRestuarants = () => {
    restSvc
      .getAllRestuarants(this.state.size, this.state.page)
      .then(this.onRestGetSuccess)
      .catch(this.onRestGetError);
  };

  onRestGetSuccess = res => {
    console.log("Rest Get Success", res);
    this.setState(() => {
      return {
        totalPages: res.item.totalPages,
        profileArr: res.item.pagedItems,
        mappedRestuarant: res.item.pagedItems.map(this.mapRestuarant)
      };
    });
    this.setType(res.item.pagedItems);
  };

  setType = rest => {
    this.setState(() => {
      return {
        restType: rest[0].restType,
        restPrice: rest[0].restPrice,
        restType2: rest[1].restType,
        restType3: rest[2].restType,
        restType4: rest[4].restType
      };
    });
    this.countTypes(rest);
  };

  //Add duplicate types and set state
  countTypes = rest => {
    let counts = {};
    rest.forEach(function(x) {
      counts[x.restType] = (counts[x.restType] || 0) + 1;
    });

    this.setState(() => {
      return {
        brunchAmnt: counts.brunch,
        japaneseAmnt: counts.japanese,
        americanAmnt: counts.american,
        mexicanAmnt: counts.mexican
      };
    });
  };

  mapRestuarant = (yum, index) => (
    <RestuarantCard2
      index={index}
      yum={yum}
      key={yum.id}
      onRestSel={this.selRestuarant}
    />
  );

  selRestuarant = yum => {
    this.props.history.push(`/pasadena/${yum.id} `, { yum });
  };

  onRestGetError = err => {
    console.log("Rest Get Error", err);
  };

  //Set the Current date
  setDate = () => {
    let d = new Date();
    let n = d.toString();
    let v = n.split(" ");
    this.setState(() => {
      return {
        year: v[3],
        day: v[0],
        month: v[1],
        date: v[2]
      };
    });
  };

  //Change image according to time of day
  imgChange = () => {
    let d = new Date();
    let hr = d.getHours();
    if (hr === 0 || hr < 12) {
      console.log("morning");
      this.setState(() => {
        return {
          foodHeroImg:
            "https://www.oldpasadena.org/assets/Images/HomePageSlideShow/FairOaksBlvd-2732x1200px.jpg"
        };
      });
    } else if (hr === 12 || hr < 16) {
      console.log("afternoon");
      this.setState(() => {
        return {
          foodHeroImg:
            "https://www.tripsavvy.com/thmb/N5x4lxojVex4-87rQW72aKi6FOU=/1500x986/filters:no_upscale():max_bytes(150000):strip_icc()/Old-Pasadena-Historic-District-020-57c37f553df78cc16ebb37d7.jpg"
        };
      });
    } else if (hr === 16 || hr < 24) {
      console.log("evening");

      this.setState(() => {
        return {
          foodHeroImg:
            "https://cache.marriott.com/marriottassets/marriott/LAXPW/laxpw-attraction-pasadena-5762-hor-feat.jpg"
        };
      });
    } else {
      console.log("Img Change Error");
    }
  };

  //Expand social menu
  expandMenu = e => {
    e.preventDefault();
    this.setState(() => {
      return {
        expand: !this.state.expand
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <FoodNav />
        <div>
          <img
            className="food-hero-img"
            src={this.state.foodHeroImg}
            alt=""
            height="800"
            width="100%"
          />
          <div className="welcome-text">Best Restuarants in Pasadena</div>
        </div>
        <section>
          <div
            align="right"
            className={
              this.state.expand
                ? "food-share-container-expand"
                : "food-share-container"
            }
          >
            <button
              type="button"
              className="plus-btn"
              onClick={this.expandMenu}
            >
              <div
                className={this.state.expand ? "link-icon-expand" : "link-icon"}
              >
                <i
                  // id="menuToggle"
                  className={
                    this.state.expand
                      ? "fas fa-times-circle"
                      : "fas fa-plus-circle"
                  }
                />
              </div>
            </button>
            <a href="...">
              <div
                className={this.state.expand ? "link-icon-expand" : "link-icon"}
              >
                <i className="fab fa-facebook" />
              </div>
            </a>
            <a href="...">
              <div
                className={this.state.expand ? "link-icon-expand" : "link-icon"}
              >
                <i className="fab fa-twitter" />
              </div>
            </a>
            <a href="...">
              <div className="link-icon-expand">
                <i className={this.state.expand ? "fab fa-pinterest" : ""} />
              </div>
            </a>
            <a href="...">
              <div className="link-icon-expand">
                <i className={this.state.expand ? "fab fa-google-plus" : ""} />
              </div>
            </a>
            <div
              className={
                this.state.expand ? "food-share-sep-expand" : "food-share-sep"
              }
            ></div>
            <a href="...">
              <div
                className={this.state.expand ? "link-icon-expand" : "link-icon"}
              >
                <i className="far fa-envelope" />
              </div>
            </a>
          </div>
        </section>
        <section className="food-subheader">
          <div className="food-sub">
            {/* <span className="date-text">{this.state.day}</span> */}
            <span className="date-text">{this.state.month}</span>
            <span className="date-text">{this.state.date},</span>
            <span className="date-text">{this.state.year}</span>
            <span className="food-auth-text">| Naeem Sanders</span>
          </div>
          <div className="food-sub-2">
            mjsfnkjfdfk kjdsnfsdkjf sjdnksdf sjdfnkfnjfkd sjdksjdsd
          </div>
        </section>
        <section className="food-sticky-section food-list">
          <div className="food-sec">
            <div className="food-list-type-row food-grow">
              <div className="food-type-contain">
                <ul className="food-type-sort">
                  <li>
                    <button
                      id={this.state.restType}
                      value={this.state.restType}
                      type="button"
                      className="food-sort-btn"
                      onClick={this.sortRestByType}
                    >
                      {this.state.restType}
                      <span> {this.state.brunchAmnt}</span>
                    </button>
                  </li>
                  <li>
                    <button
                      id={this.state.restType2}
                      value={this.state.restType2}
                      type="button"
                      className="food-sort-btn-2"
                      onClick={this.sortRestByType}
                    >
                      {this.state.restType2}
                      <span> {this.state.japaneseAmnt}</span>
                    </button>
                  </li>
                  <li>
                    <button
                      id={this.state.restType3}
                      value={this.state.restType3}
                      type="button"
                      className="food-sort-btn-2"
                      onClick={this.sortRestByType}
                    >
                      {this.state.restType3}
                      <span> {this.state.americanAmnt}</span>
                    </button>
                  </li>
                  <li>
                    <button
                      id={this.state.restType4}
                      value={this.state.restType4}
                      type="button"
                      className="food-sort-btn-3"
                      onClick={this.sortRestByType}
                    >
                      {this.state.restType4}
                      <span> {this.state.mexicanAmnt}</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="map-card">dsdfd</div> */}
          <div className="rest-row">{this.state.mappedRestuarant}</div>
        </section>
      </React.Fragment>
    );
  }
}

FoodHome.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default FoodHome;
