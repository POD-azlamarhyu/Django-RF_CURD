import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom';
import Tweetdetail from './tweetdetail';
import Tweetlist from './tweetlist';
import axios from 'axios';

const Tweet = () => {


    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    {tweets.map((tweet)=>(
                        <Tweetlist tweet={tweet} />
                    ))}
                </Route>
                <Route path={'/tweetdetail/'+tweets.id} exact>
                    <Tweetdetail id={tweets.id} />
                </Route>
            </Switch>
        </Router>
    )
};

export default Tweet;
