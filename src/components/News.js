import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
// import Button from "react-bootstrap/Button";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const updateNews = async() =>{
  props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cc1aa51c764b429dadb9311cecefd384&page=${page}&pagesize=${props.pageSize}`;
    let data = await fetch(url);
   props.setProgress(30)
    let parsedData = await data.json();
    console.log(parsedData);
   props.setProgress(70)
   setArticles(parsedData.articles)
   setTotalResults(parsedData.totalResults)
   setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    return () => {
      document.title =`${capitalizeFirstLetter(
        props.category
      )} - NewsMonkey`;
      updateNews();
    };
    //eslint-disable-next-line
  }, []);
   const fetchMoreData = async() => {
     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cc1aa51c764b429dadb9311cecefd384&page=${page+1}&pagesize=${props.pageSize}`;
     setPage(page+1)
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  };
  // handlePreviousClick = async () => {
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a03fccc67607459f8abb61f1eb87d0c2&page=${state.page-1}&pagesize=${props.pageSize}`;
  //setState({ loading: true });
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // console.log(parsedData);
  //setState({
  //   page:state.page - 1,
  //   articles: parsedData.articles,
  //   loading: false,
  // });
  //  setState({ page:state.page - 1 });
  //  updateNews();
  // };
  // handleNextClick = async () => {
  // if (
  //   !(
  //    state.page + 1 >
  //     Math.ceil(state.totalResults / props.pageSize)
  //   )
  // ) {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     props.country
  //   }&category=${props.category}&apiKey=a03fccc67607459f8abb61f1eb87d0c2&page=${
  //    state.page + 1
  //   }&pagesize=${props.pageSize}`;

  //  setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //  setState({
  //     page:state.page + 1,
  //     articles: parsedData.articles,
  //     loading: false,
  //   });
  // }
  //setState({ page:state.page + 1 });
  //updateNews();
  // };
    return (
      <div className="container">
        <h1 className="text-center" style={{ margin: "20px,0px", marginTop:"90px", color:"white"}}>
          Top {props.category} headlines
        </h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={
            <h4>
              <Spinner />
            </h4>
          }
        >
          {loading && <Spinner />}
          <div className="container">

          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    />
                </div>
              );
            })}
          </div>
            </div>
        </InfiniteScroll>
        {/* <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between" }} */}
        {/* > */}
        {/* <div className="container d-flex justify-content-between"> bootstrapClass */}
        {/* <Button
            disabled={state.page <= 1}
            variant="dark"
            onClick={handlePreviousClick}
          >
            &larr;Previous
          </Button>
          <Button
            disabled={
             state.page + 1 >
              Math.ceil(state.totalResults / props.pageSize)
            }
            variant="dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </Button>
        </div> */}
      </div>
    );
}
export default News;
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};