import React,{useState,useEffect} from 'react';
import axios from 'axios';
// import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
// import tweetdetail from './tweetdetail';


const Tweet = () => {
    const [tweets,setTweets] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            const data = await axios.get(
                'http://0.0.0.0:8000/tweet/',
            );
            console.log(data);
            setTweets(data.data);
            console.log(data.data);
        };
        fetchData();
    },[]);

    return (
        <div>
            <div>
                {tweets.map(tweet => (
                    <div key={tweet.id} className="">
                        <div>
                            <p>{tweet.text}</p>
                        </div>
                        <div>
                            {tweet.image ? <img src={tweet.image} alt='img' /> : <></>}
                            {tweet.video ? <video controls src={tweet.video} /> : <></>}
                        </div>
                        <p>{tweet.create_at}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tweet;