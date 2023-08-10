import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import styles from './NewsList.module.css';
import axios from 'axios';


const NewsList = ({ category }) => {
    // articles는 기사 관련 정보가 든 상태변수, loading은 비동기 요청이 처리중인지 아닌지 여부를 보여주는 상태변수
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true); // 로딩 시작
        const query = (category === 'all' ? '' : `&category=${category}`);

        axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8008acdbaf4f433db650020b293108fd`)
            .then(res => {
                setArticles(res.data.articles); // 비동기 요청을 넣어서 얻어온 데이터로 articles 갱신
            });

        setLoading(false); // 로딩 완료
    }, [category]); // 마지막에 [] 를 넣어야 최초 렌더링시에만 비동기 요청 자동 호출 -> category 상태변수 변경시 렌더링

    // 대기 중일때
    if(loading) { // loading변수로 참, 거짓 판단이 가능하니 바로 조건식에 대입
        return <div className={styles.newslistblock}>대기중...</div>
    }
    if(!articles) { // articles에 값이 저장되지 않았을때
        return null;
    }

    // articles의 값이 유효하게 처리되었을때
    return (
        <div className={styles.newslistblock}>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </div>
    );
};

export default NewsList;