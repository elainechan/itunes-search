import React from 'react';
import './Search.css';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
  }

    state = {
      searchText: ''
    }

    onChange = (event) => {
      this.setState({
        searchText: event.target.value
      });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.onSearch(this.state.searchText.trim()); // constructor(props) allows this to happen
    }

  render() {

    return(
      /* {albums} */
      <div className="search-div">
      <form className="search-form" id="search-form" onSubmit={this.handleSubmit.bind(this)}>
      <input className="search-input" value={this.state.searchText} onChange={this.onChange.bind(this)}
      placeholder="Search artist"></input>
      </form>
      <button className="submit" form="search-form" type="submit">SUBMIT</button>
      </div>
    )
  }
}
