import dog from './dog.jpg';
import './MyDog.css';
import InfoText from './component/InfoText'
import React from 'react';

function App(){
    return(
        <div>
            <InfoText />
            <img className="picture" src={dog} alt=""/>
        </div>
    );
}

export default App;