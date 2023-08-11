
import {Component} from 'react'

import Header from './Header/header'

import ReactPlayer from 'react-player'

import { AiOutlineExclamationCircle } from "react-icons/ai";

import { AiOutlineUser} from "react-icons/ai";

import logo from './image/logo.png'

import logo12356 from './image/logo123456.png'

import { AiOutlineUndo } from "react-icons/ai";

import { AiOutlineCopyright } from "react-icons/ai";

import { AiOutlineArrowRight } from "react-icons/ai";

import { AiFillHome } from "react-icons/ai";

import { AiOutlineRight } from "react-icons/ai";

import { AiTwotoneAppstore } from "react-icons/ai";

import { AiOutlineMenu } from "react-icons/ai";

import { AiOutlineTags } from "react-icons/ai";

import { AiOutlineGoogle} from "react-icons/ai";

import { AiOutlineArrowLeft } from "react-icons/ai";




import './project.css'
// ... (previous imports and code)

import React, { Component } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests

// ... (rest of the component definition)

class Project extends Component {
  // ... (existing code)

  componentDidMount() {
    // Fetch data from the server using Axios
    axios.get('/api/data')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  // ... (rest of the component code)
}


const videolists=[{id:0,para:'Quick look at Different PM Processes',tech:'png',url:'https://www.youtube.com/watch?v=J4XdCjcDcbc',time:'2 mins',date:'28/11/2023',num:'30'},
{id:1,para:'How to use word press for Project Management',tech:'link',url:'https://www.youtube.com/watch?v=mud8513mdRw',time:'48 mins',date:'2/1/2023',num:'44'},
{id:2,para:' Get to know project management',tech:'html',url:'https://www.youtube.com/watch?v=F_CicqnzOrQ',time:'23 mins',date:'8/08/2023',num:'230'},
{id:3,para:' AI Project management tools you need',tech:'mp3',url:'https://www.youtube.com/watch?v=--NLfT5dqUw',time:'37 mins',date:'18/02/2022',num:'306'},
{id:4,para:'Successful Management Hybrid and Remote',tech:'png',url:'https://www.youtube.com/watch?v=rck3MnC7OXA',time:'9 mins',date:'14/05/2021',num:'530'},
{id:5,para:'Successfully manage Hybrid Remote........',tech:'mp3',url:'https://www.youtube.com/watch?v=gUFp9EhJJBk',time:'45 mins',date:'16/06/2020',num:'350'},
{id:6,para:'Introduction to Artificial Intelligence to a project',tech:'link',url:'https://www.youtube.com/watch?v=ad79nYk2keg',time:'4 mins',date:'25/09/2023',num:'130'},
{id:7,para:'John Seely Manage with HBR',tech:'png',url:'https://www.youtube.com/watch?v=41pNX9-yNu4',time:'30 mins',date:'22/04/2019',num:'630'},

]


const fourlists=[{id:7,para:'the vendor client relationship - in real world situations',tech:'link',url:'https://www.youtube.com/watch?v=R2a8TRSgzZY',time:'11 mins',date:'03/05/2020',num:'10'},
{id:7,para:'John Seely Manage with HBR',tech:'png',url:'https://www.youtube.com/watch?v=41pNX9-yNu4',time:'5 mins',date:'08/11/2021',num:'301'},
{id:7,para:'Introduction to Artificial Intelligence to a project',tech:'mp3',url:'https://www.youtube.com/watch?v=ad79nYk2keg',time:'26 mins',date:'06/06/2023',num:'810'},
{id:7,para:'Successfully manage Hybrid Remote........',tech:'html',url:'https://www.youtube.com/watch?v=gUFp9EhJJBk',time:'19 mins',date:'18/01/2022',num:'60'},

]

const boxlists=[{id:0,para:'Successful Management Hybrid and Remote',tech:'html',url:'https://www.youtube.com/watch?v=J4XdCjcDcbc',time:'43 mins',date:'8/08/2018',num:'90'},
{id:1,para:'the vendor client relationship - in real world situations',tech:'png',url:'https://www.youtube.com/watch?v=rck3MnC7OXA',time:'12 mins',date:'29/05/2021',num:'31'},
{id:2,para:' Get to know project management',tech:'link',url:'https://www.youtube.com/watch?v=mud8513mdRw',time:'25 mins',date:'31/12/2020',num:'65'},
{id:3,para:' Quick look at Different PM Processes',tech:'mp3',url:'https://www.youtube.com/watch?v=J4XdCjcDcbc',time:'32 mins',date:'28/07/2021',num:'47'},
{id:4,para:'Introduction to Artificial Intelligence to a project',tech:'png',url:'https://www.youtube.com/watch?v=ad79nYk2keg',time:'52 mins',date:'15/11/2023',num:'81'},
{id:5,para:'John Seely Manage with HBR',tech:'link',url:'https://www.youtube.com/watch?v=41pNX9-yNu4',time:'1 mins',date:'17/12/2022',num:'14'},
{id:6,para:'Successful Management Hybrid and Remote',tech:'link',url:'https://www.youtube.com/watch?v=rck3MnC7OXA',time:'27 mins',date:'19/04/2021',num:'23'},
{id:7,para:'John Seely Manage with HBR',tech:'png',url:'https://www.youtube.com/watch?v=41pNX9-yNu4',time:'12 mins',date:'02/11/2020',num:'54'},

]

const lists=[{id:1,name:'Explore'},{id:2,name:'Create'},{id:3,name:'Events'},{id:4,name:'Login'},{id:5,name:'Signup'},]

const arr=['EvbA5','5hJOp','97ioE','Tr0as','hd8sf','pd5fr','sd5rG']


class Project extends Component{

    state={name:'Explore',start:0,end:4,img:true,index1:0,index2:4,login:false,cap:'fg5Ks',email:'',password:'',text:''}

    ChangeName=(num)=>{
        const{id,name}=num
        if (id===4){
            this.setState((prev)=>({login:!prev.login}))
        }
        this.setState({name:name})

        
    }

    Login=()=>{
        this.setState((prev)=>({login:!prev.login}))
    }

    Decrese=()=>{
        const {start}=this.state
        if (start>0){
           this.setState((prev)=>({start:prev.start-1,end:prev.end-1}))
        }
        
    } 
    
    Email=(event)=>{
         this.setState({email:event.target.value})
    }

    Password=(event)=>{
        this.setState({password:event.target.value})
    }

    Decreseing=()=>{
        const {index1}=this.state
        if (index1>0){
           this.setState((prev)=>({index1:prev.index1-1,index2:prev.index2-1}))
        }
        
    } 

    Sub=()=>{
        const {email,password,cap,text}=this.state
        if (email !== '' && password !=='' && cap===text){
            this.setState((prev)=>({login:!prev.login}))
        }
    }
    
    Captc=()=>{
        
        const ind=arr[Math.floor(Math.random() * arr.length)]
         
        this.setState(({cap:ind}))
     }

    Increseing=()=>{
        const {index2}=this.state
        if(boxlists.length>index2){
            this.setState((prev)=>({index1:prev.index1+1,index2:prev.index2+1}))
        }
    }
    
    Text=(event)=>{
       this.setState({text:event.target.value})
    }
    Search=()=>{
        this.setState((prev)=>({img:!prev.img}))
    }

    Increse=()=>{
        const {end}=this.state
        if(videolists.length>end){
            this.setState((prev)=>({start:prev.start+1,end:prev.end+1}))
        }
    }

    render(){
        const{name,start,end,img,index1,index2,login,cap}=this.state
        const currentlists=videolists.slice(start,end)
        const newlists=boxlists.slice(index1,index2)
        
        return(
            <div>
        { login && <div className='main-container'>
            <div className='header'>
             <img src={logo} alt='logo' className='logo'/>
             <div className='card'>
             <div className='image'>
             <button className='arrow-button' onClick={this.Search}>
             <img
                src='https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png'
                alt="search icon"
                className="search-icon" 
              /></button>
              {!img &&<input type='search' className='search'/>}</div>
            
                <ul className='responsive'>
                    {lists.map((each)=><Header key={each.id} details={each} change={this.ChangeName} isActive={name===each.name}/>)}
                </ul>
             </div>
            </div>
            <hr className="hr-line" /> 
            <div className='content'>
            <AiFillHome/><AiOutlineRight/>
            <p className='para'>{name}</p></div>
            <hr className="hr-line" /> 
            <div className='filter-card'>
            <h1 className='head-item'>Explore Assets</h1>
            <div className='filtering'>
            <select className='options'>
                <option>filter</option>
            </select>
            <AiTwotoneAppstore className='appstore'/>
            <AiOutlineMenu className='menu'/>
            </div>
            
            </div>
            <hr className="hr-lineing" /> 
            <div>
            <div className='arrows-container'>
                <h2 className='head'>Growing in the Profession (19)</h2>
                <div>
                
                <button className='arrow-button' onClick={this.Decrese}><AiOutlineArrowLeft className='arrow'/></button>
                <button className='arrow-button' onClick={this.Increse}>
                    <AiOutlineArrowRight className='arrow'/>

                </button>
                </div>
                </div>
                <ul>
                { currentlists.map((each)=>{
                    return <div className='video-container'>
                    
                <ReactPlayer url={each.url} height='220px' width='320px'/>
                <span>{each.para}</span>
                <div className='time'>
                    <p className='date'>{each.tech}</p>
                    <p className='date'>{each.time} </p>
                    <p className='date'>{each.date}</p>
                </div> 
                <div className='shapeing'>
                   <AiOutlineUser className='font'/>
                   <AiOutlineExclamationCircle className='font'/>
                   <AiOutlineTags className='font'/>
                   <span>({each.num})</span>
                </div>
                </div>})}
                </ul>
            </div>
            <div className='four-box'>
             <h2 className='head'>Managaning the Profession (4)</h2>
             <ul>
              {fourlists.map((one)=>{
                return <div className='video-container'>
                    
                <ReactPlayer url={one.url} height='220px' width='320px'/>
                <span>{one.para}</span>
                <div className='time'>
                    <p className='date'>{one.tech}</p>
                    <p className='date'>{one.time} </p>
                    <p className='date'>{one.date}</p>
                </div>
                <div className='shapeing'>
                   <AiOutlineUser className='font'/>
                   <AiOutlineExclamationCircle className='font'/>
                   <AiOutlineTags className='font'/>
                   <span>({one.num})</span>
                </div>
                </div>

              })}
             </ul>
            </div>
            <div className='box-container'>
            
            <div className='arrows-container'>
                <h2 className='head'>Softskills for Project Management (11)</h2>
                <div>
                
                <button className='arrow-button' onClick={this.Decreseing}><AiOutlineArrowLeft className='arrow'/></button>
                <button className='arrow-button' onClick={this.Increseing}>
                    <AiOutlineArrowRight className='arrow'/>

                </button>
                </div>
                </div>
            
              
            <ul>
              {newlists.map((one)=>{
                return <div className='video-container'>
                    
                <ReactPlayer url={one.url} height='220px' width='320px'/>
                <span>{one.para}</span>
                <div className='time'>
                    <p className='date'>{one.tech}</p>
                    <p className='date'>{one.time} </p>
                    <p className='date'>{one.date}</p>
                </div>
                <div className='shapeing'>
                   <AiOutlineUser className='font'/>
                   <AiOutlineExclamationCircle className='font'/>
                   <AiOutlineTags className='font'/>
                   <span>({one.num})</span>
                </div>
                </div>

              })}
             </ul>

            </div>

            <div className='footer-section'>
            <div>
                <span>About Us    </span>
                <span>   Privacy Policy</span>
            </div>
            <img src={logo12356} alt='logo123' className='logo123'/>
              <span>we love to hear from you</span>
            </div>
            <div className='footer'>
            <AiOutlineCopyright/>
            
            <span> 2023 Osmosis Learn</span></div> 

        
           </div>}
           {!login && 
           <div className='login-page'>
            <div className="popup">
              <div className="popup-content">
              <div>
              <h2 className='head'>Login</h2>
              <hr className="styled-hr"></hr>
              <p>Not member yet? Click here</p>
              
              <div className='form' >
              <img src={logo} alt='imaged' className='logo'/>
              <input type='email' placeholder='Email' className='styled-input' onChange={this.Email}/>
              <input type='password' placeholder='Password' className='styled-input' onChange={this.Password}/>
              <p className='paraing'>Forgot your Password ?</p>
              <div className='input-c'>
               <span className='captc'>{cap}</span>
                <button onClick={this.Captc} className='submit'>
               <AiOutlineUndo className='fonting'/>
               </button>
               <input type='text' placeholder='Enter Captcha' className='enter' onChange={this.Text}/>
              </div>
              <button className='form-button' onClick={this.Sub}>Submit</button>
              <p>OR</p>
              
              <div className='google'>
              <span>Login with</span><AiOutlineGoogle className='fonting'/></div>
                </div></div>
                <button onClick={this.Login} className='pop-button'>X</button>
              </div>
            </div></div>
            }
            </div>
          
        )
    }

}

export default Project