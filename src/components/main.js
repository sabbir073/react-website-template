import React, { Component } from "react";
import ScrollToTop from "react-router-scroll-top";
import "bootstrap/dist/css/bootstrap.css";
import "simplebar/dist/simplebar.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./home";
import About from "./about";
import HowItWorks from "./howitworks";
import Pricing from "./pricing";
import Contact from "./contact";
import ScrollTop from "react-scrolltop-button";
import NotFound from "./notfound";
class Main extends Component {
  state = {};
  componentDidMount() {
    const script = document.createElement("script");

    script.src =
      "http://demo.hasthemes.com/streamo-v1/streamo/assets/js/vendor/jquery-3.3.1.min.js";
    script.async = true;

    document.body.appendChild(script);

    const popper = document.createElement("popper");
    popper.src =
      "http://demo.hasthemes.com/streamo-v1/streamo/assets/js/popper.min.js";

    popper.async = true;
    document.body.appendChild(popper);

    const boot = document.createElement("boot");
    boot.src =
      "http://demo.hasthemes.com/streamo-v1/streamo/assets/js/bootstrap.min.js";

    boot.async = true;
    document.body.appendChild(boot);

    const plugin = document.createElement("plugin");
    plugin.src =
      "http://demo.hasthemes.com/streamo-v1/streamo/assets/js/plugins.js";

    plugin.async = true;
    document.body.appendChild(plugin);

    const mail = document.createElement("mail");
    mail.src =
      "http://demo.hasthemes.com/streamo-v1/streamo/assets/js/ajax-mail.js";

    mail.async = true;
    document.body.appendChild(mail);

    const main = document.createElement("main");
    main.src = "http://demo.hasthemes.com/streamo-v1/streamo/assets/js/main.js";

    main.async = true;
    document.body.appendChild(main);

    const modern = document.createElement("modern");
    modern.src =
      "http://demo.hasthemes.com/streamo-v1/streamo/assets/js/vendor/modernizr-3.6.0.min.js";

    modern.async = true;
    document.body.appendChild(modern);
  }

  render() {
    return (
      <HashRouter>
        <ScrollToTop>
          <div class="main-wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/howitworks" component={HowItWorks} />
              <Route exact path="/pricing" component={Pricing} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
            <ScrollTop
              style={{ backgroundColor: "#0259ae", color: "#ffffff" }}
              text=""
              className="zmdi zmdi-long-arrow-up"
            />
          </div>
        </ScrollToTop>
      </HashRouter>
    );
  }
}

export default Main;
