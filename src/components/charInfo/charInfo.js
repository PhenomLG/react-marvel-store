import "./charInfo.scss";
import thor from "../../resources/img/thor.png";


function CharInfo() {
    return(
        <div className="char__info">
            <div className="char__card">
                <img src={thor} alt="thor" />
                <div>
                    <div className="char__name">LOKI</div>
                    <div className="char__btns">
                        <a className='button button__main' href="#">
                            <div className="inner">HOMEPAGE</div>
                        </a>
                        <a className="button button__secondary" href="#">
                            <div className="inner">WIKI</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__list">
                <li className="char__list-item">All-Winners Squad: Band of Heroes (2011) #3</li>
                <li className="char__list-item">Alpha Flight (1983) #50</li>
                <li className="char__list-item">Amazing Spider-Man (1999) #503</li>
                <li className="char__list-item">Amazing Spider-Man (1999) #504</li>
                <li className="char__list-item">AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</li>
                <li className="char__list-item">Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</li>
                <li className="char__list-item">Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)</li>
                <li className="char__list-item">Vengeance (2011) #4</li>
                <li className="char__list-item">Avengers (1963) #1</li>
                <li className="char__list-item">Avengers (1996) #1</li>
            </ul>


        </div>
    );
}

export default CharInfo;