(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{124:function(e,t,a){e.exports={schedule:"style_schedule__26DKL","schedule-container":"style_schedule-container__3IHsP",loader:"style_loader__rAIw2","schedule-header--container":"style_schedule-header--container__zfF5d","schedule-title":"style_schedule-title__3hDZ8","schedule-filter--btn":"style_schedule-filter--btn__1dftj","schedule-tabs--container":"style_schedule-tabs--container__2Iga-","schedule-noevent--container":"style_schedule-noevent--container__2vRnL"}},126:function(e,t,a){e.exports=a.p+"static/media/ibetologo.baf40e20.png"},229:function(e,t,a){"use strict";a.r(t);var i=a(14),n=a.n(i),r=a(20),o=a(100),c=a(10),m=a(9),l=a(12),d=a(11),g=a(21),u=a(13),s=a(0),h=a.n(s),y=a(4),p=a(248),M=a(231),_=(a(50),a(66)),x=a(124),f=a.n(x),v=(a(125),a(126),Object(y.a)(function(){return Promise.all([a.e(5),a.e(14),a.e(17)]).then(a.bind(null,183))})),T=Object(y.a)(function(){return a.e(19).then(a.bind(null,186))}),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).showFilterPopup=function(){a.setState({showFilterPopup:!0})},a.closeFilterPopup=function(){a.setState({showFilterPopup:!1}),document.getElementById("scheduleFilterContent").scrollTop=0},a.resetFilter=function(e){a.setState({currentCategory:a.state.filter.default.type,currentTime:a.state.filter.default.time})},a.modifyFilters=function(e,t){"type"===t?a.setState({nextCategory:e.target.value}):e.target.checked?a.setState({nextTime:[].concat(Object(o.a)(a.state.nextTime),[e.target.value])}):a.setState({nextTime:a.state.nextTime.filter(function(t){return t!==e.target.value})})},a.changeDay=function(e,t){t>=1&&t<=3&&a.setState({currentDay:t,events:a.totalEvents.filter(function(e){return e.day===t})})},a.applyFilter=function(){a.setState({currentCategory:a.state.nextCategory,currentTime:a.state.nextTime},function(){a.closeFilterPopup()})},a.state={events:[],filter:{types:["All","Computer Science","Gen-Tech","Non-Tech","Event","Robotics","Workshops","Talks"],time:["Morning","Afternoon","Evening"],default:{type:"All",time:["Morning","Afternoon","Evening"]}},showFilterPopup:!1,days:[1,2,3],currentDay:1,currentCategory:"All",currentTime:["Morning","Afternoon","Evening"],nextCategory:"All",nextTime:["Morning","Afternoon","Evening"],loading:!0},a.changeDay=a.changeDay.bind(Object(g.a)(a)),a.totalEvents=[],a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=Object(r.a)(n.a.mark(function e(){var t=this;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.totalEvents=_,this.setState({totalEvents:_,loading:!1,events:_.filter(function(e){return e.day===t.state.currentDay})});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this,t=[];return this.state.events.forEach(function(a,i){"All"===e.state.currentCategory&&e.state.currentTime.includes(a.daytime)&&t.push(h.a.createElement(T,{data:a,id:i})),a.category===e.state.currentCategory&&e.state.currentTime.includes(a.daytime)&&t.push(h.a.createElement(T,{data:a,id:i}))}),0==t.length&&t.push(h.a.createElement("div",{className:f.a["schedule-noevent--container"]},"No Events To Display")),h.a.createElement("div",{className:f.a.schedule},h.a.createElement("div",{className:f.a["schedule-container"]},h.a.createElement("div",{style:{zIndex:3},className:f.a["schedule-filter--btn"],onClick:this.showFilterPopup},"Filter"),h.a.createElement("div",{className:f.a["schedule-header--container"]},h.a.createElement("div",{style:{zIndex:3},className:f.a["schedule-title"]},"Schedule"),h.a.createElement("div",{className:f.a["schedule-tabs--container"]},h.a.createElement(p.a,{value:this.state.currentDay,variant:"fullWidth",onChange:this.changeDay,"aria-label":"schedule page tabs"},this.state.days.map(function(e){return h.a.createElement(M.a,Object.assign({style:{fontSize:16,fontW0eight:600,zIndex:3},value:e,label:"Day ".concat(e)},{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}))})))),this.state.loading&&h.a.createElement("div",{className:"schedule-content--container"},h.a.createElement("img",{className:f.a.loader,src:a(51),alt:""})),!this.state.loading&&h.a.createElement("div",{className:"schedule-content--container"},t)),h.a.createElement(v,{isOpen:this.state.showFilterPopup,data:this.state.filter,handleClose:this.closeFilterPopup,handleReset:this.resetFilter,handleApply:this.applyFilter,updateFilter:this.modifyFilters,currentCategory:this.state.nextCategory,currentTime:this.state.nextTime}))}}]),t}(h.a.Component);t.default=b},51:function(e,t,a){e.exports=a.p+"static/media/loader.89d3a568.gif"},66:function(e){e.exports=[{id:100,contributor:{first_name:"Nikhil",email:""},name:"Ibeto jr",venue:"External Auditorium",codename:"ibetojr",date:"10-11-2019",time:"8:30AM-3PM",img:"http://excelmec.org/excel19/ibetojrlogo2.png",day:3,category:"Event",daytime:"Morning",created_at:"2019-11-01T00:31:12.950361+05:30"},{id:101,contributor:{first_name:"Nikhil",email:""},name:"Khoj",venue:"Amphitheatre",codename:"khoj",date:"10-11-2019",time:"9:30AM-3PM",img:"http://excelmec.org/excel19/treasure_hunt.png",day:3,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T00:36:10.990916+05:30"},{id:102,contributor:{first_name:"Nikhil",email:""},name:"Clutch",venue:"Basketball court",codename:"clutch",date:"10-11-2019",time:"9:30AM-3PM",img:"http://excelmec.org/excel19/basketball.png",day:3,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T00:37:25.773229+05:30"},{id:103,contributor:{first_name:"Nikhil",email:""},name:"Tiki Taka",venue:"Ground",codename:"tikiTaka",date:"10-11-2019",time:"9:30AM-3PM",img:"http://excelmec.org/excel19/tiki_taka.png",day:3,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T00:38:31.356606+05:30"},{id:104,contributor:{first_name:"Nikhil",email:""},name:"Foam football",venue:"Amphitheatre",codename:"foamFootball",date:"10-11-2019",time:"9:30AM-3PM",img:"http://excelmec.org/excel19/foam_football1.png",day:3,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T00:39:27.966166+05:30"},{id:105,contributor:{first_name:"Nikhil",email:""},name:"LOST",venue:"PG block front",codename:"lost",date:"10-11-2019",time:"9:30AM-3PM",img:"http://excelmec.org/excel19/lost.png",day:3,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T00:40:03.908108+05:30"},{id:106,contributor:{first_name:"Nikhil",email:""},name:"Game zone",venue:"Graphics hall",codename:"gameZone",date:"10-11-2019",time:"9:30AM-3PM",img:"http://excelmec.org/excel19/GameZone.png",day:3,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T00:41:06.067993+05:30"},{id:107,contributor:{first_name:"Nikhil",email:""},name:"Effigium",venue:"PG block",codename:"effegium",date:"10-11-2019",time:"9:30AM-3PM",img:"http://excelmec.org/excel19/escape_room.png",day:3,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T00:41:45.736412+05:30"},{id:109,contributor:{first_name:"Nikhil",email:""},name:"MEC Labs",venue:"External Auditorium",codename:"mecLabs",date:"10-11-2019",time:"9:30AM-3PM",img:"http://excelmec.org/excel19/MECLABS.png",day:3,category:"Gen-Tech",daytime:"Morning",created_at:"2019-11-01T00:44:09.565977+05:30"},{id:110,contributor:{first_name:"Johan",email:""},name:"Algorithms(P)",venue:"309-310-311-312",codename:"algorithms",date:"10-11-2019",time:"10AM-11AM",img:"http://excelmec.org/excel19/algorithm.png",day:3,category:"Computer Science",daytime:"Morning",created_at:"2019-11-01T00:46:02.141116+05:30"},{id:111,contributor:{first_name:"Nikhil",email:""},name:"Defacto (P)",venue:"Indoor Auditorium",codename:"defacto",date:"10-11-2019",time:"10AM-11AM",img:"http://excelmec.org/excel19/Defacto.png",day:3,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T00:47:01.543671+05:30"},{id:112,contributor:{first_name:"Nikhil",email:""},name:"XLR8",venue:"Amphitheatre",codename:"xlr8",date:"10-11-2019",time:"10AM-3PM",img:"http://excelmec.org/excel19/xlr8.png",day:3,category:"Gen-Tech",daytime:"Morning",created_at:"2019-11-01T00:48:00.892222+05:30"},{id:113,contributor:{first_name:"Nikhil",email:""},name:"Portraits",venue:"Indoor Auditorium",codename:"portraits",date:"10-11-2019",time:"11AM-1PM",img:"http://excelmec.org/excel19/portraitslowres.png",day:3,category:"Talk",daytime:"Morning",created_at:"2019-11-01T00:49:27.212991+05:30"},{id:114,contributor:{first_name:"Johan",email:""},name:"Algorithms(F)",venue:"CC2",codename:"algorithms",date:"10-11-2019",time:"12PM-3PM",img:"http://excelmec.org/excel19/algorithm.png",day:3,category:"Computer Science",daytime:"Afternoon",created_at:"2019-11-01T00:50:42.799343+05:30"},{id:115,contributor:{first_name:"Nikhil",email:""},name:"Defacto (F)",venue:"Indoor Auditorium",codename:"defacto",date:"10-11-2019",time:"1PM-3PM",img:"http://excelmec.org/excel19/Defacto.png",day:3,category:"Non-Tech",daytime:"Afternoon",created_at:"2019-11-01T00:51:47.368696+05:30"},{id:116,contributor:{first_name:"Nikhil",email:""},name:"Khoj(P)",venue:"External Audi",codename:"khoj",date:"08-11-2019",time:"9:30AM-10:30AM",img:"http://excelmec.org/excel19/treasure_hunt.png",day:1,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:27:30.120416+05:30"},{id:117,contributor:{first_name:"Nikhil",email:""},name:"Spider web (P)",venue:"309-310-311-312",codename:"spiderWeb",date:"08-11-2019",time:"9:30AM-11AM",img:"http://excelmec.org/excel19/spider_web.png",day:1,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:30:02.681956+05:30"},{id:118,contributor:{first_name:"Nikhil",email:""},name:"Clutch",venue:"Basketball court",codename:"clutch",date:"08-11-2019",time:"9:30AM-4PM",img:"http://excelmec.org/excel19/basketball.png",day:1,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:35:34.512776+05:30"},{id:119,contributor:{first_name:"Nikhil",email:""},name:"Tiki Taka",venue:"Ground",codename:"tikiTaka",date:"08-11-2019",time:"9:30AM-4PM",img:"http://excelmec.org/excel19/tiki_taka.png",day:1,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:36:52.899966+05:30"},{id:120,contributor:{first_name:"Nikhil",email:""},name:"Foam football",venue:"Amphitheatre",codename:"foamFootball",date:"08-11-2019",time:"9:30AM-4PM",img:"http://excelmec.org/excel19/foam_football1.png",day:1,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:37:58.380365+05:30"},{id:121,contributor:{first_name:"Nikhil",email:""},name:"LOST",venue:"PG block front",codename:"lost",date:"08-11-2019",time:"9:30AM-4PM",img:"http://excelmec.org/excel19/lost.png",day:1,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:38:47.536434+05:30"},{id:122,contributor:{first_name:"Nikhil",email:""},name:"Game Zone",venue:"Graphics hall",codename:"gameZone",date:"08-11-2019",time:"9:30AM-6PM",img:"http://excelmec.org/excel19/GameZone.png",day:1,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:39:58.449587+05:30"},{id:123,contributor:{first_name:"Nikhil",email:""},name:"IATRIC",venue:"Indoor Audi",codename:"biomedTalk",date:"08-11-2019",time:"9:30AM-11AM",img:"http://excelmec.org/excel19/cittalowres.png",day:1,category:"Gen-Tech",daytime:"Morning",created_at:"2019-11-01T23:41:54.989218+05:30"},{id:124,contributor:{first_name:"Nikhil",email:""},name:"Citta",venue:"Seminar Hall",codename:"citta",date:"08-11-2019",time:"9:30AM-4PM",img:"http://excelmec.org/excel19/cittalowres.png",day:1,category:"Event",daytime:"Morning",created_at:"2019-11-01T23:45:48.094305+05:30"},{id:125,contributor:{first_name:"Nikhil",email:""},name:"Instant Photography",venue:"college",codename:"instantPhotography",date:"08-11-2019",time:"9:30AM-4PM",img:"http://excelmec.org/excel19/instant_photography.png",day:1,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:47:03.632286+05:30"},{id:126,contributor:{first_name:"Pallavi",email:"pallavivg98@gmail.com"},name:"Game plan",venue:"511",codename:"GamePlan",date:"08-11-2019",time:"9:30AM-4PM",img:"http://excelmec.org/excel19/game_plan.png",day:1,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:48:03.398981+05:30"},{id:127,contributor:{first_name:"Nikhil",email:""},name:"Effegium",venue:"409-410",codename:"effegium",date:"08-11-2019",time:"10AM-12:30 PM",img:"http://excelmec.org/excel19/escape_room.png",day:1,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:49:23.798149+05:30"},{id:128,contributor:{first_name:"Nikhil",email:""},name:"Effegium",venue:"PG block",codename:"effegium",date:"09-11-2019",time:"9:30AM-1:30 PM",img:"http://excelmec.org/excel19/escape_room.png",day:2,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:50:20.309659+05:30"},{id:129,contributor:{first_name:"Nikhil",email:""},name:"Khoj",venue:"Amphitheatre",codename:"khoj",date:"09-11-2019",time:"9:30AM-4:30PM",img:"http://excelmec.org/excel19/treasure_hunt.png",day:2,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:51:03.345695+05:30"},{id:130,contributor:{first_name:"Nikhil",email:""},name:"View Finder",venue:"Media hall",codename:"viewFinder",date:"08-11-2019",time:"10AM-4PM",img:"http://excelmec.org/excel19/video-camera.png",day:1,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:51:04.251009+05:30"},{id:131,contributor:{first_name:"Nikhil",email:""},name:"Clutch",venue:"Basketball court",codename:"clutch",date:"09-11-2019",time:"9:30AM-4:30PM",img:"http://excelmec.org/excel19/basketball.png",day:2,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:51:46.262760+05:30"},{id:132,contributor:{first_name:"Nikhil",email:""},name:"Lifeline(P)",venue:"301-314-315",codename:"lifeline",date:"08-11-2019",time:"10AM-11AM",img:"http://excelmec.org/excel19/lifeline.png",day:1,category:"Gen-Tech",daytime:"Morning",created_at:"2019-11-01T23:51:58.013044+05:30"},{id:133,contributor:{first_name:"Nikhil",email:""},name:"Tiki Taka",venue:"Ground",codename:"tikiTaka",date:"09-11-2019",time:"9:30AM-4:30PM",img:"http://excelmec.org/excel19/tiki_taka.png",day:2,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:52:27.481830+05:30"},{id:134,contributor:{first_name:"Nikhil",email:""},name:"Robosoccer",venue:"Amphitheatre",codename:"roboSoccer",date:"08-11-2019",time:"10AM-4PM",img:"http://excelmec.org/excel19/robosocccer.png",day:1,category:"Robotics",daytime:"Morning",created_at:"2019-11-01T23:52:58.665977+05:30"},{id:135,contributor:{first_name:"Nikhil",email:""},name:"Foam football",venue:"Amphitheatre",codename:"foamFootball",date:"09-11-2019",time:"9:30AM-4:30PM",img:"http://excelmec.org/excel19/foam_football1.png",day:2,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:53:48.033848+05:30"},{id:138,contributor:{first_name:"Nikhil",email:""},name:"LOST",venue:"PG block front",codename:"lost",date:"09-11-2019",time:"9:30AM-4:30PM",img:"http://excelmec.org/excel19/lost.png",day:2,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:54:25.581600+05:30"},{id:139,contributor:{first_name:"Nikhil",email:""},name:"Game zone",venue:"Graphics hall",codename:"gameZone",date:"09-11-2019",time:"9:30AM-4:30PM",img:"http://excelmec.org/excel19/GameZone.png",day:2,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:55:02.449376+05:30"},{id:140,contributor:{first_name:"Pallavi",email:"pallavivg98@gmail.com"},name:"Cyber Security Workshop",venue:"501",codename:"cybersecurityworkshop",date:"08-11-2019",time:"10AM-4PM",img:"http://excelmec.org/excel19/security.png",day:1,category:"Workshop",daytime:"Morning",created_at:"2019-11-01T23:55:43.606921+05:30"},{id:141,contributor:{first_name:"Pallavi",email:"pallavivg98@gmail.com"},name:"Magnum Opus",venue:"...",codename:"magnum_opus",date:"09-11-2019",time:"9:30AM-4:30PM",img:"http://excelmec.org/excel19/magnum_opus.png",day:2,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:55:44.951587+05:30"},{id:142,contributor:{first_name:"Nikhil",email:""},name:"Tech pursuit(P1)",venue:"CC2",codename:"techPursuit",date:"09-11-2019",time:"9:30AM-10:30AM",img:"http://excelmec.org/excel19/tech_pursuit.png",day:2,category:"Tech",daytime:"Morning",created_at:"2019-11-01T23:56:33.067767+05:30"},{id:143,contributor:{first_name:"Nikhil",email:""},name:"Khoj",venue:"Amphitheatre",codename:"khoj",date:"08-11-2019",time:"10:30AM-4PM",img:"http://excelmec.org/excel19/treasure_hunt.png",day:1,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-01T23:57:00.816981+05:30"},{id:144,contributor:{first_name:"Nikhil",email:""},name:"Citta",venue:"Seminar Hall",codename:"citta",date:"09-11-2019",time:"9:30AM-4:30PM",img:"http://excelmec.org/excel19/cittalowres.png",day:2,category:"Event",daytime:"Morning",created_at:"2019-11-01T23:57:20.673248+05:30"},{id:145,contributor:{first_name:"Nikhil",email:""},name:"Reverse coding(P)",venue:"301-314-315",codename:"reverseCoding",date:"08-11-2019",time:"11AM-12PM",img:"http://excelmec.org/excel19/reverse_coding.png",day:1,category:"Computer Science",daytime:"Morning",created_at:"2019-11-01T23:58:50.705329+05:30"},{id:146,contributor:{first_name:"Nikhil",email:""},name:"Portraits",venue:"Indoor Audi",codename:"portraits",date:"08-11-2019",time:"11AM-12PM",img:"http://excelmec.org/excel19/portraitslowres.png",day:1,category:"Talk",daytime:"Morning",created_at:"2019-11-01T23:59:44.607119+05:30"},{id:147,contributor:{first_name:"Nikhil",email:""},name:"Wave Cloning(P)",venue:"509-510",codename:"waveCloning",date:"08-11-2019",time:"9:30AM-10:30AM",img:"http://excelmec.org/excel19/wavecloning.png",day:1,category:"Gen-Tech",daytime:"Morning",created_at:"2019-11-02T00:00:39.500591+05:30"},{id:148,contributor:{first_name:"Nikhil",email:""},name:"Defuse(P1)",venue:"309-310-311-312",codename:"defuse",date:"08-11-2019",time:"12PM-1PM",img:"http://excelmec.org/excel19/DEFUSE.png",day:1,category:"Gen-Tech",daytime:"Afternoon",created_at:"2019-11-02T00:01:31.560359+05:30"},{id:149,contributor:{first_name:"Nikhil",email:""},name:"Debugger(p)",venue:"301-314-315",codename:"debugger",date:"08-11-2019",time:"12PM-1PM",img:"http://excelmec.org/excel19/debug.png",day:1,category:"Computer Science",daytime:"Afternoon",created_at:"2019-11-02T00:02:26.890430+05:30"},{id:150,contributor:{first_name:"Nikhil",email:""},name:"Lifeline(F)",venue:"Biomed Lab",codename:"lifeline",date:"08-11-2019",time:"12:30PM-4PM",img:"http://excelmec.org/excel19/lifeline.png",day:1,category:"Gen-Tech",daytime:"Morning",created_at:"2019-11-02T00:03:14.678866+05:30"},{id:151,contributor:{first_name:"Nikhil",email:""},name:"Spider web(F)",venue:"volleyball court",codename:"spiderWeb",date:"08-11-2019",time:"1PM-4PM",img:"http://excelmec.org/excel19/spider_web.png",day:1,category:"Non-Tech",daytime:"Afternoon",created_at:"2019-11-02T00:04:08.521355+05:30"},{id:152,contributor:{first_name:"Nikhil",email:""},name:"Reverse coding(F)",venue:"CC1",codename:"reverseCoding",date:"08-11-2019",time:"1PM-4PM",img:"http://excelmec.org/excel19/reverse_coding.png",day:1,category:"Computer Science",daytime:"Afternoon",created_at:"2019-11-02T00:09:14.394560+05:30"},{id:153,contributor:{first_name:"Pallavi",email:"pallavivg98@gmail.com"},name:"Debugger(F)",venue:"CC2",codename:"debugger",date:"08-11-2019",time:"1:30PM-4PM",img:"http://excelmec.org/excel19/debug.png",day:1,category:"Computer Science",daytime:"Afternoon",created_at:"2019-11-02T00:09:57.728686+05:30"},{id:154,contributor:{first_name:"Nikhil",email:""},name:"Wave Cloning(F)",venue:"Comm. Lab",codename:"waveCloning",date:"08-11-2019",time:"1PM-4PM",img:"http://excelmec.org/excel19/wavecloning.png",day:1,category:"Gen-Tech",daytime:"Afternoon",created_at:"2019-11-02T00:11:09.150225+05:30"},{id:158,contributor:{first_name:"Nikhil",email:""},name:"U25",venue:"Ground",codename:"under25",date:"08-11-2019",time:"4PM-8PM",img:"http://excelmec.org/excel19/Mec25Logolowres.png",day:1,category:"Talk",daytime:"Evening",created_at:"2019-11-02T00:13:41.577779+05:30"},{id:159,contributor:{first_name:"Pallavi",email:"pallavivg98@gmail.com"},name:"4*120(P)",venue:"301-314-315",codename:"4x120",date:"09-11-19",time:"11AM-12PM",img:"http://excelmec.org/excel19/4x120.png",day:2,category:"Computer Science",daytime:"Morning",created_at:"2019-11-02T19:43:13.305859+05:30"},{id:170,contributor:{first_name:"Nikhil",email:""},name:"CEO(P)",venue:"509-510-511",codename:"ceo",date:"09-11-19",time:"10AM-11AM",img:"http://excelmec.org/excel19/ceo.png",day:2,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-02T20:13:59.813987+05:30"},{id:173,contributor:{first_name:"Nikhil",email:""},name:"View Finder",venue:"Media Hall",codename:"viewFinder",date:"09-11-19",time:"10AM-4:30PM",img:"http://excelmec.org/excel19/video-camera.png",day:2,category:"Non-Tech",daytime:"Morning",created_at:"2019-11-02T20:15:12.344447+05:30"},{id:174,contributor:{first_name:"Nikhil",email:""},name:"Robowar",venue:"Amphitheatre",codename:"robowar",date:"09-11-19",time:"10AM- 4PM",img:"http://excelmec.org/excel19/conflict1.png",day:2,category:"Robotics",daytime:"Morning",created_at:"2019-11-02T20:18:00.114808+05:30"},{id:175,contributor:{first_name:"Pallavi",email:"pallavivg98@gmail.com"},name:"Robotics Workshop",venue:"501",codename:"roboticsworkshop",date:"09-11-19",time:"10AM-4:30PM",img:"http://excelmec.org/excel19/swarm.png",day:2,category:"Workshop",daytime:"Morning",created_at:"2019-11-02T20:19:30.138327+05:30"},{id:176,contributor:{first_name:"Suvarna",email:""},name:"Protex",venue:"External Auditorium",codename:"protex",date:"09-11-19",time:"10AM-4:30PM",img:"http://excelmec.org/excel19/Protex.png",day:2,category:"Workshop",daytime:"Morning",created_at:"2019-11-02T20:20:36.122186+05:30"},{id:177,contributor:{first_name:"Nikhil",email:""},name:"Portraits",venue:"Indoor auditorium",codename:"portraits",date:"09-11-19",time:"10AM-11AM",img:"http://excelmec.org/excel19/portraitslowres.png",day:2,category:"Talk",daytime:"Morning",created_at:"2019-11-02T20:23:04.043880+05:30"},{id:179,contributor:{first_name:"Nikhil",email:""},name:"Extrinscity(P)",venue:"310-311-312",codename:"extrinscity",date:"09-11-19",time:"9:30AM-10:30AM",img:"http://excelmec.org/excel19/Extrinicty.png",day:2,category:"Gen-Tech",daytime:"Afternoon",created_at:"2019-11-02T20:24:54.623976+05:30"},{id:180,contributor:{first_name:"Nikhil",email:""},name:"Decycle(P)",venue:"Back entrance",codename:"decycle",date:"09-11-19",time:"11AM-12PM",img:"http://excelmec.org/excel19/decycle.png",day:2,category:"Gen-Tech",daytime:"Afternoon",created_at:"2019-11-02T20:26:23.049890+05:30"},{id:181,contributor:{first_name:"Nikhil",email:""},name:"Tech pursuit(P2)",venue:"Power electronics. lab + Computer Center 2",codename:"techPursuit",date:"09-11-19",time:"11AM-12:30PM",img:"http://excelmec.org/excel19/tech_pursuit.png",day:2,category:"Gen-Tech",daytime:"Afternoon",created_at:"2019-11-02T20:28:05.813043+05:30"},{id:182,contributor:{first_name:"Nikhil",email:""},name:"SpotOn(P)",venue:"Indoor auditorium",codename:"spoton",date:"09-11-19",time:"11AM-1:30PM",img:"http://excelmec.org/excel19/spotonlowres.png",day:2,category:"Talk",daytime:"Afternoon",created_at:"2019-11-02T20:30:08.818244+05:30"},{id:183,contributor:{first_name:"Nikhil",email:""},name:"CEO(F)",venue:"509-510-511",codename:"ceo",date:"09-11-19",time:"12:30PM-4:30PM",img:"http://excelmec.org/excel19/ceo.png",day:2,category:"Non-Tech",daytime:"Afternoon",created_at:"2019-11-02T20:32:31.089245+05:30"},{id:184,contributor:{first_name:"Nikhil",email:""},name:"Creative event",venue:"CC1",codename:"creativeEvent",date:"09-11-19",time:"1PM-4PM",img:"http://excelmec.org/excel19/ui_ux.png",day:2,category:"Computer Science",daytime:"Afternoon",created_at:"2019-11-02T20:35:38.161108+05:30"},{id:185,contributor:{first_name:"Neha",email:""},name:"4*120(F)",venue:"CC2",codename:"4x120",date:"09-11-19",time:"1:30PM-4:30PM",img:"http://excelmec.org/excel19/4x120.png",day:2,category:"Computer Science",daytime:"Afternoon",created_at:"2019-11-02T20:37:33.016200+05:30"},{id:186,contributor:{first_name:"Nikhil",email:""},name:"Extrinscity(F)",venue:"Test Lab+Comm. Lab",codename:"extrinscity",date:"09-11-19",time:"1:30PM-4:30PM",img:"http://excelmec.org/excel19/Extrinicty.png",day:2,category:"Gen-Tech",daytime:"Afternoon",created_at:"2019-11-02T20:39:38.876189+05:30"},{id:187,contributor:{first_name:"Nikhil",email:""},name:"Reverso(F)",venue:"515",codename:"reverso",date:"09-11-19",time:"1:30PM-4:30PM",img:"http://excelmec.org/excel19/reverse.png",day:2,category:"Gen-Tech",daytime:"Afternoon",created_at:"2019-11-02T20:42:00.371638+05:30"},{id:188,contributor:{first_name:"Nikhil",email:""},name:"Lumiere(P2)",venue:"409",codename:"lumiere",date:"09-11-19",time:"1PM-2PM",img:"http://excelmec.org/excel19/lumier.png",day:2,category:"Gen-Tech",daytime:"Afternoon",created_at:"2019-11-02T20:43:25.505067+05:30"},{id:189,contributor:{first_name:"Nikhil",email:""},name:"SpotOn(F)",venue:"410",codename:"spoton",date:"09-11-19",time:"2PM-4:30PM",img:"http://excelmec.org/excel19/spotonlowres.png",day:2,category:"Talk",daytime:"Evening",created_at:"2019-11-02T20:45:35.988617+05:30"},{id:190,contributor:{first_name:"Nikhil",email:""},name:"Lumiere(F)",venue:"Electrical lab",codename:"lumiere",date:"09-11-19",time:"2PM-4:30PM",img:"http://excelmec.org/excel19/lumier.png",day:2,category:"Gen-Tech",daytime:"Evening",created_at:"2019-11-02T20:47:20.632653+05:30"},{id:191,contributor:{first_name:"Nikhil",email:""},name:"Tech pursuit(F)",venue:"Microprocessor lab",codename:"techPursuit",date:"09-11-19",time:"3PM-4PM",img:"http://excelmec.org/excel19/tech_pursuit.png",day:2,category:"Gen-Tech",daytime:"Evening",created_at:"2019-11-02T20:48:46.073800+05:30"},{id:192,contributor:{first_name:"Nikhil",email:""},name:".issue",venue:"Ground",codename:"issue",date:"09-11-19",time:"3PM-6PM",img:"http://excelmec.org/excel19/issuelowres.png",day:2,category:"Talk",daytime:"Evening",created_at:"2019-11-02T20:50:04.153334+05:30"},{id:193,contributor:{first_name:"Nikhil",email:""},name:"Unmasked",venue:"Ground",codename:"unmasked",date:"09-11-19",time:"6:30PM-8PM",img:"http://excelmec.org/excel19/unmaskedlowres.png",day:2,category:"Talk",daytime:"Evening",created_at:"2019-11-02T20:53:54.918875+05:30"},{id:195,contributor:{first_name:"Nikhil",email:""},name:"Citta",venue:"Seminar Hall",codename:"citta",date:"10-11-2019",time:"9:30AM-3PM",img:"http://excelmec.org/excel19/cittalowres.png",day:3,category:"Event",daytime:"Morning",created_at:"2019-11-06T15:39:22.423600+05:30"},{id:196,contributor:{first_name:"Nikhil",email:""},name:"Reverso(P)",venue:"310-311-312",codename:"reverso",date:"09-11-19",time:"11AM-12PM",img:"http://excelmec.org/excel19/reverse.png",day:2,category:"Gen Tech",daytime:"Morning",created_at:"2019-11-06T15:42:58.798916+05:30"},{id:197,contributor:{first_name:"Nikhil",email:""},name:"Lumiere(P1)",venue:"301-314-315",codename:"lumiere",date:"09-11-19",time:"11:30AM-12:30PM",img:"http://excelmec.org/excel19/lumier.png",day:2,category:"Gen Tech",daytime:"Morning",created_at:"2019-11-06T15:45:15.061546+05:30"}]}}]);
//# sourceMappingURL=15.5019989d.chunk.js.map