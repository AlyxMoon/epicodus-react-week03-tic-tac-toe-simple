(this["webpackJsonpepicodus-react-week03-tic-tac-toe-simple"]=this["webpackJsonpepicodus-react-week03-tic-tac-toe-simple"]||[]).push([[0],{18:function(e,r,t){},19:function(e,r,t){},21:function(e,r,t){"use strict";t.r(r);var n={};t.r(n),t.d(n,"actionCreators",(function(){return p})),t.d(n,"reducer",(function(){return m}));var a=t(0),c=t.n(a),i=t(5),o=t.n(i),s=t(3),u=(t(18),t(2)),l=t(4),d=t(9),b=function(e,r){return 3*e+r},j=function(e){for(var r=0;r<3;r++){for(var t=0,n=0,a=0;a<3;a++){var c=e[b(a,r)];"X"===c&&t++,"O"===c&&n++}if(3===t)return"X";if(3===n)return"O"}for(var i=0;i<3;i++){for(var o=0,s=0,u=0;u<3;u++){var l=e[b(i,u)];"X"===l&&o++,"O"===l&&s++}if(3===o)return"X";if(3===s)return"O"}for(var d=0,j=0,O=0,f=0;O<3&&f<3;O++,f++){var v=e[b(f,O)];"X"===v&&d++,"O"===v&&j++}if(3===d)return"X";if(3===j)return"O";for(var p=0,m=0,y=2,h=0;y>=0&&h<3;y--,h++){var E=e[b(h,y)];"X"===E&&p++,"O"===E&&m++}return 3===p?"X":3===m?"O":""},O={1:"X",2:"O"},f={1:2,2:1},v={board:["","","","","","","","",""],activePlayer:1,winner:0},p={resetGame:function(){return function(e,r){e({type:"RESET_GAME"})}},markCell:function(e){return function(r,t){var n=t().game;if(""===n.board[e]&&!n.winner){r({type:"MARK_CELL",cellIndex:e});var a=j(t().game.board);""===a&&r({type:"SET_PLAYER",player:f[t().game.activePlayer]}),"X"===a&&r({type:"SET_WINNER",player:1}),"O"===a&&r({type:"SET_WINNER",player:2})}}}},m=function(e,r){if(!e)return v;var t=r;switch(t.type){case"RESET_GAME":return v;case"MARK_CELL":return Object(u.a)(Object(u.a)({},e),{},{board:e.board.map((function(r,n){return n!==t.cellIndex?r:O[e.activePlayer]}))});case"SET_PLAYER":return Object(u.a)(Object(u.a)({},e),{},{activePlayer:t.player});case"SET_WINNER":return Object(u.a)(Object(u.a)({},e),{},{winner:t.player})}return e},y=n,h={game:m},E=function(e){var r=[d.a],t=Object(l.b)(Object(u.a)({},h)),n=[],a="undefined"===typeof window?null:window;return a&&a.__REDUX_DEVTOOLS_EXTENSION__&&n.push(a.__REDUX_DEVTOOLS_EXTENSION__()),Object(l.d)(t,e,l.c.apply(void 0,[l.a.apply(void 0,r)].concat(n)))},w=(t(19),t(1)),_=Object(s.b)((function(e){return{board:e.game.board,player:e.game.activePlayer}}),y.actionCreators)((function(e){var r=e.board,t=e.markCell,n=function(e){return"cell ".concat(""===e?"can-click":"")};return Object(w.jsx)("div",{className:"game-board",children:r.map((function(e,r){return Object(w.jsx)("div",{className:n(e),onClick:function(){return t(r)},children:e},r)}))})})),x=Object(s.b)((function(e){return{activePlayer:e.game.activePlayer,winner:e.game.winner,hasDrawn:!e.game.winner&&e.game.board.every((function(e){return""!==e}))}}),{restartGame:y.actionCreators.resetGame})((function(e){var r=e.activePlayer,t=e.winner,n=e.restartGame,a=e.hasDrawn;return Object(w.jsxs)("div",{className:"app",children:[Object(w.jsx)("h1",{children:"Hello World"}),Object(w.jsxs)("dl",{children:[Object(w.jsx)("dt",{children:"Current Player:"}),Object(w.jsxs)("dd",{children:[r," (",1===r?"X":"O",")"]})]}),t?Object(w.jsxs)("div",{className:"winner-indicator",children:[Object(w.jsxs)("h1",{children:["Player ",t," has won!"]}),Object(w.jsx)("button",{onClick:n,children:"Restart Game"})]}):"",a?Object(w.jsxs)("div",{className:"winner-indicator",children:[Object(w.jsx)("h1",{children:"Nobody has won, sad!"}),Object(w.jsx)("button",{onClick:n,children:"Restart Game"})]}):"",Object(w.jsx)(_,{})]})})),N=E();o.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(s.a,{store:N,children:Object(w.jsx)(x,{})})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.4f1f14f8.chunk.js.map