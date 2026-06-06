"use strict";(self.webpackChunkit_knowledge_base=self.webpackChunkit_knowledge_base||[]).push([["97768"],{664379(t,e,i){i.d(e,{diagram:()=>tF});var n,s,r,a=i(613226),o=i(558365),l=i(440797),c=i(416750),d=i(974353),u=i(468313),h=i(690445),f=i(497375),k=i(847829),y=function(){var t=(0,l.K2)(function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},"o"),e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],n=[1,27],s=[1,28],r=[1,29],a=[1,30],o=[1,31],c=[1,32],d=[1,33],u=[1,34],h=[1,9],f=[1,10],k=[1,11],y=[1,12],m=[1,13],p=[1,14],g=[1,15],b=[1,16],T=[1,19],x=[1,20],v=[1,21],_=[1,22],w=[1,23],C=[1,25],K=[1,35],$={trace:(0,l.K2)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:(0,l.K2)(function(t,e,i,n,s,r,a){var o=r.length-1;switch(s){case 1:return r[o-1];case 2:case 6:case 7:this.$=[];break;case 3:r[o-1].push(r[o]),this.$=r[o-1];break;case 4:case 5:this.$=r[o];break;case 8:n.setWeekday("monday");break;case 9:n.setWeekday("tuesday");break;case 10:n.setWeekday("wednesday");break;case 11:n.setWeekday("thursday");break;case 12:n.setWeekday("friday");break;case 13:n.setWeekday("saturday");break;case 14:n.setWeekday("sunday");break;case 15:n.setWeekend("friday");break;case 16:n.setWeekend("saturday");break;case 17:n.setDateFormat(r[o].substr(11)),this.$=r[o].substr(11);break;case 18:n.enableInclusiveEndDates(),this.$=r[o].substr(18);break;case 19:n.TopAxis(),this.$=r[o].substr(8);break;case 20:n.setAxisFormat(r[o].substr(11)),this.$=r[o].substr(11);break;case 21:n.setTickInterval(r[o].substr(13)),this.$=r[o].substr(13);break;case 22:n.setExcludes(r[o].substr(9)),this.$=r[o].substr(9);break;case 23:n.setIncludes(r[o].substr(9)),this.$=r[o].substr(9);break;case 24:n.setTodayMarker(r[o].substr(12)),this.$=r[o].substr(12);break;case 27:n.setDiagramTitle(r[o].substr(6)),this.$=r[o].substr(6);break;case 28:this.$=r[o].trim(),n.setAccTitle(this.$);break;case 29:case 30:this.$=r[o].trim(),n.setAccDescription(this.$);break;case 31:n.addSection(r[o].substr(8)),this.$=r[o].substr(8);break;case 33:n.addTask(r[o-1],r[o]),this.$="task";break;case 34:this.$=r[o-1],n.setClickEvent(r[o-1],r[o],null);break;case 35:this.$=r[o-2],n.setClickEvent(r[o-2],r[o-1],r[o]);break;case 36:this.$=r[o-2],n.setClickEvent(r[o-2],r[o-1],null),n.setLink(r[o-2],r[o]);break;case 37:this.$=r[o-3],n.setClickEvent(r[o-3],r[o-2],r[o-1]),n.setLink(r[o-3],r[o]);break;case 38:this.$=r[o-2],n.setClickEvent(r[o-2],r[o],null),n.setLink(r[o-2],r[o-1]);break;case 39:this.$=r[o-3],n.setClickEvent(r[o-3],r[o-1],r[o]),n.setLink(r[o-3],r[o-2]);break;case 40:this.$=r[o-1],n.setLink(r[o-1],r[o]);break;case 41:case 47:this.$=r[o-1]+" "+r[o];break;case 42:case 43:case 45:this.$=r[o-2]+" "+r[o-1]+" "+r[o];break;case 44:case 46:this.$=r[o-3]+" "+r[o-2]+" "+r[o-1]+" "+r[o]}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:n,14:s,15:r,16:a,17:o,18:c,19:18,20:d,21:u,22:h,23:f,24:k,25:y,26:m,27:p,28:g,29:b,30:T,31:x,33:v,35:_,36:w,37:24,38:C,40:K},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:i,13:n,14:s,15:r,16:a,17:o,18:c,19:18,20:d,21:u,22:h,23:f,24:k,25:y,26:m,27:p,28:g,29:b,30:T,31:x,33:v,35:_,36:w,37:24,38:C,40:K},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:(0,l.K2)(function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},"parseError"),parse:(0,l.K2)(function(t){var e=this,i=[0],n=[],s=[null],r=[],a=this.table,o="",c=0,d=0,u=0,h=r.slice.call(arguments,1),f=Object.create(this.lexer),k={};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(k[y]=this.yy[y]);f.setInput(t,k),k.lexer=f,k.parser=this,void 0===f.yylloc&&(f.yylloc={});var m=f.yylloc;r.push(m);var p=f.options&&f.options.ranges;function g(){var t;return"number"!=typeof(t=n.pop()||f.lex()||1)&&(t instanceof Array&&(t=(n=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof k.parseError?this.parseError=k.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,l.K2)(function(t){i.length=i.length-2*t,s.length=s.length-t,r.length=r.length-t},"popStack"),(0,l.K2)(g,"lex");for(var b,T,x,v,_,w,C,K,$,D={};;){if(x=i[i.length-1],this.defaultActions[x]?v=this.defaultActions[x]:(null==b&&(b=g()),v=a[x]&&a[x][b]),void 0===v||!v.length||!v[0]){var S="";for(w in $=[],a[x])this.terminals_[w]&&w>2&&$.push("'"+this.terminals_[w]+"'");S=f.showPosition?"Parse error on line "+(c+1)+":\n"+f.showPosition()+"\nExpecting "+$.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(S,{text:f.match,token:this.terminals_[b]||b,line:f.yylineno,loc:m,expected:$})}if(v[0]instanceof Array&&v.length>1)throw Error("Parse Error: multiple actions possible at state: "+x+", token: "+b);switch(v[0]){case 1:i.push(b),s.push(f.yytext),r.push(f.yylloc),i.push(v[1]),b=null,T?(b=T,T=null):(d=f.yyleng,o=f.yytext,c=f.yylineno,m=f.yylloc,u>0&&u--);break;case 2:if(C=this.productions_[v[1]][1],D.$=s[s.length-C],D._$={first_line:r[r.length-(C||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(C||1)].first_column,last_column:r[r.length-1].last_column},p&&(D._$.range=[r[r.length-(C||1)].range[0],r[r.length-1].range[1]]),void 0!==(_=this.performAction.apply(D,[o,d,c,k,v[1],s,r].concat(h))))return _;C&&(i=i.slice(0,-1*C*2),s=s.slice(0,-1*C),r=r.slice(0,-1*C)),i.push(this.productions_[v[1]][0]),s.push(D.$),r.push(D._$),K=a[i[i.length-2]][i[i.length-1]],i.push(K);break;case 3:return!0}}return!0},"parse")};function D(){this.yy={}}return $.lexer={EOF:1,parseError:(0,l.K2)(function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},"parseError"),setInput:(0,l.K2)(function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,l.K2)(function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:(0,l.K2)(function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},"unput"),more:(0,l.K2)(function(){return this._more=!0,this},"more"),reject:(0,l.K2)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,l.K2)(function(t){this.unput(this.match.slice(t))},"less"),pastInput:(0,l.K2)(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,l.K2)(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,l.K2)(function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},"showPosition"),test_match:(0,l.K2)(function(t,e){var i,n,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var r in s)this[r]=s[r];return!1},"test_match"),next:(0,l.K2)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,n,s=this._currentRules(),r=0;r<s.length;r++)if((i=this._input.match(this.rules[s[r]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,s[r])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,l.K2)(function(){var t=this.next();return t||this.lex()},"lex"),begin:(0,l.K2)(function(t){this.conditionStack.push(t)},"begin"),popState:(0,l.K2)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,l.K2)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,l.K2)(function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:(0,l.K2)(function(t){this.begin(t)},"pushState"),stateStackSize:(0,l.K2)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,l.K2)(function(t,e,i,n){switch(i){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 15:case 18:case 21:case 24:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:case 9:case 10:case 12:case 13:break;case 11:return 10;case 14:this.begin("href");break;case 16:return 43;case 17:this.begin("callbackname");break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 22:return 42;case 23:this.begin("click");break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}},(0,l.K2)(D,"Parser"),D.prototype=$,$.Parser=D,new D}();y.parser=y,d.extend(u),d.extend(h),d.extend(f);var m={friday:5,saturday:6},p="",g="",b=void 0,T="",x=[],v=[],_=new Map,w=[],C=[],K="",$="",D=["active","done","crit","milestone","vert"],S=[],E=!1,A=!1,I="sunday",L="saturday",F=0,O=(0,l.K2)(function(){w=[],C=[],K="",S=[],tf=0,n=void 0,s=void 0,tp=[],p="",g="",$="",b=void 0,T="",x=[],v=[],E=!1,A=!1,F=0,_=new Map,(0,o.IU)(),I="sunday",L="saturday"},"clear"),P=(0,l.K2)(function(t){g=t},"setAxisFormat"),M=(0,l.K2)(function(){return g},"getAxisFormat"),B=(0,l.K2)(function(t){b=t},"setTickInterval"),W=(0,l.K2)(function(){return b},"getTickInterval"),Y=(0,l.K2)(function(t){T=t},"setTodayMarker"),N=(0,l.K2)(function(){return T},"getTodayMarker"),z=(0,l.K2)(function(t){p=t},"setDateFormat"),R=(0,l.K2)(function(){E=!0},"enableInclusiveEndDates"),j=(0,l.K2)(function(){return E},"endDatesAreInclusive"),G=(0,l.K2)(function(){A=!0},"enableTopAxis"),H=(0,l.K2)(function(){return A},"topAxisEnabled"),U=(0,l.K2)(function(t){$=t},"setDisplayMode"),V=(0,l.K2)(function(){return $},"getDisplayMode"),q=(0,l.K2)(function(){return p},"getDateFormat"),X=(0,l.K2)(function(t){x=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),J=(0,l.K2)(function(){return x},"getIncludes"),Q=(0,l.K2)(function(t){v=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),Z=(0,l.K2)(function(){return v},"getExcludes"),tt=(0,l.K2)(function(){return _},"getLinks"),te=(0,l.K2)(function(t){K=t,w.push(t)},"addSection"),ti=(0,l.K2)(function(){return w},"getSections"),tn=(0,l.K2)(function(){let t=tv(),e=0;for(;!t&&e<10;)t=tv(),e++;return C=tp},"getTasks"),ts=(0,l.K2)(function(t,e,i,n){let s=t.format(e.trim()),r=t.format("YYYY-MM-DD");return!(n.includes(s)||n.includes(r))&&(!!(i.includes("weekends")&&(t.isoWeekday()===m[L]||t.isoWeekday()===m[L]+1)||i.includes(t.format("dddd").toLowerCase()))||i.includes(s)||i.includes(r))},"isInvalidDate"),tr=(0,l.K2)(function(t){I=t},"setWeekday"),ta=(0,l.K2)(function(){return I},"getWeekday"),to=(0,l.K2)(function(t){L=t},"setWeekend"),tl=(0,l.K2)(function(t,e,i,n){let s;if(!i.length||t.manualEndTime)return;let[r,a]=tc(s=(s=t.startTime instanceof Date?d(t.startTime):d(t.startTime,e,!0)).add(1,"d"),t.endTime instanceof Date?d(t.endTime):d(t.endTime,e,!0),e,i,n);t.endTime=r.toDate(),t.renderEndTime=a},"checkTaskDates"),tc=(0,l.K2)(function(t,e,i,n,s){let r=!1,a=null;for(;t<=e;)r||(a=e.toDate()),(r=ts(t,i,n,s))&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,a]},"fixTaskDates"),td=(0,l.K2)(function(t,e,i){if(i=i.trim(),("x"===e.trim()||"X"===e.trim())&&/^\d+$/.test(i))return new Date(Number(i));let n=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==n){let t=null;for(let e of n.groups.ids.split(" ")){let i=tT(e);void 0!==i&&(!t||i.endTime>t.endTime)&&(t=i)}if(t)return t.endTime;let e=new Date;return e.setHours(0,0,0,0),e}let s=d(i,e.trim(),!0);if(s.isValid())return s.toDate();{l.Rm.debug("Invalid date:"+i),l.Rm.debug("With date format:"+e.trim());let t=new Date(i);if(void 0===t||isNaN(t.getTime())||-1e4>t.getFullYear()||t.getFullYear()>1e4)throw Error("Invalid date:"+i);return t}},"getStartDate"),tu=(0,l.K2)(function(t){let e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return null!==e?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},"parseDuration"),th=(0,l.K2)(function(t,e,i,n=!1){i=i.trim();let s=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==s){let t=null;for(let e of s.groups.ids.split(" ")){let i=tT(e);void 0!==i&&(!t||i.startTime<t.startTime)&&(t=i)}if(t)return t.startTime;let e=new Date;return e.setHours(0,0,0,0),e}let r=d(i,e.trim(),!0);if(r.isValid())return n&&(r=r.add(1,"d")),r.toDate();let a=d(t),[o,l]=tu(i);if(!Number.isNaN(o)){let t=a.add(o,l);t.isValid()&&(a=t)}return a.toDate()},"getEndDate"),tf=0,tk=(0,l.K2)(function(t){return void 0===t?"task"+(tf+=1):t},"parseId"),ty=(0,l.K2)(function(t,e){let i=(":"===e.substr(0,1)?e.substr(1,e.length):e).split(","),n={};tE(i,n,D);for(let t=0;t<i.length;t++)i[t]=i[t].trim();let s="";switch(i.length){case 1:n.id=tk(),n.startTime=t.endTime,s=i[0];break;case 2:n.id=tk(),n.startTime=td(void 0,p,i[0]),s=i[1];break;case 3:n.id=tk(i[0]),n.startTime=td(void 0,p,i[1]),s=i[2]}return s&&(n.endTime=th(n.startTime,p,s,E),n.manualEndTime=d(s,"YYYY-MM-DD",!0).isValid(),tl(n,p,v,x)),n},"compileData"),tm=(0,l.K2)(function(t,e){let i=(":"===e.substr(0,1)?e.substr(1,e.length):e).split(","),n={};tE(i,n,D);for(let t=0;t<i.length;t++)i[t]=i[t].trim();switch(i.length){case 1:n.id=tk(),n.startTime={type:"prevTaskEnd",id:t},n.endTime={data:i[0]};break;case 2:n.id=tk(),n.startTime={type:"getStartDate",startData:i[0]},n.endTime={data:i[1]};break;case 3:n.id=tk(i[0]),n.startTime={type:"getStartDate",startData:i[1]},n.endTime={data:i[2]}}return n},"parseData"),tp=[],tg={},tb=(0,l.K2)(function(t,e){let i={section:K,type:K,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},n=tm(s,e);i.raw.startTime=n.startTime,i.raw.endTime=n.endTime,i.id=n.id,i.prevTaskId=s,i.active=n.active,i.done=n.done,i.crit=n.crit,i.milestone=n.milestone,i.vert=n.vert,i.order=F,F++;let r=tp.push(i);s=i.id,tg[i.id]=r-1},"addTask"),tT=(0,l.K2)(function(t){return tp[tg[t]]},"findTaskById"),tx=(0,l.K2)(function(t,e){let i={section:K,type:K,description:t,task:t,classes:[]},s=ty(n,e);i.startTime=s.startTime,i.endTime=s.endTime,i.id=s.id,i.active=s.active,i.done=s.done,i.crit=s.crit,i.milestone=s.milestone,i.vert=s.vert,n=i,C.push(i)},"addTaskOrg"),tv=(0,l.K2)(function(){let t=(0,l.K2)(function(t){let e=tp[t],i="";switch(tp[t].raw.startTime.type){case"prevTaskEnd":{let t=tT(e.prevTaskId);e.startTime=t.endTime;break}case"getStartDate":(i=td(void 0,p,tp[t].raw.startTime.startData))&&(tp[t].startTime=i)}return tp[t].startTime&&(tp[t].endTime=th(tp[t].startTime,p,tp[t].raw.endTime.data,E),tp[t].endTime&&(tp[t].processed=!0,tp[t].manualEndTime=d(tp[t].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),tl(tp[t],p,v,x))),tp[t].processed},"compileTask"),e=!0;for(let[i,n]of tp.entries())t(i),e=e&&n.processed;return e},"compileTasks"),t_=(0,l.K2)(function(t,e){let i=e;"loose"!==(0,o.D7)().securityLevel&&(i=(0,c.sanitizeUrl)(e)),t.split(",").forEach(function(t){void 0!==tT(t)&&(tK(t,()=>{window.open(i,"_self")}),_.set(t,i))}),tw(t,"clickable")},"setLink"),tw=(0,l.K2)(function(t,e){t.split(",").forEach(function(t){let i=tT(t);void 0!==i&&i.classes.push(e)})},"setClass"),tC=(0,l.K2)(function(t,e,i){if("loose"!==(0,o.D7)().securityLevel||void 0===e)return;let n=[];if("string"==typeof i){n=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<n.length;t++){let e=n[t].trim();e.startsWith('"')&&e.endsWith('"')&&(e=e.substr(1,e.length-2)),n[t]=e}}0===n.length&&n.push(t),void 0!==tT(t)&&tK(t,()=>{a._K.runFunc(e,...n)})},"setClickFun"),tK=(0,l.K2)(function(t,e){S.push(function(){let i=document.querySelector(`[id="${t}"]`);null!==i&&i.addEventListener("click",function(){e()})},function(){let i=document.querySelector(`[id="${t}-text"]`);null!==i&&i.addEventListener("click",function(){e()})})},"pushFun"),t$=(0,l.K2)(function(t,e,i){t.split(",").forEach(function(t){tC(t,e,i)}),tw(t,"clickable")},"setClickEvent"),tD=(0,l.K2)(function(t){S.forEach(function(e){e(t)})},"bindFunctions"),tS={getConfig:(0,l.K2)(()=>(0,o.D7)().gantt,"getConfig"),clear:O,setDateFormat:z,getDateFormat:q,enableInclusiveEndDates:R,endDatesAreInclusive:j,enableTopAxis:G,topAxisEnabled:H,setAxisFormat:P,getAxisFormat:M,setTickInterval:B,getTickInterval:W,setTodayMarker:Y,getTodayMarker:N,setAccTitle:o.SV,getAccTitle:o.iN,setDiagramTitle:o.ke,getDiagramTitle:o.ab,setDisplayMode:U,getDisplayMode:V,setAccDescription:o.EI,getAccDescription:o.m7,addSection:te,getSections:ti,getTasks:tn,addTask:tb,findTaskById:tT,addTaskOrg:tx,setIncludes:X,getIncludes:J,setExcludes:Q,getExcludes:Z,setClickEvent:t$,setLink:t_,getLinks:tt,bindFunctions:tD,parseDuration:tu,isInvalidDate:ts,setWeekday:tr,getWeekday:ta,setWeekend:to};function tE(t,e,i){let n=!0;for(;n;)n=!1,i.forEach(function(i){let s=RegExp("^\\s*"+i+"\\s*$");t[0].match(s)&&(e[i]=!0,t.shift(1),n=!0)})}(0,l.K2)(tE,"getTaskTags");var tA=(0,l.K2)(function(){l.Rm.debug("Something is calling, setConf, remove the call")},"setConf"),tI={monday:k.ABi,tuesday:k.PGu,wednesday:k.GuW,thursday:k.Mol,friday:k.TUC,saturday:k.rGn,sunday:k.YPH},tL=(0,l.K2)((t,e)=>{let i=[...t].map(()=>-1/0),n=[...t].sort((t,e)=>t.startTime-e.startTime||t.order-e.order),s=0;for(let t of n)for(let n=0;n<i.length;n++)if(t.startTime>=i[n]){i[n]=t.endTime,t.order=n+e,n>s&&(s=n);break}return s},"getMaxIntersections"),tF={parser:y,db:tS,renderer:{setConf:tA,draw:(0,l.K2)(function(t,e,i,n){let s,a=(0,o.D7)().gantt,c=(0,o.D7)().securityLevel;"sandbox"===c&&(s=(0,k.Ltv)("#i"+e));let u="sandbox"===c?(0,k.Ltv)(s.nodes()[0].contentDocument.body):(0,k.Ltv)("body"),h="sandbox"===c?s.nodes()[0].contentDocument:document,f=h.getElementById(e);void 0===(r=f.parentElement.offsetWidth)&&(r=1200),void 0!==a.useWidth&&(r=a.useWidth);let y=n.db.getTasks(),m=[];for(let t of y)m.push(t.type);m=D(m);let p={},g=2*a.topPadding;if("compact"===n.db.getDisplayMode()||"compact"===a.displayMode){let t={};for(let e of y)void 0===t[e.section]?t[e.section]=[e]:t[e.section].push(e);let e=0;for(let i of Object.keys(t)){let n=tL(t[i],e)+1;e+=n,g+=n*(a.barHeight+a.barGap),p[i]=n}}else for(let t of(g+=y.length*(a.barHeight+a.barGap),m))p[t]=y.filter(e=>e.type===t).length;f.setAttribute("viewBox","0 0 "+r+" "+g);let b=u.select(`[id="${e}"]`),T=(0,k.w7C)().domain([(0,k.jkA)(y,function(t){return t.startTime}),(0,k.T9B)(y,function(t){return t.endTime})]).rangeRound([0,r-a.leftPadding-a.rightPadding]);function x(t,e){let i=t.startTime,n=e.startTime,s=0;return i>n?s=1:i<n&&(s=-1),s}function v(t,e,i){let s=a.barHeight,r=s+a.barGap,o=a.topPadding,l=a.leftPadding,c=(0,k.m4Y)().domain([0,m.length]).range(["#00B9FA","#F95002"]).interpolate(k.bEH);w(r,o,l,e,i,t,n.db.getExcludes(),n.db.getIncludes()),C(l,o,e,i),_(t,r,o,l,s,c,e,i),K(r,o,l,s,c),$(l,o,e,i)}function _(t,i,s,r,l,c,d){t.sort((t,e)=>t.vert===e.vert?0:t.vert?1:-1);let u=[...new Set(t.map(t=>t.order))].map(e=>t.find(t=>t.order===e));b.append("g").selectAll("rect").data(u).enter().append("rect").attr("x",0).attr("y",function(t,e){return t.order*i+s-2}).attr("width",function(){return d-a.rightPadding/2}).attr("height",i).attr("class",function(t){for(let[e,i]of m.entries())if(t.type===i)return"section section"+e%a.numberSectionStyles;return"section section0"}).enter();let h=b.append("g").selectAll("rect").data(t).enter(),f=n.db.getLinks();if(h.append("rect").attr("id",function(t){return t.id}).attr("rx",3).attr("ry",3).attr("x",function(t){return t.milestone?T(t.startTime)+r+.5*(T(t.endTime)-T(t.startTime))-.5*l:T(t.startTime)+r}).attr("y",function(t,e){return(e=t.order,t.vert)?a.gridLineStartPadding:e*i+s}).attr("width",function(t){return t.milestone?l:t.vert?.08*l:T(t.renderEndTime||t.endTime)-T(t.startTime)}).attr("height",function(t){return t.vert?y.length*(a.barHeight+a.barGap)+2*a.barHeight:l}).attr("transform-origin",function(t,e){return e=t.order,(T(t.startTime)+r+.5*(T(t.endTime)-T(t.startTime))).toString()+"px "+(e*i+s+.5*l).toString()+"px"}).attr("class",function(t){let e="";t.classes.length>0&&(e=t.classes.join(" "));let i=0;for(let[e,n]of m.entries())t.type===n&&(i=e%a.numberSectionStyles);let n="";return t.active?t.crit?n+=" activeCrit":n=" active":t.done?n=t.crit?" doneCrit":" done":t.crit&&(n+=" crit"),0===n.length&&(n=" task"),t.milestone&&(n=" milestone "+n),t.vert&&(n=" vert "+n),n+=i,"task"+(n+=" "+e)}),h.append("text").attr("id",function(t){return t.id+"-text"}).text(function(t){return t.task}).attr("font-size",a.fontSize).attr("x",function(t){let e=T(t.startTime),i=T(t.renderEndTime||t.endTime);if(t.milestone&&(e+=.5*(T(t.endTime)-T(t.startTime))-.5*l,i=e+l),t.vert)return T(t.startTime)+r;let n=this.getBBox().width;return n>i-e?i+n+1.5*a.leftPadding>d?e+r-5:i+r+5:(i-e)/2+e+r}).attr("y",function(t,e){return t.vert?a.gridLineStartPadding+y.length*(a.barHeight+a.barGap)+60:t.order*i+a.barHeight/2+(a.fontSize/2-2)+s}).attr("text-height",l).attr("class",function(t){let e=T(t.startTime),i=T(t.endTime);t.milestone&&(i=e+l);let n=this.getBBox().width,s="";t.classes.length>0&&(s=t.classes.join(" "));let r=0;for(let[e,i]of m.entries())t.type===i&&(r=e%a.numberSectionStyles);let o="";return(t.active&&(o=t.crit?"activeCritText"+r:"activeText"+r),t.done?o=t.crit?o+" doneCritText"+r:o+" doneText"+r:t.crit&&(o=o+" critText"+r),t.milestone&&(o+=" milestoneText"),t.vert&&(o+=" vertText"),n>i-e)?i+n+1.5*a.leftPadding>d?s+" taskTextOutsideLeft taskTextOutside"+r+" "+o:s+" taskTextOutsideRight taskTextOutside"+r+" "+o+" width-"+n:s+" taskText taskText"+r+" "+o+" width-"+n}),"sandbox"===(0,o.D7)().securityLevel){let t=(0,k.Ltv)("#i"+e).nodes()[0].contentDocument;h.filter(function(t){return f.has(t.id)}).each(function(e){var i=t.querySelector("#"+e.id),n=t.querySelector("#"+e.id+"-text");let s=i.parentNode;var r=t.createElement("a");r.setAttribute("xlink:href",f.get(e.id)),r.setAttribute("target","_top"),s.appendChild(r),r.appendChild(i),r.appendChild(n)})}}function w(t,e,i,s,r,o,c,u){let h,f;if(0===c.length&&0===u.length)return;for(let{startTime:t,endTime:e}of o)(void 0===h||t<h)&&(h=t),(void 0===f||e>f)&&(f=e);if(!h||!f)return;if(d(f).diff(d(h),"year")>5)return void l.Rm.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");let k=n.db.getDateFormat(),y=[],m=null,p=d(h);for(;p.valueOf()<=f;)n.db.isInvalidDate(p,k,c,u)?m?m.end=p:m={start:p,end:p}:m&&(y.push(m),m=null),p=p.add(1,"d");b.append("g").selectAll("rect").data(y).enter().append("rect").attr("id",t=>"exclude-"+t.start.format("YYYY-MM-DD")).attr("x",t=>T(t.start.startOf("day"))+i).attr("y",a.gridLineStartPadding).attr("width",t=>T(t.end.endOf("day"))-T(t.start.startOf("day"))).attr("height",r-e-a.gridLineStartPadding).attr("transform-origin",function(e,n){return(T(e.start)+i+.5*(T(e.end)-T(e.start))).toString()+"px "+(n*t+.5*r).toString()+"px"}).attr("class","exclude-range")}function C(t,e,i,s){let r,o=n.db.getDateFormat(),l=n.db.getAxisFormat();r=l||("D"===o?"%d":a.axisFormat??"%Y-%m-%d");let c=(0,k.l78)(T).tickSize(-s+e+a.gridLineStartPadding).tickFormat((0,k.DCK)(r)),d=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(n.db.getTickInterval()||a.tickInterval);if(null!==d){let t=d[1],e=d[2],i=n.db.getWeekday()||a.weekday;switch(e){case"millisecond":c.ticks(k.t6C.every(t));break;case"second":c.ticks(k.ucG.every(t));break;case"minute":c.ticks(k.wXd.every(t));break;case"hour":c.ticks(k.Agd.every(t));break;case"day":c.ticks(k.UAC.every(t));break;case"week":c.ticks(tI[i].every(t));break;case"month":c.ticks(k.Ui6.every(t))}}if(b.append("g").attr("class","grid").attr("transform","translate("+t+", "+(s-50)+")").call(c).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),n.db.topAxisEnabled()||a.topAxis){let i=(0,k.tlR)(T).tickSize(-s+e+a.gridLineStartPadding).tickFormat((0,k.DCK)(r));if(null!==d){let t=d[1],e=d[2],s=n.db.getWeekday()||a.weekday;switch(e){case"millisecond":i.ticks(k.t6C.every(t));break;case"second":i.ticks(k.ucG.every(t));break;case"minute":i.ticks(k.wXd.every(t));break;case"hour":i.ticks(k.Agd.every(t));break;case"day":i.ticks(k.UAC.every(t));break;case"week":i.ticks(tI[s].every(t));break;case"month":i.ticks(k.Ui6.every(t))}}b.append("g").attr("class","grid").attr("transform","translate("+t+", "+e+")").call(i).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function K(t,e){let i=0,n=Object.keys(p).map(t=>[t,p[t]]);b.append("g").selectAll("text").data(n).enter().append(function(t){let e=t[0].split(o.Y2.lineBreakRegex),i=-(e.length-1)/2,n=h.createElementNS("http://www.w3.org/2000/svg","text");for(let[t,s]of(n.setAttribute("dy",i+"em"),e.entries())){let e=h.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttribute("alignment-baseline","central"),e.setAttribute("x","10"),t>0&&e.setAttribute("dy","1em"),e.textContent=s,n.appendChild(e)}return n}).attr("x",10).attr("y",function(s,r){if(!(r>0))return s[1]*t/2+e;for(let a=0;a<r;a++)return i+=n[r-1][1],s[1]*t/2+i*t+e}).attr("font-size",a.sectionFontSize).attr("class",function(t){for(let[e,i]of m.entries())if(t[0]===i)return"sectionTitle sectionTitle"+e%a.numberSectionStyles;return"sectionTitle"})}function $(t,e,i,s){let r=n.db.getTodayMarker();if("off"===r)return;let o=b.append("g").attr("class","today"),l=new Date,c=o.append("line");c.attr("x1",T(l)+t).attr("x2",T(l)+t).attr("y1",a.titleTopMargin).attr("y2",s-a.titleTopMargin).attr("class","today"),""!==r&&c.attr("style",r.replace(/,/g,";"))}function D(t){let e={},i=[];for(let n=0,s=t.length;n<s;++n)Object.prototype.hasOwnProperty.call(e,t[n])||(e[t[n]]=!0,i.push(t[n]));return i}(0,l.K2)(x,"taskCompare"),y.sort(x),v(y,r,g),(0,o.a$)(b,g,r,a.useMaxWidth),b.append("text").text(n.db.getDiagramTitle()).attr("x",r/2).attr("y",a.titleTopMargin).attr("class","titleText"),(0,l.K2)(v,"makeGantt"),(0,l.K2)(_,"drawRects"),(0,l.K2)(w,"drawExcludeDays"),(0,l.K2)(C,"makeGrid"),(0,l.K2)(K,"vertLabels"),(0,l.K2)($,"drawToday"),(0,l.K2)(D,"checkUnique")},"draw")},styles:(0,l.K2)(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles")}}}]);