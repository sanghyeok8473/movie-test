import React, { useRef } from 'react';

const BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average, overview }) {
  // useRef를 사용하여 detailContainer에 대한 참조 생성
  const detailContainerRef = useRef(null);

  const handleMouseEnter = () => {
    // 마우스를 올리면 display를 table로 설정
    if (detailContainerRef.current) {
      detailContainerRef.current.style.display = 'table';
    }
  };

  const handleMouseLeave = () => {
    // 마우스를 내리면 display를 none으로 설정
    if (detailContainerRef.current) {
      detailContainerRef.current.style.display = 'none';
    }
  };

  return (
    <div className='container'>
      <div className='movie-container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={BASE_URL + poster_path} alt="Movie Poster"/>
        <div className='movie-info'>
          <h4>{title}</h4>
          <span>{vote_average}</span>
        </div>
        <div className='detail-container' ref={detailContainerRef} style={{ display: 'none' }}>
          <div className='movie-detail'>
            <h4>{title}</h4>
            <span>{overview}</span>
          </div>
        </div>
      </div>
    </div>
  );
}