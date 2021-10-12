import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import {ConvertDate} from '../../functions/convert';


const Tweetdetail = (tweet_id) => {

    const [tweetDetail,setTweetDetail] = useState([]);
    const {id} = useParams();
    console.log(tweet_id.match);
    console.log(id);
    useEffect(()=>{
        const fetchData = async() => {
            const data = await axios.get(
                `http://0.0.0.0:8000/tweet/${tweet_id.match.params.id}`,{
                    method:'GET',
                }
            )
            setTweetDetail(data.data);
        };
        fetchData();
    },[tweet_id.match.params.id]);

    return (
        <div>
            <div className="p-4 min-h-96 border-t border-gray-400">
                <div>
                    <p>{tweetDetail.text}</p>
                </div>
                <div>
                    {tweetDetail.image ? <img src={tweetDetail.image} alt='img' /> : <></>}
                    {tweetDetail.video ? <video controls src={tweetDetail.video} /> : <></>}
                </div>
                <div>
                    <p>{ConvertDate(tweetDetail.create_at)}</p>
                </div>
            </div>
        </div>
    );
}

export default Tweetdetail;