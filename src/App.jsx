// Named import - rename
import {
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router";
import { ColorGame } from "./ColorGame";
import { Home } from "./Home";
import { MovieList } from "./MovieList";
import { NotFound } from "./NotFound";
import "./index.css";
import { UserList } from "./UserList";
import { MovieDetails } from "./MovieDetails";
import { AddMovie } from "./AddMovie";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { EditMovie } from "./EditMovie";
// import { BasicForm } from "./BasicForm";
import { LoginForm } from "./LoginForm";
// Component = Logic + UI
// 2. Default export
export default function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      {/* Common */}

      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies")}>
            Movies
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies/new")}>
            Add Movie
          </Button>
          <Button color="inherit" onClick={() => navigate("/color-game")}>
            Color Game
          </Button>
          <Button color="inherit" onClick={() => navigate("/users")}>
            Users
          </Button>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="films" element={<Navigate to="/movies" replace />} />
        <Route path="movies" element={<MovieList />} />
        <Route path="movies/new" element={<AddMovie />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="movies/:id/edit" element={<EditMovie />} />
        <Route path="color-game" element={<ColorGame />} />
        <Route path="users" element={<UserList />} />
        {/* <Route path="basic-form" element={<BasicForm />} /> */}
        <Route path="login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="contact/:id" element={<ContactDetails />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
