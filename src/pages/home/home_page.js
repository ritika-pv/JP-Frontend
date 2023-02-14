import React, { useState } from 'react'
import { Footer } from '../../components/common/footer/footer';
import { Header } from '../../components/common/header/header';
import { TabOptions } from '../../components/common/tabs_feature/tab_options';
import { Delivery } from '../../components/delivery/delivery';
import { DiningOut } from '../../components/dining_out/dining_out';
import { NightLife } from '../../components/night_life/night_life';

const HomePage = () => {
  const [activeTab,setActiveTab] = useState("Delivery")
  return (
    <div>
      <Header/>
      <TabOptions activeTab = {activeTab} setActiveTab = {setActiveTab}/>
      {getCorrectScreen(activeTab)}
      <Footer/>
    </div>
  )

};
const getCorrectScreen=(tab)=>{
  switch(tab){
    case "Delivery":
      return <Delivery/>
    case "Dining Out":
      return <DiningOut/>
    case "Night Life":
      return <NightLife/>
    default:
      return <div>Delivery</div>
  }
}
export default HomePage;