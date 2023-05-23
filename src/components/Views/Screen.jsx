import Section from './Section.jsx'
import Login from './Login.jsx'
import MatchForm from './MatchForm.jsx'
import { useState, useEffect } from 'react'
import { Outlet, Routes ,Route, BrowserRouter, Link, useNavigate, redirect} from "react-router-dom";
import NavBar from './NavBar.jsx';
import Brasseries from './Brasseries.jsx';
import MatchResult from './MatchResult.jsx';
import BeerCard from './BeerCard.jsx';
import Home from './Home.jsx';

function Screen({beerData}) {
    let navigate = useNavigate()
    const [dreamBeer, setDreamBeer] = useState({})
    const [wrappedBeer,setWrappedBeer] = useState([])
    const handleDreamBeer = (userDreamBeer) => {
        setDreamBeer(userDreamBeer)
    }

    const getBeerinfo = ()=> {
        setWrappedBeer([dreamBeer])
        navigate('/match')
    }

    useEffect(()=>{
        Object.keys(dreamBeer).length > 0 ? getBeerinfo() : console.log('no dream beer found')

    },[dreamBeer])

    return (
        <div className="mainScreen">
            
                <Routes>
                    <Route path='/' element={<Home/>}>
                    </Route>
                    <Route path='/form' element={<MatchForm userDreamBeer={handleDreamBeer}/>}></Route>
                    <Route path='/match' element={<MatchResult beerData={beerData} userChoices={wrappedBeer}/>}/>
                    <Route path='/biere' element={<BeerCard/>}/>
                    <Route path='/brasseries' element={<Brasseries />}></Route>
                </Routes>
                {/* <Outlet page={currentSection} classes={componentClasses} /> */}
                <NavBar />
            
            {/* <Section page={currentSection} classes={componentClasses} /> */}
        </div>
    )
}

export default Screen