import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MovieList } from "./MovieList";
import './App.css'
import { UserList } from './UserList';
import { Counter } from './Counter';
import { ColorGame } from './ColorGame';
import{Route,Routes,Link} from "react-router";



export default function App() {
  // Logic Starts

  // Logic End
  // return (
  //   <div className="App">
  //     <nav>
  //       <Link to="/contact"> Contact</Link> <Link to="/about"> About</Link>
  //     </nav>
  //     <Routes> 
  //     <Route path="about" element={<About/>} />
  //     <Route path="contact" element={<Contact/>} />
  //     </Routes>
      {/* {/* <MsgList /> */}
      {/* <UserList /> */}

      {/* <MovieList /> */}
      {/* <ColorGame/> */}
      {/* <Counter /> */}
      {<MovieAdded/>}
    // </div>
  // );
}

// function About(){
//   return <h1> About page</h1>;
// }
// function Contact(){
//   return <h1> Contact page</h1>
// }
import { useState } from "react";

function MovieAdded() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [ratings, setRatings] = useState(0);
  const [summary, setSummary] = useState("");
  const[movies,setMovies]=useState([])


  const styles = {
    backgroundColor: "black"
  };


  // Dislike
  return (
    <div class="addMovie-container">
      <input
        value={name}
        style={styles}
        onChange={(event) => setName(event.target.value)}
        type="text" />
      <input
        value={poster}
        style={styles}
        onChange={(event) => setPoster(event.target.value)}
        type="text" />
      <input
        value={ratings}
        style={styles}
        onChange={(event) => setRatings(event.target.value)}
        type="text" />
      <input
        value={summary}
        style={styles}
        onChange={(event) => setSummary(event.target.value)}
        type="text" />
      <button onClick={() => setMovies([...movies, {name:name,poster:poster,ratings:ratings,summary:summary}])}>➕ Add</button>
    </div>

    );
  }


