import React from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const [articless, setArticles] = React.useState(articles);

    const sortVote = () => {
        setArticles([...articless].sort((a, b) => new Date(a.date)-new Date(b.date)));
        console.log('clicked');
    };
  
  const sortByUpvotes = () => {
    setArticles([...articless].sort((ab, bc) =>
        ab.upvotes > bc.upvotes ? 1 : -1))
        console.log('clicked');
    };

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small"
                onClick={sortByUpvotes}>Most Upvoted</button>
                <button  data-testid="most-recent-link" className="small" 
                onClick={sortVote}>Most Recent</button>
            </div>
            <Articles articles={articless}/>
        </div>
    );

};


export default App;