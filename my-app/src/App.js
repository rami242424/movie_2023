import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [], // 로딩된 영화 데이터를 저장하기
  };
  
  getMovies = async () => { // 자바스크립트에게 "getMovies() 함수는 비동기라서 기다려야해" 라고 말하는 것
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating'); //axios.get()의 실행 완료를 기다렸다가 끝나면 계속 진행해 줘
    // console.log(movies.data.data.movies);
    // console.log(movies);
    this.setState({ movies, isLoading: false }); // 구조 분해 할당으로 얻은 영화 데이터가 있는 변수
  }

  // 컴포넌트가 처음 화면에 그려지면 실행되는 함수
  componentDidMount(){
    // // 👉영화 데이터 로딩!!
    // setTimeout(()=> {
    //   this.setState({ isLoading: false });
    // }, 6000);

    // axios.get('http://yts-proxy.now.sh/list_movies.json'); //axios로 api 호출
    // 컴포넌트가 마운트되면 axios.get()함수가 실행되며 영화 데이터를 가져온다.

    this.getMovies();
  }
  
    render() {
      const { isLoading, movies } = this.state;
      return (
        <section class = "container" >        
          { isLoading ? (
            <div class="loader">
              <span class="loader__text"> Loading... </span>
            </div>
          ) : (
            <div class="movies">
              {movies.map((movie) => (                
                  <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  />
              ))}
            </div>
          )}
        </section>
      );
    }      
}


export default App;