import React from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Posts">
        <Post
          avatar="https://scontent-los2-1.cdninstagram.com/vp/d47f666f8e4ca5f67a7bd56dac1af066/5E401946/t51.2885-19/s150x150/65794811_327590168143714_2043665604031807488_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com"
          caption="The @skims Cotton Collection restock - coming OCTOBER 31 at 9AM PST / 12PM EST. "
          image="https://scontent-los2-1.cdninstagram.com/vp/86f6a4b8e771b36a3e3d1fcfd5d913b3/5E47B2FF/t51.2885-15/e35/p1080x1080/71801960_570041507105926_6596780095629972696_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=1"
          username="kimkardashian"
        />
      </div>
    </div>
  );
}

export default App;
