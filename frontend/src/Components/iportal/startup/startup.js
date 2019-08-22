import React, { Component } from 'react'
import { Switch,Route } from 'react-router-dom'
import Footer from '../../Footer/footer'

import './datetimepicker.scss'

import Navbar from './navbar'
import Dashboard from './dashboard'
import EditStartup from './register_startup'
import Openings from './openings_list'
import NewOpening from './new_opening'
import ApplicationList from './application_list'
import ApplicationDetail from './application_detail'

export default class iportal extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Switch>
                    <Route path='/internship/startup/application_detail/:application_id/' component={ApplicationDetail}/> // view detail of application
                    <Route path='/internship/startup/application/:job_id/' component={ApplicationList}/> // list of applications
                    <Route path='/internship/startup/openings/new/' component={NewOpening}/> // new opening
                    <Route path='/internship/startup/openings/:job_id/' component={NewOpening}/> // edit a opening
                    <Route path='/internship/startup/openings/' component={Openings}/> // list of openings
                    <Route path='/internship/startup/edit' component={EditStartup}/> //edit startup profile
                    <Route path='/internship/startup/' component={Dashboard}/> //landing page for startups
                </Switch>
                <Footer/>
            </div>
        )
    }
}
