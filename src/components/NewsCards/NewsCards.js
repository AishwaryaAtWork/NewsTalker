import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { Grid, Grow, Typography } from '@material-ui/core';

const NewsCards = ({articles}) => {
  return (
    <Grow in>
      {articles.map((article , i)=>(
        <NewsCard article={article}/>
      ))}
    </Grow>
  )
}

export default NewsCards;
