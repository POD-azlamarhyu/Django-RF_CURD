import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom';
import Tweetdetail from './tweetdetail';
import Tweetlist from './tweetlist';
import axios from 'axios';
import TweetCreate from './tweetcreate';

const Tweet = () => {


    return (
        <div className="w-full">
            <TweetCreate />
            <Tweetlist />
        </div>
    );
};

export default Tweet;
