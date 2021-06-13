import Tweetdetail from './components/organisms/tweet/tweetdetail';
import Tweet from './components/organisms/tweet/tweet';
import TweetCreate from './components/organisms/tweet/tweetcreate';
// import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Tweet />
      <Tweetdetail />
      <TweetCreate />
    </div>
  );
}

export default App;
