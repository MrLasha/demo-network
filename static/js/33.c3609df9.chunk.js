"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[33],{8531:function(s,t,e){e.r(t),e.d(t,{default:function(){return X}});var r=e(5671),i=e(3144),n=e(136),a=e(7277),o=e(1413),c=e(2791),u=e(3531),l=e(7689),p=e(7781),f=e(3990),d=e(5705),x="MyPosts_postBlock__PmS1m",j="MyPosts_posts__Xu6py",v="Post_item__yEsuP",h=e(184),m=function(s){return(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)("div",{children:s.massage}),(0,h.jsx)("img",{src:"https://cdn1.flamp.ru/dca5e616d0d0278f7ac33bb2ace74573.jpg"}),(0,h.jsx)("div",{children:(0,h.jsxs)("span",{children:["Like ",s.likesCount]})})]})},b=c.memo((function(s){var t=s.posts.map((function(s){return(0,h.jsx)(m,{massage:s.message,likesCount:s.likesCount},s.id)}));return(0,h.jsx)("div",{className:x,children:(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"My posts"}),(0,h.jsxs)("div",{children:["New post",(0,h.jsx)(A,{props:s}),(0,h.jsx)("div",{className:j,children:t})]})]})})})),A=function(s){var t=s.props;return(0,h.jsx)(d.J9,{initialValues:{newPostText:""},onSubmit:function(s){t.addPost(s.newPostText)},children:(0,h.jsxs)(d.l0,{children:[(0,h.jsx)(d.gN,{as:"textarea",placeholder:"Add your post",name:"newPostText"}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{type:"submit",children:"Gaugzavne Ninos :D :D "})})]})})},y=b,P=(0,u.$j)((function(s){return{posts:s.profilePage.posts,newPostText:s.profilePage.newPostText}}),(function(s){return{addPost:function(t){s((0,f.Wl)(t))}}}))(y),z=e(6073),k="ProfileInfo_descriptionBlock__wvuZ0",F=(e.p,e(9439)),N=function(s){var t=(0,c.useState)(!1),e=(0,F.Z)(t,2),r=e[0],i=e[1],n=(0,c.useState)(s.status),a=(0,F.Z)(n,2),o=a[0],u=a[1];(0,c.useEffect)((function(){u(s.status)}),[s.status]);return(0,h.jsxs)("div",{children:[!r&&(0,h.jsx)("div",{children:(0,h.jsxs)("span",{onDoubleClick:function(){i(!0)},children:[s.status||"---------"," "]})}),r&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{autoFocus:!0,onBlur:function(){i(!1),s.updateStatus(o)},onChange:function(s){u(s.currentTarget.value)},value:o})})]})},T=function(s){var t=s.profile,e=s.status,r=s.updateStatus;return t?(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:"https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=800&h=300"})}),(0,h.jsxs)("div",{className:k,children:[(0,h.jsx)("div",{children:(0,h.jsx)(N,{status:e,updateStatus:r})}),(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:t.photos.large})}),(0,h.jsxs)("div",{children:[" About me: ",t.aboutMe]}),(0,h.jsxs)("div",{children:[" Facebook: ",t.contacts.facebook]}),(0,h.jsxs)("div",{children:[" My website: ",t.contacts.website]}),(0,h.jsxs)("div",{children:[" Twiter: ",t.contacts.twitter]}),(0,h.jsxs)("div",{children:["Looking for a job:",t.lookingForAJob=(0,h.jsx)("img",{src:"data:image/png;base64,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"})]}),(0,h.jsxs)("div",{children:["Looking for a job description:",t.lookingForAJobDescription]}),(0,h.jsxs)("div",{children:[" Full name: ",t.fullName]})]})]}):(0,h.jsx)(z.Z,{})},K=function(s){var t=s.profile,e=s.status,r=s.updateStatus;return(0,h.jsxs)("div",{children:[(0,h.jsx)(T,{profile:t,status:e,updateStatus:r}),(0,h.jsx)(P,{})]})},Z=e(7193);var g=function(s){(0,n.Z)(e,s);var t=(0,a.Z)(e);function e(){return(0,r.Z)(this,e),t.apply(this,arguments)}return(0,i.Z)(e,[{key:"componentDidMount",value:function(){var s=this.props.router.params.profileId;s||(s=this.props.autorizedUserId),this.props.getUserProfile(s),this.props.getStatus(s)}},{key:"render",value:function(){return(0,h.jsx)(K,(0,o.Z)((0,o.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(c.Component),X=(0,p.qC)((0,u.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,autorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getUserProfile:f.et,getStatus:f.lR,updateStatus:f.Nf}),(function(s){return function(t){var e=(0,l.TH)(),r=(0,l.s0)(),i=(0,l.UO)();return(0,h.jsx)(s,(0,o.Z)((0,o.Z)({},t),{},{router:{location:e,navigate:r,params:i}}))}}),Z.D)(g)}}]);
//# sourceMappingURL=33.c3609df9.chunk.js.map