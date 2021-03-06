import React, {Component} from 'react';
import styles from './style.module.css';
import ContactCard from 'components/contact-card';

import Shehzin from '../../img/Shehzin.jpeg'
import Akhil from '../../img/Akhil.jpeg'
import Sharat from '../../img/Sharat.jpeg'
import Tharik from '../../img/Tharik.jpeg'
import Kuriakose from '../../img/KuriakoseEldho.png'
import Diya from '../../img/Diya.jpeg'
import Akshay from '../../img/AkshayB.jpg'
import Bhairavi from '../../img/bhairavi.jpeg'
import Kenneth from '../../img/Kenneth.jpg'
import Amal from '../../img/Amal.jpeg'
import Shazia from '../../img/Shazia.jpeg'
import Sreehari from '../../img/Sreehari.jpg'
import Sujith from '../../img/Sujith.jpeg'
import Ashwin from '../../img/Ashwin.jpeg'
import Anjali from '../../img/Anjali.jpeg'
import Anand from '../../img/AnandSanthosh.jpg'
import Labeeb from '../../img/Labeeb.jpeg'
import Pallavi from '../../img/pallavi.jpeg'
import Pooja from '../../img/Pooja.jpeg'
import Sebastian from '../../img/Sebastian.jpeg'
import Alfia from '../../img/Alfia.jpeg'



export default class Contacts extends Component{

    constructor(props){
        super(props)
        this.state={
            cardInfo:[
               {desig:"Chairman",name:"Shehzin Shajahan",descp:"",email:"shehzincs@excelmec.org",phno:"+91 9847789993",img:Shehzin,linkln:"http://linkedin.com/in/shehzincs"},
               {desig:"General Secretary",name:"Akhil Abraham",descp:"",email:"akhilabraham@excelmec.org",phno:"+91 9061128759",img:Akhil,linkln:"http://linkedin.com/in/akhilabrahamt"},
               {desig:"Joint Secretary",name:"Sharat Kurup",descp:"",email:"sharat@excelmec.org",phno:"+91 9717950672",img:Sharat,linkln:"https://linkedin.com/in/sharat-kurup-525aa3164"},
               {desig:"Event Manager",name:"Sreehari.A.C",descp:"",email:"sreehariac@excelmec.org",phno:"+91 8606224648",img:Sreehari,linkln:"https://linkedin.com/in/sreehari-ac-576681183"},
               {desig:"Event Manager",name:"Sujith K",descp:"",email:"sujithk@excelmec.org",phno:"+91 8281515845",img:Sujith,linkln:"https://linkedin.com/in/sujith-k-8a4a3217b"},
               {desig:"Marketing Manager ",name:"Anjali Sunil",descp:"",email:"anjalisunil@excelmec.org",phno:"+91 8547746060",img:Anjali,linkln:"https://linkedin.com/in/anjalisunil939423162"},
               {desig:"Marketing Manager(PC)",name:"Anand N Santhosh",descp:"",email:"anandsanthosh@excelmec.org",phno:"+91 9562355862",img:Anand,linkln:"https://linkedin.com/in/anand-santhosh-17a805163"},
               {desig:"Finance Manager",name:"Labeeb Ali Koleth",descp:"",email:"labeebali@excelmec.org",phno:"+91 8129924095",img:Labeeb,linkln:"https://linkedin.com/in/labeeb-ali-2040a7163"},
               {desig:"General Tech Manager",name:"Tharik Anwar",descp:"",email:"tharikvn@excelmec.org",phno:"+91 9947497430",img:Tharik,linkln:"https://linkedin.com/in/tharik-anwar-a475b3138"},
               {desig:"CS Tech Manager",name:"Kuriakose Eldho",descp:"",email:"kuriakoseeldho@excelmec.org",phno:"+91 7558991555",img:Kuriakose,linkln:"https://linkedin.com/in/kuriakose-eldho"},
               {desig:"Web Manager",name:"Pallavi V G",descp:"",email:"pallavivg@excelmec.org",phno:"+91 9061495887",img:Pallavi,linkln:"https://linkedin.com/in/pallavivgopi"},
               {desig:"Non-Tech Manager",name:"Pooja Sekhar ",descp:"",email:"poojacs@excelmec.org",phno:"+91 9746463250",img:Pooja,linkln:"http://linkedin.com/in/poojasekhar"},
               {desig:"Publicity Manager",name:"Sebastian T Sebastian",descp:"",email:"sebastian@excelmec.org",phno:"+91 8547969187",img:Sebastian,linkln:"https://linkedin.com/in/sebastian-t-sebastian-438031195"},
               {desig:"Media Relations Manager",name:"Kenneth Godwin Isidore",descp:"",email:"kennethgodwin@excelmec.org",phno:"+91 9446975891",img:Kenneth,linkln:"https://linkedin.com/in/kenneth-godwin-isidore/"},
               {desig:"Conferences Manager",name:"Alfia Rehman",descp:"",email:"alfiarehman@excelmec.org",phno:"+91 8301861220",img:Alfia,linkln:" https://linkedin.com/in/alfia-rehman-b526ab162"},
               {desig:"Conferences Manager",name:"Ashwin B Nair",descp:"",email:"ashwinnair@excelmec.org",phno:"+91 9048362398",img:Ashwin,linkln:"https://linkedin.com/in/ashwin-b-nair-5ba0b2152/"},
               {desig:"Social Initiatives Manager",name:"Bhairavi Sameer Shah",descp:"",email:"bhairavi@excelmec.org",phno:"+91 9061344877",img:Bhairavi,linkln:"https://linkedin.com/in/bhairavi-shah/"},
               {desig:"Talks Manager",name:"Diya Liza Varghese ",descp:"",email:"diyaliza@excelmec.org",phno:"+91 9048819638",img:Diya,linkln:"http://linkedin.com/in/diya-liza-varghese-b92a70128"},
               {desig:"Online Media Relations",name:"Shazia Salim",descp:"",email:"shaziasalim@excelmec.org",phno:"+91 7034511782",img:Shazia,linkln:"https://linkedin.com/in/shazia-salim"},
               {desig:"Design Manager",name:"Amal K Ajay",descp:"",email:"amal@excelmec.org",phno:"+91 8921976941",img:Amal,linkln:"https://linkedin.com/in/amal-k-ajay/"},
               {desig:"Content Manager",name:"Akshay Balakrishnan",descp:"",email:"akshayb@excelmec.org",phno:"+91 9895389963",img:Akshay,linkln:"https://linkedin.com/in/akshay-balakrishnan-62371713b"}
            
               
            ]
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render(){
        var grid = []
        for(var i=0 ; i<this.state.cardInfo.length ; i++){
			var gridItem = <ContactCard details={this.state.cardInfo[i]} />
               grid.push(gridItem) 
        }  
        return(
            <div>
               <div>
               <div className={styles["header"]}>
                    <div className={styles["title"]}>Get in Touch With Us</div>
                </div>
                    <div className={styles["container"]}>
                        {grid}
                    </div>
                </div>
            </div>
        )
    }
}