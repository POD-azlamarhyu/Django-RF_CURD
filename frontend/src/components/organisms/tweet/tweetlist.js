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
            console.log(data);
            setTweets(data.data);
            console.log(data.data);
        };
        fetchData();
    },[]);
    return (
        <div>
            <div>
                {tweets.map((tweet)=>(
                    <div key={tweets.id} className="">
                        <div>
                            <div>
                                <p>{tweets.text}</p>
                            </div>
                            <div>
                                {tweets.image ? <img src={tweets.image} alt='img' /> : <></>}
                                {tweets.video ? <video controls src={tweets.video} /> : <></>}
                            </div>
                            <p>{tweets.create_at}</p>
                        </div>
                        <div>
                            <Link to={'/tweetdetail/'+tweets.id}>詳細</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tweetlist;