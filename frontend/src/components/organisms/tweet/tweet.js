import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom';
import Tweetdetail from './tweetdetail';
import Tweetlist from './tweetlist';
import TweetCreate from './tweetcreate';

const Tweet = () => {

    return (
        <Router>
            <div className="w-full border border-gray-400">
                <Switch>
                    <Route path="/tweet" exact component={Tweetlist} />
                    <Route path="/tweet/:id/" component={Tweetdetail} />
                </Switch>
            </div>
        </Router>
    );
};

export default Tweet;
