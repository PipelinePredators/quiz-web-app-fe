import AdminNavbar from 'components/Navbars/AdminNavbar'
import { BackgroundColorContext } from 'contexts/BackgroundColorContext'
import Home from 'views/Home'
import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import Footer from 'components/Footer/Footer'
import Login from 'views/Login'
import Signup from 'views/Signup'
import ReviewQuestion from 'views/ReviewQuestion'
import TakeChallenge from 'views/TakeChallenge'
import TakeQuiz from 'views/TakeQuiz'
import Subject from 'views/Subjects'
import RequireAuth from 'Guards/RequireAuth'

const Main = (props) => {

    const mainPanelRef = React.useRef(null);

    const location = useLocation();

    return (
        <BackgroundColorContext.Consumer>
            {({ color, changeColor }) => (
                <React.Fragment>
                    <div className='wrapper'>
                        <div className='main-panel' ref={mainPanelRef} data={color}>
                            <AdminNavbar brandText="" />
                            <Switch>
                                <Route path="/login" render={(props) => <Login {...props} />} />
                                <Route path="/register" render={(props) => <Signup {...props} />} />
                                <Route path="/quiz/:subjectParam" render={(props) => <TakeQuiz {...props} />} />
                                <Route path="/subject" render={(props) => <RequireAuth><Subject {...props} /></RequireAuth>} />
                                <Route path="/challenge" render={(props) => <RequireAuth><TakeChallenge {...props} /></RequireAuth>} />
                                <Route path="/review" render={(props) => <RequireAuth><ReviewQuestion {...props} /></RequireAuth>} />
                                <Route path="/" render={(props) => <Home {...props} />} />
                            </Switch>
                            {
                                // we don't want the Footer to be rendered on map page
                                location.pathname.includes('admin') ? null : <Footer/>
                            }
                        </div>
                    </div>
                    <FixedPlugin bgColor={color} handleBgClick={changeColor} />
                </React.Fragment>
            )}
        </BackgroundColorContext.Consumer>
    )
}

export default Main