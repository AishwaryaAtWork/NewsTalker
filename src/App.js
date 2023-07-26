import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

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
            <h1>Hi !!</h1>
            <NewsCards articles={newsArticles}/>
        </div>
    );
}

export default App;