import React, { useEffect, useState, createRef } from 'react';
import {
    Card, CardActions, CardActionArea, CardContent, CardMedia,
    Button, Typography
} from '@material-ui/core';
import useStyles from './styles';
import classNames from 'classnames';

const NewsCard = ({ article: { description, source, publishedAt,
    title, url, urlToImage }, i, activeArticle }) => {

    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

    useEffect(() => {
        setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);

    useEffect(() => {
        if (i === activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle]);
        }
    }, [i, activeArticle, elRefs]);

    const formatDate = (utcTime) => {
        const utcDate = new Date(utcTime);
        const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds

        const istDate = new Date(utcDate.getTime() + istOffset);
        const istDateString = istDate.toDateString(); // Format IST date as a string

        return istDateString;
    }

    return (
        <Card ref={elRefs[i]}
            className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)} >
            <CardActionArea href={url} target='_blank'>
                <CardMedia
                    className={classes.media}
                    image={urlToImage ||
                        "https://media.istockphoto.com/id/1128119311/photo/cubes-with-the-word-news-on-a-newspaper.jpg?b=1&s=612x612&w=0&k=20&c=AUpepbnMhzMFfCpJTKqoC4fKn48prR39X5AqYNdaHk0="}
                />

                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary' component='h2'>
                        {formatDate(publishedAt)}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='h2'>
                        {source.name}
                    </Typography>
                </div>

                <Typography className={classes.title} gutterBottom variant='h5'>{title}</Typography>
                <CardContent>
                    <Typography className={classes.description} color='textSecondary' component='p'>
                        {description}
                    </Typography>
                </CardContent>

            </CardActionArea>

            <CardActions className={classes.cardActions}>
                <Button href={url} target='_blank' size='small' color='primary'>Learn More</Button>
                <Typography variant='h5' color='textSecondary'>{i + 1}</Typography>
            </CardActions>
        </Card>
    );
}

export default NewsCard;
