import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Albums from './components/Albums/Albums';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      albums: []
    }
  }

  callAPI(searchText) {
    const URL = `https://itunes.apple.com/search?term=${searchText}&entity=album`;
    // call API: fetch url, etc.
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({
        albums: data.results
      });
    });
    // this.setState() - on completion of fetch, take entire object and set it into the state
  }


  render() {
    return (
      <div className="App">
      <Header />
      <Search onSearch={this.callAPI.bind(this)} />
      <Albums albumsProp={this.state.albums} />
      </div>
    );
  }
}
