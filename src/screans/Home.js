import React from 'react'
import Main from '../components/Main';
import Voltage from '../components/Voltage';
import Title from '../components/Title';

const Home = () => {

    if (!localStorage.vol) {
        localStorage.vol = 0.1
    }

    return ( 
        <>


    <Main>
        <Title/>

    <Voltage/>

    </Main>
    


        </>
     );
}
 
export default Home;