'use strict';function _0x7180(_0x1e1233,_0x220acc){var _0x562bf6=_0x562b();return _0x7180=function(_0x7180d0,_0x249815){_0x7180d0=_0x7180d0-0x19a;var _0xa81e6e=_0x562bf6[_0x7180d0];return _0xa81e6e;},_0x7180(_0x1e1233,_0x220acc);}var _0x5f6147=_0x7180;(function(_0x38a63c,_0x9aa6e6){var _0x2c7f35=_0x7180,_0x13044a=_0x38a63c();while(!![]){try{var _0x1f748a=-parseInt(_0x2c7f35(0x1bf))/0x1*(parseInt(_0x2c7f35(0x1a6))/0x2)+-parseInt(_0x2c7f35(0x1ba))/0x3*(parseInt(_0x2c7f35(0x1aa))/0x4)+-parseInt(_0x2c7f35(0x1dc))/0x5*(-parseInt(_0x2c7f35(0x1a5))/0x6)+parseInt(_0x2c7f35(0x1ad))/0x7*(-parseInt(_0x2c7f35(0x1a8))/0x8)+parseInt(_0x2c7f35(0x19e))/0x9+parseInt(_0x2c7f35(0x1b0))/0xa+parseInt(_0x2c7f35(0x1d0))/0xb;if(_0x1f748a===_0x9aa6e6)break;else _0x13044a['push'](_0x13044a['shift']());}catch(_0x496b81){_0x13044a['push'](_0x13044a['shift']());}}}(_0x562b,0x5329d));var __decorate=this&&this['__decorate']||function(_0x4dba8d,_0x3bb8b3,_0x12b122,_0x47ebe8){var _0x203211=_0x7180,_0x2d6142=arguments[_0x203211(0x1d2)],_0x3294d4=_0x2d6142<0x3?_0x3bb8b3:_0x47ebe8===null?_0x47ebe8=Object[_0x203211(0x1a4)](_0x3bb8b3,_0x12b122):_0x47ebe8,_0x4c718f;if(typeof Reflect===_0x203211(0x1c9)&&typeof Reflect['decorate']===_0x203211(0x1d1))_0x3294d4=Reflect[_0x203211(0x1a9)](_0x4dba8d,_0x3bb8b3,_0x12b122,_0x47ebe8);else{for(var _0x369e80=_0x4dba8d['length']-0x1;_0x369e80>=0x0;_0x369e80--)if(_0x4c718f=_0x4dba8d[_0x369e80])_0x3294d4=(_0x2d6142<0x3?_0x4c718f(_0x3294d4):_0x2d6142>0x3?_0x4c718f(_0x3bb8b3,_0x12b122,_0x3294d4):_0x4c718f(_0x3bb8b3,_0x12b122))||_0x3294d4;}return _0x2d6142>0x3&&_0x3294d4&&Object[_0x203211(0x1c0)](_0x3bb8b3,_0x12b122,_0x3294d4),_0x3294d4;},__metadata=this&&this['__metadata']||function(_0xf1e25,_0x55ebfc){var _0x44a5e0=_0x7180;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x44a5e0(0x1d1))return Reflect['metadata'](_0xf1e25,_0x55ebfc);};Object['defineProperty'](exports,_0x5f6147(0x1c3),{'value':!![]}),exports[_0x5f6147(0x1d4)]=void 0x0;const typeorm_1=require('typeorm'),baseEntity_1=require(_0x5f6147(0x19c));let ChatLogEntity=class ChatLogEntity extends baseEntity_1[_0x5f6147(0x1bc)]{};__decorate([(0x0,typeorm_1['Column'])({'comment':_0x5f6147(0x1cb)}),__metadata('design:type',Number)],ChatLogEntity[_0x5f6147(0x1b3)],'userId',void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':_0x5f6147(0x1b8),'nullable':!![]}),__metadata('design:type',String)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x1a3),void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':_0x5f6147(0x1c6),'type':_0x5f6147(0x19f),'nullable':!![]}),__metadata(_0x5f6147(0x1da),String)],ChatLogEntity['prototype'],'prompt',void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':_0x5f6147(0x1a7),'type':_0x5f6147(0x19f),'nullable':!![]}),__metadata(_0x5f6147(0x1da),String)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x1af),void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':_0x5f6147(0x1be),'nullable':!![]}),__metadata(_0x5f6147(0x1da),Number)],ChatLogEntity[_0x5f6147(0x1b3)],'promptTokens',void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':'本次回答的token','nullable':!![]}),__metadata(_0x5f6147(0x1da),Number)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x1c5),void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':_0x5f6147(0x1d8),'nullable':!![]}),__metadata('design:type',Number)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x1cc),void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':'本次使用的模型','nullable':!![]}),__metadata(_0x5f6147(0x1da),String)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x1ca),void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':_0x5f6147(0x1c4),'nullable':!![]}),__metadata('design:type',String)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x19a),void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':_0x5f6147(0x1cd),'nullable':!![],'default':0x0}),__metadata('design:type',Number)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x1b2),void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':_0x5f6147(0x1d5),'nullable':!![],'type':_0x5f6147(0x19f)}),__metadata(_0x5f6147(0x1da),String)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x1b4),void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':_0x5f6147(0x1b7),'nullable':!![]}),__metadata(_0x5f6147(0x1da),String)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x1b5),void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':_0x5f6147(0x1c8),'nullable':!![]}),__metadata(_0x5f6147(0x1da),Number)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x1d7),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x5f6147(0x1b6),'nullable':!![]}),__metadata('design:type',String)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x1db),void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':_0x5f6147(0x1c7),'default':0x0}),__metadata(_0x5f6147(0x1da),Number)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x1d9),void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':'放大图片的Id记录','nullable':!![]}),__metadata('design:type',String)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x1ab),void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':_0x5f6147(0x19b),'nullable':!![]}),__metadata(_0x5f6147(0x1da),String)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x1ac),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x5f6147(0x1d3),'nullable':!![],'type':'text'}),__metadata(_0x5f6147(0x1da),String)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x1a0),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'role\x20system\x20user\x20assistant','nullable':!![]}),__metadata(_0x5f6147(0x1da),String)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x1c1),void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':_0x5f6147(0x1a2),'nullable':!![]}),__metadata(_0x5f6147(0x1da),Number)],ChatLogEntity['prototype'],'groupId',void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':_0x5f6147(0x1cf),'nullable':!![],'type':'text'}),__metadata(_0x5f6147(0x1da),String)],ChatLogEntity['prototype'],_0x5f6147(0x1bd),void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':_0x5f6147(0x1d6),'nullable':!![],'type':_0x5f6147(0x19f)}),__metadata(_0x5f6147(0x1da),String)],ChatLogEntity['prototype'],_0x5f6147(0x1c2),void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':'是否删除','default':![]}),__metadata(_0x5f6147(0x1da),Boolean)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x1ae),void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':_0x5f6147(0x1bb),'nullable':!![]}),__metadata('design:type',Number)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x1a1),void 0x0),__decorate([(0x0,typeorm_1[_0x5f6147(0x1b1)])({'comment':_0x5f6147(0x1ce),'nullable':!![]}),__metadata(_0x5f6147(0x1da),String)],ChatLogEntity[_0x5f6147(0x1b3)],_0x5f6147(0x19d),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x5f6147(0x1b9),'nullable':!![]}),__metadata(_0x5f6147(0x1da),String)],ChatLogEntity[_0x5f6147(0x1b3)],'file',void 0x0),ChatLogEntity=__decorate([(0x0,typeorm_1['Entity'])({'name':'chatlog'})],ChatLogEntity),exports[_0x5f6147(0x1d4)]=ChatLogEntity;function _0x562b(){var _0x2241af=['BaseEntity','conversationOptions','本次问题的token','1OjgeIV','defineProperty','role','requestOptions','__esModule','本次访问的Ip地址','completionTokens','询问的问题','是否是组图，这种图才可以指定放大','一组图片的第几张、放大或者变换的时候需要使用','object','model','用户ID','totalTokens','是否推荐0:\x20默认\x201:\x20推荐','tts语音地址','序列化的本次会话参数','7895338BOyrfl','function','length','图片信息的string','ChatLogEntity','扩展参数','序列化的本次提交参数','orderId','本次总花费的token','group','design:type','action','259645vfIILD','curIp','变换图片的Id记录','../../common/entity/baseEntity','tts','2236347JpzNsF','text','fileInfo','appId','对话分组ID','type','getOwnPropertyDescriptor','6myUBEY','102518Hqshjr','回答的答案','16iZhpIn','decorate','17260qtiPIE','upscaleId','variationId','2253125MvqAfW','isDelete','answer','5956860kampdm','Column','rec','prototype','extend','message_id','mj绘画的动作、放大或者变换、或者全部重新绘制','mj绘画列表携带的一级id用于图片变换或者放大','使用类型','本次对话上传的文件地址','402MdgRnG','使用的应用id'];_0x562b=function(){return _0x2241af;};return _0x562b();}