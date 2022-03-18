import { useState } from "react";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBountdady from "../errorBountdary/ErrorBountdady";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    return(
        <>
            <ErrorBountdady>
                <RandomChar/>
            </ErrorBountdady>
            <div className="char__content">
                <ErrorBountdady>
                    <CharList onCharSeleced={onCharSelected}/>
                </ErrorBountdady>
                <ErrorBountdady>
                    <CharInfo charId={selectedChar}/>
            </ErrorBountdady>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;