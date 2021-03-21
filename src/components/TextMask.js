import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import '../static/scss/textMask.scss';

const TextMask = () => {
  useEffect(() => {
    console.log($(window).height());
  });
  return (
    <>
      <div class='wrap'>
        <header class='header_wrap'>
          <div class='logo'>GGANG CODING</div>
        </header>
        <section class='sec01 active'>
          <article class='inner'>
            <div class='tb_row'>
              <div class='tb_cell'>
                <nav class='nav_list'>
                  <ul class='list'>
                    <li>
                      <a href='/' class='active'>
                        <span class='txt'>TODAY</span>
                        <span class='mask'></span>
                        <span class='mask2'></span>
                      </a>
                    </li>
                    <li>
                      <a href='/'>
                        <span class='txt'>IMAGE Mask</span>
                        <span class='mask'></span>
                        <span class='mask2'></span>
                      </a>
                    </li>
                    <li>
                      <a href='/'>
                        <span class='txt'>TEXT Mask</span>
                        <span class='mask'></span>
                        <span class='mask2'></span>
                      </a>
                    </li>
                    <li>
                      <a href='/'>
                        <span class='txt'>OVERLAP</span>
                        <span class='mask'></span>
                        <span class='mask2'></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class='bg_rotate'></div>
          </article>
        </section>
        <footer class='footer'>
          <div class='text_area'>
            <p>2020 GGANG CODING. 당신의 열정을 응원합니다. :)</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TextMask;
