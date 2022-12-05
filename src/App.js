//import logo from './logo.svg';
import './App.css';
import HeaderFooter from './HeaderFooter';
import Main from './Main';
import {useEffect, useState} from 'react'; 
 import {Routes,Route} from "react-router-dom";
import Home from './Home';


function App() {

const [compteur,setCompteur] = useState(0);
const [listSchool,setListSchool] = useState([]);

function testClic(){
      let newCompteur = compteur +1;
      setCompteur(newCompteur);
    }


    useEffect(() => {                                                                                                                                   
      console.log('effet');
    },[compteur]);
  
    return (
      <>
        <div className="container">
          Compteur : {compteur}
          <HeaderFooter titre="Header" testClic={testClic} setListSchool={setListSchool}></HeaderFooter>
          <Routes>
            <Route element = {<Home Account={listSchool}/>} path="/"></Route>
            <Route element = {<Main listSchool={listSchool}/>} path="/catalogue"></Route>
           
          </Routes>
          <Main listSchool={listSchool}></Main>
          <HeaderFooter titre="Footer" testClic={testClic}></HeaderFooter>
        </div>
      </>
    );
  }
  

  export default App;
