import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let {title,description,imageUrl,newsUrl,source,author,date } = this.props;
    return (
      <div>
          <div className="card my-2" >
          
      <img src={imageUrl} className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span className="badge badge-danger" style={{backgroundColor:"red", width:"120px"}}>{source.name}</span>
     
        <p className="card-text">{description}</p>

        <a href={newsUrl}   rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">Read More</a>
        <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
      </div>
     
    </div></div>
    )
  }
}

export default NewsItem 