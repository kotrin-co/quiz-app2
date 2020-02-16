(this["webpackJsonpquiz-app2"]=this["webpackJsonpquiz-app2"]||[]).push([[0],{39:function(e,t,n){e.exports=n(69)},62:function(e,t,n){},63:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(33),u=n.n(c),s=n(7),i=n(8),o=n(15),l=n(14),f=n(16),h=n(5),p=n.n(h),m=n(10),d=n(34),v=n.n(d),w=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,null,[{key:"fetch",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://opentdb.com/api.php?amount=10&type=multiple");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),b=n(12),E=n(9),k=(n(62),function(e){var t=e.onClickHandler;return"function"!==typeof t&&(t=function(){}),a.a.createElement("div",{className:"button",onClick:t},e.children)}),y=function(e){var t=e.history;return console.log(t),a.a.createElement("div",null,a.a.createElement("h1",null,"\u30db\u30fc\u30e0"),a.a.createElement(k,{onClickHandler:function(){t.push("/quiz")}},"\u30af\u30a4\u30ba\u30da\u30fc\u30b8\u3078\u79fb\u52d5"))},A=n(38),O=n(35),z=n.n(O),j=n(17),C=n.n(j),g=function(){function e(t){var n=t.question,r=t.correctAnswer,a=t.incorrectAnswers;Object(s.a)(this,e),this._question=n,this._correctAnswer=r,this._incorrectAnswers=a}return Object(i.a)(e,[{key:"shuffleAnswers",value:function(){return z.a.shuffle([this._correctAnswer].concat(Object(A.a)(this._incorrectAnswers)))}},{key:"judgeCorrectAnswer",value:function(e){return e===this._correctAnswer}},{key:"question",get:function(){return this._question}},{key:"correctAnswer",get:function(){return this._correctAnswer}}],[{key:"fetchAndCreateQuizzes",value:function(){var t=Object(m.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.fetch();case 2:return n=t.sent,t.abrupt("return",n.results.map((function(e){return{question:C.a.decode(e.question),correctAnswer:C.a.decode(e.correct_answer),incorrectAnswers:e.incorrect_answers.map((function(e){return C.a.decode(e)}))}})).map((function(t){return new e(t)})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),e}(),q=(n(63),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={quizzes:[],currentIndex:0,numberOfCorrects:0},n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.restart();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"selectAnswer",value:function(e,t){var n=this.state,r=n.currentIndex,a=n.numberOfCorrects;e.judgeCorrectAnswer(t)?(a++,alert("Correct Answer!!")):alert('Wrong Answer... Correct Answer is "'.concat(e.correctAnswer,'"')),r++,this.setState({currentIndex:r,numberOfCorrects:a})}},{key:"restart",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({quizzes:[],currentIndex:0,numberOfCorrects:0}),e.next=3,g.fetchAndCreateQuizzes();case 3:t=e.sent,this.setState({quizzes:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.quizzes,n=e.currentIndex;return 0===t.length?this.renderLoading():t.length>0&&n<t.length?this.renderQuiz():t.length>0&&n>=t.length?this.renderResult():void 0}},{key:"renderLoading",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"\u30af\u30a4\u30ba\u30da\u30fc\u30b8"),a.a.createElement("p",null,"Now Loading..."),a.a.createElement("hr",null),a.a.createElement(b.b,{to:"/"},"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u3078"))}},{key:"renderQuiz",value:function(){var e=this,t=this.state,n=t.currentIndex,r=t.quizzes[n],c=r.shuffleAnswers().map((function(t,n){return a.a.createElement("li",{key:n},a.a.createElement(k,{onClickHandler:function(){e.selectAnswer(r,t)}},t))}));return a.a.createElement("div",null,a.a.createElement("h1",null,"\u30af\u30a4\u30ba\u30da\u30fc\u30b8"),a.a.createElement("p",null,r.question),a.a.createElement("ul",{className:"QuizList"},c),a.a.createElement("hr",null),a.a.createElement(b.b,{to:"/"},"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u3078"))}},{key:"renderResult",value:function(){var e=this,t=this.state,n=t.quizzes,r=t.numberOfCorrects;return a.a.createElement("div",null,a.a.createElement("h1",null,"\u30af\u30a4\u30ba\u30da\u30fc\u30b8"),a.a.createElement("div",null,a.a.createElement("p",{id:"result"},"".concat(r,"/").concat(n.length," corrects")),a.a.createElement(k,{onClickHandler:function(){e.restart()}},"Restart")),a.a.createElement("hr",null),a.a.createElement(b.b,{to:"/"},"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u3078"))}}]),t}(a.a.Component)),x=(n(68),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(b.a,null,a.a.createElement(E.a,{path:"/",exact:!0,component:y}),a.a.createElement(E.a,{path:"/quiz",exact:!0,component:q})))}}]),t}(a.a.Component));u.a.render(a.a.createElement(x,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.d079f60d.chunk.js.map