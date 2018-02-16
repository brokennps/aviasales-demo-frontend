import React from "react";
import "flexboxgrid2";
import Header from "./Header";
import Footer from "./Footer";

const App = () => (
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
);

const Content = () => (
  <main>
    <div>popular destinations</div>
    <div>best price</div>
    <div>offer</div>
    <div>info</div>
    <div>app</div>
  </main>
);

export default App;
