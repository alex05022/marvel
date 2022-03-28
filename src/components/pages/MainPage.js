import { useState } from "react";
import {Helmet} from "react-helmet";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import CharSearchForm from "../charSearchForm/CharSearchForm";
import ErrorBountdady from "../errorBountdary/ErrorBountdady";

import decoration from '../../resources/img/vision.png';


const MainPage = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }
    console.log('mp')

    return(
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                />
                <title>Marvel information portal</title>
            </Helmet>
            <ErrorBountdady>
                <RandomChar/>
            </ErrorBountdady>
            <div className="char__content">
                <ErrorBountdady>
                    <CharList onCharSeleced={onCharSelected}/>
                </ErrorBountdady>
                <div> 
                    {/* добовляем div чтоб отображалось на сайте*/}
                    <ErrorBountdady>
                        <CharInfo charId={selectedChar}/>
                    </ErrorBountdady>
                    <ErrorBountdady>
                        <CharSearchForm/>
                    </ErrorBountdady>
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;