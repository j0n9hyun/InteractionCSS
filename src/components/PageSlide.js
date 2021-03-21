import React, { useState, useEffect } from 'react';
import '../static/scss/pageslide.scss';
const PageSlide = () => {
  // let [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    let prevBtn = document.querySelector('.prevBtn');
    let nextBtn = document.querySelector('.nextBtn');
    let h1 = document.getElementsByTagName('h1')[0];

    let bgColorArr = ['#85FFBD', '#FFF37D', '#E0C3FC', '#00DBDE'];
    let totalNum = bgColorArr.length;
    let pageNum = Math.round(Math.random() * (totalNum - 1));

    prevBtn.addEventListener('click', function () {
      if (pageNum > 0) {
        pageNum--;
      } else {
        pageNum = totalNum - 1;
      }
      bgColorChange();
    });
    nextBtn.addEventListener('click', function () {
      if (pageNum < totalNum - 1) {
        pageNum++;
      } else {
        pageNum = 0;
      }
      bgColorChange();
    });

    function bgColorChange() {
      h1.innerHTML = pageNum + ' 페이지 입니다.';
      document.body.style.background = bgColorArr[pageNum];
    }
    bgColorChange();
  });
  return (
    <>
      <button type='button' className='prevBtn'>
        이전
      </button>
      <button type='button' className='nextBtn'>
        다음
      </button>
      <h1>0 페이지 입니다.</h1>
    </>
  );
};

export default PageSlide;
