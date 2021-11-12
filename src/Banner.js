import React ,{useState , useEffect, isLargeRow} from "react";
import axios from './axios';
import './Row.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import "slick-carousel/slick/slick-theme.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const base_url="https://image.tmdb.org/t/p/original/";


function Banner(props){
    const [movies ,setMovies]=useState([]);
    const [isloading,setIsloading]=useState(true);
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 2000
    };

    useEffect(() => {
      setTimeout(()=>{
        async function fetchData(){

            const request = await axios.get(props.fetchurl);
            setMovies(request.data.results);
            setIsloading(false);
            return request;
            
        }
        fetchData();
      },5000)
    },[props.fetchurl] );
    console.table(movies);
    return(
  <div>
      <h2>{props.title}</h2>
      {isloading ? 
       <div className="skeleton_card">
       <div className="sc">
         <Skeleton width={1489} height={500}  /> 
       </div>
     

     </div> 
      : 

    <Slider {...settings}>

        {movies.map(movie => {
          return  (
          <div className="row_poster">
          <img 
          key={movie.id}
          className="banner_img"
          src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
          <div className="banner_overlay">
              </div>
          <div className="movie_info">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          </div>
          </div>)
        })}
       

   
        </Slider>
}
  </div>
    );
}

export default Banner;