import React from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const data = {articles};
    const [article, setArticle] = React.useState(data);

    const sortVote = () => {
        setArticle([...article].sort((a, b) => new Date(a.date)-new Date(b.date)));
        console.log('clicked');
    };
  
  const sortByUpvotes = () => {
    setArticle([...article].sort((ab, bc) =>
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
            <Articles sortVote={sortVote} sortByUpvotes={sortByUpvotes} articles={articles}/>
        </div>
    );

};


export default App;
