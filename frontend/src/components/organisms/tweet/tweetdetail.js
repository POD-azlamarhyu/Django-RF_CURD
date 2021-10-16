import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import {ConvertDate} from '../../functions/convert';
import { BrowserRouter as Router,Switch,Route,Link,useRouteMatch } from 'react-router-dom';
import TweetUpdate from './tweetupdate';


const Tweetdetail = (tweet_id) => {

    const [tweetDetail,setTweetDetail] = useState([]);
    const {id} = useParams();
    const match = useRouteMatch();
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
        <Router>
            <Switch>
                <Route path={`${match.url}/`}>
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
                            <div　className='flex justify-end'>
                                <Link to={`${match.url}/update`}>
                                    <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">編集</button>
                                </Link>
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