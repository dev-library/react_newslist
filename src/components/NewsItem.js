import React from 'react';
import styles from './NewsItem.module.css';

// 부모 컴포넌트에서 기사 관련된 props 전달받음
const NewsItem = ({ article }) => {
    // 구조분해 할당으로 title, description, url, urlToImage를 나눠서 저장
    const { title, description, url, urlToImage } = article;

    return (
        <div className={styles.newsitemblock}>
            {urlToImage && (
                <div className={styles.thumbnail}>
                    {/* url : 위에서 받아둔 기사 url 
                    urlToImage : 위에서 받아둔 기사 관련 이미지 주소*/}
                    <a href={url} target='_blank' rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div className={styles.contents}>
              <h2>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
              </h2>  
              <p>{description}</p>
            </div>
        </div>
    );
}

export default NewsItem;