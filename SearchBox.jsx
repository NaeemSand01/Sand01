import React from "react";
import PropTypes from "prop-types";
// import "../css/mainContent.css";

const SearchBox = props => {
  const onSearchPress = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      props.onSearchClick();
    }
  };

  return (
    <React.Fragment>
      <fieldset>
        <div className="col-md-9 input-group md-form form-sm form-2 pl-0">
          <button
            type="submit"
            value="Submit search"
            onClick={props.onSearchClick}
          >
            <img
              height="46"
              src="https://iconsplace.com/wp-content/uploads/_icons/ffa500/256/png/fork-icon-11-256.png"
              alt="logo"
            />
          </button>
          <input
            type="text"
            name="query"
            placeholder="Find a Recipe"
            className="form-control my-0 py-1 search-input"
            value={props.query}
            onChange={props.onInputChange}
            onKeyPress={onSearchPress}
          />
        </div>
        <select
          name="type"
          value={props.type}
          className="form-control"
          onChange={props.onInputChange}
        >
          <option value={0}> -Select Search Type - </option>
          <option value={1}>Name</option>
          <option value={2}>CookTime</option>
          <option value={3}>PrepTime</option>
        </select>
      </fieldset>
    </React.Fragment>
  );
};

SearchBox.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
  type: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired
};

export default React.memo(SearchBox);
