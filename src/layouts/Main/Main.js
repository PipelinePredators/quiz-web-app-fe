import AdminNavbar from 'components/Navbars/AdminNavbar'
import { BackgroundColorContext } from 'contexts/BackgroundColorContext'
import Home from 'views/Home'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import Footer from 'components/Footer/Footer'

const Main = (props) => {

    const mainPanelRef = React.useRef(null);

    return (
        <BackgroundColorContext.Consumer>
            {({ color, changeColor }) => (
                <React.Fragment>
                    <div className='wrapper'>
                        <div className='main-panel' ref={mainPanelRef} data={color}>
                            <AdminNavbar brandText="Home" />
                            <Switch>
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