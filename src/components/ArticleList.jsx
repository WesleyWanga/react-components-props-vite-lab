// Displays all blog articles

import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const articleComponents = posts.map((post) => {
    return <Article key={post.id} post={post} />;
  });

  return <main>{articleComponents}</main>;
}

export default ArticleList;