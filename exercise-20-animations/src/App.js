import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
    console.log("Show");
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
    console.log("Close");
  };

  render() {
    return (
      <div className="App">
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />

        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                transition: "opacity 1s ease-out",
                margin: "auto",
                opacity: state === "exiting" ? 0 : 1,
              }}
            ></div>
          )}
        </Transition>

       <Modal show={this.state.modalIsOpen} closed={this.closeModal} />

        <h1>React Animations</h1>

        {this.state.modalIsOpen && <Backdrop show />}

        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
