

const request ={
   moviegenre:"/genre/movie/list?api_key=40544f2549a62f4598ee0ba164a3c589&language=en-US",
   tvgenre:"/genre/tv/list?api_key=40544f2549a62f4598ee0ba164a3c589&language=en-US",
   upcomingmovies:"/movie/upcoming?api_key=40544f2549a62f4598ee0ba164a3c589&language=en-US&page=1",
   trendingmovies:"/trending/movie/day?api_key=40544f2549a62f4598ee0ba164a3c589",
   trendingtv:"/trending/tv/day?api_key=40544f2549a62f4598ee0ba164a3c589",
   latestmovies:"/trending/tv/day?api_key=40544f2549a62f4598ee0ba164a3c589",
   popularmovies:"https://api.themoviedb.org/3/movie/popular?api_key=40544f2549a62f4598ee0ba164a3c589&language=en-US&page=2"


   }  

export default request;