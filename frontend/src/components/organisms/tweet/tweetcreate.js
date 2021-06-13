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
        let form_data = new FormData();
        form_data.append('text',txt);
        form_data.append('image',img);
        form_data.append('video',vid);

        await axios.post('http://0.0.0.0:8000/tweet/create',tweetCreate)
        console.log(tweetCreate);
    }

    const textChange = (e) => {
        setTweetCreate({...tweetCreate,[e.target.name]:e.target.value})
        console.log(txt);
    }

    const imageChange = (e) => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
        console.log(img);
    }

    const videoChange = (e) =>{
        setVideo(e.target.files[0]);
        console.log(vid);
    }

    return (
        <div>
            <div>
                <form onSubmit={submitTweet}>
                    <div>
                        <input type="text" name="text" onChange={textChange}/>
                    </div>
                    <div>
                    <input type="file" accept="image/*" onChange={imageChange}/>
                    </div>
                    <div>
                    <input type="file" accept="video/*" onChange={videoChange}/>
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