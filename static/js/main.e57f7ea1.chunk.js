(this["webpackJsonpdownloadable-personal-website-as-cv"]=this["webpackJsonpdownloadable-personal-website-as-cv"]||[]).push([[0],{23:function(A,e,t){},24:function(A,e,t){},25:function(A,e,t){},26:function(A,e,t){},27:function(A,e,t){},28:function(A,e,t){},29:function(A,e,t){},30:function(A,e,t){},31:function(A,e,t){},32:function(A,e,t){},33:function(A,e,t){},34:function(A,e,t){"use strict";t.r(e);var n=t(0),a=t(1),l=t.n(a),o=t(17),c=t.n(o),s=(t(23),t(2)),i=t(3),r=t(5),d=t(4),h=(t.p,t(24),t(25),t.p+"static/media/CV-profile.5414b293.png"),b=function(A){Object(r.a)(t,A);var e=Object(d.a)(t);function t(A){var n;return Object(s.a)(this,t),(n=e.call(this,A)).downloadableStyle={heading:{fontSize:"26px",textAlign:"left"},contact:{marginTop:"0",display:"block",fontSize:"14px"}},n}return Object(i.a)(t,[{key:"render",value:function(){var A=this;return console.log("props",this.props),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"heading",children:[Object(n.jsxs)("h1",{className:"title",style:this.props.didStyleChanged?this.downloadableStyle.heading:null,children:[Object(n.jsx)("b",{className:"name",children:this.props.content.name})," ",this.props.content.title]}),Object(n.jsxs)("div",{className:"contact-info",style:this.props.didStyleChanged?this.downloadableStyle.contact:null,children:[Object(n.jsxs)("span",{className:"contact-content",children:[Object(n.jsx)("b",{children:"Address:"})," Warschauer St. 1234 Berlin, 8855"]}),Object(n.jsxs)("label",{className:"contact-content",children:[Object(n.jsx)("b",{children:"Phone:"})," +49 333 5666 7733"]}),Object(n.jsxs)("label",{className:"contact-content",children:[Object(n.jsx)("b",{children:"Email:"})," alejandroantoniocamb@gmail.com"]}),Object(n.jsxs)("label",{className:"contact-content",children:[Object(n.jsx)("b",{children:"Date of Birth:"})," 14/10/1994 (dd/mm/yyyy)"]}),Object(n.jsxs)("label",{className:"contact-content",children:[Object(n.jsx)("b",{children:"Civil Status:"})," Single"]})]}),Object(n.jsx)("img",{src:h,className:"profile-pic",style:this.props.downloadableStyle?{display:"block"}:{display:"none"}}),Object(n.jsx)("div",{className:"languages",style:this.props.downloadableStyle?{display:"none"}:{display:"block"},children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{onClick:function(){return A.props.changeFileRoute("ES")},children:"ES"}),Object(n.jsx)("li",{onClick:function(){return A.props.changeFileRoute("EN")},children:"EN"}),Object(n.jsx)("li",{onClick:function(){return A.props.changeFileRoute("DE")},children:"DE"})]})})]})})}}]),t}(a.Component),p=(t(26),t(37)),u=function(A){Object(r.a)(t,A);var e=Object(d.a)(t);function t(A){var n;return Object(s.a)(this,t),(n=e.call(this,A)).downloadPdf=function(){navigator.vendor.match(/apple/i)?alert("Sorry, downloads on safari browsers are not supported. Please change to a different browser or write me an email requesting my CV and i'll gladly send it to you! "):n.props.changeDocumentStyle(!0).pipe(Object(p.a)()).subscribe((function(A){A&&window.print()}))},n}return Object(i.a)(t,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"download-as-cv",onClick:this.downloadPdf,style:this.props.downloadableStyle?{display:"none"}:{display:"block"},children:"Download website as CV"})})}}]),t}(a.Component),j=t(38),y=(t(27),function(A){Object(r.a)(t,A);var e=Object(d.a)(t);function t(A){var n;return Object(s.a)(this,t),(n=e.call(this,A)).downloadableStyle={width:"496px",flex:"0 1"},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{className:"contact-form",children:[Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"text"})}),Object(n.jsx)("div",{children:Object(n.jsx)("textarea",{name:"textarea",rows:"10",cols:"50",placeholder:"Write something here"})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{children:Object(n.jsx)("b",{children:"SEND"})})})]})})}}]),t}(a.Component)),O=(t(28),function(A){Object(r.a)(t,A);var e=Object(d.a)(t);function t(A){var n;return Object(s.a)(this,t),(n=e.call(this,A)).downloadableStyle={container:{width:"400px",flex:"0 1",padding:"0 0",margin:"0",fontSize:"10px"}},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(n.jsx)("div",{style:this.props.downloadableStyle?this.downloadableStyle.container:null,children:Object(n.jsx)("ul",{className:"experience-list",children:this.props.list.map((function(A){return Object(n.jsxs)("li",{children:[Object(n.jsx)("label",{children:Object(n.jsx)("b",{children:Object(n.jsx)("a",{href:A.link,children:A.title})})}),Object(n.jsxs)("div",{className:"date",children:[Object(n.jsx)("span",{className:"date-specific",children:A.fromDate}),Object(n.jsx)("div",{className:"separator",children:"|"}),Object(n.jsx)("span",{className:"date-specific",children:A.toDate})]}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:A.place}),Object(n.jsx)("p",{children:A.body})]})}))})})}}]),t}(a.Component)),S=(t(29),function(A){Object(r.a)(t,A);var e=Object(d.a)(t);function t(A){var n;return Object(s.a)(this,t),(n=e.call(this,A)).downloadableStyle={container:{width:"496px",flex:"0 1",fontSize:"10px"}},n.showDescription=function(A){var e=n.state.showDescription;e[A]=!0,n.setState({showDescription:e})},n.removeDescription=function(A){var e=n.state.showDescription;e[A]=!1,n.setState({showDescription:e})},n.state={showDescription:[!1,!1,!1]},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var A=this;return Object(n.jsx)("div",{className:"container",style:this.props.downloadableStyle?this.downloadableStyle.container:null,children:this.props.projects.map((function(e,t){return Object(n.jsxs)("div",{className:"projectContainer",onMouseEnter:function(){A.showDescription(t),A.forceUpdate()},onMouseLeave:function(){A.removeDescription(t),A.forceUpdate()},onClick:function(){return window.location.href=e.link},children:[Object(n.jsx)("img",{className:"githubLogo",src:"data:image/png;base64,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"}),Object(n.jsx)("p",{className:!1===A.state.showDescription[t]?"description hidden":"description",children:e.description}),Object(n.jsx)("span",{className:!0===A.state.showDescription[t]?"hidden":"",children:e.name}),Object(n.jsx)("div",{className:"projectFooter",children:Object(n.jsxs)("div",{className:"projectStars",children:["STARS: ",e.stars]})})]},t)}))})}}]),t}(a.Component)),x=(t(30),function(A){Object(r.a)(t,A);var e=Object(d.a)(t);function t(A){var n;return Object(s.a)(this,t),(n=e.call(this,A)).downloadableStyle={container:{width:"400px",flex:"0 1",fontSize:"8px",border:"1px solid blue"}},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(n.jsx)("div",{style:this.props.downloadableStyle?this.downloadableStyle.container:{width:"400px"},children:Object(n.jsx)("ul",{className:"skillList",children:this.props.skillList.map((function(A){return Object(n.jsxs)("li",{className:"skill",children:[Object(n.jsx)("span",{children:A.title}),Object(n.jsx)("div",{className:"skill-container",children:Object(n.jsxs)("div",{className:"skills skill-bar",style:{width:A.percentage+"%"},children:[A.percentage,"%"]})})]})}))})})}}]),t}(a.Component)),m=function(A){Object(r.a)(t,A);var e=Object(d.a)(t);function t(A){var n;return Object(s.a)(this,t),(n=e.call(this,A)).downloadableStyle={container:{width:"450px",flex:"0 1",padding:"0 0",margin:"0",fontSize:"10px"},parragraph:{padding:"0px 20px",margin:"0px"}},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(n.jsx)("div",{style:this.props.downloadableStyle?this.downloadableStyle.container:null,children:Object(n.jsx)("p",{style:this.props.downloadableStyle?this.downloadableStyle.parragraph:null,children:this.props.parragraph})})}}]),t}(a.Component),f=(t(31),t(32),function(A){Object(r.a)(t,A);var e=Object(d.a)(t);function t(A){var n;return Object(s.a)(this,t),(n=e.call(this,A)).downloadableStyle={container:{width:"400px",flex:"0 1"},menu:{display:"none"}},n}return Object(i.a)(t,[{key:"changeSelection",value:function(A){this.selectedTab=[A],this.forceUpdate()}},{key:"componentDidMount",value:function(){this.selectedTab=[this.props.tabs[0]]}},{key:"render",value:function(){var A=this;return this.selectedTab=this.selectedTab?this.selectedTab:[this.props.tabs[0]],Object(n.jsxs)("div",{className:"menu-container",style:this.props.downloadableStyle?this.downloadableStyle.container:null,children:[Object(n.jsx)("ul",{className:"menu",children:this.props.tabs.map((function(e){return Object(n.jsx)("li",{style:A.props.downloadableStyle?A.downloadableStyle.menu:null,className:-1!==A.selectedTab.indexOf(e)?"active":"",onClick:function(){return A.changeSelection(e)},children:e},e)}))}),Object(n.jsx)("div",{children:this.props.children[0][1].filter((function(e){return-1!==A.selectedTab.indexOf(e[1].props.value)||!1!==!!A.props.downloadableStyle}))})]})}}]),t}(a.Component)),g=function(A){Object(r.a)(t,A);var e=Object(d.a)(t);function t(A){var a;return Object(s.a)(this,t),(a=e.call(this,A)).downloadableStyle={display:"flex",flexDirection:"column",flexWrap:"wrap",height:"1087px",width:"943px",margin:"0",fontSize:"12px",cvTitle:{display:!0,marginBottom:"-2px"}},a.sectionRendererMap=new Map([["contactForm",function(A){return Object(n.jsx)(y,{})}],["list",function(A,e,t){return Object(n.jsx)(O,{list:A,value:t.key,downloadableStyle:e})}],["projects",function(A){return Object(n.jsx)(S,{projects:A})}],["skills",function(A,e,t){return Object(n.jsx)(x,{skillList:A,value:t.key,downloadableStyle:e})}],["menu",function(A,e,t){return Object(n.jsx)(f,{downloadableStyle:e,tabs:A.tabs,children:t.children})}],["text",function(A,e,t){return Object(n.jsx)(m,{parragraph:A,downloadableStyle:e,value:t.key})}]]),a.contentToRender=null,a.renderSections=function(A,e){return null===A||void 0===A?void 0:A.map((function(A){if(A&&A.structure)return console.log("SECTION",A),[Object(n.jsx)("h1",{style:a.props.downloadableStyle?a.downloadableStyle.cvTitle:null,children:"Profile"!==A.tabName&&"Profil"!==A.tabName&&"Perfil"!==A.tabName?A.tabName:""}),A.structure.map((function(A){return A.structure?a.sectionRendererMap.get(A.contentName)(A.content,e,{children:a.renderSections([A])}):[Object(n.jsx)("h1",{style:a.props.downloadableStyle?a.downloadableStyle.cvTitle:null,children:A.key}),a.sectionRendererMap.get(A.contentName)(A.content,e,{key:A.key})]}))]}))},a}return Object(i.a)(t,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"content-body",style:this.props.downloadableStyle?this.downloadableStyle:null,children:this.renderSections(this.props.display,this.props.downloadableStyle)})}}]),t}(a.Component),w=(t(33),function(A){Object(r.a)(t,A);var e=Object(d.a)(t);function t(A){var n;return Object(s.a)(this,t),(n=e.call(this,A)).downloadableStyle={nav:{display:"none"},separationLine:{border:"3px solid black",backgroundColor:"black",marginRight:"25px"}},n.selectedTab=0,n.handleTabClick=function(A,e){n.props.selectTab(A),n.selectedTab=e},n.onMenuClick=function(A){var e="show"===A.navStyle.class?"hide":"show";n.setState({navStyle:{class:e}})},n.state={navStyle:{class:"show"}},n}return Object(i.a)(t,[{key:"render",value:function(){var A=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"menu-icon-container",onClick:function(){return A.onMenuClick(A.state)}}),Object(n.jsx)("div",{className:"menu-icon"}),Object(n.jsx)("div",{className:this.state.navStyle.class,style:this.props.downloadableStyle?this.downloadableStyle.nav:null,children:Object(n.jsx)("ul",{id:"profile-nav",children:this.props.tabs.map((function(e,t){return Object(n.jsx)("li",{className:A.selectedTab===t?"selected":"",onClick:function(){return A.handleTabClick(e.key,t)},children:e.tabName},t)}))})}),Object(n.jsx)("div",{className:"separtionLine",style:this.props.downloadableStyle?this.downloadableStyle.separationLine:null,children:Object(n.jsx)("span",{class:"traveler"})})]})}}]),t}(a.Component)),C=function(A){Object(r.a)(t,A);var e=Object(d.a)(t);function t(A,n){var a;return Object(s.a)(this,t),(a=e.call(this,A)).downloadableStyle={height:"1272px",width:"973px"},a.navBarOptions=[],a.fetchProfileJSON=function(){fetch(a.state.profileContentFile).then((function(A){return A.json()})).then((function(A){a.navBarOptions=Object.keys(A.sections).map((function(e){return{key:e,tabName:A.sections[e].tabName}})),a.setState({content:A,selectedPage:[A.sections[Object.keys(A.sections)[0]]]}),a.forceUpdate()}))},a.loadDownloadableStyle=function(A){if(A===a.state.style)a._styleChanged$.next(null);else{var e=[];Object.keys(a.state.content.sections).forEach((function(A,t){var n=a.state.content.sections[A];n.allowInCv&&e.push(n)})),a.setState({style:A,selectedPage:e})}return a._styleChanged$.asObservable()},a.changeSelectedTab=function(A){a.setState({selectedPage:[a.state.content.sections[A]]})},a.changeProfileFile=function(A){a.setState({selectedPage:[],content:{},profileContentFile:"cv-profile/".concat(A.toLowerCase(),".content.json")},(function(){a.fetchProfileJSON()}))},a.state={style:null,selectedPage:[],content:{},profileContentFile:"cv-profile/content.json"},a._styleChanged$=new j.a(null),a}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchProfileJSON()}},{key:"componentDidUpdate",value:function(A,e,t){this.state.style&&(this._styleChanged$.next(!0),this.setState({style:null,selectedPage:[this.state.content.sections[Object.keys(this.state.content.sections)[0]]]}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{style:this.state.style?this.downloadableStyle:null,className:"App",id:"cvapp",children:[Object(n.jsx)(b,{didStyleChanged:this.state.style,changeFileRoute:this.changeProfileFile,content:this.state.content,downloadableStyle:this.state.style}),Object(n.jsx)(w,{tabs:this.navBarOptions,selectTab:this.changeSelectedTab,downloadableStyle:this.state.style}),Object(n.jsx)(g,{display:this.state.selectedPage,sections:this.state.content.sections,downloadableStyle:this.state.style}),Object(n.jsx)(u,{onClick:this.renderAllTabs,changeDocumentStyle:this.loadDownloadableStyle,downloadableStyle:this.state.style})]})}}]),t}(l.a.Component),N=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(e){var t=e.getCLS,n=e.getFID,a=e.getFCP,l=e.getLCP,o=e.getTTFB;t(A),n(A),a(A),l(A),o(A)}))};c.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),N()}},[[34,1,2]]]);
//# sourceMappingURL=main.e57f7ea1.chunk.js.map