"use client";

import React from "react";
import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedResult, setSearchedResults] = useState([]);
  const [post, setPosts] = useState([]);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);

    const searchResult = filterPrompts(e.target.value);
    setSearchedResults(searchResult);
  };

  const filterPrompts = (searchtext) => {
    return post.filter((item) => String(item.prompt).includes(searchtext));
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
  }, [post]);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for prompt"
          value={searchText}
          onChange={handleSearchText}
          required
          className="search_input peer"
        />
      </form>

      {searchText !== "" ? (
        <PromptCardList data={searchedResult} handleTagClick={() => {}} />
      ) : (
        <PromptCardList data={post} handleTagClick={() => {}} />
      )}
    </section>
  );
};

export default Feed;
