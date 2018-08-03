(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"2qES":function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  </formly-form>\n</form>\n'},Rw3q:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  model <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n    showErrorState<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'email\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        type<span class="token punctuation" >:</span> <span class="token string" >\'email\'</span><span class="token punctuation" >,</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Email\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      validation<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        show<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      expressionProperties<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        <span class="token string" >\'validation.show\'</span><span class="token punctuation" >:</span> <span class="token string" >\'model.showErrorState\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'showErrorState\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'checkbox\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Force show error state\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span>valid<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},"V+VZ":function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      validationMessages<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'required\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> <span class="token string" >\'This field is required\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},ZjjU:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  options: FormlyFormOptions = {};\n\n  model = {\n    showErrorState: true,\n  };\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'email',\n      type: 'input',\n      templateOptions: {\n        type: 'email',\n        label: 'Email',\n        required: true,\n      },\n      validation: {\n        show: true,\n      },\n      expressionProperties: {\n        'validation.show': 'model.showErrorState',\n      },\n    },\n    {\n      key: 'showErrorState',\n      type: 'checkbox',\n      templateOptions: {\n        label: 'Force show error state',\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},cvLG:function(n,s,a){"use strict";a.r(s);var t=a("CcnG"),o=a("gIcY"),p=function(){function n(){this.form=new o.FormGroup({}),this.options={},this.model={showErrorState:!0},this.fields=[{key:"email",type:"input",templateOptions:{type:"email",label:"Email",required:!0},validation:{show:!0},expressionProperties:{"validation.show":"model.showErrorState"}},{key:"showErrorState",type:"checkbox",templateOptions:{label:"Force show error state"}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Force showing error state",description:"\n              Using <code>validation.show = true</code> you can force the validation state to be set to true.\n            ",component:p,files:[{file:"app.component.html",content:a("vACU"),filecontent:a("2qES")},{file:"app.component.ts",content:a("Rw3q"),filecontent:a("ZjjU")},{file:"app.module.ts",content:a("V+VZ"),filecontent:a("mTaM")}]}]},l=function(){},c=a("NcP4"),u=a("goW2"),i=a("MT1c"),r=a("1Q/V"),m=a("9+aI"),k=a("haId"),d=a("LJsP"),f=a("yR2A"),g=a("grA4"),y=a("UFMs"),b=a("pMnS"),w=a("4o01"),v=a("Dl9q"),h=a("9Glx"),F=a("UcnZ"),C=a("wdLZ"),M=a("DAbo"),x=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var o=!0,p=n.component;return"submit"===s&&(o=!1!==t["\u0275nov"](n,2).onSubmit(a)&&o),"reset"===s&&(o=!1!==t["\u0275nov"](n,2).onReset()&&o),"ngSubmit"===s&&(o=!1!==p.submit()&&o),o},null,null)),t["\u0275did"](1,16384,null,0,o["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](2,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),t["\u0275did"](4,16384,null,0,o.NgControlStatusGroup,[[4,o.ControlContainer]],null,null),(n()(),t["\u0275eld"](5,0,null,null,3,"formly-form",[],null,null,null,v.b,v.a)),t["\u0275did"](6,966656,null,0,h.a,[F.a,C.a,M.b,[2,o.NgForm],[2,o.FormGroupDirective],[3,h.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](7,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,6,0,a.model,a.form,a.fields,a.options)},function(n,s){n(s,0,0,t["\u0275nov"](s,4).ngClassUntouched,t["\u0275nov"](s,4).ngClassTouched,t["\u0275nov"](s,4).ngClassPristine,t["\u0275nov"](s,4).ngClassDirty,t["\u0275nov"](s,4).ngClassValid,t["\u0275nov"](s,4).ngClassInvalid,t["\u0275nov"](s,4).ngClassPending)})}var O=t["\u0275ccf"]("formly-app-example",p,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,S,x)),t["\u0275did"](1,49152,null,0,p,[],null,null)],null,null)},{},{},[]),_=a("Ip0R"),R=a("M2Lx"),A=a("eDkP"),N=a("Fzqc"),q=a("v9Dh"),E=a("6LlJ"),G=a("F6kA"),L=a("dWZg"),U=a("lLAP"),D=a("4c35"),P=a("qAlS"),I=a("Wf4p"),T=a("La40"),Z=a("SMsm"),B=a("UodH"),J=a("5QwG"),j=a("Nsh5"),V=a("8mMr"),z=a("LC5p"),Q=a("0/Q6"),W=a("mqvi"),Y=a("lYui"),H=a("AMrk"),X=a("me7w"),K=a("N3PW"),$=a("l4pn"),nn=a("Fv2i"),sn=a("wBYW"),an=a("IE48"),tn=a("zn1Q"),on=a("Q4Tx"),pn=a("zdmU"),en=a("XR12"),ln=a("1ey0"),cn=function(){},un=a("ZYCi"),rn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return mn});var mn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,u.a,i.a,r.a,m.a,k.a,d.a,f.a,g.a,y.a,b.a,w.a,O]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,_.NgLocalization,_.NgLocaleLocalization,[t.LOCALE_ID,[2,_["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,R.c,R.c,[]),t["\u0275mpd"](4608,A.c,A.c,[A.i,A.e,t.ComponentFactoryResolver,A.h,A.f,t.Injector,t.NgZone,_.DOCUMENT,N.b]),t["\u0275mpd"](5120,A.j,A.k,[A.c]),t["\u0275mpd"](5120,q.b,q.c,[A.c]),t["\u0275mpd"](4608,E.a,E.a,[]),t["\u0275mpd"](4608,G.a,G.a,[]),t["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),t["\u0275mpd"](4608,o["\u0275angular_packages_forms_forms_i"],o["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](1073742336,_.CommonModule,_.CommonModule,[]),t["\u0275mpd"](1073742336,L.b,L.b,[]),t["\u0275mpd"](1073742336,R.d,R.d,[]),t["\u0275mpd"](1073742336,U.a,U.a,[]),t["\u0275mpd"](1073742336,N.a,N.a,[]),t["\u0275mpd"](1073742336,D.g,D.g,[]),t["\u0275mpd"](1073742336,P.b,P.b,[]),t["\u0275mpd"](1073742336,A.g,A.g,[]),t["\u0275mpd"](1073742336,I.l,I.l,[[2,I.d]]),t["\u0275mpd"](1073742336,q.e,q.e,[]),t["\u0275mpd"](1073742336,I.w,I.w,[]),t["\u0275mpd"](1073742336,T.i,T.i,[]),t["\u0275mpd"](1073742336,Z.b,Z.b,[]),t["\u0275mpd"](1073742336,B.c,B.c,[]),t["\u0275mpd"](1073742336,J.b,J.b,[]),t["\u0275mpd"](1073742336,j.h,j.h,[]),t["\u0275mpd"](1073742336,V.b,V.b,[]),t["\u0275mpd"](1073742336,I.m,I.m,[]),t["\u0275mpd"](1073742336,I.u,I.u,[]),t["\u0275mpd"](1073742336,z.b,z.b,[]),t["\u0275mpd"](1073742336,Q.c,Q.c,[]),t["\u0275mpd"](1073742336,W.a,W.a,[]),t["\u0275mpd"](1073742336,o["\u0275angular_packages_forms_forms_bb"],o["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,Y.a,Y.a,[]),t["\u0275mpd"](1024,M.a,function(){return[{types:[{name:"formly-group",component:H.a}]},{types:[{name:"input",component:X.a,wrappers:["form-field"]},{name:"checkbox",component:K.a,wrappers:["form-field"],defaultOptions:{templateOptions:{indeterminate:!0,hideLabel:!0}}},{name:"radio",component:$.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:nn.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:sn.a,wrappers:["form-field"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:an.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"addons",component:tn.a},{name:"form-field",component:on.a}],manipulators:[{class:pn.a,method:"run"}]},{types:[{name:"formly-group",component:H.a}]},{validationMessages:[{name:"required",message:"This field is required"}]}]},[]),t["\u0275mpd"](1073742336,en.a,en.a,[M.b,t.ComponentFactoryResolver,[2,M.a]]),t["\u0275mpd"](1073742336,ln.a,ln.a,[]),t["\u0275mpd"](1073742336,cn,cn,[]),t["\u0275mpd"](1073742336,un.s,un.s,[[2,un.y],[2,un.p]]),t["\u0275mpd"](1073742336,l,l,[]),t["\u0275mpd"](1024,un.n,function(){return[[{path:"",component:rn.a,data:e}]]},[])])})},mTaM:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},vACU:function(n,s){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'}}]);