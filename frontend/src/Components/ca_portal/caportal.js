import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../../actions/authActions'

import "./caportal.css";
import Navbar from '../Navbar/navbar';
import Footer from "../Footer/footer";
import About from "./aboutca";
import Faq from "./faqs";
import Contact from "./contact";

class caportal extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired
    }
    
    _go_caportal = () => {
        const user= this.props.auth
        if(!user){
            alert('please login to continue')
        }else if(user.user_type==='CAB'){
            window.location = '/portal/request_approval/'
        }else if(user.user_type==='GST'){
            alert('You are not a CA or Admin yet')
        }else{
            window.location = '/portal/request_list/'
        }
    }
    
    render() {
        
        return (
            <div>
                <Navbar/>
                <div className="caportal">
                    <div>
                        <img
                            alt='cover'
                            className="landing"
                            src={require("../../assets/landing2.jpg")}
                        />
                    </div>
                </div>
                <div style={{ textAlign: "center", marginTop: "30px" }}>
                    {/* <a href="#" target="_blank"> */}
                        <button onClick={this._go_caportal} className="profile-card__button button--orange">
                            Click me to go to CA Portal
                        </button>
                    {/* </a> */}
                </div>
                <div>{/*Do whatever you need to do here.*/}</div>
                <About />
                <Faq />
                <Contact />

                <Footer />
            </div>
        );
    }
}


const mapStateToProps = (state) => state

export default connect(mapStateToProps, )(caportal)