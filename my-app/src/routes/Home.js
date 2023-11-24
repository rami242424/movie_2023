import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';


class Home extends React.Component{
  state = {
    isLoading: true,
    movies: [], // 로딩된 영화 데이터를 저장하기
  };
  
  getMovies = async () => { 
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating'); 
    this.setState({ movies, isLoading: false }); // 영화 데이터가 있는 변수
  }

  // 컴포넌트가 처음 화면에 그려지면 실행되는 함수
  componentDidMount(){
    this.getMovies();
  }
  
    render() {
      const { isLoading, movies } = this.state;
      return (
        <section className="container">        
          { isLoading ? (
            <div className="loader">
              <span className="loader__text"> Loading... </span>
            </div>
          ) : (
            <div className="movies">
              {movies.map((movie) => (                
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
              ))}
            </div>
          )}
        </section>
      );
    }      
}


export default Home;