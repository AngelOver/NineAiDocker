'use strict';const _0x32c39a=_0x5a71;(function(_0x4015ec,_0x1d0ff2){const _0x51ea31=_0x5a71,_0x1f01f4=_0x4015ec();while(!![]){try{const _0x5b8685=parseInt(_0x51ea31(0xdd))/0x1*(-parseInt(_0x51ea31(0xdc))/0x2)+-parseInt(_0x51ea31(0xd8))/0x3*(parseInt(_0x51ea31(0xe0))/0x4)+parseInt(_0x51ea31(0xde))/0x5*(-parseInt(_0x51ea31(0xd5))/0x6)+-parseInt(_0x51ea31(0xda))/0x7*(parseInt(_0x51ea31(0xc0))/0x8)+-parseInt(_0x51ea31(0xe3))/0x9*(parseInt(_0x51ea31(0xd4))/0xa)+parseInt(_0x51ea31(0xbe))/0xb+parseInt(_0x51ea31(0xe6))/0xc;if(_0x5b8685===_0x1d0ff2)break;else _0x1f01f4['push'](_0x1f01f4['shift']());}catch(_0x57415f){_0x1f01f4['push'](_0x1f01f4['shift']());}}}(_0x1231,0x6f296));Object[_0x32c39a(0xe1)](exports,_0x32c39a(0xd6),{'value':!![]}),exports[_0x32c39a(0xc2)]=exports[_0x32c39a(0xdb)]=exports[_0x32c39a(0xcf)]=exports[_0x32c39a(0xc6)]=void 0x0;const axios=require('axios'),jwt=require('jsonwebtoken');function generateToken(_0x1467d8,_0x30dbdb=0x3e8*0x3c*0x3c*0x18*0x168){const _0x596a0d=_0x32c39a,[_0x4e54d3,_0x8f5216]=_0x1467d8[_0x596a0d(0xd7)]('.'),_0x2cc7aa={'api_key':_0x4e54d3,'exp':Math['round'](Date[_0x596a0d(0xc7)]())+_0x30dbdb*0x3e8,'timestamp':Math[_0x596a0d(0xe5)](Date['now']())};return jwt[_0x596a0d(0xc5)](_0x2cc7aa,_0x8f5216,{'algorithm':_0x596a0d(0xdf),'header':{'alg':_0x596a0d(0xdf),'sign_type':_0x596a0d(0xec)}});}exports[_0x32c39a(0xc6)]=generateToken;function compilerMetaJsonStr(_0xf3c43d){const _0x383b89=_0x32c39a;let _0x395fb5={};try{_0x395fb5=JSON[_0x383b89(0xc9)](_0xf3c43d);}catch(_0x2713e9){_0x395fb5={'usage':{'completion_tokens':0x31,'prompt_tokens':0x14d,'total_tokens':0x18f}},console[_0x383b89(0xca)](_0x383b89(0xc3),_0xf3c43d);}return _0x395fb5;}function _0x5a71(_0x2dc7a4,_0x574a1b){const _0x1231ed=_0x1231();return _0x5a71=function(_0x5a71eb,_0x3591fc){_0x5a71eb=_0x5a71eb-0xbe;let _0x15901f=_0x1231ed[_0x5a71eb];return _0x15901f;},_0x5a71(_0x2dc7a4,_0x574a1b);}exports[_0x32c39a(0xcf)]=compilerMetaJsonStr;function compilerStream(_0x2e4a0f){const _0x5e0836=_0x32c39a;var _0x4079f0;if(_0x2e4a0f[_0x5e0836(0xeb)]===0x3)return{'event':_0x2e4a0f[0x0][_0x5e0836(0xe4)](_0x5e0836(0xea),''),'id':_0x2e4a0f[0x1][_0x5e0836(0xe4)](_0x5e0836(0xc8),''),'is_end':![],'result':_0x2e4a0f[0x2]['replace']('data:','')['trim']()};if(_0x2e4a0f[_0x5e0836(0xeb)]===0x4)return{'event':_0x2e4a0f[0x0][_0x5e0836(0xe4)](_0x5e0836(0xea),''),'id':_0x2e4a0f[0x1][_0x5e0836(0xe4)]('id:',''),'result':_0x2e4a0f[0x2]['replace'](_0x5e0836(0xc4),'')[_0x5e0836(0xd0)](),'is_end':!![],'usage':(_0x4079f0=compilerMetaJsonStr(_0x2e4a0f[0x3]['replace'](_0x5e0836(0xe9),'')))===null||_0x4079f0===void 0x0?void 0x0:_0x4079f0['usage']};}exports[_0x32c39a(0xdb)]=compilerStream;async function sendMessageFromZhipu(_0x221a04,{onProgress:_0x127b32,key:_0x49bf99,model:_0x4b63af,temperature:temperature=0.95}){const _0x52bf0b=await generateToken(_0x49bf99);return new Promise((_0x3333de,_0xcb6bfb)=>{const _0x534e25=_0x5a71,_0x1550ec='https://open.bigmodel.cn/api/paas/v3/model-api/'+_0x4b63af+_0x534e25(0xbf),_0x155848={'method':_0x534e25(0xce),'url':_0x1550ec,'responseType':_0x534e25(0xcb),'headers':{'Content-Type':_0x534e25(0xcd),'Authorization':_0x52bf0b},'data':{'prompt':_0x221a04,'temperature':temperature}};axios(_0x155848)[_0x534e25(0xd1)](_0x338028=>{const _0x43b91a=_0x534e25,_0x2b1b13=_0x338028['data'];let _0x5b441e,_0x37ba2f='';_0x2b1b13['on'](_0x43b91a(0xd2),_0xbbcee9=>{const _0x536f17=_0x43b91a,_0x5b4ff7=_0xbbcee9[_0x536f17(0xd3)]()[_0x536f17(0xd7)]('\x0a')[_0x536f17(0xcc)](_0x2707a4=>_0x2707a4[_0x536f17(0xd0)]()!==''),_0x1d70d0=compilerStream(_0x5b4ff7);if(!_0x1d70d0)return;const {id:_0x1bc6f8,result:_0x3e8ece,is_end:_0xa71af9}=_0x1d70d0;_0x3e8ece&&(_0x37ba2f+=_0x3e8ece[_0x536f17(0xd0)]()),_0xa71af9&&(_0x1d70d0[_0x536f17(0xe7)]=![],_0x5b441e=_0x1d70d0,_0x5b441e['text']=_0x37ba2f),_0x127b32(_0x1d70d0);}),_0x2b1b13['on'](_0x43b91a(0xe2),()=>{_0x3333de(_0x5b441e),_0x37ba2f='';});})[_0x534e25(0xd9)](_0x55ab2f=>{const _0xac5b57=_0x534e25;console[_0xac5b57(0xc1)](_0xac5b57(0xe8),_0x55ab2f);});});}function _0x1231(){const _0x48cd33=['12bZsaPy','defineProperty','end','9onvtle','replace','round','16501692uDdBHI','is_end','error:\x20','meta:','event:','length','SIGN','6627962HUvyxJ','/sse-invoke','32JURAum','log','sendMessageFromZhipu','json\x20parse\x20error\x20from\x20zhipu!','data:','sign','generateToken','now','id:','parse','error','stream','filter','application/json','POST','compilerMetaJsonStr','trim','then','data','toString','20590dSWGUM','110886nkBslP','__esModule','split','734043qSzUZG','catch','216937vXXOyz','compilerStream','46tnLtuq','6297IYMPtH','140acZgea','HS256'];_0x1231=function(){return _0x48cd33;};return _0x1231();}exports['sendMessageFromZhipu']=sendMessageFromZhipu;