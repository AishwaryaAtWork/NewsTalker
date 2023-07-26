import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import { Typography } from "@material-ui/core";

const alanKey = 'd01ae699de577da2c8d33396ea1334552e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = ()=>{
    const [newsArticles, setNewsArticles] = useState([])

    useEffect(()=>{
        alanBtn({
            key : alanKey,
            onCommand : ({command, savedArticles})=>{
                if(command === 'newHeadlines'){
                    console.log(savedArticles)
                    setNewsArticles(savedArticles);
                }
            }
        })
    },[]);
    return(
        <div>
            <Typography variant="h4" color="#1565c0">NewsTalker</Typography>
            <NewsCards articles={newsArticles}/>
        </div>
    );
}

export default App;