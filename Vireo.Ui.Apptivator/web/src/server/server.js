!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){function t(n){if(r[n])return r[n].exports;var u=r[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t){e.exports=require("babel-runtime/regenerator")},function(e,t){e.exports=require("babel-runtime/helpers/asyncToGenerator")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(0),o=n(u),a=r(4),c=n(a),s=r(1),i=n(s),l=r(12),f=n(l),p=r(13),d=n(p),h=r(14),v=n(h),m=v.default,b=function(){function e(t){(0,f.default)(this,e),this.name=t}return(0,d.default)(e,[{key:"save",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,i.default)(o.default.mark(function e(t){var r,n=this;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.connect(this.name);case 2:return e.next=4,new c.default(function(e,r){try{n.source||(console.log(n),n.source=n.dataSource.collection(n.name)),n.source.insertOne(t,n.getInsertCallback(e,r))}catch(e){r(new Error(e))}});case 4:return r=e.sent,this.dispose(),e.abrupt("return",r);case 7:case"end":return e.stop()}},e,this)}));return e}()},{key:"get",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,i.default)(o.default.mark(function e(t){var r,n=this;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.connect(this.name);case 2:return e.next=4,new c.default(function(e,r){try{return n.source||(console.log(n),n.source=n.dataSource.collection(n.name)),n.source.findOne({id:t},n.getFetchCallback(e,r))}catch(e){r(new Error(e))}});case 4:return r=e.sent,this.dispose(),e.abrupt("return",r);case 7:case"end":return e.stop()}},e,this)}));return e}()},{key:"getAll",value:function(){function e(){return t.apply(this,arguments)}var t=(0,i.default)(o.default.mark(function e(){var t,r=this;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.connect(this.name);case 2:return e.next=4,new c.default(function(e,t){try{return r.source||(console.log(r),r.source=r.dataSource.collection(r.name)),r.source.find().toArray(function(r,n){r?t(new Error(r)):e(n)})}catch(e){t(e)}});case 4:return t=e.sent,this.dispose(),e.abrupt("return",t);case 7:case"end":return e.stop()}},e,this)}));return e}()},{key:"getInsertCallback",value:function(e,t){return function(r,n){r?t(new Error(r)):e(n.insertedId)}}},{key:"getFetchCallback",value:function(e,t){return function(r,n){r?t(new Error(r)):e(n)}}},{key:"dispose",value:function(){this.dataSource&&this.dataSource.close()}},{key:"connect",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,i.default)(o.default.mark(function e(t){var r;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.connect();case 3:r=e.sent,this.source=r.collection(t),this.dataSource&&this.dataSource.close(),this.dataSource=r,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),e.next=13,c.default.reject(new Error(e.t0));case 13:case"end":return e.stop()}},e,this,[[0,9]])}));return e}()}]),e}();t.default=b},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),u=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=new u.default("customers")},function(e,t){e.exports=require("babel-runtime/core-js/promise")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),u=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=new u.default("charges")},function(e,t,r){r(7),e.exports=r(8)},function(e,t){e.exports=require("babel-polyfill")},function(e,t,r){"use strict";(function(e){function t(e){return e&&e.__esModule?e:{default:e}}var n=r(0),u=t(n),o=r(1),a=t(o),c=r(9),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(c),i=r(10),l=t(i),f=r(16),p=r(18),d=t(p),h=new s.Server;process.env.PORT?h.connection({port:process.env.PORT}):h.connection({port:process.env.PORT||3001,host:process.env.HOST||"localhost"}),h.register([{register:r(19)},{register:r(20),options:{headers:["Accept","Authorization","Content-Type","If-None-Match","Accept-Language","Accept-Encoding","Access-Control-Request-Headers","Access-Control-Request-Method","DNT","Connection","Host","Origin","Refferer","User-Agent"],origins:["http://localhost:3000"]}},{register:r(21),options:{handlerName:"await"}},{register:r(22),options:{transporter:d.default.createTransport({host:"smtp.gmail.com",secureConnection:!0,port:465,auth:{user:"vireo.development@gmail.com",pass:"elacxcepehrpordh"},tls:{secureProtocol:"TLSv1_method"}})}}],function(t){h.views({engines:{html:r(23)},path:"views"}),h.start(function(t){if(t)throw t;console.log(e),console.log("Server running at: "+h.info.uri)})}),h.route({method:"POST",path:"/api/appContents",handler:{await:function(){function e(e,r){return t.apply(this,arguments)}var t=(0,a.default)(u.default.mark(function e(t,r){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.appContentsCollection.save(t.payload);case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",r(e.t0));case 8:return e.abrupt("return",r().code(201));case 9:case"end":return e.stop()}},e,this,[[0,5]])}));return e}()}}),h.route({method:"GET",path:"/api/appContents",handler:{await:function(){function e(e,r){return t.apply(this,arguments)}var t=(0,a.default)(u.default.mark(function e(t,r){var n;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.appContentsCollection.getAll();case 3:return n=e.sent,console.log(n),e.abrupt("return",r(n));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",r(e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return e}()}}),h.route({method:"POST",path:"/api/payments",handler:{await:function(){function e(e,r){return t.apply(this,arguments)}var t=(0,a.default)(u.default.mark(function e(t,r){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.default.makePayment(t.payload.token,t.payload.email);case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",r(e.t0));case 8:return e.abrupt("return",r().code(201));case 9:case"end":return e.stop()}},e,this,[[0,5]])}));return e}()}}),h.route({method:"GET",path:"/api/payments",handler:{await:function(){function e(e,r){return t.apply(this,arguments)}var t=(0,a.default)(u.default.mark(function e(t,r){var n;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.chargesCollection.getAll();case 2:return n=e.sent,console.log(n),e.abrupt("return",r(n));case 5:case"end":return e.stop()}},e,this)}));return e}()}}),h.route({method:"GET",path:"/api/customers",handler:{await:function(){function e(e,r){return t.apply(this,arguments)}var t=(0,a.default)(u.default.mark(function e(t,r){var n;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.customersCollection.getAll();case 2:return n=e.sent,console.log(n),e.abrupt("return",r(n));case 5:case"end":return e.stop()}},e,this)}));return e}()}});var v=r(24),m=(v.lstatSync,v.readdirSync,r(25));m.join;h.route({method:"POST",path:"/api/email",handler:function(e,t){var r=e.payload,n=r.from,u=r.email,o=r.message;h.render("email",{message:o},function(e,r,o){e&&t(e);var a={from:n,to:u,subject:"Mobile App Contact",html:r};h.methods.sendEmail(a,function(e,r){e&&t(e),t()})})}}),h.route({method:"GET",path:"/api/email",handler:function(e,t){h.render("email",{message:"test contact message"},function(e,r,n){e&&t(e);var u={from:"info@cloudvireo.com",to:"srt0422@gmail.com",subject:"Mobile App Contact",html:r};h.methods.sendEmail(u,function(e,r){e&&t(e),t()})})}})}).call(t,"/")},function(e,t){e.exports=require("hapi")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(0),o=n(u),a=r(1),c=n(a),s=r(11),i=r(3),l=n(i),f=r(5),p=n(f),d=new s.Stripe("sk_test_OHx1Z0IcyDglKviPsmA8ZEtQ");t.default={makePayment:function(){function e(e,r){return t.apply(this,arguments)}var t=(0,c.default)(o.default.mark(function e(t,r){var n,u;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.customers.create({email:r,source:t});case 3:return n=e.sent,e.next=6,l.default.save(n);case 6:return e.next=8,d.charges.create({amount:1e4,currency:"usd",customer:n.id});case 8:return u=e.sent,e.next=11,p.default.save(u);case 11:e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(0),e.t0;case 16:case"end":return e.stop()}},e,this,[[0,13]])}));return e}()}},function(e,t){e.exports=require("stripe")},function(e,t){e.exports=require("babel-runtime/helpers/classCallCheck")},function(e,t){e.exports=require("babel-runtime/helpers/createClass")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),u=function(e){return e&&e.__esModule?e:{default:e}}(n),o=r(15),a=null;t.default={connect:function(){return new u.default(function(e,t){try{o.MongoClient.connect("mongodb://apptivator:5ZAmXndm3JPqYLRKFtULq5FviVbA2palr2kTlWMVqDVw9eEGBUUZCAOOzhAeJxlT0T6mhEBHxWgqH1T8lTLhNQ==@apptivator.documents.azure.com:10255/apptivator?ssl=true&replicaSet=globaldb",function(r,n){r&&t(r),a=n,e(n)})}catch(e){t(new Error(e))}})},disconnect:function(){a&&(a.close(),a=null)}}},function(e,t){e.exports=require("mongodb")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(3);Object.defineProperty(t,"customersCollection",{enumerable:!0,get:function(){return n(u).default}});var o=r(5);Object.defineProperty(t,"chargesCollection",{enumerable:!0,get:function(){return n(o).default}});var a=r(17);Object.defineProperty(t,"appContentsCollection",{enumerable:!0,get:function(){return n(a).default}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),u=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=new u.default("appContents")},function(e,t){e.exports=require("nodemailer")},function(e,t){e.exports=require("vision")},function(e,t){e.exports=require("hapi-cors")},function(e,t){e.exports=require("overjoy-await")},function(e,t){e.exports=require("hapi-email-plugin")},function(e,t){e.exports=require("handlebars")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("path")}]));