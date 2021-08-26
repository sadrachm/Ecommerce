import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.onChangeSearchColor = this.onChangeSearchColor.bind(this);
    this.onChangeSearchMax = this.onChangeSearchMax.bind(this);
    this.onChangeSearchMin = this.onChangeSearchMin.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    this.searchColor = this.searchColor.bind(this);
    this.searchMax = this.searchMax.bind(this);
    this.searchMin = this.searchMin.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",
      searchColor: "",
      searchMin: "",
      searchMax: ""
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }
  onChangeSearchColor(e) {
    const searchColor = e.target.value;

    this.setState({
      searchColor: searchColor
    });
  }
  onChangeSearchMax(e) {
    const searchMax = e.target.value;

    this.setState({
      searchMax: searchMax
    });
  }
  onChangeSearchMin(e) {
    const searchMin = e.target.value;

    this.setState({
      searchMin: searchMin
    });
  }

  retrieveTutorials() {
    TutorialDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    });
  }

  removeAllTutorials() {
    TutorialDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });

    TutorialDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchColor() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });

    TutorialDataService.findByColor(this.state.searchColor)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchMax() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });

    TutorialDataService.findByMax(this.state.searchMax)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchMin() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });

    TutorialDataService.findByMin(this.state.searchMin)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, searchColor, searchMin, searchMax, tutorials, currentTutorial, currentIndex } = this.state;

    return (
      <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Name"
            value={searchTitle}
            onChange={this.onChangeSearchTitle}
            style={{fontFamily:"Times New Roman"}}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={this.searchTitle}
              style={{fontFamily:"Times New Roman"}}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Color"
            value={searchColor}
            onChange={this.onChangeSearchColor}
            style={{fontFamily:"Times New Roman"}}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={this.searchColor}
              style={{fontFamily:"Times New Roman"}}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Maximum Price"
            value={searchMax}
            onChange={this.onChangeSearchMax}
            style={{fontFamily:"Times New Roman"}}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={this.searchMax}
              style={{fontFamily:"Times New Roman"}}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Minimum Price"
            value={searchMin}
            onChange={this.onChangeSearchMin}
            style={{fontFamily:"Times New Roman"}}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={this.searchMin}
              style={{fontFamily:"Times New Roman"}}
            >
              Search
            </button>
          </div>
        </div>
      </div>
        <hr></hr>
        <div className="col-md-6">
          <h4 style={{fontFamily:"Times New Roman"}}>Guitar List</h4>
          
          <ul className="list-group" style={{fontFamily:"Times New Roman"}}>
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
            style={{fontFamily:"Times New Roman"}}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6" style={{fontFamily:"Times New Roman"}}>
          {currentTutorial ? (
            <div>
              <h4>Guitars</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentTutorial.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentTutorial.description}
              </div>
              <div>
                <label>
                  <strong>Color:</strong>
                </label>{" "}
                {currentTutorial.color}
              </div>
              <div>
                <label>
                  <strong>Price:</strong>
                </label>{" "}
                {currentTutorial.price}
              </div>
              <div>
                <label>
                  <strong>Units Available:</strong>
                </label>{" "}
                {currentTutorial.unitsAvailable}
              </div>
              <div>
                <label>
                  <strong>Category:</strong>
                </label>{" "}
                {currentTutorial.category}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentTutorial.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/tutorials/" + currentTutorial.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Guitar...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
