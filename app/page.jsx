import Feed from "@components/Feed";

const Home = () => {
  return (
    <>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover & Share
          <br />
          <span className="orange_gradient text-center">
            AI-Powered Prompts
          </span>
        </h1>
        <p className="desc text-0center">
          Promptopia is an open-source AI prompting tools for modern wolrd to
          discover, create and share creative prompts
        </p>
      </section>
      <Feed />
    </>
  );
};

export default Home;
