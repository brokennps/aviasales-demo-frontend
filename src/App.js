import React from "react";
import "flexboxgrid2";
import Header from "./Header";
import Footer from "./Footer";
import Destinations from "./Destinations";

const App = () => (
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
);

const Content = () => (
  <main>
    <Destinations />
    <div>best price</div>
    <div>offer</div>
    <div>info</div>
    <div>app</div>
  </main>
);

export default App;
