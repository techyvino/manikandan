import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="mailto:manikandancloud99@gmail.com">Contact</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/manikrithu/">About us</a>
        </li>
        <li>
          <Link to="#0">Support</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
