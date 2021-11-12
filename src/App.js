
import './App.css';
import request from './request';

import Row from './Row';
import Banner from './Banner';
function App() {
  return (
    <div className="App">
      <Banner fetchurl={request.popularmovies} />
      <Row title="Netflix originals"  fetchurl={request.trendingmovies}    />
      <Row title="Trending Now"   fetchurl={request.trendingtv}    />
      <Row title="Popular movies"  fetchurl={request.popularmovies}    />
      <Row title="upcoming movies"   fetchurl={request.upcomingmovies}    />
      <Row title="Netflix originals"  fetchurl={request.trendingmovies}    />
      <Row title="Trending Now"   fetchurl={request.trendingtv}    />
    
    </div>
  );
}

export default App;
