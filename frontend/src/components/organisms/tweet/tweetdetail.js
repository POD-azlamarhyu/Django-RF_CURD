import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {ConvertDate} from '../../functions/convert';
import { BrowserRouter as Router,Switch,Route,Link,useRouteMatch } from 'react-router-dom';
import TweetUpdate from './tweetupdate';
import { react_tweet_end_point } from '../../functions/ulrs';


const Tweetdetail = (tweet_id) => {

    const [tweetDetail,setTweetDetail] = useState([]);

    const match = useRouteMatch();
    useEffect(()=>{
        const fetchData = async() => {
            const data = await axios.get(
                `${react_tweet_end_point}/${tweet_id.match.params.id}`,{
                }
            )
            setTweetDetail(data.data);
        };
        fetchData();
    },[tweet_id.match.params.id]);

    const tweetDelete = () =>{
        const conf = window.confirm("このツイートを削除してよろしいですか？");
        if(conf){
            axios.delete(`${react_tweet_end_point}/${tweet_id.match.params.id}`)
        }
    }

    return (
        <Router>
            <Switch>
                <Route path={`${match.url}/`}>
                    <div>
                        <div className='my-2'>
                            <h2 className='font-bold'>詳細</h2>
                        </div>
                        <div className="p-4 min-h-96 border-t border-gray-400">
                            <div>
                                <p>{tweetDetail.text}</p>
                            </div>
                            <div>
                                {tweetDetail.image ? <img src={`${react_tweet_end_point}${tweetDetail.image}`} alt='img' /> : <></>}
                                {tweetDetail.video ? <video controls src={`${react_tweet_end_point}${tweetDetail.video}`} /> : <></>}
                            </div>
                            <div>
                                <p>{ConvertDate(tweetDetail.create_at)}</p>
                            </div>
                            <div　className='flex justify-end'>
                                <Link to={`${match.url}/update`}>
                                    <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2" type="submit">編集</button>
                                </Link>
                                <button className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2" type="submit" onClick={tweetDelete}>編集</button>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route path={`${match.url}/update`}>
                    <TweetUpdate tweet_id={tweet_id.match.params.id}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Tweetdetail;