import React from 'react';
import Tweetdetail from './components/organisms/tweet/tweetdetail';
import Tweetlist from './components/organisms/tweet/tweetlist';
import TweetCreate from './components/organisms/tweet/tweetcreate';
import Tweet from './components/organisms/tweet/tweet';
import './index.css';
// import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Tweet />
      <Tweetdetail />
      <TweetCreate />
    </div>
  );
}

export default App;
