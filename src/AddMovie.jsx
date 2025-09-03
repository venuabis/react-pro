import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { useFormik } from "formik";
import { object, string, number } from "yup";

// Validation - on Add movie
// name - required
// poster - min 4 chars, required, url
// rating - 0 - 10, required
// summary - min 20 chars, required
// trailer - min 4, required, url

const movieSchema = object({
  name: string().required(),
  poster: string().required().url().min(4),
  rating: number().required().min(0).max(10).integer(),
  summary: string().required().min(20),
  trailer: string().required().url().min(4),
});

export function AddMovie() {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: null,
        summary: "",
        trailer: "",
      },
      validationSchema: movieSchema, // only if passes onSubmit
      onSubmit: (newMovie) => {
        console.log("Cool", newMovie);
        // API
        addMovie(newMovie);
      },
    });

  const navigate = useNavigate();

  const addMovie = async (newMovie) => {
    // POST
    // 1. method - POST
    // 2. Data - Body & JSON
    // 3. Headers - JSON

    const response = await fetch(
      "https://68959014039a1a2b288f7c33.mockapi.io/movies",
      {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    navigate("/movies");
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField
        variant="outlined"
        label="Name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        name="name"
        error={touched.name && errors.name}
        helperText={touched.name && errors.name ? errors.name : null}
      />

      <TextField
        variant="outlined"
        label="Poster"
        value={values.poster}
        onChange={handleChange}
        onBlur={handleBlur}
        name="poster"
        error={touched.poster && errors.poster}
        helperText={touched.poster && errors.poster ? errors.poster : null}
      />

      <TextField
        variant="outlined"
        label="Rating"
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        name="rating"
        error={touched.rating && errors.rating}
        helperText={touched.rating && errors.rating ? errors.rating : null}
      />

      <TextField
        variant="outlined"
        label="Summary"
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        name="summary"
        error={touched.summary && errors.summary}
        helperText={touched.summary && errors.summary ? errors.summary : null}
      />

      <TextField
        variant="outlined"
        label="Trailer"
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        name="trailer"
        error={touched.trailer && errors.trailer}
        helperText={touched.trailer && errors.trailer ? errors.trailer : null}
      />

      {/* Task 3.2 - Add the color to the list */}
      {/* Existing Colors + New Color */}
      {/* submit -> onSubmit event triggered */}
      <Button
        color="primary"
        type="submit"
        variant="contained"
        startIcon={<AddIcon />}
      >
        Add
      </Button>
    </form>
  );
}
