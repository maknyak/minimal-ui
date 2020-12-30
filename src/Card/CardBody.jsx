import { memo } from "react";
import PropTypes from "prop-types";
import { cardBody } from "./style";

export const CardBody = memo(({ children, style }) => (
  <div css={[cardBody, style]}>{children}</div>
));

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

CardBody.defaultProps = {
  style: null,
};
