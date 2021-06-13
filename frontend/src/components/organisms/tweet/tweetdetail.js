import React,{useState,useEffect} from 'react';
import axios from 'axios';


const Tweetdetail = () => {

    const [tweetDetail,setTweetDetail] = useState([]);

    useEffect(()=>{
        const fetchData = async() => {
            const data = await axios.get(
                `http://0.0.0.0:8000/tweet/${3}`
            )
            setTweetDetail(data.data);
        };
        fetchData();
    },[]);

    return (
        <div>
            <div>
                <div>
                    <p>{tweetDetail.text}</p>
                </div>
                <div>
                    {tweetDetail.image ? <img src={tweetDetail.image} alt='img' /> : <></>}
                    {tweetDetail.video ? <video controls src={tweetDetail.video} /> : <></>}
                </div>
                <div>
                    <p>{tweetDetail.create_at}</p>
                </div>
            </div>
        </div>
    );
}

export default Tweetdetail;