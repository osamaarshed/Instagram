// import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Post from './Components/Post/Post';

function App() {
  return (
    <div className='App bg-black'>
      {/* <div className='row align-items-center'> */}
      <Nav />
      {/* </div> */}
      {/* <div className='row align-items-center'> */}
      <Post />
      {/* </div> */}
    </div>
  );
}

export default App;
