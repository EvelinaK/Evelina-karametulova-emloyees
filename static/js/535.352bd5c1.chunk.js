"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[535],{38535:function(e,t,o){o.r(t),o.d(t,{default:function(){return R}});var n=o(29439),r=o(72791),a=o(1413),i=o(1025),l=o(22233),s=o(61056);function c(e,t,o,n,r){var a=(0,l.Z)(o,t);(!e.MaxDifference||e.MaxDifference<a)&&(e.MaxDifference=a,e.Emp1=n,e.Emp2=r)}var p=function(e,t){var o,n=e.target;(o=n.files[0],new Promise((function(e,t){var n=new FileReader;n.readAsText(o),n.onload=function(){return e(n.result)},n.onerror=function(e){return t(e)}}))).then((function(e){var o=[],n="";try{var r=(0,i.parse)(e,{header:!0,skipEmptyLines:!0}).data.reduce((function(e,t){var o=t.ProjectID,n="NULL"===t.DateTo?new Date:new Date(t.DateTo),r=new Date(t.dateFrom);return e[o]?e[o].push((0,a.Z)((0,a.Z)({},t),{},{DateFrom:r,DateTo:n})):e[o]=[(0,a.Z)((0,a.Z)({},t),{},{DateFrom:r,DateTo:n})],e}),{}),p=[];if(Object.values(r).forEach((function(e){return p.push(function(e){for(var t={ProjectID:e[0].ProjectID},o=0;o<e.length;o++)if(!((0,l.Z)(e[o].DateTo,e[o].DateFrom)<t.MaxDifference))for(var n=o+1;n<e.length;n++)(0,l.Z)(e[n].DateTo,e[n].DateFrom)<t.MaxDifference?e.splice(n,1):e[o].DateFrom>=e[n].DateFrom?e[o].DateFrom<=e[n].DateTo&&c(t,e[o].DateFrom,(0,s.Z)([e[o].DateTo,e[n].DateTo]),e[o].EmpID,e[n].EmpID):e[n].DateFrom<=e[o].DateTo&&c(t,e[n].DateFrom,(0,s.Z)([e[o].DateTo,e[n].DateTo]),e[o].EmpID,e[n].EmpID);return t}(e))})),p.length<2)throw new Error("Error in CSV file");o=p}catch(d){return t({payload:o,info:n="Something went wrong. Please choose another file or use a template csv."})}t({payload:o,info:n})}))},d="EmpID",f="ProjectID",m="DateFrom",u="DateTo",x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"contacts.csv",o=["".concat(d,";").concat(f,";").concat(m,";").concat(u)],n=e.map((function(e){return"".concat(e.EmpID,";").concat(e.ProjectID,";").concat(e.DateFrom,";").concat(e.DateTo)})),r="\ufeff"+o.concat(n).join(",").replace(/,/g,"\n"),a=document.createElement("a"),i=new Blob([r],{type:"text/csv;charset=utf-8;"}),l=URL.createObjectURL(i);a.href=l,a.setAttribute("download",t),a.click()},h=o(45987),y=o(89526),g=o(29691),D=o(28182),v=o(15617),Z=o.n(v),w=o(39655),j=o(80184),b=["className","options","withShadow","components","emptyTableText"],I=["children"],T=(0,g.Z)({root:{margin:"0 0 30px",background:"transparent",boxShadow:"none"}})(y.Z),C={search:!1,actionsColumnIndex:-1,toolbar:!1,draggable:!1,emptyRowsWhenPaging:!1,selectionProps:{color:"primary"},headerSelectionProps:{color:"primary"},pageSize:6,pageSizeOptions:[6,25,50],actionsCellStyle:{color:"#828282",fontSize:"1.4rem"},sorting:!0},S=function(e){var t=e.className,o=e.options,n=e.withShadow,r=void 0===n||n,i=e.components,l=e.emptyTableText,s=(0,h.Z)(e,b),c=o?(0,a.Z)((0,a.Z)({},C),o):C,p=(0,D.Z)(t),d=s.columns;return(0,j.jsx)("div",{className:p,children:(0,j.jsx)(Z(),(0,a.Z)((0,a.Z)({localization:{body:{emptyDataSourceMessage:l||"No records to display"}}},s),{},{columns:d,options:c,components:(0,a.Z)((0,a.Z)({},i),{},{Container:function(e){var t=e.children,o=(0,h.Z)(e,I),n=t.filter((function(e,t){return 4!==t}));return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(T,(0,a.Z)((0,a.Z)({className:"main-table"},o),{},{children:n,elevation:r?2:0})),t[4]]})}})}))})};S.defaultProps={hover:!0,sorting:!1};var E=S,k={paging:!0,sorting:!1},F=function(e){var t=e.values,o={container:{display:"flex",flex:1,flexDirection:"column",justifyContent:"space-between"},validationStyles:{display:"flex",fontSize:16,marginBottom:16,"& svg":{marginRight:12}},downloadIconText:{display:"flex",alignItems:"center",cursor:"pointer",marginBottom:40,marginTop:25,"& span":{margin:"0 10px",fontSize:16},"& svg":{color:w.Z.palette.primary.main,marginRight:10}},successful:{color:"#8BB439"},failed:{color:"#EC4436"},errorMessage:{color:"#D82727"},line:{marginRight:9,lineHeight:"16px",color:w.Z.palette.primary.border},row:{lineHeight:"16px",display:"flex","&:not(:last-child)":{marginBottom:8}},label:{width:100,marginRight:12,color:w.Z.palette.primary.border}},n=(0,r.createRef)(null),a=[{width:30,render:function(e){var t=e.tableData;return(0,j.jsx)("span",{className:"idx",children:t.id+1})}},{width:"25%",field:"ProjectID",title:"Project ID"},{width:"25%",title:"Days Worked",field:"MaxDifference"},{width:"25%",title:"Employee \u21161 (ID)",field:"Emp1"},{width:"25%",title:"Employee \u21162 (ID)",field:"Emp2"}];return(0,j.jsx)("div",{children:(0,j.jsx)(E,{columns:a,data:t,tableRef:n,options:k,style:o.table})})},B=o(35611),P=o(81598),W=o(4942),z=o(78439),R=function(){var e=(0,r.useState)([]),t=(0,n.Z)(e,2),o=t[0],a=t[1],i=(0,r.useState)(null),l=(0,n.Z)(i,2),s=l[0],c=l[1],d=(0,r.useState)(""),f=(0,n.Z)(d,2),m=f[0],u=f[1],h=(0,r.createRef)(null),y={infoWrapper:{margin:"0 4px"},mainTitle:{display:"flex",alignItems:"flex-start",justifyContent:"center",fontSize:40,color:"#f19930"},infoWrapperContainer:{display:"flex",alignItems:"center",flexDirection:"column"},infoErrorContainer:{display:"flex",fontSize:"20px",padding:"30px",color:"red",fontWeight:600},downloadWrapper:(0,W.Z)({display:"flex",flexDirection:"column",justifyContent:"center",flexGrow:1},w.Z.breakpoints.down(w.Z.breakpoints.values.xs),{justifyContent:"start"}),downloadIconText:(0,W.Z)({display:"flex",cursor:"pointer",fontFamily:"Pacifico",color:w.Z.palette.primary.textBrow,fontSize:22,"& span":{margin:"0 10px",fontFamily:"Pacifico",fontSize:22,color:w.Z.palette.primary.textBrow},"& svg":{color:w.Z.palette.primary.main,marginRight:10}},w.Z.breakpoints.down(w.Z.breakpoints.values.xs),{marginBottom:10}),helpText:(0,W.Z)({marginBottom:40,color:w.Z.palette.primary.main},w.Z.breakpoints.down(w.Z.breakpoints.values.xs),{marginBottom:20}),radioWrapper:{marginBottom:40},copyPasteWrapper:{flexGrow:1,paddingBottom:40,"& div":{height:"100%"}},input:{margin:"0 30px",width:250},toBottom:{marginTop:"auto",display:"flex",flexDirection:"column"},uploadWrapper:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:40,"& svg":{cursor:"pointer"}},csvText:(0,W.Z)({fontSize:22,display:"flex",fontWeight:500,color:w.Z.palette.primary.textBrow},w.Z.breakpoints.down(w.Z.breakpoints.values.xs),{marginBottom:5}),uploadInput:{display:"none"},fileName:{fontSize:18,color:w.Z.palette.primary.inverse,margin:"0 10px"},uploadIcon:{color:w.Z.palette.primary.inverse},CloseIcon:{color:w.Z.palette.primary.textBrow},labelContainer:{display:"flex",justifyContent:"center",marginBottom:40,marginTop:30},labelWrap:{display:"flex",alignItems:"center",cursor:"pointer","& label":{display:"flex",cursor:"pointer"},"& span":{margin:"0 10px"}},uploadedContainer:(0,W.Z)({display:"flex",flexDirection:"row",textAlign:"center",alignItems:"center"},w.Z.breakpoints.down(w.Z.breakpoints.values.xs),{display:"flex",flexDirection:"column",textAlign:"center"})},g=[{EmpID:"EmpID",ProjectID:"ProjectID",DateFrom:"DateFrom",DateTo:"DateTo"}];(0,r.useEffect)((function(){}),[o]);var D=function(e){var t=e.payload,o=e.info;u(o),a(t)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h2",{style:y.mainTitle,children:"Pair of employees who have worked together"}),(0,j.jsxs)("div",{style:y.imageWrapper,children:[(0,j.jsx)("div",{style:y.infoWrapperContainer}),(0,j.jsxs)("div",{style:y.actionButtonsWrapper,children:[(0,j.jsx)("div",{style:y.uploadWrapper,children:null!==s&&void 0!==s&&s.length?(0,j.jsxs)("div",{style:y.uploadedContainer,children:[(0,j.jsx)("span",{style:y.csvText,children:"Upload .csv file"}),(0,j.jsx)("span",{style:y.fileName,children:s}),(0,j.jsx)(P.Z,{style:y.CloseIcon,onClick:function(){a([]),c(""),u("")}})]}):(0,j.jsx)("div",{style:y.labelContainer,children:(0,j.jsxs)("label",{style:y.labelWrap,htmlFor:"contained-button-file",children:[(0,j.jsx)("span",{style:y.downloadIconText,children:"Upload .csv file"}),(0,j.jsx)("input",{style:y.uploadInput,id:"contained-button-file",type:"file",accept:".csv",onChange:function(e){c(e.target.files[0].name),p(e,D)}}),(0,j.jsx)(B.Z,{sx:{fontSize:40},style:y.uploadIcon})]})})}),null!==o&&void 0!==o&&o.length?(0,j.jsx)(F,{tableRef:h,values:o}):(0,j.jsxs)("div",{style:y.infoWrapperContainer,children:[m.length>2&&(0,j.jsx)("div",{style:y.infoErrorContainer,children:m}),(0,j.jsxs)("div",{style:y.csvText,onClick:function(){x(g,"Employee.csv")},children:[(0,j.jsx)(z.Z,{style:y.uploadIcon,sx:{fontSize:30}}),"Download Template CSV"]}),(0,j.jsx)("p",{style:y.csvText,children:"Fill the .csv with employees you would like to add. Don\u2019t change the format of the file, please use only .csv format"})]})]})]})]})}}}]);
//# sourceMappingURL=535.352bd5c1.chunk.js.map