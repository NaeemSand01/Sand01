import React from "react";
import "../css/recipe.css";
// import { UncontrolledTooltip } from "reactstrap";
import PropTypes from "prop-types";
import "../css/restuarantCard.css";

function RestuarantCard2(props) {
  const onRestSel = () => {
    props.onRestSel(props.yum);
  };

  return (
    <React.Fragment>
      <div className="col-6 col-color">
        <div className="rest-card">
          <div className="card-horizontal">
            <div className="img-square-wrapper">
              <img
                className="rest-img"
                src={
                  props.yum.restImg
                    ? props.yum.restImg
                    : "http://via.placeholder.com/300x180"
                }
                alt={props.yum.restImg}
              />
            </div>
            <div className="card-body">
              <button
                type="button"
                className="rest-btn"
                id={props.yum.id}
                value={props.yum.id}
                onClick={onRestSel}
              >
                <h4 className="rest-title">{props.yum.restName}</h4>
              </button>
              <div className="rest-type-price-row">
                <span className="rest-type-text">{props.yum.restType}</span> -
                <span className="rest-price-text"> {props.yum.restPrice}</span>
              </div>
              <div className="rest-review-text">
                Rating: {props.yum.restReview}
              </div>
              <hr />
              <p className="card-text">{props.yum.restDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

RestuarantCard2.propTypes = {
  yum: PropTypes.shape({
    id: PropTypes.number,
    restName: PropTypes.string,
    restType: PropTypes.string,
    restPrice: PropTypes.string,
    restImg: PropTypes.string,
    restSummary: PropTypes.string,
    restDescription: PropTypes.string,
    restReview: PropTypes.string
  }),
  onImgRight: PropTypes.func.isRequired,
  onImgLeft: PropTypes.func.isRequired,
  onRestSel: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  state: PropTypes.object.isRequired
};

export default RestuarantCard2;
