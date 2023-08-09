import React, { FC, useEffect } from "react";
import Divider from "../../ui-kit/divider/Divider";
import { ReactComponent as IconLogo } from "../../../../public/logo-pyro.svg";
import MediaIcon from "../../MediaIcon";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__grid">
          <div className="footer__col-1">
            <h4 className="footer__title">About Whoosh</h4>
            <p className="footer__text footer__text-icon">
              Express delivery of documents and parcels for organizations,
              express delivery of correspondence, purchases and other goods
            </p>
          </div>
          <div className="footer__col-2">
            <h4 className="footer__title footer__title-underline">Menu</h4>
            <ul className="footer__link">
              <li className="footer__text ">About company</li>
              <li className="footer__text ">Contact</li>
              <li className="footer__text">Rules</li>
              <li className="footer__text">FAQ</li>
              <li className="footer__text">Reviews</li>
              <li className="footer__text">Cargo transportation</li>
              <li className="footer__text">Tariffs</li>
            </ul>
          </div>
          <div className="footer__col-3">
            <h4 className="footer__title footer__title-underline">Services</h4>
            <ul className="footer__link">
              <li className="footer__text">Online stores</li>
              <li className="footer__text">Legal entity</li>
              <li className="footer__text">API Integration</li>
              <li className="footer__text">Contract</li>
              <li className="footer__text">Jobs</li>
              <li className="footer__text">Courier job</li>
              <li className="footer__text">The blog</li>
            </ul>
          </div>
          <div className="footer__col-4">
            <h4 className="footer__title footer__title-underline">
              Contact us
            </h4>
            <p className="footer__number">8 800 934 5959</p>
            <p className="footer__text-icon-pin">
              {"2545 W. Diversey Ave. \n 3rd Floor Chicago, IL 60647"}
            </p>
            <MediaIcon />
          </div>
        </div>

        <div className="footer__rights">
          <Divider icon={<p className="divider-text">Made by</p>} type="text" />
          <p className="footer__text all-right">
            © 2022. All rights reserved.
          </p>
          <div className="logo">
            <IconLogo />
          </div>
          <p className="footer__text privacy">Privacy policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
