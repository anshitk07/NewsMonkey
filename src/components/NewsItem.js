import React from "react";

const NewsItem = (props)=> {
  
    let {title , description,imageUrl,newsUrl,author, date} = props;
    return (
      <div className="my-3">
        <div className="card" >
          <img src={!imageUrl?"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/367000/367032.6.jpg":imageUrl} className="card-img-top"  alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title} <span class="badge badge-secondary">New</span></h5>
            <p className="card-">{description}</p>
            <p className="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More 
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
