import React,{useState,useEffect} from 'react'
import axios from 'axios';

const TweetCreate = () => {

    const tweetData = {
        text:"",
        image:null,
        video:null,
    }

    const [tweetCreate,setTweetCreate] = useState(tweetData);
    const [txt,setText] = useState("");
    const [img,setImage] = useState();
    const [vid,setVideo] = useState();

    const [submit,setSubmit] = useState(false);

    const submitTweet = async (e) => {
        e.preventDefault();

        await axios.post('http://0.0.0.0:8000/tweet/create',tweetCreate)
        console.log(tweetCreate);
    }

    const textChange = (e) => {
        setTweetCreate({...tweetCreate,[e.target.name]:e.target.value})
        
    }

    const imageChange = (e) => {
        setTweetCreate({...tweetCreate,[e.target.name]:e.target.files[0]});

    }

    const videoChange = (e) =>{
        setTweetCreate({...tweetCreate,[e.target.name]:e.target.files[0]});
        
    }

    return (
        <div>
            <div>
                <form onSubmit={submitTweet}>
                    <div>
                        <input type="text" name="text" onChange={textChange}/>
                    </div>
                    <div>
                        <input type="file" accept="image/*" name="image" onChange={imageChange}/>
                    </div>
                    <div>
                        <input type="file" accept="video/*" name="video" onChange={videoChange}/>
                    </div>
                    <div>
                        <button type="submit">ツイート</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TweetCreate;