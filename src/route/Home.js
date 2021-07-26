import axios from 'axios';
import React from 'react';
import Movie from '../components/Movie';
import './Home.css'

 
class Home extends React.Component{
 
  //state data
  state={
    isLoading: true,
    movies: [],
  }; 
 
  //API JSON받기
  getMovies= async() =>{
    // 일부분 데이터만 받기
    const {
      data:{
        data:{
          movies
        },
      },
    } =  await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    //setSatet에 전달
    //this.setState({movies: movies})
    this.setState({movies, isLoading: false}) //축약버젼
    console.log(movies)
    //console.log(movies.data.data.movies)
  }//end getmovies  
  
  //내장함수
  componentDidMount(){
    //함수 호출
    this.getMovies();   
  }//end com
  
  render(){
    const {isLoading, movies} = this.state;
    return (<section className="container">
      {isLoading ?  //삼항연산자
      ( //삼항 참
        <div className="loader"> 
          <span className="loader__text">Loading .... </span>          
        </div>        
      ) //삼항 참끝      
      :
      (  //삼항거짓    
      <div className="movies">
        {movies.map( 
          (movie) =>{            
          return (<Movie
            key ={movie.id}
            id ={movie.id}
            year={movie.year}
            title={movie.title}
            summary ={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}           
          />); 
        }//end movie
        ) //end movies.map
        }
      </div>
      )//삼항거짓끝
      }  
    </section>); //end return
  }//end ren
}//end class
 
// 항상 마지막라인
export default Home;
 
