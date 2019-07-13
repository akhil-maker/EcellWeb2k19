import React,{ Component } from 'react';
import './sponsors.css';
import faxios from '../../axios';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Header_Links from './header_links';


class Sponsors extends Component{
    
    axios = faxios();
    state={
        sponsors_15:{},
        year:2015
    }

    componentDidMount(){
        this.axios.get("/sponsors/list/").then(res=>{
            const data = res.data;
            const spons= data.spons;
            const year=2015;
            const dict_year={};
            
            
            spons.forEach((particular)=>{
                let type = particular.section_name;
                let sub_array =particular.sponsors;
                let filtered_sub_array=sub_array.filter((individual_sponsor)=>{
                    return(individual_sponsor.year===year);
                
                });
                dict_year[type]=filtered_sub_array;
            });
          

            this.setState({
                sponsors_15:dict_year
            })

            console.log(this.state);
        })
    }

    

    render(){
        let sponsors_html=[];
        for(const section in this.state.sponsors_15){
            let sponsors= this.state.sponsors_15[section]
            sponsors=sponsors.map(sponsor=>
                
                
                        
                        <div className="col">
                            <div className="cont">
                                <div className="front shadow-lg p-3 mb-5 bg-white rounded"><img alt={sponsor.name} className="spons-Image" src={sponsor.pic}></img></div>
                                <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                                    <div className="inner">
                                        <h6 style={{ fontWeight: "800" }}>{sponsor.name}</h6>
                                        <p className="ph-no">{sponsor.contact}</p>
                                        <p>{sponsor.details}</p>
                                        <p><a className="web" href={sponsor.website}>Website</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                
                
                
                )

                const section_html =<div className="box" key={section}>
                    {sponsors}
                </div>

                sponsors_html.push(section_html)
        }
        return(
            <div className="sponsors">
                <Navbar/>
                <div className="container-fluid" style={{maxWidth:"1200px",paddingTop:"250px"}}>
                    <Header_Links/>
                </div>


                <div className="header1">SPONSORS {this.state.year}</div>
                <div className="container-fluid ctn9" style={{maxWidth:"1200px",paddingTop:"0px"}} >
                    
                        {sponsors_html}
                    
                </div>
                

                <div className="container-fluid" style={{maxWidth:"1200px",paddingTop:"50px"}}>
                    <Header_Links/>
                </div>
                <Footer/>
            </div>
        )
    }

}
    

export default Sponsors;