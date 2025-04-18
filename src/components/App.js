import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";

console.log(blogData);

function App() {
  const {name, image, about, posts, date} = blogData;
  return (
    <div className="App">
      <Header name={name}/>
      <About about={about} image={image} />
      <ArticleList posts={posts}/>
      <Article date={date} />
    </div>
  );
}

export default App;
