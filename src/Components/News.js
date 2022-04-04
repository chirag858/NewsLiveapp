import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes  from "prop-types";
import Spinner from "./Spinner";
export default class News extends Component {
 static defaultProps={
country : "in",
category :"general",
pageSize:6,
 }
 static propTypes={
  category: PropTypes.string,
   country:PropTypes.string,
   pageSize:PropTypes.number
 }
 async componentDidMount(){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&Apikey=f5d0cabef0b3424ab754212e72b52cc3&page=1&pageSize=${this.props.pageSize}`;
 this.setState.loading = true;
   let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  console.log(parsedData.totalResults + " jai mata di");
  this.setState({articles:parsedData.articles,totalResults :parsedData.totalResults, loading:false})
}
constructor() {
    super();
    console.log("Hello Iam a constructor from news component");
    this.state = {
      articles: [],
      page:1,
      loading:true,
    };
  }
handleNextclick= async()=>{
  if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize)))
 {
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f5d0cabef0b3424ab754212e72b52cc3&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
 console.log(url);
  this.setState.loading = true;
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
this.setState({
  page:this.state.page+1,
  articles:parsedData.articles,
  loading: false
})
}
}
handlePrevclick=async()=>{
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f5d0cabef0b3424ab754212e72b52cc3&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  this.setState.loading = true;
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
 
console.log("prev");
this.setState({
  page:this.state.page-1,
  articles:parsedData.articles,
  loading:false
})
}

  render() {
    return (
      
      <div className="container my-3">
        <h2 className="text-center my-3">NewsMonkey -Top Headlines from {this.props.category}</h2>
        {this.state.loading && <Spinner/>}
                <div className="row ">
          { !this.state.loading && this.state.articles?.map((element) => {
            return (
              console.log(element.newsUrl),
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  key={element.url}
                  title={(element.title==null)?"":element.title.slice(0,44)}
                  description={(element.description==null)?"":element.description.slice(0,88)}
                  imageUrl={element.urlToImage}
                  source = {element.source}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevclick} className="btn btn-dark">Prev</button>
        <button type="button" onClick={this.handleNextclick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}className="btn btn-dark">Next</button>
     </div>
      </div>
    );
  }
}


