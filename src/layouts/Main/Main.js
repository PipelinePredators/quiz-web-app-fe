import AdminNavbar from 'components/Navbars/AdminNavbar'
import { BackgroundColorContext } from 'contexts/BackgroundColorContext'
import Home from 'views/Home'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import Footer from 'components/Footer/Footer'
import Login from 'views/Login'
import Signup from 'views/Signup'

const Main = (props) => {

    const mainPanelRef = React.useRef(null);

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
                                <Route path="/" render={(props) => <Home {...props} />} />
                            </Switch>
                            <Footer/>
                        </div>
                    </div>
                    <FixedPlugin bgColor={color} handleBgClick={changeColor} />
                </React.Fragment>
            )}
        </BackgroundColorContext.Consumer>
    )
}

export default Main