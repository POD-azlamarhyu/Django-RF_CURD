import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Tweetlist = () => {
    const [tweets,setTweets] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            const data = await axios.get(
                'http://0.0.0.0:8000/tweet/',
            );
            setTweets(data.data);
        };
        fetchData();
    },[]);
    return (
        <div>
            <div className="space-y-4 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {tweets.map((tweet)=>(
                    <div key={tweet.id} className="border-2　border-grey-200">
                        <div>
                            <div>
                                <p className="text-left mh-3 break-words">{tweet.text}</p>
                            </div>
                            <div>
                                {tweet.image ? <img src={tweet.image} alt='img' /> : <></>}
                                {tweet.video ? <video controls src={tweet.video} /> : <></>}
                            </div>
                            <p className="text-xs text-gray-400">{tweet.create_at}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tweetlist;