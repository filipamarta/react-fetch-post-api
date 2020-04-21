import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: "",
    };
  }

  postFavouriteMovie = () => {
    const url = "https://post-a-form.herokuapp.com/api/movies/";
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };

    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          alert(res.error);
        } else {
          alert(`The movie "${res.title}" has been successfully added!`);
        }
      })
      .catch((e) => {
        console.error(e);
        alert("There was an error when adding the movie.");
      });
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
        [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.postFavouriteMovie();
  };

  render() {
    return (
      <div className="FormMovie">
        <h1>Favourite Movie</h1>

        <form onSubmit={this.handleSubmit}>
            <div className="form-data">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Movie Url Poster:</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.handleChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Why do you like this movie?</label>
              <textarea
                type="text"
                id="comment"
                name="comment"
                onChange={this.handleChange}
                value={this.state.comment}
              />
            </div>
            <div className="form-data btn-submit">
              <input type="submit" value="Send" />
            </div>
        </form>
      </div>
    );
  }
}

export default Form;
