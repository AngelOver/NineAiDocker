'use strict';var _0x2e276a=_0x1e8c;(function(_0x1ce12,_0x5764be){var _0x243492=_0x1e8c,_0x32b403=_0x1ce12();while(!![]){try{var _0x31be38=parseInt(_0x243492(0xc1))/0x1*(parseInt(_0x243492(0xbc))/0x2)+parseInt(_0x243492(0xc9))/0x3*(-parseInt(_0x243492(0xda))/0x4)+-parseInt(_0x243492(0xe5))/0x5*(-parseInt(_0x243492(0xc7))/0x6)+-parseInt(_0x243492(0xee))/0x7+parseInt(_0x243492(0xde))/0x8*(-parseInt(_0x243492(0xd0))/0x9)+parseInt(_0x243492(0xbd))/0xa+-parseInt(_0x243492(0xc6))/0xb*(-parseInt(_0x243492(0xc5))/0xc);if(_0x31be38===_0x5764be)break;else _0x32b403['push'](_0x32b403['shift']());}catch(_0x350032){_0x32b403['push'](_0x32b403['shift']());}}}(_0x1619,0xac90a));var __decorate=this&&this['__decorate']||function(_0x2b1ede,_0x1874b0,_0x558f5a,_0x20a236){var _0x340291=_0x1e8c,_0x16cf23=arguments[_0x340291(0xd7)],_0x469189=_0x16cf23<0x3?_0x1874b0:_0x20a236===null?_0x20a236=Object['getOwnPropertyDescriptor'](_0x1874b0,_0x558f5a):_0x20a236,_0x4be1bd;if(typeof Reflect===_0x340291(0xc3)&&typeof Reflect[_0x340291(0xcd)]==='function')_0x469189=Reflect[_0x340291(0xcd)](_0x2b1ede,_0x1874b0,_0x558f5a,_0x20a236);else{for(var _0x1f4674=_0x2b1ede['length']-0x1;_0x1f4674>=0x0;_0x1f4674--)if(_0x4be1bd=_0x2b1ede[_0x1f4674])_0x469189=(_0x16cf23<0x3?_0x4be1bd(_0x469189):_0x16cf23>0x3?_0x4be1bd(_0x1874b0,_0x558f5a,_0x469189):_0x4be1bd(_0x1874b0,_0x558f5a))||_0x469189;}return _0x16cf23>0x3&&_0x469189&&Object[_0x340291(0xcb)](_0x1874b0,_0x558f5a,_0x469189),_0x469189;},__metadata=this&&this[_0x2e276a(0xf1)]||function(_0x3e0174,_0x3e698e){var _0x335e3d=_0x2e276a;if(typeof Reflect==='object'&&typeof Reflect[_0x335e3d(0xbb)]==='function')return Reflect[_0x335e3d(0xbb)](_0x3e0174,_0x3e698e);};Object[_0x2e276a(0xcb)](exports,'__esModule',{'value':!![]}),exports['UserEntity']=void 0x0;const typeorm_1=require('typeorm'),baseEntity_1=require(_0x2e276a(0xdd));let UserEntity=class UserEntity extends baseEntity_1['BaseEntity']{};__decorate([(0x0,typeorm_1['Column'])({'length':0xc,'comment':_0x2e276a(0xc0)}),__metadata(_0x2e276a(0xdc),String)],UserEntity[_0x2e276a(0xe9)],_0x2e276a(0xd2),void 0x0),__decorate([(0x0,typeorm_1[_0x2e276a(0xbf)])({'length':0x40,'comment':_0x2e276a(0xef),'nullable':!![]}),__metadata('design:type',String)],UserEntity[_0x2e276a(0xe9)],'password',void 0x0),__decorate([(0x0,typeorm_1[_0x2e276a(0xbf)])({'default':0x0,'comment':_0x2e276a(0xe0)}),__metadata(_0x2e276a(0xdc),Number)],UserEntity[_0x2e276a(0xe9)],_0x2e276a(0xc4),void 0x0),__decorate([(0x0,typeorm_1[_0x2e276a(0xbf)])({'default':0x1,'comment':_0x2e276a(0xbe)}),__metadata(_0x2e276a(0xdc),Number)],UserEntity[_0x2e276a(0xe9)],_0x2e276a(0xdb),void 0x0),__decorate([(0x0,typeorm_1[_0x2e276a(0xbf)])({'length':0x40,'unique':!![],'comment':_0x2e276a(0xeb)}),__metadata(_0x2e276a(0xdc),String)],UserEntity[_0x2e276a(0xe9)],'email',void 0x0),__decorate([(0x0,typeorm_1[_0x2e276a(0xbf)])({'length':0x40,'nullable':!![],'comment':_0x2e276a(0xd8)}),__metadata(_0x2e276a(0xdc),String)],UserEntity[_0x2e276a(0xe9)],'phone',void 0x0),__decorate([(0x0,typeorm_1[_0x2e276a(0xbf)])({'length':0x12c,'nullable':!![],'default':_0x2e276a(0xf0),'comment':_0x2e276a(0xc8)}),__metadata('design:type',String)],UserEntity['prototype'],_0x2e276a(0xec),void 0x0),__decorate([(0x0,typeorm_1[_0x2e276a(0xbf)])({'length':0x12c,'nullable':!![],'default':_0x2e276a(0xe7),'comment':_0x2e276a(0xc2)}),__metadata('design:type',String)],UserEntity[_0x2e276a(0xe9)],_0x2e276a(0xe2),void 0x0),__decorate([(0x0,typeorm_1[_0x2e276a(0xbf)])({'length':0x40,'default':'','comment':_0x2e276a(0xd5),'nullable':!![]}),__metadata(_0x2e276a(0xdc),String)],UserEntity['prototype'],_0x2e276a(0xcf),void 0x0),__decorate([(0x0,typeorm_1[_0x2e276a(0xbf)])({'length':0x40,'default':'','comment':_0x2e276a(0xe8),'nullable':!![]}),__metadata(_0x2e276a(0xdc),String)],UserEntity[_0x2e276a(0xe9)],_0x2e276a(0xf2),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'length':0xa,'default':'','comment':_0x2e276a(0xf8)}),__metadata('design:type',String)],UserEntity['prototype'],_0x2e276a(0xca),void 0x0),__decorate([(0x0,typeorm_1[_0x2e276a(0xbf)])({'length':0xa,'default':'','comment':_0x2e276a(0xd9)}),__metadata(_0x2e276a(0xdc),String)],UserEntity[_0x2e276a(0xe9)],_0x2e276a(0xf4),void 0x0),__decorate([(0x0,typeorm_1[_0x2e276a(0xbf)])({'length':0xa,'default':_0x2e276a(0xe1),'comment':_0x2e276a(0xea)}),__metadata(_0x2e276a(0xdc),String)],UserEntity[_0x2e276a(0xe9)],_0x2e276a(0xf7),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'length':0x40,'default':'','comment':_0x2e276a(0xed),'nullable':!![]}),__metadata(_0x2e276a(0xdc),String)],UserEntity[_0x2e276a(0xe9)],'openId',void 0x0),__decorate([(0x0,typeorm_1[_0x2e276a(0xbf)])({'length':0x40,'comment':_0x2e276a(0xf6),'nullable':!![]}),__metadata(_0x2e276a(0xdc),String)],UserEntity[_0x2e276a(0xe9)],_0x2e276a(0xd6),void 0x0),__decorate([(0x0,typeorm_1[_0x2e276a(0xbf)])({'comment':'用户邀请链接被点击次数','default':0x0}),__metadata('design:type',Number)],UserEntity[_0x2e276a(0xe9)],_0x2e276a(0xcc),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x2e276a(0xe4),'default':0x0}),__metadata(_0x2e276a(0xdc),Number)],UserEntity['prototype'],_0x2e276a(0xdf),void 0x0),__decorate([(0x0,typeorm_1[_0x2e276a(0xbf)])({'comment':_0x2e276a(0xf3),'default':0x0}),__metadata(_0x2e276a(0xdc),Number)],UserEntity[_0x2e276a(0xe9)],'violationCount',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x2e276a(0xce),'type':'text','nullable':!![]}),__metadata(_0x2e276a(0xdc),String)],UserEntity[_0x2e276a(0xe9)],_0x2e276a(0xd4),void 0x0),__decorate([(0x0,typeorm_1[_0x2e276a(0xbf)])({'comment':_0x2e276a(0xf5),'default':![]}),__metadata('design:type',Boolean)],UserEntity['prototype'],_0x2e276a(0xe6),void 0x0),UserEntity=__decorate([(0x0,typeorm_1[_0x2e276a(0xe3)])({'name':_0x2e276a(0xd3)})],UserEntity),exports[_0x2e276a(0xd1)]=UserEntity;function _0x1e8c(_0x249b90,_0x5a9ef1){var _0x16192c=_0x1619();return _0x1e8c=function(_0x1e8c27,_0x3625e2){_0x1e8c27=_0x1e8c27-0xbb;var _0x3c9b6e=_0x16192c[_0x1e8c27];return _0x3c9b6e;},_0x1e8c(_0x249b90,_0x5a9ef1);}function _0x1619(){var _0x778fd=['2977551nceuDW','UserEntity','username','users','remark','注册IP','client','length','用户手机号','用户填写的别人的邀请码','291296DTIwQz','sex','design:type','../../common/entity/baseEntity','8zLOfNc','consecutiveDays','用户状态','viewer','sign','Entity','用户连续签到天数','5yZOYTB','isDistribution','我是一台基于深度学习和自然语言处理技术的\x20AI\x20机器人，旨在为用户提供高效、精准、个性化的智能服务。','最后一次登录IP','prototype','用户角色','用户邮箱','avatar','微信openId','1559026KrMdrb','用户密码','https://public-1300678944.cos.ap-shanghai.myqcloud.com/ai/7f042f63f.png','__metadata','lastLoginIp','用户违规记录次数','invitedBy','是否是分销商\x20是才能查看分销菜单','用户注册来源','role','用户邀请码','metadata','484070SNEukR','1483190cCUfbN','用户性别','Column','用户昵称','1SpqSir','用户签名','object','status','564acxKYq','66242uLaull','6580578EWxyTs','用户头像','21BFaqzH','inviteCode','defineProperty','inviteLinkCount','decorate','备注信息','registerIp'];_0x1619=function(){return _0x778fd;};return _0x1619();}