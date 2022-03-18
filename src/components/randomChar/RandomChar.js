import { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

const RandomChar = () => {
   
    // state = {
    //     char: {},
    //     loading: true,
    //     error: false
    // }

    const [char, setChar] = useState({});
    // const [loading, setLoading] = useState(true);
    // const [error, setErros] = useState(false);

    // marvelService = new MarvelService();

    const {loading, error, getCharacter, clearError} = useMarvelService();

    // componentWillUnmount() {
      
    // }

    // componentDidMount() {
        
    //     this.updateChar();
        
    // }

    useEffect(() => {
        updateChar();
        const timerId = setInterval(updateChar, 60000);

        return () => {
            clearInterval(timerId)
        }
    }, [])

    // onCharLoaded = (char) => {
    //     this.setState({char, loading: false})
    // }

    const onCharLoaded = (char) => {
        setChar(char);
        // setLoading(false);
    }

    // onCharLoading = () => {
    //     this.setState({
    //         loading: true
    //     })
    // }

    // const onCharLoading =() => {
    //     setLoading(true);
    // }

    // onError = () => {
    //     this.setState({
    //         loading: false,
    //         error: true
    //     })
    // }

    // const onError = () => {
    //     setLoading(false);
    //     setErros(true);
    // }

    // updateChar = () => {
    //     const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    
    //     this.marvelService
    //         .getCharacter(id)
    //         .then(this.onCharLoaded)
    //         .catch(this.onError);
    // }

    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        // onCharLoading();
        getCharacter(id)
            .then(onCharLoaded)
            // .catch(onError);
    }

  
    // const {char, loading, error} = this.state;
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View char={char}/> : null;
    
    
    return (
        <div className="randomchar">
            {errorMessage}
            {spinner}
            {content}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main">
                    <div className="inner"
                    onClick={updateChar}>try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )
    
}

const View = ({char}) => {
    const {name, description, homepage, wiki, thumbnail} = char;
    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }
    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" className="randomchar__img" style={imgStyle}/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {description}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
            </div>
    )
}

export default RandomChar;