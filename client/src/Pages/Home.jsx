import React from 'react';
import Header from '../Components/Header';
import Steps from '../Components/Steps';
import BgSlider from '../Components/BgSlider';
import Testimomials from '../Components/Testimomials';
import Upload from '../Components/Upload';
import Team from '../Components/Team';


const Home = () => {
  return(
    <div>
      <Header/>
      <Steps/>
      <BgSlider/>
      <Testimomials/>
      <Upload/>
      <Team/>
     
    </div>
  )
};

export default Home;
