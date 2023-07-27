import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
import NewsCards from "./components/NewsCards/NewsCards";
import { Typography } from "@material-ui/core";

const alanKey = 'd01ae699de577da2c8d33396ea1334552e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = ()=>{
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);

    useEffect(()=>{
        alanBtn({
            key : alanKey,
            onCommand : ({command, articles, number})=>{
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }
                else if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle) => prevActiveArticle+1);
                }
                else if(command === 'open'){
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy : true}) : number;
                    const article = articles[parsedNumber-1];
                    
                    window.open(article.url, '_blank');
                }
            }
        });
    },[]);
    return(
        <div>
            <Typography variant="h2" color="primary" align="center" style={{padding: 30}}>
                NewsTalker
                <br/>
            <Typography component='p' color="textSecondary" >
                Powered by <strong><i>Alan AI</i></strong>.
            </Typography>
            </Typography>

            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    );
}

export default App;