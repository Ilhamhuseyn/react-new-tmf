import React from "react";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function ExampleCard({ image, name, description }) {
  return (
    <MKBox>
      <img src={image} alt={name} style={{ width: "100%" }} />
      <MKTypography variant="h5" style={{ color: "black", margin: "10px 0" }}>
        {name}
      </MKTypography>
      <MKTypography variant="body2" style={{ color: "black" }}>
        {description}
      </MKTypography>
    </MKBox>
  );
}

ExampleCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExampleCard;
