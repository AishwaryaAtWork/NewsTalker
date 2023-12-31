import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './styles';

const infoCards = [
    { color: '#016ef2', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: "The Hindu, The Times of India, Reuters, Bloomberg, CNN, ESPN...", text: 'Give me the news from CNN' },
  ];

const NewsCards = ({articles, activeArticle}) => {
    const classes = useStyles();
    articles.sort((a,b)=> new Date(b?.publishedAt) - new Date(a?.publishedAt))

    if(!articles.length){
        return(
            <Grow in>
                <Grid className={classes.container} container alignItems='stretch' spacing={4}>
                    {infoCards.map((infoCard)=>(
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{backgroundColor : infoCard.color}}>
                                <Typography variant='h5'>{infoCard.title}</Typography>
                                {infoCard.info ? 
                                    (<Typography variant='h6'>
                                        <strong>
                                            {infoCard.title.split(" ")[2]}:
                                        </strong>
                                        <br/>
                                        <Typography variant='p' className={classes.info}>
                                            {infoCard.info}
                                        </Typography>
                                    </Typography>)
                                    : null
                                }
                                <Typography variant='h6'>
                                    Try sayin: <br/> <i>{infoCard.text}</i>
                                </Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        );
    }
  return (
    <Grow in>
        <Grid className={classes.container} container alignItems='stretch' spacing={4}>
            {articles.map((article , i)=>(
                <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                    <NewsCard article={article} i={i} activeArticle={activeArticle}/>
                </Grid>
            ))}
        </Grid>
    </Grow>
  )
}

export default NewsCards;
