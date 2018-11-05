webpackJsonp([0],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = (function () {
    function StorageService() {
    }
    // length:number = localStorage.length;
    StorageService.prototype.write = function (key, value) {
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    };
    StorageService.prototype.read = function (key) {
        var value = localStorage.getItem(key);
        if (value && value != "undefined" && value != "null") {
            return JSON.parse(value);
        }
        return null;
    };
    StorageService.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    StorageService.prototype.clear = function () {
        sessionStorage.clear();
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=StorageService.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PandectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_3_toast_3__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_StorageService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventDetails__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__newEvent__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Toast } from '@ionic-native/toast';

//注入服务


//import { NativeStorage } from '@ionic-native/native-storage';
//导入页面


var PandectPage = (function () {
    function PandectPage(navCtrl, StorageService, service, params, 
        //private nativeStorage: NativeStorage,
        toast) {
        this.navCtrl = navCtrl;
        this.StorageService = StorageService;
        this.service = service;
        this.params = params;
        this.toast = toast;
        this.eventList = []; //所有事件
        this.eventList1 = []; //待办
        this.eventList2 = []; //在办
        this.eventList3 = []; //已办
        this.pet = "WeekTasks"; //设置默认选中
        this.eventType = "all"; //设置默认选中
        this.page = 1; //用于存储当前页码
        this.page_daiban = 1; //待办页码，默认1
        this.page_zaiban = 1; //在办页码，默认1
        this.page_yiban = 1; //已办页码，默认1
        this.type = 2; //用于存储类型 3 待办 2 在办 1已办
        // this.user=this.StorageService.read("user");
        this.url = this.service.serviceUrl;
        this.patrolRecordId = this.params.get('patrolRecordId') == null ? '' : this.params.get('patrolRecordId');
    }
    PandectPage.prototype.eventDetails = function (x, y, z, a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__eventDetails__["a" /* EventDetailsPage */], {
            eventId: x,
            type: y,
            startTime: z,
            endTime: a,
        });
    };
    PandectPage.prototype.newEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__newEvent__["a" /* NewEventPage */]);
    };
    PandectPage.prototype.do = function (i) {
        this.et = i.eventId;
        this.ee = i.eventType;
        this.ri = i.riverId;
        console.log(22, this.ee);
        console.log(33, this.et);
    };
    PandectPage.prototype.ngOnInit = function () {
        this.change(1, 1);
        this.change(2, 1);
        this.change(3, 1);
    };
    PandectPage.prototype.ionViewDidEnter = function () {
    };
    //用于上拉加载
    PandectPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('加载开始');
        setTimeout(function () {
            if (_this.pet == "DailyTasks") {
                _this.page_daiban += 1;
                _this.type = 3;
                _this.change(3, _this.page_daiban);
            }
            else if (_this.pet == "WeekTasks") {
                _this.page_zaiban += 1;
                _this.type = 2;
                _this.change(2, _this.page_zaiban);
            }
            else {
                _this.page_yiban += 1;
                _this.type = 1;
                _this.change(1, _this.page_yiban);
            }
            console.log('加载结束');
            infiniteScroll.complete();
        }, 1000);
    };
    //用于执行翻页
    PandectPage.prototype.change = function (b, a) {
        // console.log("类型",b);
        // console.log("页数",a);
        //去掉插件
        // this.nativeStorage.getItem('user').then(
        // 	data => {
        // 		this.user = data['user'];
        // 		this.userId = this.user['userId'];
        // 		let p = "userId=" + this.user['userId']
        // 			+ "&token=" + this.user['token']
        // 			+ "&patrolRecordId=" + this.patrolRecordId
        // 			+ "&type=" + b
        // 			+ "&pageSize=5"
        // 			+ "&pageNo=" + a
        // 			;
        // 		let url = 'http://' + this.service.serviceUrl + '/eventController/queryEvent.do';
        var _this = this;
        // 		this.service.service(url, p).subscribe(
        // 			data => {
        // 				if (data['result'] == -1) {
        // 					this.toast.showShortBottom("其他用户登录了您的账号。").subscribe();
        // 					this.navCtrl.popToRoot();
        // 				}
        // 				else if (b == 3) {
        // 					for (let i = 0; i < data['eventList'].length; i++) {
        // 						this.eventList1.push(data['eventList'][i]);
        // 					}
        // 					console.log("success!");
        // 					console.log("待办列表:", this.eventList1);
        // 				}
        // 				else if (b == 2) {
        // 					for (let i = 0; i < data['eventList'].length; i++) {
        // 						this.eventList2.push(data['eventList'][i]);
        // 					}
        // 					console.log("success!");
        // 					console.log("在办列表:", this.eventList2);
        // 				}
        // 				else {
        // 					for (let i = 0; i < data['eventList'].length; i++) {
        // 						this.eventList3.push(data['eventList'][i]);
        // 					}
        // 					console.log("success!");
        // 					console.log("已办列表:", this.eventList3);
        // 				}
        // 			},
        // 			err => {
        // 				console.error(err);
        // 			}
        // 		);
        // 	}
        // );
        //自己实现
        var data = this.StorageService.read('user');
        if (data != null) {
            this.user = data['user'];
            this.userId = this.user['userId'];
            var p = "userId=" + this.user['userId']
                + "&token=" + this.user['token']
                + "&patrolRecordId=" + this.patrolRecordId
                + "&type=" + b
                + "&pageSize=5"
                + "&pageNo=" + a;
            var url = 'http://' + this.service.serviceUrl + '/eventController/queryEvent.do';
            this.service.service(url, p).subscribe(function (data) {
                if (data['result'] == -1) {
                    _this.toast.toast2("其他用户登录了您的账号。");
                    _this.navCtrl.popToRoot();
                }
                else if (b == 3) {
                    for (var i = 0; i < data['eventList'].length; i++) {
                        _this.eventList1.push(data['eventList'][i]);
                    }
                    console.log("success!");
                    console.log("待办列表:", _this.eventList1);
                }
                else if (b == 2) {
                    for (var i = 0; i < data['eventList'].length; i++) {
                        _this.eventList2.push(data['eventList'][i]);
                    }
                    console.log("success!");
                    console.log("在办列表:", _this.eventList2);
                }
                else {
                    for (var i = 0; i < data['eventList'].length; i++) {
                        _this.eventList3.push(data['eventList'][i]);
                    }
                    console.log("success!");
                    console.log("已办列表:", _this.eventList3);
                }
            }, function (err) {
                console.error(err);
            });
        }
    };
    PandectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pandect',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\pandect\pandect.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true" color="primary">\n\n        <!-- 去掉原来的返回按键并重新设定新的返回 -->\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)=" this.navCtrl.pop();">\n\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            事件管理\n\n        </ion-title>\n\n        <!-- <ion-buttons right>\n\n            <button style="font-size:1.4rem;color:white" ion-button icon-only (click)="newEvent()">新建事件</button>\n\n        </ion-buttons> -->\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n        <div id="div_2"></div>\n\n    <!-- <ion-segment [(ngModel)]="eventType">\n\n        <ion-segment-button value="all">\n\n            所有\n\n        </ion-segment-button>\n\n        <ion-segment-button value="me">\n\n            我\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n    <div [ngSwitch]="eventType">\n\n        <ion-list *ngSwitchCase="\'all\'">\n\n            <ion-item *ngFor="let i of eventList" (click)="eventDetails(i.eventId,1)">\n\n                <ion-thumbnail item-start>\n\n                    <img *ngIf="i[\'eventFileList\'][0]!=null" [src]="\'http://36.250.234.66:8083/RiverChiefSystem\'+i[\'eventFileList\'][\'0\'].fileUrl">\n\n                    <p>{{i.eventTime| date: "yyyy-MM-dd HH:mm:ss"}}</p>\n\n                </ion-thumbnail>\n\n                <p>{{i.regionName}}</p>\n\n                <p>{{i.riverName}}</p>\n\n                <P>{{i.eventTypeName}}</P>\n\n                <P>{{i.eventName}}</P>\n\n            </ion-item>\n\n        </ion-list>\n\n        <div *ngSwitchCase="\'me\'"> -->\n\n    <div>\n\n        <ion-segment [(ngModel)]="pet">\n\n            <ion-segment-button value="DailyTasks" class="border-right">\n\n                待办\n\n            </ion-segment-button>\n\n            <ion-segment-button value="WeekTasks" class="border-right">\n\n                在办\n\n            </ion-segment-button>\n\n            <ion-segment-button value="MonthTasks">\n\n                结办\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n        <div [ngSwitch]="pet">\n\n            <ion-list *ngSwitchCase="\'DailyTasks\'">\n\n                <div style="border-top:10px solid #F8F8F8;height:120px" *ngFor="let i of eventList1" (click)="eventDetails(i.eventId,3,i.startTime,i.endTime)">\n\n                    <ion-item style="margin-left:1rem;top: 50%;\n\n                            left:50%;\n\n                            transform: translate(-50%,-50%);">\n\n                        <div style="vertical-align:middle;">\n\n                            <img style="height:12px" src="./assets/imgs/event/point.png">\n\n                            <span style="font-family:Lantinghei SC;color:#478BFF;">\n\n                                <b>{{i.riverName}}</b>\n\n                            </span>\n\n                        </div>\n\n                        <p>{{i.eventTime| date: "yyyy-MM-dd HH:mm:ss"}}</p>\n\n                        <div class="line"></div>\n\n                        <p>巡查人员：{{i.realName}}</p>\n\n                        <p>当前处理人：{{i.nowRealName}}</p>\n\n                        <ion-thumbnail item-content>\n\n                            <img *ngIf="i[\'eventFileList\'][0]!=null" [src]="\'http://\'+url+i[\'eventFileList\'][\'0\'].fileUrl">\n\n                        </ion-thumbnail>\n\n                        <p style="width:30px" item-end></p>\n\n                        <p *ngIf="i.eventTypeName==\'待处理\'" style="color:#FFFFFF" class="daichuli" item-end>{{i.eventTypeName}}</p>\n\n                        <p *ngIf="i.eventTypeName==\'待重报\'" style="color:#FFFFFF" class="daichongbao" item-end>{{i.eventTypeName}}</p>\n\n                        <p *ngIf="i.eventTypeName==\'待审核\'" style="color:#FFFFFF" class="daishenhe" item-end>{{i.eventTypeName}}</p>\n\n                        <p *ngIf="i.eventTypeName==\'待受理\'" style="color:#FFFFFF" class="daishouli" item-end>{{i.eventTypeName}}</p>\n\n                        <p *ngIf="i.eventTypeName==\'待回访\'" style="color:#FFFFFF" class="daihuifang" item-end>{{i.eventTypeName}}</p>\n\n                        <p *ngIf="i.eventTypeName==\'待协调\'" style="color:#FFFFFF" class="daixietiao" item-end>{{i.eventTypeName}}</p>\n\n                    </ion-item>\n\n                </div>\n\n            </ion-list>\n\n\n\n            <ion-list *ngSwitchCase="\'WeekTasks\'">\n\n                <div style="border-top:10px solid #F8F8F8;height:120px" *ngFor="let i of eventList2" (click)="eventDetails(i.eventId,2,i.startTime,i.endTime)">\n\n                    <ion-item style="margin-left:1rem;top: 50%;\n\n                    left:50%;\n\n                    transform: translate(-50%,-50%);">\n\n                        <div style="vertical-align:middle;">\n\n                            <img style="height:12px" src="./assets/imgs/event/point.png">\n\n                            <span style="font-family:Lantinghei SC;color:#478BFF;">\n\n                                <b>{{i.riverName}}</b>\n\n                            </span>\n\n                        </div>\n\n                        <p>{{i.eventTime| date: "yyyy-MM-dd HH:mm:ss"}}</p>\n\n                        <div class="line"></div>\n\n                        <p>巡查人员：{{i.realName}}</p>\n\n                        <p>当前处理人：{{i.nowRealName}}</p>\n\n                        <ion-thumbnail item-content>\n\n                            <img *ngIf="i[\'eventFileList\'][0]!=null" [src]="\'http://\'+url+i[\'eventFileList\'][\'0\'].fileUrl">\n\n                        </ion-thumbnail>\n\n                        <p style="width:30px" item-end></p>\n\n                        <p *ngIf="i.eventTypeName==\'待处理\'" style="color:#FFFFFF" class="daichuli" item-end>{{i.eventTypeName}}</p>\n\n                        <p *ngIf="i.eventTypeName==\'待重报\'" style="color:#FFFFFF" class="daichongbao" item-end>{{i.eventTypeName}}</p>\n\n                        <p *ngIf="i.eventTypeName==\'待审核\'" style="color:#FFFFFF" class="daishenhe" item-end>{{i.eventTypeName}}</p>\n\n                        <p *ngIf="i.eventTypeName==\'待受理\'" style="color:#FFFFFF" class="daishouli" item-end>{{i.eventTypeName}}</p>\n\n                        <p *ngIf="i.eventTypeName==\'待回访\'" style="color:#FFFFFF" class="daihuifang" item-end>{{i.eventTypeName}}</p>\n\n                        <p *ngIf="i.eventTypeName==\'待协调\'" style="color:#FFFFFF" class="daixietiao" item-end>{{i.eventTypeName}}</p>\n\n                    </ion-item>\n\n                </div>\n\n            </ion-list>\n\n\n\n            <ion-list *ngSwitchCase="\'MonthTasks\'">\n\n                <div style="border-top:10px solid #F8F8F8;height:120px" *ngFor="let i of eventList3" (click)="eventDetails(i.eventId,1,i.startTime,i.endTime)">\n\n                    <ion-item style="margin-left:1rem;top: 50%;\n\n                            left:50%;\n\n                            transform: translate(-50%,-50%);">\n\n                        <div style="vertical-align:middle;">\n\n                            <img style="height:12px" src="./assets/imgs/event/point.png">\n\n                            <span style="font-family:Lantinghei SC;color:#478BFF;">\n\n                                <b>{{i.riverName}}</b>\n\n                            </span>\n\n                        </div>\n\n                        <p>{{i.eventTime| date: "yyyy-MM-dd HH:mm:ss"}}</p>\n\n                        <div class="line"></div>\n\n                        <p>巡查人员：{{i.realName}}</p>\n\n                        <!-- <p>当前处理人：{{i.nowRealName}}</p> -->\n\n                        <ion-thumbnail item-content>\n\n                            <img *ngIf="i[\'eventFileList\'][0]!=null" [src]="\'http://\'+url+i[\'eventFileList\'][\'0\'].fileUrl">\n\n                        </ion-thumbnail>\n\n                        <p style="width:30px" item-end></p>\n\n                        <p *ngIf="i.eventTypeName==\'待处理\'" style="color:#FFFFFF" class="daichuli" item-end>{{i.eventTypeName}}</p>\n\n                        <p *ngIf="i.eventTypeName==\'待重报\'" style="color:#FFFFFF" class="daichongbao" item-end>{{i.eventTypeName}}</p>\n\n                        <p *ngIf="i.eventTypeName==\'待审核\'" style="color:#FFFFFF" class="daishenhe" item-end>{{i.eventTypeName}}</p>\n\n                        <p *ngIf="i.eventTypeName==\'待受理\'" style="color:#FFFFFF" class="daishouli" item-end>{{i.eventTypeName}}</p>\n\n                        <p *ngIf="i.eventTypeName==\'待回访\'" style="color:#FFFFFF" class="daihuifang" item-end>{{i.eventTypeName}}</p>\n\n                        <p *ngIf="i.eventTypeName==\'待协调\'" style="color:#FFFFFF" class="daixietiao" item-end>{{i.eventTypeName}}</p>\n\n                    </ion-item>\n\n                </div>\n\n            </ion-list>\n\n        </div>\n\n    </div>\n\n    <!-- </div> -->\n\n\n\n    <!-- 用于上拉加载 -->\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="正在加载更多事件！">\n\n        </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\pandect\pandect.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__service_StorageService__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* service */], __WEBPACK_IMPORTED_MODULE_2__toast_3_toast_3__["a" /* ToasT */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* service */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__toast_3_toast_3__["a" /* ToasT */]])
    ], PandectPage);
    return PandectPage;
}());

//# sourceMappingURL=pandect.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiverTrajectoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_StorageService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_ol_map__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_3_toast_3__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_openlayers__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_openlayers__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Camera, CameraOptions } from '@ionic-native/camera';
//import { NativeStorage } from '@ionic-native/native-storage';
//import { BackgroundMode } from '@ionic-native/background-mode';
// import { Toast } from '@ionic-native/toast';


var RiverTrajectoryPage = (function () {
    function RiverTrajectoryPage(navCtrl, alertCtrl, service, storageService, 
        // private camera: Camera,
        //private nativeStorage: NativeStorage,
        //private backgroundMode: BackgroundMode,
        toast, 
        // private geolocation: Geolocation,
        params) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.storageService = storageService;
        this.toast = toast;
        this.params = params;
        this.rPD_connectErr_count = 0; //连接错误次数
        //巡河任务
        this.riverTask = [];
        this.eventList = []; //所有事件
        this.point = []; //记录点
        //巡河日志
        this.rPD_nowPoint = []; //当前点
        this.rPD_points = []; //点数组
        this.rPD_lineLength = "0.0"; //里程
        this.rPD_patrolId = 0; //巡河任务ID
        //事件上传
        this.rPD_csrc = "";
        this.eventLevel = 1;
        this.problemType_chkParent = { code: '0' }; //选中的父级问题类型
        this.problemType = [];
        this.riverId = 35010100000000;
        this.eventContent = ""; //事件内容
        this.btn_do_newEventByImg_disabled = false;
        this.btn_do_newEventByImg = "上传";
        //视图变化
        this.rPD_is_reporting = false;
        this.rPD_div_riverTask_isShow = false; //任务选择DIV
        //按钮变化
        this.rPD_btn_riverTask_isShow = true; //巡河任务按钮
        //--------地图 轨迹播放测试
        this.map = null;
        //轨迹回放参数
        this.animating = false;
        this.geoMarker = null;
        this.speed = 20;
        this.speedState = 0;
        this.routeButton = null;
        this.routeCoords = null;
        this.geoMarker_Style = new __WEBPACK_IMPORTED_MODULE_6_openlayers__["style"].Style({
            image: new __WEBPACK_IMPORTED_MODULE_6_openlayers__["style"].Circle({
                radius: 7,
                snapToPixel: false,
                fill: new __WEBPACK_IMPORTED_MODULE_6_openlayers__["style"].Fill({ color: 'black' }),
                stroke: new __WEBPACK_IMPORTED_MODULE_6_openlayers__["style"].Stroke({
                    color: 'white', width: 2
                })
            })
        });
        this.moveFeature = function (event) {
            var vectorContext = event.vectorContext;
            var frameState = event.frameState;
            if (_this.animating) {
                var elapsedTime = frameState.time - _this.now;
                var index = Math.round(_this.speed * elapsedTime / 1000);
                if (index >= _this.routeCoords.length) {
                    _this.stopAnimation(true);
                    return;
                }
                var currentPoint = new __WEBPACK_IMPORTED_MODULE_6_openlayers__["geom"].Point(_this.routeCoords[index]);
                var feature = new __WEBPACK_IMPORTED_MODULE_6_openlayers__["Feature"](currentPoint);
                vectorContext.drawFeature(feature, _this.geoMarker_Style);
            }
            // tell OpenLayers to continue the postcompose animation
            _this.map.render();
        };
        this.userInfo = this.storageService.read('user');
        this.regionId = this.userInfo['regionId'];
        this.userId = this.userInfo['userId'];
        this.token = this.userInfo['token'];
        this.patrolRecordId = this.params.get('patrolRecordId');
        //this.backgroundMode.enable();
        //this.backgroundMode.disableWebViewOptimizations();
    }
    //开始巡河
    RiverTrajectoryPage.prototype.rPD_beginRiver = function () {
        var f_record = {
            points: this.rPD_points,
            create_time: this.rPD_createTime,
            sum_distance: "0.0",
            patrolId: this.rPD_patrolId
        };
        //显示日志上传按钮
        this.rPD_btn_riverTask_isShow = !this.rPD_btn_riverTask_isShow;
        //隐藏任务选择div
        this.rPD_div_riverTask_isShow = false;
        var sum_distance = 0;
        this.toast.toast2("开始巡河");
        //首次定位
        // this.geolocation.getCurrentPosition().then(
        //     resp => {
        //         console.log('GPS is beginning!');
        //         // this.backgroundMode.setDefaults({
        //         //     title: '正在巡河中...'
        //         // });
        //         this.rPD_nowPoint = [resp.coords.longitude, resp.coords.latitude];
        //         this.rPD_points.push(this.rPD_nowPoint);
        //         this.rPD_map.setView(this.rPD_nowPoint);
        //         f_record.points = this.rPD_points;
        //         //去掉插件
        //         //this.nativeStorage.setItem("rPD_riverTask", f_record);
        //         //自己实现
        //         this.storageService.write("rPD_riverTask", f_record);
        //         console.log(this.rPD_nowPoint);
        //     }
        // ).catch(
        //     error => {
        //         console.log('Error getting location', error);
        //     }
        //     );
        // //开始监听
        // let watch = this.geolocation.watchPosition({ enableHighAccuracy: true });
        // watch.subscribe(
        //     data => {
        //         //提示框
        //         // this.backgroundMode.setDefaults({
        //         //     title: '正在巡河中...'
        //         // });
        //         //点位记录
        //         this.rPD_nowPoint = [data.coords.longitude, data.coords.latitude];
        //         this.rPD_points.push(this.rPD_nowPoint);
        //         this.rPD_map.setView(this.rPD_nowPoint);
        //         f_record.points = this.rPD_points;
        //         //去掉插件
        //         //this.nativeStorage.setItem("rPD_riverTask", f_record);
        //         //自己实现
        //         this.storageService.write("rPD_riverTask", f_record);
        //         console.log(this.rPD_nowPoint);
        //         sum_distance = 0;
        //         for (let i = 1; i < this.rPD_points.length; i++) { //从2个点开始循环
        //             sum_distance += this.rPD_map.distanceInPoints(this.rPD_points[i - 1], this.rPD_points[i]);
        //         }
        //         this.rPD_lineLength = (sum_distance).toFixed(1);
        //         f_record.sum_distance = this.rPD_lineLength;
        //         //去掉插件
        //         //this.nativeStorage.setItem("rPD_riverTask", f_record);
        //         //自己实现
        //         this.storageService.write("rPD_riverTask", f_record);
        //         //画点
        //         this.rPD_map.set_nowPoint(this.rPD_nowPoint);
        //         //画线
        //         this.rPD_map.drawLine(this.rPD_points);
        //     }
        // );
    };
    RiverTrajectoryPage.prototype.problemPush = function (p) {
        for (var i = 0; i < this.problemType.length; i++) {
            if (p == this.problemType[i]) {
                this.problemType.splice(i, 1);
                return;
            }
        }
        this.problemType.push(p);
    };
    RiverTrajectoryPage.prototype.problemColor = function (p) {
        for (var i = 0; i < this.problemType.length; i++) {
            if (p == this.problemType[i])
                return 'primary';
        }
        return 'white';
    };
    RiverTrajectoryPage.prototype.speedBack = function () {
        this.speedState = 0;
        this.speed = 20;
    };
    RiverTrajectoryPage.prototype.speedUp = function () {
        this.speedState = 1;
        this.speed = this.speed * 2;
    };
    RiverTrajectoryPage.prototype.speedDown = function () {
        this.speedState = 2;
        this.speed = this.speed / 2;
    };
    RiverTrajectoryPage.prototype.PolyLine_Animation_Controller = function () {
        var lineData = this.point;
        var route = new __WEBPACK_IMPORTED_MODULE_6_openlayers__["geom"].LineString(lineData); // 转换成 LineString
        this.routeCoords = route.getCoordinates(); // 获取坐标点
        //this.routeLength = this.routeCoords.length; // 获取长度
        this.routeButton = document.getElementById('AnimationController');
        this.startAnimation();
    };
    RiverTrajectoryPage.prototype.startAnimation = function () {
        if (this.animating) {
            this.stopAnimation(false);
        }
        else {
            this.animating = true;
            this.now = new Date().getTime();
            this.routeButton.innerHTML = '取消播放';
            // hide geoMarker
            this.geoMarker = this.rPD_map.geoMaker_remove();
            // just in case you pan somewhere else
            var point = 0;
            this.map.getView().setCenter(this.routeCoords[point]);
            this.map.on('postcompose', this.moveFeature);
            this.map.render();
        }
    };
    /**
     *ended boolean类型数据,true表示结束，false表示未结束
    */
    RiverTrajectoryPage.prototype.stopAnimation = function (ended) {
        console.log("stopAnimation执行" + ended);
        this.animating = false;
        this.routeButton.innerHTML = '轨迹播放';
        // if animation cancelled set the marker at the beginning
        var coord = ended ? this.routeCoords[this.routeCoords.length - 1] : this.routeCoords[0];
        /** @type {ol.geom.Point} */
        this.geoMarker = this.rPD_map.geoMaker_add();
        (this.geoMarker.getGeometry()).setCoordinates(coord);
        //remove listener
        this.map.un('postcompose', this.moveFeature);
    };
    //轨迹播放结束
    RiverTrajectoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.rPD_map = new __WEBPACK_IMPORTED_MODULE_4__service_ol_map__["a" /* OlMapService */]("rPD_map");
        this.rPD_map.startMap();
        var p1 = "userId=" + this.userId
            + "&token=" + this.token + "&patrolRecordId=" + this.patrolRecordId;
        var url = 'http://' + this.service.serviceUrl + '/patrolRecordController/queryPointFromPatrolRecord.do';
        this.service.service(url, p1).subscribe(function (data) {
            _this.eventList = data['PatrolRecord'];
            _this.point = data['point'];
            _this.rPD_lineLength = _this.eventList[0]['totalMileage'];
            _this.rPD_sumTime = _this.eventList[0]['totalTime'];
            // this.rPD_map.c(this.point);
            //this.rPD_map.drawLine(this.point);
            // //绘制轨迹
            if ((_this.point != null) && (_this.point.length != 0)) {
                _this.geoMarker = _this.rPD_map.playLine(_this.point);
            }
            _this.map = _this.rPD_map.get_map();
            //播放速度重置
            _this.speed = 20;
            _this.speedState = 0;
            _this.rPD_map.setView(_this.point[0], 14);
            console.log("success!");
            console.log("轨迹:", _this.eventList);
            console.log("point:", _this.point);
        }, function (err) {
            console.error(err);
        });
    };
    RiverTrajectoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-riverTrajectory',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\riverLog\riverTrajectory.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true" color="primary">\n\n        <!-- 去掉原来的返回按键并重新设定新的返回 -->\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)=" this.navCtrl.pop();">\n\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title style="font-size:2rem">\n\n            巡河日志\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n        <div id="div_2"></div>\n\n    <!-- 地图 -->\n\n    <div class="position_a width_100 height_100">\n\n        <div class="position_a width_100 height_40p z_index_10 b_backpanel color_white padding_left_10p">\n\n            <span class="position_a margin_lr_10p top_0">本次巡河里程: {{rPD_lineLength}}米</span>\n\n            <span class="position_a margin_lr_10p bottom_0">本次巡河时长：{{ rPD_sumTime }}</span>\n\n        </div>\n\n\n\n        <div class="position_a width_100 height_100 z_index_1" id="rPD_map"></div>\n\n        <div style="position:absolute;top:40px;right:0px;z-index:100;">\n\n            <button ion-button id="AnimationController" class="btn btn-sm btn_selected" (click)="PolyLine_Animation_Controller()">轨迹播放</button>\n\n        </div>\n\n        <!-- <div class="btn-group" role="group" style="position:absolute;top:80px;right:50px;z-index:100;border:1px solid #DAD8D8;border-radius: 0.2rem;">\n\n            <button type="button" class="btn btn-default" [ngClass]="{\'btn_unSelect\':speedState!=2,\n\n                    \'btn_selected\':speedState==2}" style="width:40px;border-right:0.5px solid #DAD8D8;" (click)="speedDown()"\n\n                title="减速">\n\n                <i class="fa fa-minus"></i>\n\n            </button>\n\n            <button type="button" class="btn btn-default" [ngClass]="{\'btn_unSelect\':speedState!=0,\n\n                    \'btn_selected\':speedState==0}" style="width:40px;border-left:0.5px solid #DAD8D8;border-right:0.5px solid #DAD8D8;"\n\n                (click)="speedBack()" title="恢复">\n\n                <i class="fa fa-undo"></i>\n\n            </button>\n\n            <button type="button" class="btn btn-default" [ngClass]="{\'btn_unSelect\':speedState!=1,\n\n                    \'btn_selected\':speedState==1}" style="width:40px;border-left:0.5px solid #DAD8D8;" (click)="speedUp()"\n\n                title="加速">\n\n                <i class="fa fa-plus"></i>\n\n            </button>\n\n        </div> -->\n\n\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\riverLog\riverTrajectory.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */], __WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */],
            __WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_5__toast_3_toast_3__["a" /* ToasT */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RiverTrajectoryPage);
    return RiverTrajectoryPage;
}());

//# sourceMappingURL=riverTrajectory.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
//假数据文件@
//存放 服务 、 数据 、 工具
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Import RxJs required methods


var service = (function () {
    // Resolve HTTP using the constructor
    function service(http) {
        this.http = http;
        // this.serviceUrl = "36.250.234.66:8083/RiverChiefSystem";//泉州
        // this.serviceUrl = "36.250.234.66:8080/RiverChiefSystem";//漳州
        //this.serviceUrl = "192.168.43.226:8080/RiverChiefSystem";//内部服务器
        this.serviceUrl = "36.250.234.65:8081/RiverChiefSystem"; //南平
        //this.serviceUrl = "200.200.200.182:8080/RiverChiefSystem";//南平
        //this.serviceUrl = "47.104.207.114:8082/RiverChiefSystem";//长乐
    }
    // private instance variable to hold base url
    service.prototype.service = function (url, p) {
        var headerscontent = 'application/x-www-form-urlencoded';
        if ((typeof p) == 'object') {
            p = JSON.stringify(p);
            headerscontent = 'application/json';
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': headerscontent // ... Set content type
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        return this.http.post(url, p, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], service);
    return service;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_StorageService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toast_3_toast_3__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_utils__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pandect_pandect__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_message__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__personalCenter_personal__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__document_document__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__riverLog_riverLog__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__statistics_statistics__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Toast } from '@ionic-native/toast';

//import { NativeStorage } from '@ionic-native/native-storage';


// import { RecentPlanDetailsPage } from './../patrol/recentPlanDetails';






var HomePage = (function () {
    function HomePage(navCtrl, StorageService, utilsService, alertCtrl, toast, 
        //private nativeStorage: NativeStorage,
        service) {
        this.navCtrl = navCtrl;
        this.StorageService = StorageService;
        this.utilsService = utilsService;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.service = service;
        this.year = 0; //年
        this.yearCompleteNum = 0; //年完成次数
        this.halfyear = 0; //半年
        this.halfyearCompleteNum = 0; //半年完成次数
        this.quarter = 0; //季
        this.quarterCompleteNum = 0; //季度完成次数
        this.month = 0; //月
        this.monthCompleteNum = 0; //月完成次数
        this.twomonth = 0; //两月
        this.twomonthCompleteNum = 0; //两月完成次数
        this.eventList = []; //所有事件
        this.adList = []; //广告
        this.list = [];
        this.user = this.StorageService.read("user");
        // this.user=this.nativeStorage.getItem('user');
        this.long = this.StorageService.read('long');
        this.roleType = this.user['roleType'];
        this.list = this.StorageService.read("adList");
        console.log("list", this.list);
        // for (var i = 0; i < this.long; i++) {
        // this.adList[i] = this.StorageService.read("ad" + i);
        // console.log("this.adList[i]", this.adList[i]);
        // }
        // this.userId=this.user['userId'];
        // this.token=this.user['token'];
    }
    HomePage.prototype.pandect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pandect_pandect__["a" /* PandectPage */]);
    };
    // private patrol() {
    // 	this.navCtrl.push(RecentPlanDetailsPage);
    // }
    HomePage.prototype.personal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__personalCenter_personal__["a" /* PersonalPage */]);
    };
    HomePage.prototype.message = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__message_message__["a" /* MessagePage */]);
    };
    HomePage.prototype.document = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__document_document__["a" /* DocumentPage */]);
    };
    HomePage.prototype.riverLog = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__riverLog_riverLog__["a" /* RiverLogPage */]);
    };
    HomePage.prototype.statistics = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__statistics_statistics__["a" /* StatisticsPage */]);
    };
    HomePage.prototype.ngOnInit = function () {
        //去掉插件
        // this.nativeStorage.getItem('user').then(
        // 	data => {
        // 		this.user = data['user'];
        // 		// console.log("user111:", this.user);
        // 		this.userId = this.user['userId'];
        // 		this.token = this.user['token'];
        // 	}
        // )
        //自己实现
        var data = this.StorageService.read('user');
        if (data != null) {
            this.user = data['user'];
            this.userId = data['userId'];
            this.token = data['token'];
        }
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.twomonth = this.halfyear = this.year = this.quarter = this.month = 0;
        this.yearCompleteNum = this.halfyearCompleteNum = this.quarterCompleteNum = this.twomonthCompleteNum = this.monthCompleteNum = 0;
        var p = "userId=" + this.userId
            + "&token=" + this.token;
        var url = 'http://' + this.service.serviceUrl + '/patrolController/countPatrol.do';
        this.service.service(url, p).subscribe(function (data) {
            if (data['result'] == -1) {
                _this.toast.toast2("其他用户登录了您的账号。");
                _this.navCtrl.popToRoot();
            }
            else {
                _this.eventList = data['Patrol'];
                // this.StorageService.write('eventList',this.eventList);
                for (var i = 0; i < _this.eventList.length; i++) {
                    if (_this.eventList[i]['patrolPeriod'] == "1") {
                        _this.year = _this.year + _this.eventList[i]['patrolNum'] - _this.eventList[i]['completeNum'];
                        _this.yearCompleteNum += _this.eventList[i]['completeNum'];
                    }
                    else if (_this.eventList[i]['patrolPeriod'] == "2") {
                        _this.halfyear = _this.halfyear + _this.eventList[i]['patrolNum'] - _this.eventList[i]['completeNum'];
                        _this.halfyearCompleteNum += _this.eventList[i]['completeNum'];
                    }
                    else if (_this.eventList[i]['patrolPeriod'] == "3") {
                        _this.quarter = _this.quarter + _this.eventList[i]['patrolNum'] - _this.eventList[i]['completeNum'];
                        _this.quarterCompleteNum += _this.eventList[i]['completeNum'];
                    }
                    else if (_this.eventList[i]['patrolPeriod'] == "4") {
                        _this.twomonth = _this.twomonth + _this.eventList[i]['patrolNum'] - _this.eventList[i]['completeNum'];
                        _this.twomonthCompleteNum += _this.eventList[i]['completeNum'];
                    }
                    else if (_this.eventList[i]['patrolPeriod'] == "5") {
                        _this.month = _this.month + _this.eventList[i]['patrolNum'] - _this.eventList[i]['completeNum'];
                        _this.monthCompleteNum += _this.eventList[i]['completeNum'];
                    }
                }
                console.log("次数:", _this.eventList);
                // console.log("年-季度-月", this.year - this.quarter - this.month);
                console.log("success!");
            }
        }, function (err) {
            console.error(err);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\home\home.html"*/'<ion-content>\n    <div style="position: relative;">\n        <ion-slides style="max-height:17rem;" loop="true" autoplay="5000">\n            <ion-slide *ngFor="let x of list">\n                <img style="height:17rem;width:100%" [src]="x.fountImgUrl" />\n                <span style="position:absolute;\n                font-size:1.4rem;\n                width:100%;\n                left:0rem; \n                bottom:0.5rem;\n                background-color:rgba(0,0,0,0.6);">\n                    <span style="color:white;">\n                        {{x[\'noticeTitle\']}}\n                    </span>\n                </span>\n            </ion-slide>\n        </ion-slides>\n    </div>\n    <div id="div_2"></div>\n    <!-- <div style=" position:absolute; width:100%; top:17rem; bottom:22rem;text-align:center">\n        <a *ngIf="year==0&&halfyear==0&&quarter==0&&twomonth==0&&month==0" style="color:blue;"> 您当前没有巡河任务</a>\n        <a *ngIf="year>0" style="color:blue"> 您需每年开展一次巡河任务，已巡河{{yearCompleteNum}}次，还需巡河{{year}}次</a>\n        <a *ngIf="halfyear>0" style="color:blue">您需每半年开展一次巡河任务，已巡河{{halfyearCompleteNum}}次，还需巡河{{halfyear}}次</a>\n        <a *ngIf="quarter>0" style="color:blue"> 您需每季度开展一次巡河任务，已巡河{{quarterCompleteNum}}次，还需巡河{{quarter}}次</a>\n        <a *ngIf="twomonth>0" style="color:blue">您需每两月开展一次巡河任务，已巡河{{twomonthCompleteNum}}次，还需巡河{{twomonth}}次</a>\n        <a *ngIf="month>0" style="color:blue"> 您需每个月开展一次巡河任务，已巡河{{monthCompleteNum}}次，还需巡河{{month}}次</a>\n    </div> -->\n    <div *ngIf="roleType!=\'50\'" style=" position:absolute; width:100%; top:17rem; bottom:0; ">\n        <div class="row " style="height:33%; border-top: 0px;">\n            <div tappable class="homecol " style="border-left:0rem; ">\n                <div class="home_text_center ">\n                    <div class="home_radius ">\n                        <img class="home_img " src="assets/imgs/home/5.png " />\n                    </div>\n                    <a>河道巡查</a>\n                </div>\n            </div>\n            <div tappable class="homecol " style="border-left:0rem;border-right:0rem " (click)="riverLog() ">\n                <div class="home_text_center ">\n                    <div class="home_radius ">\n                        <img class="home_img " src="assets/imgs/home/6.png " />\n                    </div>\n                    <a>巡查日志</a>\n                </div>\n            </div>\n        </div>\n        <div class="row " style="height:33%; ">\n            <div tappable class="homecol " style="border-left:0rem; " (click)="message() ">\n                <div class="home_text_center ">\n                    <div class="home_radius ">\n                        <img class="home_img " src="assets/imgs/home/7.png " />\n                    </div>\n                    <a>河湖信息</a>\n                </div>\n            </div>\n            <div tappable class="homecol " style="border-left:0rem;border-right:0rem " (click)="pandect() ">\n                <div class="home_text_center ">\n                    <div class="home_radius ">\n                        <img class="home_img " src="assets/imgs/home/8.png " />\n                    </div>\n                    <a>事件管理</a>\n                </div>\n            </div>\n\n        </div>\n        <div class="row " style="height:33%; ">\n            <div tappable class="homecol " style="border-left:0rem; " (click)="statistics() ">\n                <div class="home_text_center ">\n                    <div class="home_radius ">\n                        <img class="home_img " src="assets/imgs/home/9.png " />\n                    </div>\n                    <a>统计分析</a>\n                </div>\n            </div>\n            <div tappable class="homecol " style="border-left:0rem;border-right:0rem" (click)="personal() ">\n                <div *ngIf="redMark" style="width: 10px; height: 10px; background-color: red; border-radius: 50%;top:21%;right:32%;position:absolute;"></div>\n                <div class="home_text_center ">\n                    <div class="home_radius ">\n                        <img class="home_img " src="assets/imgs/home/10.png " />\n                    </div>\n                    <a>个人中心</a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf="roleType ==\'50\'" style=" position:absolute; width:100%; top:17rem; bottom:0; ">\n        <div class="row " style="height:50%; border-top: 0px;">\n            <div tappable class="homecol " style="border-left:0rem; " (click)="patrol() ">\n                <div class="home_text_center ">\n                    <div class="home_radius ">\n                        <img class="home_img " src="assets/imgs/home/5.png " />\n                    </div>\n                    <a>河道巡查</a>\n                </div>\n            </div>\n            <div tappable class="homecol " style="border-left:0rem;border-right:0rem " (click)="riverLog() ">\n                <div class="home_text_center ">\n                    <div class="home_radius ">\n                        <img class="home_img " src="assets/imgs/home/6.png " />\n                    </div>\n                    <a>巡查日志</a>\n                </div>\n            </div>\n        </div>\n        <div class="row " style="height:50%; ">\n            <div tappable class="homecol " style="border-left:0rem" (click)="pandect() ">\n                <div class="home_text_center ">\n                    <div class="home_radius ">\n                        <img class="home_img " src="assets/imgs/home/8.png " />\n                    </div>\n                    <a>事件管理</a>\n                </div>\n            </div>\n            <div tappable class="homecol " style="border-left:0rem;border-right:0rem" (click)="personal() ">\n                <div *ngIf="redMark" style="width: 10px; height: 10px; background-color: red; border-radius: 50%;top:21%;right:32%;position:absolute;"></div>\n                <div class="home_text_center ">\n                    <div class="home_radius ">\n                        <img class="home_img " src="assets/imgs/home/10.png " />\n                    </div>\n                    <a>个人中心</a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__service_utils__["a" /* UtilsService */], __WEBPACK_IMPORTED_MODULE_2__service_StorageService__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_11__service_service__["a" /* service */], __WEBPACK_IMPORTED_MODULE_3__toast_3_toast_3__["a" /* ToasT */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__service_utils__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__toast_3_toast_3__["a" /* ToasT */],
            __WEBPACK_IMPORTED_MODULE_11__service_service__["a" /* service */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasT; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Toast_3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ToasT = (function () {
    function ToasT(navCtrl, navParams, viewctrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewctrl = viewctrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    ToasT.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Toast_3Page');
    };
    ToasT.prototype.toast1 = function (msg) {
        document.getElementsByClassName('toast-wrap_1')[0].getElementsByClassName('toast-msg_1')[0].innerHTML = msg;
        var toastTag = document.getElementsByClassName('toast-wrap_1')[0];
        toastTag.className = toastTag.className.replace('toastAnimate_1', '');
        setTimeout(function () {
            toastTag.className = toastTag.className + ' toastAnimate_1';
        }, 0);
        document.getElementById("tpst_1").style.bottom = '2%';
        setTimeout(function () {
            document.getElementById("tpst_1").style.bottom = '-3%';
        }, 3010);
    };
    ToasT.prototype.ways1 = function () {
        this.toast1('Hi, xxxxxx');
    };
    ToasT.prototype.toast2 = function (txt) {
        var div0_toast = document.createElement("div");
        var div_toast = document.createElement("span");
        div0_toast.classList.add("bw-div");
        div0_toast.appendChild(div_toast);
        var msg = document.createTextNode(txt);
        div_toast.classList.add("bw-toast");
        div_toast.appendChild(msg);
        var element = document.getElementById("div_2");
        element.appendChild(div0_toast);
        setTimeout(function () {
            div0_toast.setAttribute('style', 'bottom: 20px;');
        }, 10);
        setTimeout(function () {
            div0_toast.setAttribute('style', 'bottom: -30px;');
            div0_toast.parentNode.removeChild(div0_toast);
        }, 3000);
    };
    ToasT.prototype.ways2 = function () {
        this.toast2('Hi,ssssss');
    };
    ToasT.prototype.showToast3 = function (toastCtrl, message) {
        var toast = toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
        return toast;
    };
    ToasT.prototype.ways3 = function () {
        this.showToast3(this.toastCtrl, "请登录后发布提问");
    };
    ToasT.prototype.ways0 = function () {
    };
    ToasT = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ToasT);
    return ToasT;
}());

//# sourceMappingURL=toast-3.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventSolvePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_StorageService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_3_toast_3__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Camera, CameraOptions } from '@ionic-native/camera';


// import { Toast } from '@ionic-native/toast';
//import { File } from '@ionic-native/file';
//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

var EventSolvePage = (function () {
    function EventSolvePage(navCtrl, navParams, service, 
        // private camera: Camera,
        cd, StorageService, toast, 
        //private transfer: FileTransfer,
        //private file: File,
        actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.cd = cd;
        this.StorageService = StorageService;
        this.toast = toast;
        this.actionSheetCtrl = actionSheetCtrl;
        this.csrc = "";
        this.rPD_csrc_arr = [];
        this.eventContent = "";
        this.eventList = []; //所有事件
        this.nextuserList = [];
        this.show = false;
        this.btn_do_newEventByImg_disabled = false;
        this.btn_do_newEventByImg = "处理";
        this.eventId = this.navParams.get('eventId');
        this.user = this.StorageService.read('user');
        this.userId = this.user['userId'];
        this.token = this.user['token'];
        this.solve = this.navParams.get('solve');
        this.roleType = this.user['roleType'];
    }
    //fileTransfer: FileTransferObject = this.transfer.create();
    EventSolvePage.prototype.ngOnInit = function () {
        var _this = this;
        var p = "userId=" + this.userId
            + "&token=" + this.token
            + "&eventId=" + this.eventId;
        var url = 'http://' + this.service.serviceUrl + '/eventController/queryWorkflowLog.do';
        this.service.service(url, p).subscribe(function (data) {
            if (data['result'] == -1) {
                _this.toast.toast2("其他用户登录了您的账号。");
                _this.navCtrl.popToRoot();
            }
            else if (data['result'] == 1) {
                _this.eventList = data['eventList'];
                _this.workFlow = data['workflowLog'];
                _this.long = _this.workFlow.length - 2;
                _this.queryUserdo(_this.solve);
                console.log("eventSolve:", _this.eventList);
                console.log("success!");
                console.log("eventSolveworkFlow:", _this.workFlow);
            }
        }, function (err) {
            console.error(err);
        });
    };
    //获取下一级处理人
    EventSolvePage.prototype.queryUserdo = function (t) {
        var _this = this;
        var p = 'userId=' + this.userId
            + '&token=' + this.token
            + '&riverId=' + this.eventList[0]['riverId']
            + '&regionId=' + this.eventList[0]['regionId']
            + '&organizationId=' + this.user['organizationId']
            + '&solve=' + t;
        var url = 'http://' + this.service.serviceUrl + '/userController/queryUser.do';
        this.service.service(url, p).subscribe(function (data) {
            if (data['result'] == 0) {
                _this.toast.toast2("其他用户登录了您的账号。");
                _this.navCtrl.popToRoot();
            }
            else {
                console.log('查询下一级处理人', data);
                _this.nextuserList = data['userList'];
                console.log("this.nextuserList", _this.nextuserList);
                // if (data['userList'] != null) {
                // 	this.nextuser = this.nextuserList[0]['realName'];
                // 	this.nextuserId = this.nextuserList[0]['userId'];
                // }
            }
        }, function (err) {
            alert('数据异常，请联系运维人员处理！');
            console.error(err);
        });
    };
    EventSolvePage.prototype.eventsolve = function (solve) {
        this.btn_do_newEventByImg = "处理中";
        this.btn_do_newEventByImg_disabled = true;
        if (solve != 60 && solve != 41 && solve != 62) {
            if (this.nextuserId == "") {
                alert('请选择下级处理人');
                this.show = false;
            }
            else if (this.eventContent == "") {
                alert('请填写处理内容！');
                this.show = false;
            }
            else {
                var p = "userId=" + this.userId
                    + "&token=" + this.token
                    + "&solve=" + solve
                    + "&eventId=" + this.eventId
                    + "&content=" + this.eventContent
                    + "&nextUserId=" + this.nextuserId;
                this.solveDo(p);
            }
        }
        else {
            if (this.eventContent == "") {
                alert('请填写处理内容！');
                this.show = false;
            }
            else {
                if (solve == 41) {
                    var p = "userId=" + this.userId
                        + "&token=" + this.token
                        + "&solve=" + solve
                        + "&eventId=" + this.eventId
                        + "&content=" + this.eventContent
                        + "&nextUserId=" + this.workFlow[this.long]['userId'];
                    this.solveDo(p);
                }
                else {
                    var p = "userId=" + this.userId
                        + "&token=" + this.token
                        + "&solve=" + solve
                        + "&eventId=" + this.eventId
                        + "&content=" + this.eventContent;
                    this.solveDo(p);
                }
            }
        }
    };
    EventSolvePage.prototype.solveDo = function (p) {
        var _this = this;
        var url = 'http://' + this.service.serviceUrl + '/eventController/solveEventByImg.do';
        this.service.service(url, p).subscribe(function (data) {
            if (data['result'] == -1) {
                _this.toast.toast2("其他用户登录了您的账号。");
                _this.navCtrl.popToRoot();
            }
            else if (data['result'] == 1) {
                console.log(data);
                _this.workflowLogId = data['workflowLogId'];
                // console.log("eventId", this.eventId);
                // console.log("图片路径", this.localFile);
                // let options: FileUploadOptions = {
                // 	// fileKey: 'file',
                // 	// fileName: 'name.jpg',
                // 	params: {
                // 		userId: this.user["userId"],
                // 		token: this.user["token"],
                // 		workflowLogId: this.workflowLogId,
                // 		eventStatus: 0,
                // 	}
                // }
                // if (this.rPD_csrc_arr.length != 0) {
                // 	for (let i = 0; i < this.rPD_csrc_arr.length; i++) {
                // 		this.fileTransfer.upload(this.rPD_csrc_arr[i], 'http://' + this.service.serviceUrl + '/eventController/updateEventByFTPImg.do', options)
                // 			.then((data) => {
                // 				console.log("上传返回结果", data['response']);
                // 				if (data['response'] == '-1') {
                // 					this.toast.showShortBottom("其他用户登录了您的账号。").subscribe();
                // 					this.navCtrl.popToRoot();
                // 				}
                // 				if (i == this.rPD_csrc_arr.length - 1) { //最后一个上传完成
                // 					this.toast.showShortBottom("处理成功").subscribe();
                // 					this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 4));
                // 				}
                // 				console.log(data);
                // 			}, (err) => {
                // 				console.error('照片上传err', err);
                // 			});
                // 	}
                // } else {
                // 	this.toast.showShortBottom("处理成功").subscribe();
                // 	this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 4));
                // }
                //自己实现
                // console.log("eventId", this.eventId);
                // let fd = new FormData();
                // let params = {
                //	fileKey: 'file',
                //	fileName: 'name.jpg',
                // 	data: fd,
                // 	userId: this.user["userId"],
                //  	token: this.user["token"],
                //  	eventId: this.eventId,
                //  	eventStatus: 1
                // }
                // for (let i = 0; i < this.rPD_csrc_arr.length; i++) {	
                // 	fd.append("upfile", this.rPD_csrc_arr[i]);
                // 	this.service.service('http://' + this.service.serviceUrl + '/eventController/updateEventByFTPImg.do', params).subscribe(
                // 		data => {
                // 			console.log("上传返回结果", data['response']);
                // 			if (data['response'] == '-1') {
                // 				this.toast.showShortBottom("其他用户登录了您的账号。").subscribe();
                // 				this.navCtrl.popToRoot();
                // 			}
                // 			if (i == this.rPD_csrc_arr.length - 1) { //最后一个上传完成
                // 				this.toast.showShortBottom("重报成功").subscribe();
                // 				this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
                // 			}
                // 			console.log(data);
                // 		},
                // 		err => {
                // 			console.error('照片上传err', err);
                // 		}
                // 	)
                // }
            }
        }, function (err) {
            console.error(err);
            //alert(err);
            alert("处理失败");
        });
    };
    EventSolvePage.prototype.getphoto = function (p) {
        // const options: CameraOptions = {
        // 	quality: 100,
        // 	destinationType: this.camera.DestinationType.NATIVE_URI,
        // 	encodingType: this.camera.EncodingType.JPEG,
        // 	mediaType: this.camera.MediaType.PICTURE,
        // 	saveToPhotoAlbum: true,
        // 	sourceType: p,
        // 	correctOrientation: true //Corrects Android orientation quirks
        // }
        // this.camera.getPicture(options).then((imageData) => {
        // 	let base64Image = imageData;
        // 	this.rPD_csrc_arr.push(base64Image);
        // 	// this.localFile = imageData;
        // }, (err) => {
        // 	console.log("err", err);
        // });
    };
    //拍照、选择图片、小视频
    EventSolvePage.prototype.presentActionSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: '选择图片源',
            buttons: [
                {
                    text: '拍照',
                    role: 'destructive',
                    handler: function () {
                        // this.getphoto(this.camera.PictureSourceType.CAMERA);
                    }
                }, {
                    text: '从相册选择',
                    handler: function () {
                        // this.getphoto(this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EventSolvePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventSolve',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\pandect\eventSolve.html"*/'<ion-header>\n\n	<ion-navbar hideBackButton="true" color="primary">\n\n		<!-- 去掉原来的返回按键并重新设定新的返回 -->\n\n		<ion-buttons left>\n\n			<button ion-button icon-only (click)=" this.navCtrl.pop();">\n\n				<ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n		<ion-title>\n\n			事件处理\n\n		</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n		<div id="div_2"></div>\n\n	<div>\n\n		<ion-item *ngIf="solve!=60&&solve!=61&&solve!=41&&solve!=62">\n\n			<ion-label style="color:black;font-size:1.6rem">请选择下级处理人：</ion-label>\n\n			<ion-select style="text-align:left;" [(ngModel)]="nextuserId" cancelText="取消" okText="确认">\n\n				<ion-option *ngFor="let x of nextuserList" [value]="x.userId">{{x.realName}}</ion-option>\n\n			</ion-select>\n\n		</ion-item>\n\n		<ion-item>\n\n			<p *ngIf="solve==62" style="font-size:1.6rem;color:black">处理后图片：</p>\n\n			<button ion-button clear (click)="presentActionSheet()">\n\n				<div>\n\n					<img src="./assets/imgs/camera.jpg">\n\n				</div>\n\n			</button>\n\n			<p *ngIf="rPD_csrc_arr==null" style="font-size:1.6rem;color:black">是否上传图片</p>\n\n			<ion-list style="text-align:center" *ngIf="rPD_csrc_arr!=null">\n\n				<ion-item text-wrap *ngFor="let x of rPD_csrc_arr;let count=index;">\n\n					<ion-thumbnail item-start>\n\n						<img [src]="x">\n\n					</ion-thumbnail>\n\n				</ion-item>\n\n			</ion-list>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-input type="text" [(ngModel)]="eventContent" placeholder="请填写处理内容："></ion-input>\n\n		</ion-item>\n\n	</div>\n\n\n\n	<ion-item style="text-align:center">\n\n		<button style="font-size:3rem;height:7rem;background-color: #488aff;color: #fff;width:10rem" [disabled]="show" (click)="eventsolve(solve);">提交</button>\n\n	</ion-item>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\pandect\eventSolve.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */], __WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_4__toast_3_toast_3__["a" /* ToasT */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__toast_3_toast_3__["a" /* ToasT */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], EventSolvePage);
    return EventSolvePage;
}());

//# sourceMappingURL=eventSolve.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_StorageService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_3_toast_3__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Camera, CameraOptions } from '@ionic-native/camera';
//import { NativeStorage } from '@ionic-native/native-storage';
//import { BackgroundMode } from '@ionic-native/background-mode';
// import { Toast } from '@ionic-native/toast';
// import { Geolocation } from '@ionic-native/geolocation';

var NewEventPage = (function () {
    function NewEventPage(navCtrl, alertCtrl, service, StorageService, 
        // private camera: Camera,
        //private nativeStorage: NativeStorage,
        //private backgroundMode: BackgroundMode,
        toast) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.StorageService = StorageService;
        this.toast = toast;
        //事件上传
        this.rPD_csrc = "";
        this.rPD_csrc_arr = [];
        this.rPD_imgCreatTime = [];
        this.eventLevel = 1;
        this.problemType_chkParent = { code: '0' }; //选中的父级问题类型
        this.problemType = [];
        this.eventContent = ""; //事件内容
        this.btn_do_newEventByImg_disabled = false;
        this.btn_do_newEventByImg = "上传";
        this.remark = "";
        //视图变化
        this.rPD_is_reporting = false;
        //按钮变化
        this.rPD_is_btnStartRivering = true;
        //获取事件类型
        this.rPD_do_queryProblemType_count = 0;
        this.userInfo = this.StorageService.read('user');
        //this.backgroundMode.enable();
        //this.backgroundMode.disableWebViewOptimizations();
    }
    //拍照
    NewEventPage.prototype.rPD_useCamera = function () {
        // let options: CameraOptions = {
        //     quality: 50,
        //     destinationType: this.camera.DestinationType.DATA_URL, // 返回数据类型
        //     encodingType: this.camera.EncodingType.JPEG, // 返回图片类型
        //     mediaType: this.camera.MediaType.PICTURE, // 媒体类型
        //     saveToPhotoAlbum: true,
        //     sourceType: this.camera.PictureSourceType.CAMERA // 图片源
        // }
        // this.camera.getPicture(options).then(
        //     imageData => {
        //         let base64Image = 'data:image/jpeg;base64,' + imageData;
        //         this.rPD_csrc_arr.push(base64Image);
        //         this.rPD_imgCreatTime.push(new Date());
        //     },
        //     err => {
        //         // Handle error
        //         this.toast.showShortBottom("请重新拍摄").subscribe();
        //     }
        // );
    };
    NewEventPage.prototype.rPD_do_queryProblemType = function () {
        var _this = this;
        var url = 'http://' + this.service.serviceUrl + '/dateInfoController/queryProblemType.do';
        var url_p = "userId=" + this.userInfo['userId']
            + "&token=" + this.userInfo['token'];
        this.service.service(url, url_p).subscribe(function (data) {
            var dictList = [];
            console.log(data);
            if (data['result'] == -1) {
                _this.toast.toast2("其他用户登录了您的账号。");
                _this.navCtrl.popToRoot();
            }
            else {
                dictList = data['dictList'];
                _this.problemTypeALL = dictList;
            }
        }, function (err) {
            console.error("获取事件ERR", err);
            _this.rPD_do_queryProblemType_count++;
            if (_this.rPD_do_queryProblemType_count > 10) {
                _this.toast.toast2("其他用户登录了您的账号。");
                _this.navCtrl.popToRoot();
            }
            else {
                _this.rPD_do_queryProblemType();
            }
        });
    };
    //事件上报
    NewEventPage.prototype.rPD_do_newEventByImg = function () {
        var _this = this;
        if (this.rPD_csrc == null || this.rPD_csrc == "") {
            alert("请拍摄问题照片！");
        }
        else if (this.problemType.length == 0) {
            alert("请选择问题类型");
        }
        else if (this.eventContent == null) {
            alert("请输入事件内容");
        }
        else {
            var url_p = "userId=" + this.userInfo['userId']
                + "&token=" + this.userInfo['token']
                + "&problemType=" + this.problemType
                + "&eventLevel=" + this.eventLevel
                + "&reportType=" + "5"
                + "&regionId=" + this.userInfo['regionId']
                + "&riverId=" + "35010100000000"
                + "&base64Image=" + this.rPD_csrc
                + "&eventContent=" + this.eventContent
                + "&recordPoint=" + ''
                + "&remark=" + this.remark
                + "&sanType=" + this.userInfo["roleId"];
            var url = 'http://' + this.service.serviceUrl + '/eventController/newEventByImg.do';
            this.btn_do_newEventByImg = "上传中";
            this.btn_do_newEventByImg_disabled = true;
            this.service.service(url, url_p).subscribe(function (data) {
                //let d = data;
                console.log("事件上报：", data);
                //alert(data);
                _this.toast.toast2("上传成功");
                _this.btn_do_newEventByImg = "上传";
                _this.btn_do_newEventByImg_disabled = false;
                _this.navCtrl.pop();
            }, function (err) {
                console.error(err);
                _this.btn_do_newEventByImg = "上传";
                _this.btn_do_newEventByImg_disabled = false;
            });
        }
    };
    NewEventPage.prototype.problemPush = function (p) {
        for (var i = 0; i < this.problemType.length; i++) {
            if (p == this.problemType[i]) {
                this.problemType.splice(i, 1);
                return;
            }
        }
        this.problemType.push(p);
    };
    NewEventPage.prototype.problemColor = function (p) {
        for (var i = 0; i < this.problemType.length; i++) {
            if (p == this.problemType[i])
                return 'primary';
        }
        return 'white';
    };
    NewEventPage.prototype.ngAfterViewInit = function () {
        this.rPD_do_queryProblemType();
    };
    NewEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newEvent',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\pandect\newEvent.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true" color="primary">\n\n        <!-- 去掉原来的返回按键并重新设定新的返回 -->\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)=" this.navCtrl.pop();">\n\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title style="font-size:2rem">\n\n            新建事件\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n        <div id="div_2"></div>\n\n    <!-- 事件上报 -->\n\n    <div class="position_a width_100 height_100 padding_10p z_index_100" style="background-color:#fff;">\n\n        <ion-list>\n\n            <ion-item>\n\n                <button ion-button clear (click)="rPD_useCamera()">\n\n                    <div>\n\n                        <img src="./assets/imgs/camera.jpg">\n\n                    </div>\n\n                </button>\n\n            </ion-item>\n\n        </ion-list>\n\n        <ion-list *ngIf="rPD_csrc_arr!=null">\n\n            <ion-item text-wrap *ngFor="let x of rPD_csrc_arr;let count=index;">\n\n                <ion-thumbnail item-start>\n\n                    <img [src]="x">\n\n                </ion-thumbnail>\n\n                <p>拍照时间：{{ rPD_imgCreatTime[count] | date: "yyyy-MM-dd HH:mm:ss"}}</p>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-input type="text" [(ngModel)]="eventContent" placeholder="请输入事件内容..."></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-list>\n\n            <h3>选择事件等级</h3>\n\n            <button ion-button tappable [color]="(eventLevel==1)?\'primary\':\'white\'" (click)="eventLevel=1">一般</button>\n\n            <button ion-button tappable [color]="(eventLevel==2)?\'primary\':\'white\'" (click)="eventLevel=2">紧急</button>\n\n            <button ion-button tappable [color]="(eventLevel==3)?\'primary\':\'white\'" (click)="eventLevel=3">加急</button>\n\n            <button ion-button tappable [color]="(eventLevel==4)?\'primary\':\'white\'" (click)="eventLevel=4">特级</button>\n\n        </ion-list>\n\n\n\n        <ion-list>\n\n            <h3>选择事件类型</h3>\n\n            <button *ngFor="let x of problemTypeALL" ion-button tappable [color]="(problemType_chkParent.code==x.code)?\'primary\':\'white\'"\n\n                (click)="problemType_chkParent=x;problemType=[];">{{x.name}}</button>\n\n        </ion-list>\n\n\n\n        <ion-list *ngIf="problemType_chkParent!=null">\n\n            <h3>选择事件内容</h3>\n\n            <button *ngFor="let x of problemType_chkParent.dictList" ion-button tappable [color]="problemColor(x.code)" (click)="problemPush(x.code);">{{x.name}}</button>\n\n        </ion-list>\n\n\n\n        <ion-list *ngIf="problemType==0901||problemType==0902||problemType==0903">\n\n            <ion-item>\n\n                <ion-input type="text" [(ngModel)]="remark" placeholder="请输入其他事件内容..."></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-list>\n\n            <button ion-button color="primary" full [disabled]="btn_do_newEventByImg_disabled" (click)="rPD_do_newEventByImg()">{{btn_do_newEventByImg}}</button>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\pandect\newEvent.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */], __WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_4__toast_3_toast_3__["a" /* ToasT */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */],
            __WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__toast_3_toast_3__["a" /* ToasT */]])
    ], NewEventPage);
    return NewEventPage;
}());

//# sourceMappingURL=newEvent.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_3_toast_3__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_StorageService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_ol_map__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__waterMonitor__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__play_movie__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__billboard__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Toast } from '@ionic-native/toast';




// import { Geolocation } from '@ionic-native/geolocation';





// declare var cordova: any;
var MessagePage = (function () {
    function MessagePage(navCtrl, StorageService, service, toast) {
        this.navCtrl = navCtrl;
        this.StorageService = StorageService;
        this.service = service;
        this.toast = toast;
        this.isOne = true;
        this.ms_map = new __WEBPACK_IMPORTED_MODULE_4__service_ol_map__["a" /* OlMapService */]('ms_map');
        this.userInfo = this.StorageService.read('user');
        this.keyword = ""; //用于模糊搜索
        this.btn_on = [false, false, false, false, false, false, false, false];
        this.isHiddens = true;
        this.lastFlag = [];
        this.flag = true;
        this.user = this.StorageService.read("user");
        this.userId = this.user['userId'];
        this.token = this.user['token'];
    }
    //跳转
    MessagePage.prototype.waterMonitor = function (p1, p2) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__waterMonitor__["a" /* WaterMonitorPage */], {
            id: p1,
            code: p2
        });
    };
    //跳转视频
    MessagePage.prototype.vedio = function (p1) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__play_movie__["a" /* Play_moviePage */], {
            id: p1,
        });
    };
    //跳转视频
    MessagePage.prototype.billboard = function (p1) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__billboard__["a" /* BillboardPage */], {
            id: p1,
        });
    };
    //地标显示
    MessagePage.prototype.ms_setLandmark = function (p) {
        //$('div.ol-viewport.ol-touch').remove();
        // this.ms_map = new OlMapService('ms_map');
        // this.ms_map.startMap();
        // this.ms_map.setView([118.682316, 24.880242],8);
        var flag = [];
        switch (p) {
            case '11':
                flag = [111, 112, 113, 114, 115, 116];
                this.btn_on[0] = true;
                for (var i = 0; i < this.btn_on.length; i++) {
                    if (i != 0) {
                        this.btn_on[i] = false;
                    }
                }
                // this.btn_on[0] = true;
                // this.btn_on[1] = false;
                // this.btn_on[2] = false;
                if (this.btn_on[0] == true) {
                    //图标删除
                    for (var i = 0; i < this.lastFlag.length; i++) {
                        __WEBPACK_IMPORTED_MODULE_10_jquery___default()('.landmark' + this.lastFlag[i]).parent('.ol-overlay-container').remove();
                    }
                    this.ms_setLandmark2(flag, 1);
                    this.lastFlag = flag;
                }
                this.isHiddens = true;
                break;
            case '21':
                flag = [21];
                for (var i = 0; i < this.btn_on.length; i++) {
                    if (i != 3) {
                        this.btn_on[i] = false;
                    }
                }
                this.btn_on[2] = true;
                // this.btn_on[1] = false;
                // this.btn_on[0] = false;
                // this.toast.showShortBottom('暂无数据').subscribe();
                if (this.btn_on[2] == true) {
                    //图标删除
                    for (var i = 0; i < this.lastFlag.length; i++) {
                        __WEBPACK_IMPORTED_MODULE_10_jquery___default()('.landmark' + this.lastFlag[i]).parent('.ol-overlay-container').remove();
                    }
                    this.ms_setLandmark2(flag, 3);
                    this.lastFlag = flag;
                }
                break;
            case '23':
                flag = [231, 232];
                this.btn_on[3] = true;
                for (var i = 0; i < this.btn_on.length; i++) {
                    if (i != 3) {
                        this.btn_on[i] = false;
                    }
                }
                // this.btn_on[2] = true;
                // this.btn_on[1] = false;
                // this.btn_on[0] = false;
                // this.toast.showShortBottom('暂无数据').subscribe();
                if (this.btn_on[3] == true) {
                    //图标删除
                    for (var i = 0; i < this.lastFlag.length; i++) {
                        __WEBPACK_IMPORTED_MODULE_10_jquery___default()('.landmark' + this.lastFlag[i]).parent('.ol-overlay-container').remove();
                    }
                    this.ms_setLandmark2(flag, 4);
                    this.lastFlag = flag;
                }
                this.isHiddens = true;
                break;
            case '24':
                flag = [241, 242, 243];
                this.btn_on[4] = true;
                for (var i = 0; i < this.btn_on.length; i++) {
                    if (i != 4) {
                        this.btn_on[i] = false;
                    }
                }
                // this.btn_on[2] = true;
                // this.btn_on[1] = false;
                // this.btn_on[0] = false;
                // this.toast.showShortBottom('暂无数据').subscribe();
                if (this.btn_on[4] == true) {
                    //图标删除
                    for (var i = 0; i < this.lastFlag.length; i++) {
                        __WEBPACK_IMPORTED_MODULE_10_jquery___default()('.landmark' + this.lastFlag[i]).parent('.ol-overlay-container').remove();
                    }
                    this.ms_setLandmark2(flag, 5);
                    this.lastFlag = flag;
                }
                this.isHiddens = true;
                break;
            case '25':
                flag = [251, 252, 253, 254];
                this.btn_on[5] = true;
                for (var i = 0; i < this.btn_on.length; i++) {
                    if (i != 5) {
                        this.btn_on[i] = false;
                    }
                }
                // this.btn_on[2] = true;
                // this.btn_on[1] = false;
                // this.btn_on[0] = false;
                // this.toast.showShortBottom('暂无数据').subscribe();
                if (this.btn_on[5] == true) {
                    //图标删除
                    for (var i = 0; i < this.lastFlag.length; i++) {
                        __WEBPACK_IMPORTED_MODULE_10_jquery___default()('.landmark' + this.lastFlag[i]).parent('.ol-overlay-container').remove();
                    }
                    this.ms_setLandmark2(flag, 6);
                    this.lastFlag = flag;
                }
                this.isHiddens = true;
                break;
            case '26':
                flag = [261, 262, 263];
                this.btn_on[6] = true;
                for (var i = 0; i < this.btn_on.length; i++) {
                    if (i != 6) {
                        this.btn_on[i] = false;
                    }
                }
                // this.btn_on[2] = true;
                // this.btn_on[1] = false;
                // this.btn_on[0] = false;
                // this.toast.showShortBottom('暂无数据').subscribe();
                if (this.btn_on[6] == true) {
                    //图标删除
                    for (var i = 0; i < this.lastFlag.length; i++) {
                        __WEBPACK_IMPORTED_MODULE_10_jquery___default()('.landmark' + this.lastFlag[i]).parent('.ol-overlay-container').remove();
                    }
                    this.ms_setLandmark2(flag, 7);
                    this.lastFlag = flag;
                }
                this.isHiddens = true;
                break;
            case '27':
                flag = [27];
                this.btn_on[7] = true;
                for (var i = 0; i < this.btn_on.length; i++) {
                    if (i != 7) {
                        this.btn_on[i] = false;
                    }
                }
                this.isHiddens = true;
                // this.btn_on[2] = true;
                // this.btn_on[1] = false;
                // this.btn_on[0] = false;
                // this.toast.showShortBottom('暂无数据').subscribe();
                if (this.btn_on[7] == true) {
                    //图标删除
                    for (var i = 0; i < this.lastFlag.length; i++) {
                        __WEBPACK_IMPORTED_MODULE_10_jquery___default()('.landmark' + this.lastFlag[i]).parent('.ol-overlay-container').remove();
                    }
                    this.isHiddens = true;
                    this.ms_setLandmark2(flag, 8);
                    this.lastFlag = flag;
                }
                break;
            case '28':
                flag = [28];
                this.btn_on[1] = true;
                for (var i = 0; i < this.btn_on.length; i++) {
                    if (i != 1) {
                        this.btn_on[i] = false;
                    }
                }
                // this.btn_on[1] = true;
                // this.btn_on[2] = false;
                // this.btn_on[0] = false;
                // this.toast.showShortBottom('暂无数据').subscribe();
                if (this.btn_on[1] == true) {
                    //图标删除
                    for (var i = 0; i < this.lastFlag.length; i++) {
                        __WEBPACK_IMPORTED_MODULE_10_jquery___default()('.landmark' + this.lastFlag[i]).parent('.ol-overlay-container').remove();
                    }
                    this.isHiddens = true;
                    this.ms_setLandmark2(flag, 2);
                    this.lastFlag = flag;
                }
                break;
        }
    };
    MessagePage.prototype.ms_setLandmark2 = function (flag, a) {
        var _this = this;
        var _loop_1 = function (i) {
            var url_p = "userId=" + this_1.userInfo['userId'] +
                "&token=" + this_1.userInfo['token'] +
                "&code=" + flag[i] +
                "&type=" + "0" +
                "&keyword=" + this_1.keyword +
                "&value=" + "[" + this_1.userInfo['regionId'] + "]";
            // "&value=" +  this.userInfo['regionId'];
            var url = 'http://' + this_1.service.serviceUrl + '/basicInformationController/getBasicInformation.do';
            this_1.service.service(url, url_p).subscribe(function (data) {
                _this.show = data;
                console.log("this.show", _this.show);
                if (data['result'] == -1) {
                    alert("该账号已被顶号,请重新登录！");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
                }
                else if (a == 3 && data['message'] == "查无数据") {
                    _this.toast.toast2("\u67E5\u65E0\u6570\u636E\uFF01");
                }
                else {
                    //console.log(data);
                    _this.ms_map.set_landmarks(data['items'], data['code']); //'landmark'+landmark_id
                    if (a == 1) {
                        __WEBPACK_IMPORTED_MODULE_10_jquery___default()('.landmark' + flag[i]).click(function (e) {
                            //地标点击事件
                            _this.waterMonitor(__WEBPACK_IMPORTED_MODULE_10_jquery___default()(e.target.outerHTML).attr('data-id'), __WEBPACK_IMPORTED_MODULE_10_jquery___default()(e.target.outerHTML).attr('data-code'));
                            console.log(__WEBPACK_IMPORTED_MODULE_10_jquery___default()(e.target.outerHTML).attr('data-id'), __WEBPACK_IMPORTED_MODULE_10_jquery___default()(e.target.outerHTML).attr('data-code'));
                        });
                    }
                    else if (a == 2) {
                        // this.name = data;
                        // console.log("this.name", this.name);
                        __WEBPACK_IMPORTED_MODULE_10_jquery___default()('.landmark' + flag[i]).click(function (e) {
                            //地标点击事件
                            _this.videoSurveillanceId = __WEBPACK_IMPORTED_MODULE_10_jquery___default()(e.target.outerHTML).attr('data-id');
                            console.log(_this.videoSurveillanceId);
                            var p = "userId=" + _this.userInfo['userId'] +
                                "&token=" + _this.userInfo['token'] +
                                "&videoSurveillanceId=" + _this.videoSurveillanceId;
                            // "&value=" +  this.userInfo['regionId'];
                            var url1 = 'http://' + _this.service.serviceUrl + '/ShowVideo/ShowVideo.do';
                            _this.service.service(url1, p).subscribe(function (data) {
                                console.log(data);
                                _this.toast.toast2("\u76D1\u63A7\u8F7D\u5165\u4E2D\uFF0C\u8BF7\u7B49\u5F85\uFF01");
                                // cordova.plugins.VLCPlugin.play(data['VideoSurveillance']['ip_address'],
                                // 	result => {
                                // 		console.log("result:", result);
                                // 	},
                                // 	error => console.log("error:", error)
                                // );
                            }, function (err) {
                                console.error(err);
                            });
                        });
                    }
                    else if (a == 3) {
                        // this.name = data;
                        // console.log("this.name", this.name);
                        __WEBPACK_IMPORTED_MODULE_10_jquery___default()('.landmark' + flag[i]).click(function (e) {
                            //地标点击事件
                            _this.billboard(__WEBPACK_IMPORTED_MODULE_10_jquery___default()(e.target.outerHTML).attr('data-id'));
                            console.log(__WEBPACK_IMPORTED_MODULE_10_jquery___default()(e.target.outerHTML).attr('data-id'));
                        });
                    }
                }
            }, function (err) {
                console.error("地标数据ERR:", err);
            });
        };
        var this_1 = this;
        for (var i = 0; i < flag.length; i++) {
            _loop_1(i);
        }
    };
    MessagePage.prototype.begin_navigation = function () {
        // this.geolocation.getCurrentPosition().then((resp) => {
        // 	//百度地址显示测试
        // 	console.log("经纬度", resp.coords.latitude);
        // 	console.log("经纬度", resp.coords.longitude);
        // 	// cordova.plugins.addressPlugin.address("ZOwmP0SKHgCTVLGd2M4qIVK8iHICZbKU", 25.934548, 119.679445,
        // 	//     result => { console.log("result:", result); },
        // 	//     error => console.log("error:", error)
        // 	// );
        // 	cordova.plugins.navigationPlugin.isInstallBaiduMap(1,
        // 		result => {
        // 			if (result == "true") {
        // 				cordova.plugins.navigationPlugin.baiDuMap(resp.coords.latitude, resp.coords.longitude, this.y, this.x, "driving",
        // 					result => { console.log("re:", result); },
        // 					error => console.log("err:", error)
        // 				);
        // 			}
        // 			else {
        // 				this.toast.showLongBottom("请下载百度地图！").subscribe();
        // 			}
        // 			console.log("result:", result);
        // 		},
        // 		error => console.log("error:", error)
        // 	);
        // }).catch((error) => {
        // 	console.log('Error getting location', error);
        // })
    };
    MessagePage.prototype.begin_navigation1 = function () {
        // this.geolocation.getCurrentPosition().then((resp) => {
        // 	cordova.plugins.navigationPlugin.isInstallGaodeMap(1,
        // 		result => {
        // 			if (result == "true") {
        // 				cordova.plugins.navigationPlugin.gaoDeMap(resp.coords.latitude, resp.coords.longitude, this.y, this.x, "0",
        // 					result => { console.log("re:", result); },
        // 					error => console.log("err:", error)
        // 				);
        // 			}
        // 			else {
        // 				this.toast.showLongBottom("请下载高德地图！").subscribe();
        // 			}
        // 		},
        // 		error => console.log("error:", error));
        // }).catch((error) => {
        // 	console.log('Error getting location', error);
        // })
    };
    MessagePage.prototype.ionViewDidEnter = function () {
        if (this.isOne) {
            this.ms_map.startMap();
            this.ms_map.setView([118.179151, 26.645581], 8);
            this.isOne = false;
        }
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\message\message.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true" color="primary">\n\n        <!-- 去掉原来的返回按键并重新设定新的返回 -->\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)=" this.navCtrl.pop();">\n\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            河湖信息\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n        <div id="div_2"></div>\n\n    <!-- 河道监测 -->\n\n    <div class="position_a width_100 height_100">\n\n        <div class="position_a width_100 height_100 z_index_1" id="ms_map"></div>\n\n        <!-- <div style="position:absolute;left:50%;margin-left:-60px;z-index:110;bottom:10%;height:40px;width:80px;color:#fff;background-color:#169BD5;text-align:center;">\n\n            <div style="float:left;width:40px;height:40px;line-height:40px;border-right:1px solid #fff;" (click)="ms_setLandmark(\'11\')">水质</div>\n\n            <div style="float:left;width:40px;height:40px;line-height:40px;" (click)="ms_setLandmark(\'28\')">监控</div> -->\n\n        <!-- <div style="float:left;width:40px;height:40px;line-height:40px;border-left:1px solid #fff;" (click)="ms_setLandmark(24)">排污</div> -->\n\n        <!-- </div> -->\n\n        <div class="position_a width_100 z_index_10" style="height:40px;background-color:white;font-size:1.6rem">\n\n            <ion-select [(ngModel)]="select" [interface]="\'popover\'" cancelText="取消" okText="确定" placeholder="请选择项目" (ngModelChange)="ms_setLandmark(select)">\n\n                <ion-option value="11">水质</ion-option>\n\n                <ion-option value="21">公示牌</ion-option>\n\n                <ion-option value="28">监控</ion-option>\n\n                <!-- <ion-option value="23">取水口</ion-option>\n\n                <ion-option value="24">排污口</ion-option>\n\n                <ion-option value="25">污染源</ion-option>\n\n                <ion-option value="26">水利工程</ion-option>\n\n                <ion-option value="27">易涝点</ion-option> -->\n\n            </ion-select>\n\n        </div>\n\n        <div *ngIf="select==21" class="position_a width_100 z_index_10" style="top:40px;height:40px;background-color:white;border-top:0.1rem black solid">\n\n            <ion-input class="position_a width_70 left_0 padding_left_10p" type="text" [(ngModel)]="keyword" placeholder="请输入要查询的河流名称..."></ion-input>\n\n            <button class="position_a width_30 left_70 z_index_50" ion-button (click)="ms_setLandmark(select)">确定</button>\n\n        </div>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\message\message.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_5__service_service__["a" /* service */], __WEBPACK_IMPORTED_MODULE_2__toast_3_toast_3__["a" /* ToasT */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_5__service_service__["a" /* service */],
            __WEBPACK_IMPORTED_MODULE_2__toast_3_toast_3__["a" /* ToasT */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OlMapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_openlayers__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OlMapService = (function () {
    function OlMapService(p_map_id) {
        this.map_id = "map"; //地图显示的id
        this.select = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["interaction"].Select(); //选取
        this.dragBox = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["interaction"].DragBox(); //框选
        this.setLineLayer = null; //路径规划层
        this.drawLineLayer = null; //画线层
        this.routeLayer = null; //轨迹回放层
        this.landmarks = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["layer"].Vector({
            source: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].Vector(),
            zIndex: 1005
        });
        this.beginRiverLayer = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["layer"].Vector({
            source: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].Vector(),
            style: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Style({
                image: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Icon({
                    src: 'assets/imgs/ding.png',
                    anchor: [0.5, 0.9]
                })
            }),
            zIndex: 1003
        });
        this.heatMapLayer = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["layer"].Heatmap(); //热力图层
        //轨迹回放参数
        this.animating = false;
        this.speedInput = 60;
        this.routeButton = "START";
        this.route_styles = {
            'route': new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Style({
                stroke: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Stroke({
                    width: 6, color: [30, 144, 255, 0.8]
                })
            }),
            'icon_start': new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Style({
                image: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Icon({
                    anchor: [0.5, 1],
                    //src: 'https://openlayers.org/en/v4.5.0/examples/data/icon.png'
                    src: './assets/imgs/map/start.png',
                    scale: 0.15
                })
            }),
            'icon_end': new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Style({
                image: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Icon({
                    anchor: [0.5, 1],
                    //src: 'https://openlayers.org/en/v4.5.0/examples/data/icon.png'
                    src: './assets/imgs/map/end.png',
                    scale: 0.15
                })
            }),
            'geoMarker': new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Style({
                image: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Circle({
                    radius: 7,
                    snapToPixel: false,
                    fill: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Fill({ color: 'black' }),
                    stroke: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Stroke({
                        color: 'white', width: 2
                    })
                })
            })
        };
        //视图
        this.view = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["View"]({
            center: [118.179151, 26.645581],
            projection: "EPSG:4326",
            zoom: 14
        });
        //自带控件
        this.control = __WEBPACK_IMPORTED_MODULE_2_openlayers__["control"].defaults({
            attribution: false,
            rotate: false,
            zoom: false
        }).extend([
            //new ol.control.FullScreen(), //全屏
            //new ol.control.MousePosition(), //鼠标位置
            //new ol.control.OverviewMap(), //缩略图
            new __WEBPACK_IMPORTED_MODULE_2_openlayers__["control"].ScaleLine() //比例尺
            //new ol.control.ZoomSlider() //缩放滚动条
            //new ol.control.ZoomToExtent() // 缩放到Extent范围
        ]);
        //自带交互
        this.interaction = __WEBPACK_IMPORTED_MODULE_2_openlayers__["interaction"].defaults({
            doubleClickZoom: false,
            pinchRotate: false
        });
        //河流区域图
        // private basinLayer = new ol.layer.Tile({
        //     source: new ol.source.TileWMS({
        //         projection:"EPSG:4326",
        //         url: 'http://139.196.14.35:6080/arcgis/services/fujian/FuJianLiuYu/MapServer/WMSServer',
        //         params: {
        //             'LAYERS': '0', 
        //             'TILED': true,
        //             'VERSION': '1.1.1'
        //         }
        //     }),
        //     zIndex:4
        // });
        //行政区域图
        // private areaLayer = new ol.layer.Tile({
        //     source: new ol.source.TileWMS({
        //         projection:"EPSG:4326",
        //         url: 'http://139.196.14.35:6080/arcgis/services/fujian/省市县/MapServer/WMSServer',
        //         //url: 'http://58.22.5.130:8380/geoserver/test/wms',
        //         //url: 'http://localhost:8080/geoserver/RCS/wms',
        //         params: {
        //             //'LAYERS': '1',
        //             //'LAYERS': 'fujian',
        //             'LAYERS': 'fujian_area',
        //             'TILED': true,
        //             'VERSION': '1.1.1'
        //         }
        //     })
        // });
        //河流区域图
        this.basinLayer = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["layer"].Tile({
            source: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].TileWMS({
                projection: "EPSG:4326",
                url: 'http://139.196.14.35:6080/arcgis/rest/services/fujian/LiuYuNew/MapServer/export',
                params: {
                    'dpi': 96,
                    'transparent': 'true',
                    'format': 'png8',
                    //bbox=111.07580653515627%2C22.57474142968755%2C125.13830653515627%2C29.33133322656255&
                    'bboxSR': 4326,
                    'imageSR': 4326,
                    //&size=1280%2C615&
                    'f': 'image',
                    'LAYERS': '0',
                    'TILED': true,
                    'VERSION': '1.1.1'
                }
            }),
            opacity: 0.7,
            zIndex: 4
        });
        //行政区域图
        this.areaLayer = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["layer"].Tile({
            source: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].TileWMS({
                projection: "EPSG:4326",
                url: 'http://139.196.14.35:6080/arcgis/rest/services/fujian/省市县/MapServer/export',
                //url: 'http://58.22.5.130:8380/geoserver/test/wms',
                //url: 'http://localhost:8080/geoserver/RCS/wms',
                params: {
                    'dpi': 96,
                    'transparent': true,
                    'format': 'png8',
                    //'bbox':'111.11425900000006,22.56375510156255,125.17675900000006,29.32034689843755',
                    'bboxSR': 4326,
                    'imageSR': 4326,
                    //'size':'1280,615',
                    'f': 'image',
                    'LAYERS': 'fujian_area',
                    'TILED': true,
                    'VERSION': '1.1.1'
                }
            }),
            opacity: 0.5,
            zIndex: 5
        });
        //六江两溪河流图
        this.riverLayer = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["layer"].Tile({
            source: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].TileWMS({
                projection: "EPSG:4326",
                url: 'http://139.196.14.35:6080/arcgis/services/fujian/LiuJiangLiangXi/MapServer/WMSServer',
                params: {
                    'LAYERS': '0',
                    'TILED': true,
                    'VERSION': '1.1.1'
                }
            }),
            zIndex: 6
        });
        //测试图层===============================
        this.testLayer = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["layer"].Vector({
            source: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].Vector({
                //url:"./assets/l.geojson",
                url: "./assets/fj_area.geojson",
                //url:"http://localhost:8080/geoserver/RCS/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=RCS:fujian_area&outputFormat=application%2Fjson",
                format: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["format"].GeoJSON()
            }),
            style: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Style({
                stroke: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Stroke({
                    color: 'rgba(200,200,200,0.5)'
                })
            }),
            zIndex: -1
        });
        this.bottomLayer = null;
        this.topLayer = null;
        this.map_id = p_map_id;
    }
    // 天地图
    OlMapService.prototype.tMap_layer = function (flag) {
        //  0:地图,1:影像,2:地形,3:地图标注
        var tType;
        var random;
        tType = ['vec_c', 'img_c', 'ter_c', 'cva_c'];
        random = Math.round(Math.random() * 7);
        return new __WEBPACK_IMPORTED_MODULE_2_openlayers__["layer"].Tile({
            source: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].XYZ({
                url: 'http://t' + random + '.tianditu.com/DataServer?T=' + tType[flag] + '&x={x}&y={y}&l={z}',
                projection: 'EPSG:4326'
            })
        });
    };
    //地图初始化
    OlMapService.prototype.startMap = function () {
        this.bottomLayer = this.tMap_layer(0);
        this.bottomLayer.setZIndex(0);
        this.topLayer = this.tMap_layer(3);
        this.topLayer.setZIndex(1000);
        this.map = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Map"]({
            controls: this.control,
            interactions: this.interaction,
            layers: [
                //new ol.layer.Tile({source: new ol.source.OSM()}),
                //this.tMap_layer(0),
                //this.tMap_layer(3),
                //this.basinLayer,
                this.bottomLayer,
                this.areaLayer,
                this.riverLayer,
                this.topLayer,
                //this.tMap_layer(3),
                //this.testLayer,
                this.landmarks
            ],
            target: this.map_id,
            view: this.view
        });
        //异步加载矢量图层
        // let listenerkey = this.testLayer.getSource().on("change",()=>{
        // 	if (this.testLayer.getSource().getState() === "ready") {
        // 		console.log("矢量数目：" + this.testLayer.getSource().getFeatures().length);
        //         //this.map.addLayer(this.testLayer);
        //         ol.Observable.unByKey(listenerkey);
        // 	}
        // });
        // this.selectInteraction();
        //this.map.addLayer(this.testLayer);
        // 测试写法
        // let x = document.createElement("img");
        // x.setAttribute("class","css_warn");
        // x.setAttribute("src","./assets/landmarkStyles/DomesticPollution.png");
        // let t = new ol.Overlay({
        //     element : x
        // });
        // t.setPosition([119.598972, 25.878436]);
        // this.map.addOverlay(t);
        // console.log(this.bottomLayer);
        // console.log(this.bottomLayer.getZIndex());
        // setTimeout(() => {
        //     this.map.removeLayer(this.bottomLayer);
        //     this.bottomLayer = this.tMap_layer(1);
        //     this.bottomLayer.setZIndex(0);
        //     this.map.addLayer(this.bottomLayer);
        //     console.log(this.topLayer.getZIndex());
        // }, 4000);
    };
    //地图元素获取或是删除
    OlMapService.prototype.get_map = function () {
        return this.map;
    };
    OlMapService.prototype.get_testLayer = function () {
        //this.map.addLayer(this.testLayer);//添加测试图层
        return this.testLayer;
    };
    OlMapService.prototype.remove_testLayer = function () {
        this.map.removeLayer(this.testLayer);
    };
    OlMapService.prototype.add_select = function () {
        this.map.addInteraction(this.select);
        return this.select;
    };
    OlMapService.prototype.remove_select = function () {
        this.map.removeInteraction(this.select);
    };
    OlMapService.prototype.add_dragBox = function () {
        this.map.addInteraction(this.dragBox);
        return this.dragBox;
    };
    OlMapService.prototype.remove_dragBox = function () {
        this.map.removeInteraction(this.dragBox);
    };
    OlMapService.prototype.geoMaker_add = function () {
        this.routeLayer.getSource().addFeature(this.geoMarker);
        return this.geoMarker;
    };
    OlMapService.prototype.geoMaker_remove = function () {
        this.routeLayer.getSource().removeFeature(this.geoMarker);
        return this.geoMarker;
    };
    //Get or Set
    OlMapService.prototype.set_map_id = function (p) {
        this.map_id = p;
    };
    OlMapService.prototype.get_map_id = function () {
        return this.map_id;
    };
    /**
     * 添加巡河路线图层
     */
    OlMapService.prototype.add_beginRiverLayer = function () {
        this.map.addLayer(this.beginRiverLayer);
    };
    //Function
    //行政区域、流域切换
    OlMapService.prototype.set_area = function () {
    };
    /**
     * 鼠标样式回调函数
     */
    OlMapService.prototype.pointerStyle = function (e) {
        var pixel = this.map.getEventPixel(e.originalEvent);
        var hit = this.map.hasFeatureAtPixel(pixel);
        if (hit) {
            this.map.getTargetElement()['style'].cursor = 'pointer';
        }
        else {
            this.map.getTargetElement()['style'].cursor = '';
        }
    };
    /**
     * 鼠标样式ON
     */
    OlMapService.prototype.pointerStyle_on = function () {
        this.map.on('pointermove', this.pointerStyle);
    };
    /**
     * 鼠标样式OFF
     */
    OlMapService.prototype.pointerStyle_off = function () {
        this.map.un('pointermove', this.pointerStyle);
    };
    /**
     * 标记一组地标
     * @param p 地标数组
     * @param p_type 地标类型
     */
    OlMapService.prototype.set_landmarks = function (p, p_type) {
        var p_url = "./assets/landmarkStyles/landmark";
        if (p != null) {
            for (var i = 0; i < p.length; i++) {
                var x = document.createElement("img");
                x.setAttribute("src", p_url + p_type + '.png');
                x.setAttribute("data-id", p[i]['id']);
                x.setAttribute("data-code", p_type);
                var flag_css = "cursor_p " + "landmark" + p_type;
                if (p[i]['warn'] == 1) {
                    flag_css = "css_warn " + flag_css;
                }
                x.setAttribute("class", flag_css);
                var flag = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Overlay"]({
                    element: x
                });
                flag.setPosition([p[i]['x'], p[i]['y']]);
                this.map.addOverlay(flag);
            }
        }
    };
    /**
     * 规划路径-关闭
     */
    OlMapService.prototype.setLine_off = function () {
        this.map.removeLayer(this.setLineLayer);
        this.setLineLayer = null;
    };
    /**
     * 规划路径，返回路径坐标数组
     * @param func
     * @param radius
     */
    OlMapService.prototype.setLine = function (func, radius) {
        var _this = this;
        this.map.removeLayer(this.setLineLayer);
        this.setLineLayer = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["layer"].Vector({
            source: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].Vector(),
            style: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Style({
                stroke: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Stroke({
                    color: '#08BDEE',
                    lineDash: [15],
                    width: 3
                })
            }),
            zIndex: 1003
        });
        this.map.addLayer(this.setLineLayer);
        this.setLineLayer.getSource().clear();
        var lineDraw = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["interaction"].Draw({
            type: 'LineString',
            source: this.setLineLayer.getSource(),
            style: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Style({
                stroke: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Stroke({
                    color: 'blue',
                    lineDash: [15],
                    width: 5
                })
            })
        });
        this.map.addInteraction(lineDraw); //开始划线
        lineDraw.once('drawend', function (event) {
            _this.map.removeInteraction(lineDraw); //停止划线
            var f_points = event.feature.getGeometry().getCoordinates();
            //console.log(event.feature.getGeometry().getCoordinates());
            for (var i = 0; i < f_points.length; i++) {
            }
            func(f_points);
        });
    };
    /**
     * 获取单点坐标
     * @param func 回调函数
     */
    OlMapService.prototype.pointon = function (func) {
        this.map.once('singleclick', function (e) {
            var p = [e.coordinate];
            func(p);
        });
    };
    /**
     * 巡河路线-描绘当前点
     * @param p 当前点
     */
    OlMapService.prototype.set_nowPoint = function (p) {
        this.beginRiverLayer.setSource(new __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].Vector({
            features: [new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Feature"]({
                    geometry: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["geom"].Point([Number(p[0]), Number(p[1])])
                })]
        }));
    };
    /**
         * 绘制巡河路线-关闭
         */
    OlMapService.prototype.drawLine_off = function () {
        this.map.removeLayer(this.drawLineLayer);
        this.drawLineLayer = null;
    };
    /**
     * 绘制巡河路线
     * ex: [[x,y],[x,y]]
     * 有效半径，0.01 = 1km
     * @param p_lineData 点的数组
     * @param p_radiu 有效半径，0.01 = 1km
     */
    OlMapService.prototype.drawLine = function (p_lineData, p_radiu) {
        this.map.removeLayer(this.drawLineLayer);
        // this.drawLineLayer = null;
        var lineData = [];
        var f_source;
        lineData = p_lineData;
        f_source = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].Vector;
        //  画点 && 画圈
        for (var i = 0; i < p_lineData.length; i++) {
            // 参数
            var f_point = void 0;
            var temp_point = void 0;
            temp_point = [Number(p_lineData[i][0]), Number(p_lineData[i][1])];
            if (i == 0) {
                var start = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Feature"]({
                    geometry: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["geom"].Point(temp_point)
                });
                start.setStyle(new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Style({
                    image: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Icon({
                        anchor: [0.5, 1],
                        src: 'assets/imgs/map/start.png',
                        scale: 0.15
                    })
                }));
                f_source.addFeature(start);
            }
            else if (i == (p_lineData.length - 1)) {
                var end = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Feature"]({
                    geometry: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["geom"].Point(temp_point)
                });
                end.setStyle(new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Style({
                    image: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Icon({
                        anchor: [0.5, 1],
                        src: 'assets/imgs/map/end.png',
                        scale: 0.15
                    })
                }));
                f_source.addFeature(end);
            }
            // 画点
            f_point = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Feature"]({
                geometry: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["geom"].Point(temp_point)
            });
            f_point.setStyle(new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Style({
                image: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Circle({
                    radius: 2,
                    fill: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Fill({
                        color: '#08BDEE'
                    })
                })
            }));
            f_source.addFeature(f_point);
            if (p_radiu) {
                //  画圈
                var f_circle = void 0;
                f_circle = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Feature"]({
                    geometry: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["geom"].Circle(temp_point, p_radiu)
                });
                f_source.addFeature(f_circle);
            }
        }
        //  画线
        var f_line;
        console.log(lineData);
        f_line = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Feature"]({
            geometry: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["geom"].LineString(lineData)
        });
        f_line.setStyle(new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Style({
            stroke: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["style"].Stroke({
                color: '#08BDEE',
                //  lineDash: [15],
                width: 6
            })
        }));
        f_source.addFeature(f_line);
        this.drawLineLayer = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["layer"].Vector({
            source: f_source,
            zIndex: 902
        });
        this.map.addLayer(this.drawLineLayer);
    };
    /**
     * 绘制轨迹用于回放
     * @param p_lineData 轨迹数组
     */
    OlMapService.prototype.playLine = function (p_lineData) {
        var _this = this;
        this.map.removeLayer(this.routeLayer);
        var lineData = [];
        var route;
        var routeCoords;
        var routeLength;
        var routeFeature;
        var startMarker;
        var endMarker;
        lineData = [];
        for (var i = 0; i < p_lineData.length; i++) {
            var temp_point = void 0;
            temp_point = [Number(p_lineData[i][0]), Number(p_lineData[i][1])];
            lineData.push(temp_point);
        }
        route = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["geom"].LineString(lineData); //  转换成 LineString
        routeCoords = route.getCoordinates(); //  获取坐标点
        routeLength = routeCoords.length; //  获取长度
        this.routeCoords = routeCoords;
        routeFeature = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Feature"]({
            type: 'route',
            geometry: route
        });
        this.geoMarker = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Feature"]({
            type: 'geoMarker',
            geometry: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["geom"].Point(routeCoords[0])
        });
        startMarker = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Feature"]({
            type: 'icon_start',
            geometry: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["geom"].Point(routeCoords[0])
        });
        endMarker = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Feature"]({
            type: 'icon_end',
            geometry: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["geom"].Point(routeCoords[routeLength - 1])
        });
        this.routeLayer = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["layer"].Vector({
            source: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].Vector({
                features: [routeFeature, this.geoMarker, startMarker, endMarker]
            }),
            style: function (feature) {
                if (_this.animating && feature.get('type') === 'geoMarker') {
                    return null;
                }
                return _this.route_styles[feature.get('type')];
            },
            zIndex: 904
        });
        this.map.addLayer(this.routeLayer);
        return this.geoMarker;
    };
    OlMapService.prototype.moveFeature = function (event) {
        var vectorContext = event.vectorContext;
        var frameState = event.frameState;
        if (this.animating) {
            var elapsedTime = frameState.time - this.now;
            // here the trick to increase speed is to jump some indexes
            // on lineString coordinates
            var index = Math.round(this.speed * elapsedTime / 1000);
            if (index >= this.routeCoords.getCoordinates().length) {
                this.stopAnimation(true);
                return;
            }
            var currentPoint = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["geom"].Point(this.routeCoords[index]);
            var feature = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Feature"](currentPoint);
            vectorContext.drawFeature(feature, this.route_styles.geoMarker);
        }
        // tell OpenLayers to continue the postcompose animation
        this.map.render();
    };
    ;
    OlMapService.prototype.startAnimation = function () {
        if (this.animating) {
            this.stopAnimation(false);
        }
        else {
            this.animating = true;
            this.now = new Date().getTime();
            this.speed = this.speedInput;
            this.routeButton = 'STOP';
            // hide geoMarker
            this.geoMarker.setStyle(null);
            // just in case you pan somewhere else
            this.map.getView().setCenter([118.179151, 26.645581]);
            this.map.on('postcompose', this.moveFeature);
            this.map.render();
        }
    };
    OlMapService.prototype.stopAnimation = function (ended) {
        this.animating = false;
        this.routeButton = 'START';
        // if animation cancelled set the marker at the beginning
        var coord = ended ? this.routeCoords[this.routeCoords.getCoordinates().length - 1] : this.routeCoords[0];
        /** @type {ol.geom.Point} */
        //(geoMarker.getGeometry()).setCoordinates(coord);
        //remove listener
        this.map.un('postcompose', this.moveFeature);
    };
    /**
     * 关闭鼠标选取
     */
    OlMapService.prototype.selectInteraction_off = function () {
        this.map.removeInteraction(this.select);
        this.map.removeInteraction(this.dragBox);
        this.pointerStyle_off();
    };
    /**
     * 鼠标获取矢量元素
     * layer,func
     * @param p_layer
     * @param func
     */
    OlMapService.prototype.selectInteraction = function (p_layer, func) {
        var _this = this;
        //http://openlayers.org/en/latest/examples/box-selection.html
        this.map.removeInteraction(this.select);
        this.map.removeInteraction(this.dragBox);
        this.map.addInteraction(this.select);
        this.map.addInteraction(this.dragBox);
        this.pointerStyle_on();
        var selectedFeatures = this.select.getFeatures();
        selectedFeatures.clear();
        this.dragBox.on('boxend', function (e) {
            selectedFeatures.clear();
            var extent = _this.dragBox.getGeometry().getExtent();
            //p_layer === 
            _this.testLayer.getSource().forEachFeatureIntersectingExtent(extent, function (feature) {
                selectedFeatures.push(feature);
            });
            if (func) {
                func(extent);
            }
        });
        selectedFeatures.on('propertychange', function (e) {
            var datas = selectedFeatures.getArray().map(function (feature) {
                console.log(feature);
                return feature;
            });
            console.log(datas);
        });
    };
    /**
     * 选择按钮关闭
     */
    OlMapService.prototype.select_off = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#map_select").remove();
        this.selectInteraction_off();
    };
    /**
     * 选择按钮开启
     * @param p_layer 选择图层
     * @param func 方法
     */
    OlMapService.prototype.select_on = function (p_layer, func) {
        var _this = this;
        var viewport = this.map.getViewport();
        var html = __WEBPACK_IMPORTED_MODULE_1_jquery__("<button>").attr("id", "map_select").html("选择区域").addClass('btn btn-primary btn-sm position_a bottom_10p right_10p');
        __WEBPACK_IMPORTED_MODULE_1_jquery__(viewport).children(".ol-overlaycontainer-stopevent").append(html);
        // 操作
        var flag_on = false;
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#map_select").click(function () {
            if (flag_on) {
                flag_on = false;
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#map_select").html("选择区域");
                _this.selectInteraction_off();
            }
            else {
                flag_on = true;
                __WEBPACK_IMPORTED_MODULE_1_jquery__("#map_select").html("结束选择");
                _this.selectInteraction();
            }
        });
    };
    /**
     * 公众晒图
     * @param flag
     * @param p_num
     */
    // public set_Pictures(flag:any,p_num:string){
    //     let p_url =  "./assets/pulicShare_icon/position.png";
    //     let pic = document.createElement("img");
    //     pic.setAttribute("src", p_url);
    //     pic.setAttribute("class", "img-responsive");
    //     pic.setAttribute("style", "width:20px;height:auto");
    //     pic.setAttribute("id", "img"+p_num);
    //     let setpic = new ol.Overlay({
    //             element : pic
    //         });
    //     setpic.setPosition([flag.x,flag.y]);
    //     this.map.addOverlay(setpic);
    // }
    /**
     * 公众晒图
     * @param p //一组坐标
     * @param p_label //坐标标志
     */
    OlMapService.prototype.set_Pictures = function (p, p_label) {
        var p_url = "./assets/pulicShare_icon/position.png";
        for (var i = 0; i < p.length; i++) {
            var pic = document.createElement("img");
            pic.setAttribute("src", p_url);
            var tag_css = "cursor_p " + "img-responsive " + "label" + p_label;
            pic.setAttribute("class", tag_css);
            pic.setAttribute("style", "width:20px;height:auto");
            pic.setAttribute("id", "img" + p_label + (i).toString());
            var setpic = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Overlay"]({
                element: pic
            });
            setpic.setPosition([p[i]['x'], p[i]['y']]);
            this.map.addOverlay(setpic);
        }
    };
    /**
     * 公众关注
     * @param heatData //一组坐标
    */
    OlMapService.prototype.set_heatMap = function (heatData) {
        this.map.removeLayer(this.heatMapLayer);
        var vector = this.heatMapLayer;
        var source = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].Vector({
            //url: 'https://openlayers.org/en/v4.6.4/examples/data/kml/2012_Earthquakes_Mag5.kml',
            url: './assets/zhangzhou2.kml',
            format: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["format"].KML({
                extractStyles: false
            })
        });
        // let source = new ol.source.Vector({
        //     features: (new ol.format.GeoJSON()).readFeatures(heatData,{
        //         dataProjection : 'EPSG:4326',
        //         featureProjection : 'EPSG:3857'
        //     })
        // });
        this.heatMapLayer.setSource(source);
        this.heatMapLayer.setRadius(6);
        this.heatMapLayer.setBlur(5);
        this.heatMapLayer.getSource().on('addfeature', function (event) {
            //console.log(event);
            // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
            // standards-violating <magnitude> tag in each Placemark.  We extract it from
            // the Placemark's name instead.
            var name = event.feature.get('name');
            var magnitude = parseFloat(name.substr(2));
            event.feature.set('weight', magnitude - 5);
        });
        this.heatMapLayer.setZIndex(1001);
        this.map.addLayer(this.heatMapLayer);
    };
    /**
     * 重置地图中心
     * @param center  地图中心点，格式[lng,lat]
     * @param zoom 地图放大级数
     */
    OlMapService.prototype.setView = function (center, zoom) {
        if (zoom == undefined) {
            zoom = this.map.getView().getZoom();
        }
        if (center != [] && center != undefined && center != null) {
            this.view = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["View"]({
                center: [Number(center[0]), Number(center[1])],
                projection: 'EPSG:4326',
                zoom: zoom
            });
            this.map.setView(this.view);
            this.view = null;
        }
    };
    /**
     * 流域水系/行政区域图层切换
     * @param p
     */
    OlMapService.prototype.SwithLayer_basin_area = function (p) {
        if (p == 0) {
            this.map.removeLayer(this.basinLayer);
            this.map.addLayer(this.areaLayer);
        }
        else if (p == 1) {
            this.map.removeLayer(this.areaLayer);
            this.map.addLayer(this.basinLayer);
        }
    };
    /**
     * 计算两点间距离
     * @param c1
     * @param c2
     */
    OlMapService.prototype.distanceInPoints = function (c1, c2) {
        var f = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["Sphere"](6378137).haversineDistance(c1, c2);
        // return f>2?1:f / 2;
        // return f>50?f:1;
        return f;
    };
    OlMapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [Object])
    ], OlMapService);
    return OlMapService;
}());

//# sourceMappingURL=ol_map.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaterMonitorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_3_toast_3__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_StorageService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Toast } from '@ionic-native/toast';

//注入服务




var WaterMonitorPage = (function () {
    function WaterMonitorPage(navCtrl, StorageService, service, params, toast) {
        this.navCtrl = navCtrl;
        this.StorageService = StorageService;
        this.service = service;
        this.params = params;
        this.toast = toast;
        this.a = true;
        this.b = false;
        this.eventList = []; //所有事件
        this.eventList1 = []; //待办
        this.eventList2 = []; //在办
        this.eventList3 = []; //已办
        this.pet = "DailyTasks"; //设置默认选中
        //当前时间
        this.now_date = new Date;
        //监测类型
        this.field = 1;
        this.optionChart = {
            title: {
                text: '水质环比',
                show: true
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['本月', '对比月']
            },
            grid: {
                left: '2%',
                right: '2%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '本月',
                    type: 'line',
                    stack: '总量',
                    data: []
                },
                {
                    name: '对比月',
                    type: 'line',
                    stack: '总量',
                    data: []
                }
            ]
        };
        this.user = this.StorageService.read("user");
        this.flag = true;
        this.userId = this.user["userId"];
        this.token = this.user["token"];
        this.code = 11;
        this.id = this.params.get("id");
    }
    WaterMonitorPage.prototype.change = function (x) {
        if (x == 1) {
            this.a = true;
            this.b = false;
        }
        else {
            this.b = true;
            this.a = false;
        }
    };
    //选择监测类型刷新数据
    WaterMonitorPage.prototype.reloadLineCharts = function () {
        var year = this.now_date.getFullYear();
        var month = this.now_date.getMonth() + 1;
        if (this.myDate == null || this.myDate == "") {
            this.get_waterChart(year, month, 0);
        }
        else {
            //本月
            this.get_waterChart(year, month, 0);
            //环比月
            year = Number(this.myDate.slice(0, 4));
            month = Number(this.myDate.slice(5, 7));
            this.get_waterChart(year, month, 1);
        }
    };
    //开始环比按钮
    WaterMonitorPage.prototype.begin_MoM = function () {
        if (this.myDate == null || this.myDate == "") {
            this.toast.toast2("请选择环比月份!");
            return;
        }
        var year = Number(this.myDate.slice(0, 4));
        var month = Number(this.myDate.slice(5, 7));
        this.get_waterChart(year, month, 1); //=================
    };
    /**
     * 获取折线图数据,
     * id:水质点id,
     * year:年,
     * month:月,
     * field:1:pH,2:溶解氧,3:高锰酸盐指数,4:五日生化需氧量,5:氨氮,6:总磷,7:悬浮物,
     * num:0:本月,1:对比月
     */
    WaterMonitorPage.prototype.get_waterChart = function (year, month, num) {
        var _this = this;
        var url_p = "code=" + 11
            + "&id=" + 1
            + "&year=" + year
            + "&month=" + month
            + "&field=" + this.field
            + "&userId=" + this.userId
            + "&token=" + this.token;
        var url = 'http://' + this.service.serviceUrl + '/monitoringInformationController/getMonitoringInformation.do';
        this.service.service(url, url_p).subscribe(function (data) {
            if (data['result'] == -1) {
                alert("该账号已被顶号,请重新登录！");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            }
            else {
                console.log(data);
                var f_data = data['dataList'];
                //清空
                _this.optionChart.series[num].data = [];
                //更换
                for (var i = 0; i < f_data.length; i++) {
                    _this.optionChart.series[num].data.push(f_data[i].value);
                }
                _this.waterLineChart.setOption(_this.optionChart);
            }
        }, function (err) {
            console.error(err);
        });
    };
    WaterMonitorPage.prototype.ngOnInit = function () {
        var _this = this;
        var p = "userId=" + this.userId
            + "&token=" + this.token
            + "&code=" + this.code
            + "&id=" + this.id;
        var url = 'http://' + this.service.serviceUrl + '/detailInformationController/getDetailInformation.do';
        console.log(p);
        this.service.service(url, p).subscribe(function (data) {
            if (data['result'] == -1) {
                alert("该账号已被顶号,请重新登录！");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            }
            else {
                _this.eventList = data['WaterQuality'];
                console.log("success!");
                console.log("eventList:", _this.eventList);
            }
        }, function (err) {
            console.error(err);
        });
    };
    WaterMonitorPage.prototype.ionViewDidEnter = function () {
        //初始化
        this.waterLineChart = echarts.init(document.getElementById('test'));
        //获取当前年、月
        var year = this.now_date.getFullYear();
        var month = this.now_date.getMonth() + 1;
        this.get_waterChart(year, month, 0);
    };
    WaterMonitorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-waterMonitor',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\message\waterMonitor.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true" color="primary">\n\n        <!-- 去掉原来的返回按键并重新设定新的返回 -->\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)=" this.navCtrl.pop();">\n\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            详情\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n        <div id="div_2"></div>\n\n    <ion-select [(ngModel)]="river" [interface]="\'popover\'" placeholder="水质信息" (ngModelChange)="change(river)">\n\n        <ion-option value="1">水质信息</ion-option>\n\n        <ion-option value="2">水质监控</ion-option>\n\n    </ion-select>\n\n    <div [hidden]="a==false">\n\n        <ion-list>\n\n            <div class="row" style="background-color:white;">\n\n                <div tappable class="w_mcol" style="width:25%;max-width:25%;border-left:0rem">\n\n                    <a style="line-height:5rem;">断面名称：</a>\n\n                </div>\n\n                <div tappable class="w_mcol" style="width:75%;max-width:75%;border-left:0rem;border-right:0rem">\n\n                    <a style="line-height:5rem;">{{eventList[\'name\']}}</a>\n\n                </div>\n\n            </div>\n\n            <div class="row" style="background-color:white;">\n\n                <div tappable class="w_mcol" style="width:25%;max-width:25%;border-left:0rem;border-top:0rem">\n\n                    <a style="line-height:5rem;">监测方式：</a>\n\n                </div>\n\n                <div tappable class="w_mcol" style="width:75%;max-width:75%;border-left:0rem;border-right:0rem;border-top:0rem">\n\n                    <a style="line-height:5rem;">{{eventList[\'monitor_type\']}}</a>\n\n                </div>\n\n            </div>\n\n            <div class="row" style="background-color:white">\n\n                <div tappable class="w_mcol" style="border-left:0rem;border-top:0rem">\n\n                    <a style="line-height:5rem;">行政区域：</a>\n\n                </div>\n\n                <div tappable class="w_mcol" style="border-left:0rem;border-right:0rem;border-top:0rem">\n\n                    <a style="line-height:5rem;">{{eventList[\'region_name\']}}</a>\n\n                </div>\n\n                <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem">\n\n                    <a style="line-height:5rem;">目标水质：</a>\n\n                </div>\n\n                <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem">\n\n                    <a style="line-height:5rem;">{{eventList[\'requirement_name\']}}</a>\n\n                </div>\n\n            </div>\n\n            <div class="row" style="background-color:white">\n\n                <div tappable class="w_mcol" style="border-left:0rem;border-top:0rem">\n\n                    <a style="line-height:5rem;">所属河流：</a>\n\n                </div>\n\n                <div tappable class="w_mcol" style="border-left:0rem;border-right:0rem;border-top:0rem">\n\n                    <a style="line-height:5rem;">{{eventList[\'river_name\']}}</a>\n\n                </div>\n\n                <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem">\n\n                    <a style="line-height:5rem;">现状水质：</a>\n\n                </div>\n\n                <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem">\n\n                    <a style="line-height:5rem;">{{eventList[\'type_name\']}}</a>\n\n                </div>\n\n            </div>\n\n            <div class="row" style="background-color:white">\n\n                <div tappable class="w_mcol" style="border-left:0rem;border-top:0rem">\n\n                    <a style="line-height:5rem;">断面级别：</a>\n\n                </div>\n\n                <div tappable class="w_mcol" style="border-left:0rem;border-right:0rem;border-top:0rem">\n\n                    <a style="line-height:5rem;">{{eventList[\'section_level\']}}</a>\n\n                </div>\n\n                <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem">\n\n                    <a style="line-height:5rem;">污染指标：</a>\n\n                </div>\n\n                <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem">\n\n                    <a style="line-height:5rem;">{{eventList[\'pollution_index\']}}</a>\n\n                </div>\n\n            </div>\n\n        </ion-list>\n\n    </div>\n\n    <div [hidden]="b==false">\n\n        <ion-item>\n\n            <ion-label>监测类型</ion-label>\n\n            <ion-select interface="popover" [(ngModel)]="field" (ngModelChange)="reloadLineCharts()">\n\n                <ion-option value="1">pH</ion-option>\n\n                <ion-option value="2">溶解氧</ion-option>\n\n                <ion-option value="3">高锰酸盐指数</ion-option>\n\n                <ion-option value="4">五日生化需氧量</ion-option>\n\n                <ion-option value="5">氨氮</ion-option>\n\n                <ion-option value="6">总磷</ion-option>\n\n                <ion-option value="7">悬浮物</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>环比月份</ion-label>\n\n            <ion-datetime displayFormat="YYYY年MM月" [(ngModel)]="myDate" doneText="确定" cancelText="取消"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <button ion-button full (click)="begin_MoM()">开始环比</button>\n\n\n\n        <p class="text_align_center">红线：当前月份，黑线：环比月份</p>\n\n\n\n        <div id="test" style="width: 360px;height:300px;"></div>\n\n    </div>\n\n\n\n\n\n    <!-- <div class="row" style="background-color:white;margin-top:2rem;">\n\n        <div tappable class="w_mcol" style="border-left:0rem"><a style="line-height:5rem;">溶解氧</a></div>\n\n        <div tappable class="w_mcol" style="border-left:0rem;border-right:0rem"><a style="line-height:5rem;">3</a></div>\n\n        <div tappable class="w_mcol" style="border-right:0rem"><a style="line-height:5rem;">总磷</a></div>\n\n        <div tappable class="w_mcol" style="border-right:0rem"><a style="line-height:5rem;">4</a></div>\n\n    </div>\n\n    <div class="row" style="background-color:white">\n\n        <div tappable class="w_mcol" style="border-left:0rem;border-top:0rem"><a style="line-height:5rem;">氢离子浓度</a></div>\n\n        <div tappable class="w_mcol" style="border-left:0rem;border-right:0rem;border-top:0rem"><a style="line-height:5rem;">3</a></div>\n\n        <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem"><a style="line-height:5rem;">总氮</a></div>\n\n        <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem"><a style="line-height:5rem;">3</a></div>\n\n    </div> -->\n\n\n\n    <!-- <div class="row" style="background-color:white;margin-top:4rem;">\n\n        折线图未实现\n\n    </div> -->\n\n\n\n</ion-content>'/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\message\waterMonitor.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__service_StorageService__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* service */], __WEBPACK_IMPORTED_MODULE_2__toast_3_toast_3__["a" /* ToasT */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* service */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__["a" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__toast_3_toast_3__["a" /* ToasT */]])
    ], WaterMonitorPage);
    return WaterMonitorPage;
}());

//# sourceMappingURL=waterMonitor.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Play_moviePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_StorageService__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//注入服务


// declare var cordova: any;
var Play_moviePage = (function () {
    function Play_moviePage(navCtrl, StorageService, navParams, service, params) {
        this.navCtrl = navCtrl;
        this.StorageService = StorageService;
        this.navParams = navParams;
        this.service = service;
        this.params = params;
        this.user = this.StorageService.read("user");
        this.userId = this.user["userId"];
        this.token = this.user["token"];
        this.videoSurveillanceId = this.params.get("id");
    }
    Play_moviePage.prototype.ngOnInit = function () {
        this.url = "rtsp://liantong:lt123456@183.250.240.180:16003/cam/realmonitor?channel=4&subtype=1";
        // cordova.plugins.VLCPlugin.play(this.url, result => { console.log("result:", result); }, error => console.log("error:", error));
    };
    Play_moviePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-play_movie',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\message\play_movie.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true" color="primary">\n\n        <!-- 去掉原来的返回按键并重新设定新的返回 -->\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)=" this.navCtrl.pop();">\n\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            视频监控\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\message\play_movie.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Play_moviePage);
    return Play_moviePage;
}());

//# sourceMappingURL=play_movie.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_StorageService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_utils__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Toast } from '@ionic-native/toast';
// import { Geolocation } from '@ionic-native/geolocation';
//注入服务




// declare var cordova: any;
var BillboardPage = (function () {
    function BillboardPage(navCtrl, utils, StorageService, service, params) {
        this.navCtrl = navCtrl;
        this.utils = utils;
        this.StorageService = StorageService;
        this.service = service;
        this.params = params;
        this.user = this.StorageService.read("user");
        this.userId = this.user['userId'];
        this.token = this.user['token'];
        this.id = this.params.get("id");
    }
    BillboardPage.prototype.begin_navigation = function () {
        // this.geolocation.getCurrentPosition().then((resp) => {
        //     //百度地址显示测试
        //     console.log("经纬度", resp.coords.latitude);
        //     console.log("经纬度", resp.coords.longitude);
        //     // cordova.plugins.addressPlugin.address("ZOwmP0SKHgCTVLGd2M4qIVK8iHICZbKU", 25.934548, 119.679445,
        //     //     result => { console.log("result:", result); },
        //     //     error => console.log("error:", error)
        //     // );
        //     cordova.plugins.navigationPlugin.isInstallBaiduMap(1,
        //         result => {
        //             if (result == "true") {
        //                 cordova.plugins.navigationPlugin.baiDuMap(resp.coords.latitude, resp.coords.longitude, this.y, this.x, "driving",
        //                     result => { console.log("re:", result); },
        //                     error => console.log("err:", error)
        //                 );
        //             }
        //             else {
        //                 this.toast.showLongBottom("请下载百度地图！").subscribe();
        //             }
        //             console.log("result:", result);
        //         },
        //         error => console.log("error:", error)
        //     );
        // }).catch((error) => {
        //     console.log('Error getting location', error);
        // })
    };
    BillboardPage.prototype.begin_navigation1 = function () {
        // this.geolocation.getCurrentPosition().then((resp) => {
        //     cordova.plugins.navigationPlugin.isInstallGaodeMap(1,
        //         result => {
        //             if (result == "true") {
        //                 cordova.plugins.navigationPlugin.gaoDeMap(resp.coords.latitude, resp.coords.longitude, this.y, this.x, "0",
        //                     result => { console.log("re:", result); },
        //                     error => console.log("err:", error)
        //                 );
        //             }
        //             else {
        //                 this.toast.showLongBottom("请下载高德地图！").subscribe();
        //             }
        //         },
        //         error => console.log("error:", error));
        // }).catch((error) => {
        //     console.log('Error getting location', error);
        // })
    };
    BillboardPage.prototype.ngOnInit = function () {
        var _this = this;
        var p = "userId=" + this.userId
            + "&token=" + this.token
            + "&code=" + 21
            + "&id=" + this.id;
        var url = 'http://' + this.service.serviceUrl + '/detailInformationController/getDetailInformation.do';
        console.log(p);
        this.service.service(url, p).subscribe(function (data) {
            if (data['result'] == 1) {
                _this.billboard = data['PublicSigns'];
                _this.x = _this.billboard['longitute'];
                _this.y = _this.billboard['latitude'];
                _this.publicsigns_code = _this.billboard['publicsigns_code'];
                _this.name = _this.billboard['river_name'];
                _this.river_start = _this.billboard['river_start'];
                _this.river_end = _this.billboard['river_end'];
                _this.river_length = _this.billboard['river_length'];
                _this.qu_riverchief = _this.billboard['qu_riverchief'];
                _this.zhen_riverchief = _this.billboard['zhen_riverchief'];
                _this.zhen_telphone = _this.billboard['zhen_telphone'];
                _this.cun_riverchief = _this.billboard['cun_riverchief'];
                _this.cun_telphone = _this.billboard['cun_telphone'];
                _this.department = _this.billboard['department'];
                _this.rivermanager = _this.billboard['rivermanager'];
                _this.manager_telphone = _this.billboard['manager_telphone'];
                _this.duty = _this.billboard['duty'];
                _this.target = _this.billboard['target'];
                _this.shi_hotline = _this.billboard['shi_hotline'];
                _this.xian_hotline = _this.billboard['xian_hotline'];
                console.log("x", _this.x);
                console.log("y", _this.y);
                console.log("success!");
                console.log("billboard:", _this.billboard);
            }
            else {
                alert("该账号已被顶号,请重新登录！");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        }, function (err) {
            console.error(err);
        });
    };
    BillboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-billboard',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\message\billboard.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true" color="primary">\n\n        <!-- 去掉原来的返回按键并重新设定新的返回 -->\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)=" this.navCtrl.pop();">\n\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            公示牌\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <div class="position_a width_100 height_100 padding_10p z_index_100" style="background-color:#fff;">\n\n        <button style="padding-left:2rem;" ion-button color="primary" tappable (click)="begin_navigation()">百度导航</button>\n\n        <button style="padding-left:2rem;padding-right:2rem;" ion-button color="primary" tappable (click)="begin_navigation1()">高德导航</button>\n\n        <h1 style="text-align:center">南平市河长公示牌</h1>\n\n        <h5 style="text-align:center">公示牌编号：{{publicsigns_code}}</h5>\n\n        <div style="margin-left:4rem">\n\n            <ion-list>\n\n                <span>河道名称：{{name}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>河道起点：{{river_start}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>河道终点：{{river_end}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>河道长度：{{river_length}}公里</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>市级河长：{{qu_riverchief}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>县级河长：{{zhen_riverchief}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>联系电话：{{zhen_telphone}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>乡级河长：{{cun_riverchief}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>联系电话：{{cun_telphone}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>联系部门：{{department}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>联系人：{{rivermanager}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>联系电话：{{manager_telphone}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>河长职责：</span>\n\n                <span>{{duty}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>整治目标：</span>\n\n                <span>{{target}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>监督电话：</span>\n\n                <span>{{shi_hotline}}</span>\n\n                <span style="margin-left:4rem;">{{xian_hotline}}</span>\n\n            </ion-list>\n\n        </div>\n\n\n\n    </div>\n\n\n\n    <!-- <div class="row" style="background-color:white;margin-top:1rem;">\n\n        <div tappable class="w_mcol" style="border-left:0rem;">\n\n            <a style="line-height:5rem;">河道(段)名称</a>\n\n        </div>\n\n        <div tappable class="w_mcol" style="border-left:0rem;border-right:0rem;">\n\n            <a style="line-height:5rem;">城市</a>\n\n        </div>\n\n        <div tappable class="w_mcol" style="border-right:0rem;">\n\n            <a style="line-height:5rem;">各级河长</a>\n\n        </div>\n\n        <div tappable class="w_mcol" style="border-right:0rem;">\n\n            <a style="line-height:5rem;">姓名</a>\n\n        </div>\n\n        <div tappable class="w_mcol" style="border-right:0rem;">\n\n            <a style="line-height:5rem;">联系方式</a>\n\n        </div>\n\n    </div>\n\n    <div class="row" style="background-color:white">\n\n        <div tappable class="w_mcol" style="border-left:0rem;border-top:0rem">\n\n            <a style="line-height:5rem;">河段起点</a>\n\n        </div>\n\n        <div tappable class="w_mcol" style="border-left:0rem;border-right:0rem;border-top:0rem">\n\n            <a style="line-height:5rem;">xxx</a>\n\n        </div>\n\n        <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem">\n\n            <a style="line-height:5rem;">区级河长</a>\n\n        </div>\n\n        <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem">\n\n            <a style="line-height:5rem;">陈xx</a>\n\n        </div>\n\n        <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem">\n\n            <a style="line-height:5rem;">xxxxxxxxx</a>\n\n        </div>\n\n    </div>\n\n    <div class="row" style="background-color:white">\n\n        <div tappable class="w_mcol" style="border-left:0rem;border-top:0rem">\n\n            <a style="line-height:5rem;">河段终点</a>\n\n        </div>\n\n        <div tappable class="w_mcol" style="border-left:0rem;border-right:0rem;border-top:0rem">\n\n            <a style="line-height:5rem;">xx水闸</a>\n\n        </div>\n\n        <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem">\n\n            <a style="line-height:5rem;">镇(街)级河长</a>\n\n        </div>\n\n        <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem">\n\n            <a style="line-height:5rem;">邓xx</a>\n\n        </div>\n\n        <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem">\n\n            <a style="line-height:5rem;">138xxxxxxxx</a>\n\n        </div>\n\n    </div>\n\n    <div class="row" style="background-color:white;">\n\n        <div tappable class="w_mcol" style="width:20%;max-width:20%;border-left:0rem;border-top:0rem">\n\n            <a style="line-height:5rem;">河段长度</a>\n\n        </div>\n\n        <div tappable class="w_mcol" style="width:80%;max-width:80%;border-left:0rem;border-right:0rem;border-top:0rem">\n\n            <a style="line-height:5rem;">6080米</a>\n\n        </div>\n\n    </div>\n\n    <div class="row" style="background-color:white;">\n\n        <div tappable class="w_mcol" style="width:20%;max-width:20%;border-left:0rem;border-top:0rem">\n\n            <a>区级河长职责</a>\n\n        </div>\n\n        <div tappable class="w_mcol" style="width:80%;max-width:80%;border-left:0rem;border-right:0rem;border-top:0rem">\n\n            <a style="line-height:5rem;">x\'x\'x\'x\'x</a>\n\n        </div>\n\n    </div>\n\n    <div class="row" style="background-color:white;">\n\n        <div tappable class="w_mcol" style="width:20%;max-width:20%;border-left:0rem;border-top:0rem">\n\n            <a>镇(街)级河长职责</a>\n\n        </div>\n\n        <div tappable class="w_mcol" style="width:80%;max-width:80%;border-left:0rem;border-right:0rem;border-top:0rem">\n\n            <a style="line-height:5rem;">x\'x\'x\'x\'x</a>\n\n        </div>\n\n    </div>\n\n    <div class="row" style="background-color:white;">\n\n        <div tappable class="w_mcol" style="width:20%;max-width:20%;border-left:0rem;border-top:0rem">\n\n            <a style="line-height:5rem;">治理目标</a>\n\n        </div>\n\n        <div tappable class="w_mcol" style="width:80%;max-width:80%;border-left:0rem;border-right:0rem;border-top:0rem">\n\n            <a style="line-height:5rem;">x\'x\'x\'x\'x</a>\n\n        </div>\n\n    </div>\n\n    <div class="row" style="background-color:white;">\n\n        <div tappable class="w_mcol" style="width:20%;max-width:20%;border-left:0rem;border-top:0rem">\n\n            <a style="line-height:5rem;">监督电话</a>\n\n        </div>\n\n        <div tappable class="w_mcol" style="width:80%;max-width:80%;border-left:0rem;border-right:0rem;border-top:0rem">\n\n            <a style="line-height:5rem;">x\'x\'x\'x\'x</a>\n\n        </div>\n\n    </div> -->\n\n\n\n\n\n    <!-- <div class="row" style="background-color:white;margin-top:2rem;">\n\n            <div tappable class="w_mcol" style="border-left:0rem"><a style="line-height:5rem;">溶解氧</a></div>\n\n            <div tappable class="w_mcol" style="border-left:0rem;border-right:0rem"><a style="line-height:5rem;">3</a></div>\n\n            <div tappable class="w_mcol" style="border-right:0rem"><a style="line-height:5rem;">总磷</a></div>\n\n            <div tappable class="w_mcol" style="border-right:0rem"><a style="line-height:5rem;">4</a></div>\n\n        </div>\n\n        <div class="row" style="background-color:white">\n\n            <div tappable class="w_mcol" style="border-left:0rem;border-top:0rem"><a style="line-height:5rem;">氢离子浓度</a></div>\n\n            <div tappable class="w_mcol" style="border-left:0rem;border-right:0rem;border-top:0rem"><a style="line-height:5rem;">3</a></div>\n\n            <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem"><a style="line-height:5rem;">总氮</a></div>\n\n            <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem"><a style="line-height:5rem;">3</a></div>\n\n        </div> -->\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\message\billboard.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */], __WEBPACK_IMPORTED_MODULE_4__service_utils__["a" /* UtilsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__service_utils__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BillboardPage);
    return BillboardPage;
}());

//# sourceMappingURL=billboard.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_StorageService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__changePassword__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonalPage = (function () {
    function PersonalPage(navCtrl, StorageService, navParams) {
        this.navCtrl = navCtrl;
        this.StorageService = StorageService;
        this.navParams = navParams;
        this.isTask = false;
        this.noTask = false;
        this.user = this.StorageService.read("user");
        this.phone = this.user['phone'];
        this.email = this.user['email'];
        this.realName = this.user['realName'];
        this.roleName = this.user['roleName'];
        this.version = this.StorageService.read("version");
        this.completeNum = this.navParams.get('completeNum');
        this.uncompleteNum = this.navParams.get('uncompleteNum');
        if (this.completeNum == 0 && this.uncompleteNum == 0) {
            this.noTask = true;
        }
        else {
            this.isTask = true;
        }
    }
    PersonalPage.prototype.change = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__changePassword__["a" /* ChangePasswordPage */]);
    };
    PersonalPage.prototype.logout = function () {
        this.navCtrl.popToRoot();
    };
    PersonalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personal',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\personalCenter\personal.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true" color="primary">\n\n        <!-- 去掉原来的返回按键并重新设定新的返回 -->\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)=" this.navCtrl.pop();">\n\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            个人中心\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <!-- display:flex;/*Flex布局*/\n\n    display: -webkit-flex; /* Safari */\n\n    align-items:center;/*指定垂直居中*/ -->\n\n    <div class="div_1" style="height:90px;display:flex;display: -webkit-flex;align-items:center;/*指定垂直居中*/">\n\n        <div style="margin-left:3rem;vertical-align:middle;">\n\n            <div>\n\n                <span style="color:#478BFF;font-size:1.5rem">\n\n                    <b>账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</b>\n\n                </span>\n\n                <span style="font-size:1.5rem">{{realName}}</span>\n\n            </div>\n\n            <div>\n\n                <span style="color:#478BFF;font-size:1.5rem">\n\n                    <b>角&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色：</b>\n\n                </span>\n\n                <span style="font-size:1.5rem">{{roleName}}</span>\n\n            </div>\n\n            <div *ngIf="isTask">\n\n                <span style="color:#478BFF;font-size:1.5rem">\n\n                    <b>寻河情况：</b>\n\n                </span>\n\n                <span style="font-size:1.5rem">您已巡河{{completeNum}}次，还需巡河{{uncompleteNum}}次</span>\n\n            </div>\n\n            <div *ngIf="noTask">\n\n                <span style="color:#478BFF;font-size:1.5rem">\n\n                    <b>寻河情况：</b>\n\n                </span>\n\n                <span style="font-size:1.5rem">您当前没有巡河任务</span>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <div style="margin-top:2.5rem;width:100%;text-align:center">\n\n        <div style="position: absolute;\n\n                    left:2.5rem;\n\n                    width:35%;\n\n                    border:1px solid #478BFF;\n\n                    height:38px;\n\n                    border-radius:20px" (click)="change()">\n\n            <div class="left_span">修改密码</div>\n\n        </div>\n\n        <div style="position: absolute;\n\n                    right:2.5rem;\n\n                    width:35%;\n\n                    border:1px solid #478BFF;\n\n                    height:38px;\n\n                    border-radius:20px" (click)="logout()">\n\n            <div class="left_span">退出登录</div>\n\n        </div>\n\n    </div>\n\n\n\n    <div style="bottom:0;margin-bottom:2rem;text-align:center;width:100%;position:absolute">\n\n        [当前版本：{{version}}]\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\personalCenter\personal.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_StorageService__["a" /* StorageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PersonalPage);
    return PersonalPage;
}());

//# sourceMappingURL=personal.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_3_toast_3__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_StorageService__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Toast } from '@ionic-native/toast';

//注入服务


var ChangePasswordPage = (function () {
    function ChangePasswordPage(navCtrl, StorageService, service, toast) {
        this.navCtrl = navCtrl;
        this.StorageService = StorageService;
        this.service = service;
        this.toast = toast;
        this.user = this.StorageService.read("user");
        this.userId = this.user['userId'];
        this.token = this.user['token'];
    }
    ChangePasswordPage.prototype.save = function () {
        var _this = this;
        if (this.oldPass == null) {
            alert("请输入原密码！");
        }
        else if (this.newPass1 == null) {
            alert("请输入新密码！");
        }
        else if (this.newPass2 == null) {
            alert("请再次输入新密码！");
        }
        else if (this.newPass1 != this.newPass2) {
            alert("两次输入的密码不一致！");
        }
        else {
            var p = "userId=" + this.userId
                + "&token=" + this.token
                + "&password=" + this.oldPass
                + "&newPassword=" + this.newPass1;
            var url = 'http://' + this.service.serviceUrl + '/loginController/updateUser.do';
            this.service.service(url, p).subscribe(function (data) {
                _this.result = data;
                if (data['result'] != 1) {
                    console.log("修改失败", data['message']);
                    _this.toast.toast2(data['message']);
                }
                else {
                    console.log("修改成功!");
                    console.log("result:", _this.result);
                    _this.toast.toast2("修改成功");
                    _this.navCtrl.popToRoot();
                }
            }, function (err) {
                console.error(err);
            });
        }
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changePassword',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\personalCenter\changePassword.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true" color="primary">\n\n        <!-- 去掉原来的返回按键并重新设定新的返回 -->\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)=" this.navCtrl.pop();">\n\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            修改密码\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content>\n\n        <div id="div_2"></div>\n\n    <div style="margin-top:4rem;margin-right:3rem;margin-left:3rem;border: 0.1rem solid #000;background-color:white;">\n\n        <div style="margin-top:3rem;margin-right:2rem;margin-left:2rem;border: 0.1rem solid #000;">\n\n            <ion-item>\n\n                <ion-input type="text" placeholder="原密码"[(ngModel)]="oldPass"></ion-input>\n\n            </ion-item>\n\n        </div>\n\n        <div style="margin-top:3rem;margin-right:2rem;margin-left:2rem;border: 0.1rem solid #000;">\n\n            <ion-item>\n\n                <ion-input type="text"placeholder="新密码" [(ngModel)]="newPass1"></ion-input>\n\n            </ion-item>\n\n        </div>\n\n        <div style="margin-top:3rem;margin-right:2rem;margin-bottom:3rem;margin-left:2rem;border: 0.1rem solid #000;">\n\n            <ion-item>\n\n                <ion-input type="text" placeholder="新密码确认" [(ngModel)]="newPass2"></ion-input>\n\n            </ion-item>\n\n        </div>\n\n\n\n        <div padding style="text-align:center">\n\n            <button ion-button  color="primary" style="font-size:1.6rem;" (click)="save()">\n\n                保存\n\n            </button>\n\n        </div>\n\n    </div>\n\n\n\n\n\n\n\n    \n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\personalCenter\changePassword.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__service_StorageService__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* service */], __WEBPACK_IMPORTED_MODULE_2__toast_3_toast_3__["a" /* ToasT */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* service */],
            __WEBPACK_IMPORTED_MODULE_2__toast_3_toast_3__["a" /* ToasT */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=changePassword.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_StorageService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__documentDetails__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Toast } from '@ionic-native/toast';



var DocumentPage = (function () {
    function DocumentPage(navCtrl, StorageService, service) {
        // this.user = this.StorageService.read('user');
        // this.userId=this.user("userId");
        // this.token=this.user("token");
        this.navCtrl = navCtrl;
        this.StorageService = StorageService;
        this.service = service;
    }
    DocumentPage.prototype.documentDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__documentDetails__["a" /* DocumentDetailsPage */]);
    };
    DocumentPage.prototype.ionViewDidEnter = function () {
        // let p = "userId="+this.userId
        // +"&token="+this.token +"&type="+"3";
        // let url = 'http://'+this.service.serviceUrl+'/file/showByDirectoryId.do';
        // this.service.service(url,p).subscribe(
        // 	data => {
        // 		this.documentList = data['eventList'];
        // 		console.log("success!");
        // 		console.log("eventList:",this.documentList);
        // 	},
        // 	err => {
        // 		console.error(err);
        // 	}
        // );
    };
    DocumentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-document',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\document\document.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true" color="primary">\n\n        <!-- 去掉原来的返回按键并重新设定新的返回 -->\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)=" this.navCtrl.pop();">\n\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            资料文档\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background-color:rgb(243, 241, 241)">\n\n    <div>\n\n        <!-- input无法直接居中 -->\n\n        <ion-input style="width:90%;background-color:white;text-align:center;border-radius:20px;margin-left:2rem;margin-right:2rem;margin-top:1rem;" type="text"  [(ngModel)]="search" placeholder="搜索关键字"></ion-input>\n\n    </div>\n\n\n\n    <div style="margin-top:1.5rem">\n\n        <ion-item (click)="documentDetails()">\n\n            <ion-thumbnail item-start>\n\n                <img src="assets/imgs/document/2.png"/>\n\n            </ion-thumbnail>\n\n            <h2>一河一档一策</h2>\n\n            <p>共53类，1100篇文章</p>\n\n            <button style="font-size:3rem;color:black" ion-button clear item-end> > </button>\n\n        </ion-item>\n\n    </div>\n\n\n\n    <div style="margin-top:1.5rem">\n\n        <ion-item>\n\n            <ion-thumbnail item-start>\n\n                <img src="assets/imgs/document/1.png"/>\n\n            </ion-thumbnail>\n\n            <h2>法律法规</h2>\n\n            <p>共53类，1100篇文章</p>\n\n            <button style="font-size:3rem;color:black" ion-button clear item-end> > </button>\n\n        </ion-item>\n\n    </div>\n\n\n\n    <div style="margin-top:1.5rem">\n\n        <ion-item>\n\n            <ion-thumbnail item-start>\n\n                <img src="assets/imgs/document/3.png"/>\n\n            </ion-thumbnail>\n\n            <h2>河流归档资料</h2>\n\n            <p>共53类，1100篇文章</p>\n\n            <button style="font-size:3rem;color:black" ion-button clear item-end> > </button>\n\n        </ion-item>\n\n    </div>\n\n \n\n\n\n</ion-content>\n\n        '/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\document\document.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_StorageService__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* service */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* service */]])
    ], DocumentPage);
    return DocumentPage;
}());

//# sourceMappingURL=document.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_StorageService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Toast } from '@ionic-native/toast';


var DocumentDetailsPage = (function () {
    function DocumentDetailsPage(navCtrl, StorageService, service) {
        // this.user = this.StorageService.read('user');
        // this.userId=this.user("userId");
        // this.token=this.user("token");
        this.navCtrl = navCtrl;
        this.StorageService = StorageService;
        this.service = service;
        this.img_show = false;
    }
    DocumentDetailsPage.prototype.ionViewDidEnter = function () {
        // let p = "userId="+this.userId
        // +"&token="+this.token +"&type="+"3";
        // let url = 'http://'+this.service.serviceUrl+'/file/showByDirectoryId.do';
        // this.service.service(url,p).subscribe(
        // 	data => {
        // 		this.documentList = data['eventList'];
        // 		console.log("success!");
        // 		console.log("eventList:",this.documentList);
        // 	},
        // 	err => {
        // 		console.error(err);
        // 	}
        // );
    };
    DocumentDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-documentDetails',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\document\documentDetails.html"*/'<ion-header>\n\n        <ion-navbar hideBackButton="true" color="primary">\n\n            <!-- 去掉原来的返回按键并重新设定新的返回 -->\n\n            <ion-buttons left>\n\n                <button ion-button icon-only (click)=" this.navCtrl.pop();">\n\n                    <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n                </button>\n\n            </ion-buttons>\n\n            <ion-title>\n\n                一河一档一策\n\n            </ion-title>\n\n        </ion-navbar>\n\n    </ion-header>\n\n    \n\n    <ion-content style="background-color:rgb(243, 241, 241)">\n\n\n\n        <div class="position_a width_100 height_100 padding_10p z_index_100" style="background-color:#fff;" [hidden]="img_show==false" (click)="img_show=false">\n\n            <div style="text-align:center;margin-top:2rem;">\n\n                <label></label>\n\n            </div>\n\n        </div>\n\n        <div>\n\n            <!-- input无法直接居中 -->\n\n            <ion-input style="width:90%;background-color:white;text-align:center;border-radius:20px;margin-left:2rem;margin-right:2rem;margin-top:1rem;" type="text"  [(ngModel)]="search" placeholder="搜索关键字"></ion-input>\n\n        </div>\n\n    \n\n        <div style="margin-top:1.5rem" (click)="img_show=true;">\n\n            <ion-item>\n\n                <ion-thumbnail item-start>\n\n                    <img src="assets/imgs/document/14.png"/>\n\n                </ion-thumbnail>\n\n                <h2 style="margin-bottom:1rem;">福建省“一河一档一策”编制大纲</h2>\n\n                <p style="float:left">流域：闽江流域</p>\n\n                <p style="float:right">2017-11-21</p>\n\n            </ion-item>\n\n            <br/>\n\n        </div>\n\n\n\n        <div style="margin-top:0.5rem">\n\n            <ion-item>\n\n                <ion-thumbnail item-start>\n\n                    <img src="assets/imgs/document/14.png"/>\n\n                </ion-thumbnail>\n\n                <h2 style="margin-bottom:1rem;">福建省“一河一档一策”编制大纲</h2>\n\n                <p style="float:left">流域：闽江流域</p>\n\n                <p style="float:right">2017-11-21</p>\n\n            </ion-item>\n\n            <br/>\n\n        </div>\n\n\n\n        <div style="margin-top:0.5rem">\n\n            <ion-item>\n\n                <ion-thumbnail item-start>\n\n                    <img src="assets/imgs/document/14.png"/>\n\n                </ion-thumbnail>\n\n                <h2 style="margin-bottom:1rem;">福建省“一河一档一策”编制大纲</h2>\n\n                <p style="float:left">流域：闽江流域</p>\n\n                <p style="float:right">2017-11-21</p>\n\n            </ion-item>\n\n            <br/>\n\n        </div>\n\n     \n\n    \n\n    </ion-content>\n\n            '/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\document\documentDetails.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_StorageService__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* service */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* service */]])
    ], DocumentDetailsPage);
    return DocumentDetailsPage;
}());

//# sourceMappingURL=documentDetails.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiverLogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_3_toast_3__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_StorageService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pandect_eventDetails__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__riverTrajectory__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__log__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pandect_pandect__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Toast } from '@ionic-native/toast';


//注入服务


//import { NativeStorage } from '@ionic-native/native-storage';
//导入页面




// import { DetailsPage } from "./details";
// import { NewEventPage } from './newEvent';
var RiverLogPage = (function () {
    function RiverLogPage(navCtrl, StorageService, service, 
        //private nativeStorage: NativeStorage,
        toast, cd) {
        this.navCtrl = navCtrl;
        this.StorageService = StorageService;
        this.service = service;
        this.toast = toast;
        this.cd = cd;
        this.userName = "";
        this.eventList = []; //所有事件
        this.eventList1 = [];
        this.eventList2 = [];
        this.eventList3 = [];
        this.pet = "all"; //设置默认选中
        this.page = 1;
        this.user = this.StorageService.read("user");
        this.userId = this.user['userId'];
        this.token = this.user['token'];
        if (this.user['roleId'] == 4) {
            this.appType = "2";
        }
        else {
            this.appType = "1";
        }
    }
    RiverLogPage.prototype.eventDetails = function (x, y, z, a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pandect_eventDetails__["a" /* EventDetailsPage */], {
            eventId: x,
            type: y,
            startTime: z,
            endTime: a,
        });
    };
    RiverLogPage.prototype.riverTrajectory = function (x) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__riverTrajectory__["a" /* RiverTrajectoryPage */], {
            patrolRecordId: x,
        });
    };
    RiverLogPage.prototype.log = function (x, y) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__log__["a" /* LogPage */], {
            patrolRecordId: x,
            riverName: y,
        });
    };
    RiverLogPage.prototype.pendect = function (x) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pandect_pandect__["a" /* PandectPage */], {
            patrolRecordId: x,
        });
    };
    //用于上拉加载
    RiverLogPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('加载开始');
        setTimeout(function () {
            _this.page += 1;
            _this.change(_this.page);
            console.log('加载结束');
            infiniteScroll.complete();
        }, 1000);
    };
    //用于执行翻页
    RiverLogPage.prototype.change = function (a) {
        // console.log("类型",b);
        // console.log("页数",a);
        //去掉插件
        // this.nativeStorage.getItem('user').then(
        //     data => {
        //         let p = "userId=" + this.user['userId']
        //             + "&token=" + this.user['token']
        //             + "&startTime=" + this.startTime
        //             + "&endTime=" + this.endTime
        //             + "&appType=" + this.appType
        //             + "&userName=" + this.userName
        //             + "&pageSize=5"
        //             + "&pageNo=" + a
        //             ;
        //         let url = 'http://' + this.service.serviceUrl + '/patrolRecordController/queryPatrolRecord.do';
        var _this = this;
        //         this.service.service(url, p).subscribe(
        //             data => {
        //                 if (data['result'] == -1) {
        //                     this.toast.showShortBottom("其他用户登录了您的账号。").subscribe();
        //                     this.navCtrl.popToRoot();
        //                 } else if (data['result'] == 1) {
        //                     if (a == 1) {//清空上一次搜索记录的页数
        //                         this.page = 1;
        //                         this.eventList2 = [];
        //                         console.log("日志", this.eventList2);
        //                         for (let i = 0; i < data['PatrolRecord'].length; i++) {
        //                             this.eventList2.push(data['PatrolRecord'][i]);
        //                         }
        //                         this.cd.detectChanges();
        //                     }else{
        //                         for (let i = 0; i < data['PatrolRecord'].length; i++) {
        //                             this.eventList2.push(data['PatrolRecord'][i]);
        //                         }
        //                     }
        //                     console.log("success!");
        //                     console.log("待办列表:", this.eventList2);
        //                     // console.log("长度",this.eventList2[0]['riverName'].length);
        //                 }
        //             },
        //             err => {
        //                 console.error(err);
        //             }
        //         );
        //     }
        // );
        //自己实现
        var data = this.StorageService.read('user');
        if (data != null) {
            var p = "userId=" + this.user['userId']
                + "&token=" + this.user['token']
                + "&startTime=" + this.startTime
                + "&endTime=" + this.endTime
                + "&appType=" + this.appType
                + "&userName=" + this.userName
                + "&pageSize=5"
                + "&pageNo=" + a;
            var url = 'http://' + this.service.serviceUrl + '/patrolRecordController/queryPatrolRecord.do';
            this.service.service(url, p).subscribe(function (data) {
                if (data['result'] == -1) {
                    _this.toast.toast2("其他用户登录了您的账号。");
                    _this.navCtrl.popToRoot();
                }
                else if (data['result'] == 1) {
                    if (a == 1) {
                        _this.page = 1;
                        _this.eventList2 = [];
                        console.log("日志", _this.eventList2);
                        for (var i = 0; i < data['PatrolRecord'].length; i++) {
                            _this.eventList2.push(data['PatrolRecord'][i]);
                        }
                        _this.cd.detectChanges();
                    }
                    else {
                        for (var i = 0; i < data['PatrolRecord'].length; i++) {
                            _this.eventList2.push(data['PatrolRecord'][i]);
                        }
                    }
                    console.log("success!");
                    console.log("待办列表:", _this.eventList2);
                    // console.log("长度",this.eventList2[0]['riverName'].length);
                }
            }, function (err) {
                console.error(err);
            });
        }
    };
    RiverLogPage.prototype.ngOnInit = function () {
        this.change(1);
    };
    RiverLogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-riverLog',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\riverLog\riverLog.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true" color="primary">\n\n        <!-- 去掉原来的返回按键并重新设定新的返回 -->\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)=" this.navCtrl.pop();">\n\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            巡查日志\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div style="height:80px;background-color:white;border-bottom:0.1rem black solid">\n\n            <div id="div_2"></div>\n\n        <ion-item>\n\n            <ion-label style="color:black;font-size:1.6rem">请设置开始时间：</ion-label>\n\n            <ion-datetime displayFormat="YYYY/MM/DD" [(ngModel)]="startTime" min="2018-01-01" max="2020-12-31" placeholder="2018-01-01"\n\n                cancelText="取消" doneText="确认"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label style="color:black;font-size:1.6rem">请设置结束时间：</ion-label>\n\n            <ion-datetime displayFormat="YYYY/MM/DD" [(ngModel)]="endTime" min="2018-01-01" max="2020-12-31" placeholder="2018-01-01"\n\n            cancelText="取消" doneText="确认"></ion-datetime>\n\n        </ion-item>\n\n    </div>\n\n    <div style="height:40px;background-color:white;border-top:0.1rem black solid;border-bottom:0.1rem black solid">\n\n        <ion-input class="position_a width_70 left_0 padding_left_10p" type="text" [(ngModel)]="userName" placeholder="请输入要查询巡河员名字："></ion-input>\n\n        <button class="width_30 left_70 z_index_50" style="margin:0" ion-button (click)="change(1)">确定</button>\n\n    </div>\n\n\n\n    <div *ngFor="let x of eventList2; let count = index" class="z_index_10" style="top:120px">\n\n        <div *ngIf="x.riverName.length<=21" class="div_1">\n\n            <div style="margin-left:1rem;">\n\n                <div style="vertical-align:middle;margin-top:1rem">\n\n                    <span class="span_title">\n\n                        <b>{{count+1}}.{{x.riverName}}</b>\n\n                    </span>\n\n                </div>\n\n                <div style="margin-left:1.5rem;margin-top:0.6rem">\n\n                    <label style="font-size:1.3rem">{{x.startTime | date: "yyyy/MM/dd HH:mm:ss"}}</label>\n\n                </div>\n\n                <div style="margin-left:1.5rem;margin-top:0.5rem">\n\n                    <label>未办结</label>\n\n                    <label style="margin-left:1rem;color:red">{{x.toSolve}}</label>\n\n                    <label style="margin-left:1rem;margin-right:1rem;"> | </label>\n\n                    <label>已办结</label>\n\n                    <label style="margin-left:1rem;color:green">{{x.solve}}</label>\n\n                </div>\n\n            </div>\n\n            <div style="margin-top:1.5rem;">\n\n                <div class="div_left" *ngIf="x.toSolve!=0||x.solve!=0" (click)="pendect(x.patrolRecordId)">\n\n                    <div class="left_span">查看事件</div>\n\n                </div>\n\n                <div class="div_right" *ngIf="x.toSolve!=0||x.solve!=0" (click)="log(x.patrolRecordId,x.riverName)">\n\n                    <div class="left_span">查看日志</div>\n\n                </div>\n\n                <div class="div_all" *ngIf="x.toSolve==0&&x.solve==0" (click)="log(x.patrolRecordId,x.riverName)">\n\n                    <div class="left_span">查看日志</div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div *ngIf="x.riverName.length>21" class="div_1" style="height:160px">\n\n            <div style="margin-left:1rem;">\n\n                <div style="vertical-align:middle;margin-top:1rem">\n\n                    <span class="span_title">\n\n                        <b>{{count+1}}.{{x.riverName}}</b>\n\n                    </span>\n\n                </div>\n\n                <div style="margin-left:1.5rem;margin-top:0.6rem">\n\n                    <label style="font-size:1.3rem">{{x.startTime | date: "yyyy/MM/dd HH:mm:ss"}}</label>\n\n                </div>\n\n                <div style="margin-left:1.5rem;margin-top:0.5rem">\n\n                    <label>未办结</label>\n\n                    <label style="margin-left:1rem;color:red">{{x.toSolve}}</label>\n\n                    <label style="margin-left:1rem;margin-right:1rem;"> | </label>\n\n                    <label>已办结</label>\n\n                    <label style="margin-left:1rem;color:green">{{x.solve}}</label>\n\n                </div>\n\n            </div>\n\n            <div style="margin-top:1.5rem;">\n\n                <div class="div_left" *ngIf="x.toSolve!=0||x.solve!=0" (click)="pendect(x.patrolRecordId)">\n\n                    <div class="left_span">查看事件</div>\n\n                </div>\n\n                <div class="div_right" *ngIf="x.toSolve!=0||x.solve!=0" (click)="log(x.patrolRecordId,x.riverName)">\n\n                    <div class="left_span">查看日志</div>\n\n                </div>\n\n                <div class="div_all" *ngIf="x.toSolve==0&&x.solve==0" (click)="log(x.patrolRecordId,x.riverName)">\n\n                    <div class="left_span">查看日志</div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n    <!-- 用于上拉加载 -->\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="正在加载更多日志！">\n\n        </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\riverLog\riverLog.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__service_StorageService__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* service */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* service */],
            __WEBPACK_IMPORTED_MODULE_2__toast_3_toast_3__["a" /* ToasT */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], RiverLogPage);
    return RiverLogPage;
}());

//# sourceMappingURL=riverLog.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_StorageService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pandect_eventDetails__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__riverTrajectory__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Toast } from '@ionic-native/toast';
//注入服务




var LogPage = (function () {
    function LogPage(navCtrl, StorageService, service, params) {
        this.navCtrl = navCtrl;
        this.StorageService = StorageService;
        this.service = service;
        this.params = params;
        this.patrolRecord = []; //所有事件
        this.eventList = []; //所有事件
        this.user = this.StorageService.read("user");
        this.userId = this.user['userId'];
        this.token = this.user['token'];
        this.patrolRecordId = this.params.get('patrolRecordId');
    }
    LogPage.prototype.eventDetails = function (x, y, z, a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pandect_eventDetails__["a" /* EventDetailsPage */], {
            eventId: x,
            type: y,
        });
    };
    LogPage.prototype.riverTrajectory = function (x) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__riverTrajectory__["a" /* RiverTrajectoryPage */], {
            patrolRecordId: x,
        });
    };
    LogPage.prototype.ngOnInit = function () {
        var _this = this;
        var p1 = "userId=" + this.userId
            + "&token=" + this.token + "&patrolRecordId=" + this.patrolRecordId;
        var url = 'http://' + this.service.serviceUrl + '/patrolRecordController/queryPointFromPatrolRecord.do';
        this.service.service(url, p1).subscribe(function (data) {
            _this.patrolRecord = data['PatrolRecord'];
            _this.eventList = data['PatrolRecord'][0]['eventList'];
            // this.name = this.eventList[0]['userName'];
            // this.startTime = this.eventList[0]['startTime'];
            // this.endTime = this.eventList[0]['endTime'];
            // this.rPD_map.c(this.point);
            console.log("patrolRecord", _this.patrolRecord);
            console.log("eventList", _this.eventList);
            console.log("success!");
        }, function (err) {
            console.error(err);
        });
    };
    LogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-log',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\riverLog\log.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true" color="primary">\n\n        <!-- 去掉原来的返回按键并重新设定新的返回 -->\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)=" this.navCtrl.pop();">\n\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <!-- 根据传入的事件编号进行判断 更改标题   代办事项 跟进事项 事件结案 -->\n\n        <ion-title>\n\n            日志详情\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- 同上 根据传入的值不同，内容也不同 待办事项 到事件上报；跟进事项 到事件上报 事件结案 到事件结案 几个DIV都需要加上相应的判断-->\n\n<ion-content>\n\n\n\n    <div *ngFor="let x of patrolRecord;">\n\n        <div style="margin-left:2rem;font-size:1.6rem">\n\n            <p>河流名称：{{x.riverName}}</p>\n\n            <!-- <p>巡查范围：{{x.patrolRange}}</p> -->\n\n            <p>巡查人员：{{x.userName}}</p>\n\n            <p>开始时间：{{x.startTime| date: "yyyy-MM-dd HH:mm:ss"}}</p>\n\n            <p>结束时间：{{x.endTime| date: "yyyy-MM-dd HH:mm:ss"}}</p>\n\n        </div>\n\n        <!-- <div style="text-align:center;margin-top:1rem;margin-bottom:1rem;">\n\n            <label>未办结事件</label>\n\n            <ion-badge color="yellow">{{x.toSolve}}</ion-badge>\n\n            <label>已办结事件</label>\n\n            <ion-badge color="secondary">{{x.solve}}</ion-badge>\n\n        </div> -->\n\n        <div style="text-align:center;margin-top:1rem;margin-bottom:1rem;">\n\n            <label>未办结</label>\n\n            <label style="margin-left:1rem;color:red">{{x.toSolve}}</label>\n\n            <label style="margin-left:1rem;margin-right:1rem;"> | </label>\n\n            <label>已办结</label>\n\n            <label style="margin-left:1rem;color:green">{{x.solve}}</label>\n\n        </div>\n\n        <div style="margin-top:2rem;text-align:center">\n\n            <button ion-button color="primary" (click)="riverTrajectory(x.patrolRecordId)">查看巡河轨迹</button>\n\n        </div>\n\n\n\n    </div>\n\n\n\n    <div *ngFor="let a of eventList;" style="color:black;margin-left:2rem" (click)="eventDetails(a.eventId,2)">\n\n        <hr>\n\n        <p>事件问题：{{a.eventContent}}</p>\n\n        <p>事件状态：{{a.eventTypeName}}</p>\n\n        <p *ngIf="a.eventTypeName!=\'已完成\'">当前处理人：{{a.nowRealName}}</p>\n\n    </div>\n\n    <hr style="margin-left:2rem">\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\riverLog\log.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LogPage);
    return LogPage;
}());

//# sourceMappingURL=log.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_StorageService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_params__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Toast } from '@ionic-native/toast';
//注入服务



var StatisticsPage = (function () {
    function StatisticsPage(navCtrl, StorageService, service, params) {
        this.navCtrl = navCtrl;
        this.StorageService = StorageService;
        this.service = service;
        this.params = params;
        this.a = true;
        this.b = false;
        this.c = false;
        this.d = false;
        this.eventList = []; //所有事件
        this.todo = []; //待办
        this.toSolve = []; //在办
        this.solve = []; //已办
        this.problemType = [{}]; //问题类型
        this.pet = "DailyTasks"; //设置默认选中
        this.user = this.StorageService.read("user");
        this.flag = true;
        this.userId = this.user["userId"];
        this.token = this.user["token"];
        this.code = 11;
        this.regionId = this.user["regionId"];
    }
    StatisticsPage.prototype.change = function (x) {
        if (x == 1) {
            this.a = true;
            this.b = this.c = this.d = false;
        }
        else if (x == 2) {
            this.b = true;
            this.a = this.c = this.d = false;
        }
        else if (x == 3) {
            this.c = true;
            this.a = this.b = this.d = false;
        }
        else {
            this.d = true;
            this.a = this.c = this.b = false;
        }
    };
    StatisticsPage.prototype.ngOnInit = function () {
    };
    StatisticsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //事件统计
        var p1 = "userId=" + this.userId
            + "&token=" + this.token
            + "&regionId=" + this.regionId;
        var url1 = 'http://' + this.service.serviceUrl + '/eventController/countEvent.do';
        //问题类型统计
        var p2 = "userId=" + this.userId
            + "&token=" + this.token;
        var url2 = 'http://' + this.service.serviceUrl + '/statisticalEventController/statisticsProblemTypes.do';
        this.service.service(url1, p1).subscribe(function (data) {
            if (data['result'] == 1) {
                _this.todo = data['todo'];
                _this.toSolve = data['toSolve'];
                _this.solve = data['solve'];
                console.log("success!");
                console.log("todo:", _this.todo);
                console.log("toSolve:", _this.toSolve);
                console.log("solve:", _this.solve);
            }
            else {
                console.error("获取失败");
            }
        }, function (err) {
            console.error(err);
        });
        this.service.service(url2, p2).subscribe(function (data) {
            if (data['result'] == 1) {
                _this.problemType = data['problemTypeList'];
                console.log("success!");
                console.log("problemType:", _this.problemType);
            }
            else {
                console.error("无数据");
            }
        }, function (err) {
            console.error(err);
        });
        var url_p = "type=" + 0
            + "&value=" + this.regionId
            + "&userId=" + this.userId
            + "&token=" + this.token;
        var url = 'http://' + this.service.serviceUrl + '/statisticsController/getStatisticsInformation.do';
        this.service.service(url, url_p).subscribe(function (data) {
            console.log(data);
            // 区域水质统计
            _this.f_data1 = data['items1'];
            var areaWaterChart = echarts.init(document.getElementById('regionalWaterQuality'));
            var areaWaterChart_data = [];
            for (var i = 0; i < _this.f_data1.length; i++) {
                var f_json = {
                    value: _this.f_data1[i]['count'],
                    name: _this.f_data1[i]['region_name']
                };
                areaWaterChart_data.push(f_json);
            }
            var optionChart = {
                title: {
                    text: '水质对比',
                    x: 'center'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['丰泽区', '洛江区', '泉港区',
                        '鲤城区', '惠安县', '德化县',
                        '安溪县', '石狮市', '永春县',
                        '晋江市', '南安市']
                },
                series: [
                    {
                        name: '水质对比',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: areaWaterChart_data,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            areaWaterChart.setOption(optionChart);
            areaWaterChart.on('click', function (p) {
                // this.toast.showShortBottom(p.name + '：' + p.value + '，占比：' + p.percent + '%').subscribe();
            });
            // 水质总览
            _this.f_data2 = data['items2'];
            if (_this.f_data2.length == 0) {
                alert("水质总览无数据！");
            }
            else {
                var waterChart = echarts.init(document.getElementById('waterQuality'));
                var waterChart_data = [];
                for (var i = 0; i < _this.f_data2.length; i++) {
                    var f_json = {
                        value: _this.f_data2[i]['count'],
                        name: _this.f_data2[i]['type_name']
                    };
                    waterChart_data.push(f_json);
                }
                var optionChart2 = {
                    title: {
                        text: '水质对比',
                        x: 'center'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['Ⅰ类水质', 'Ⅱ类水质', 'Ⅲ类水质', 'Ⅳ类水质', 'Ⅴ类水质', '劣Ⅴ类']
                    },
                    series: [
                        {
                            name: '水质对比',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: waterChart_data,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                waterChart.setOption(optionChart2);
                waterChart.on('click', function (p) {
                    // this.toast.showShortBottom(p.name + '：' + p.value + '，占比：' + p.percent + '%').subscribe();
                });
            }
        }, function (err) {
            console.error(err);
        });
    };
    StatisticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-statistics',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\statistics\statistics.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true" color="primary">\n\n        <!-- 去掉原来的返回按键并重新设定新的返回 -->\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)=" this.navCtrl.pop();">\n\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            统计分析\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n\n\n    <ion-select [(ngModel)]="river" [interface]="\'popover\'" placeholder="水质总览" (ngModelChange)="change(river)">\n\n        <ion-option value="1">水质总览</ion-option>\n\n        <ion-option *ngIf="user[\'roleId\']!=5" value="2">区域水质统计</ion-option>\n\n        <ion-option value="3">事件状态</ion-option>\n\n        <ion-option value="4"> 问题分类</ion-option>\n\n    </ion-select>\n\n\n\n    <div [hidden]="a==false">\n\n        <div style="margin-left:2rem;" *ngFor="let x of f_data2">{{x.type_name}}:{{x.count}}个</div>\n\n    </div>\n\n    <div [hidden]="a==false" id="waterQuality" style="width:360px;height:400px;"></div>\n\n    <div [hidden]="b==false">\n\n        <div style="margin-left:2rem;" *ngFor="let x of f_data1">{{x.region_name}}:{{x.count}}个</div>\n\n    </div>\n\n    <div [hidden]="b==false" id="regionalWaterQuality" style="width:360px;height:400px;"></div>\n\n    <div [hidden]="c==false" style="margin-left:2rem;">\n\n        <div>待办事件:{{todo}}</div>\n\n        <div>在办事件:{{toSolve}}</div>\n\n        <div>办结事件:{{solve}}</div>\n\n    </div>\n\n    <div [hidden]="d==false" style="margin-left:2rem;">\n\n        <div *ngFor="let x of problemType">{{x.problemTypeName}}:{{x.count}}</div>\n\n    </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\statistics\statistics.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_params__["a" /* NavParams */]])
    ], StatisticsPage);
    return StatisticsPage;
}());

//# sourceMappingURL=statistics.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(367);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyApp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pandect_pandect__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pandect_eventDetails__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pandect_eventSolve__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_message_message__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_message_messageDetails__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_message_billboard__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_message_waterMonitor__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_message_play_movie__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_personalCenter_personal__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_personalCenter_changePassword__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_document_document__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_document_documentDetails__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_pandect_newEvent__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_riverLog_riverLog__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_riverLog_riverTrajectory__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_riverLog_log__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_statistics_statistics__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { RecentPlanDetailsPage } from '../pages/patrol/recentPlanDetails';









// import { TestPage } from '../pages/test/test';







var MyApp = (function () {
    function MyApp(platform, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        // rootPage:any = HomePage;
        this.logout_isShow = false;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //退回事件重写
            platform.registerBackButtonAction(function () {
                var activeVC = _this.navCtrl.getActive();
                var activePage = activeVC.instance;
                if (activePage instanceof __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] || activePage instanceof __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]) {
                    return _this.confirmExitApp();
                }
                else {
                    if (!_this.navCtrl.canGoBack()) {
                        return _this.confirmExitApp();
                    }
                    return _this.navCtrl.pop();
                }
            });
        });
    }
    MyApp.prototype.confirmExitApp = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '通知',
            subTitle: '是否退出应用？',
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        _this.logout_isShow = false;
                    }
                },
                {
                    text: '退出',
                    handler: function () {
                        //退出APP
                        //this.backgroundGeolocation.stop();
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        if (!this.logout_isShow) {
            this.logout_isShow = true;
            alert.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('rootNavController'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            template: "<ion-nav #rootNavController [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                MyApp,
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pandect_pandect__["a" /* PandectPage */],
                // RecentPlanDetailsPage,
                __WEBPACK_IMPORTED_MODULE_7__pages_pandect_eventDetails__["a" /* EventDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pandect_eventSolve__["a" /* EventSolvePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_message_waterMonitor__["a" /* WaterMonitorPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_message_play_movie__["a" /* Play_moviePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_personalCenter_personal__["a" /* PersonalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_personalCenter_changePassword__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_document_document__["a" /* DocumentPage */],
                // TestPage,
                __WEBPACK_IMPORTED_MODULE_18__pages_pandect_newEvent__["a" /* NewEventPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_document_documentDetails__["a" /* DocumentDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_riverLog_riverLog__["a" /* RiverLogPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_riverLog_riverTrajectory__["a" /* RiverTrajectoryPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_statistics_statistics__["a" /* StatisticsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_riverLog_log__["a" /* LogPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_message_billboard__["a" /* BillboardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_message_messageDetails__["a" /* MessageDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(MyApp, {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                MyApp,
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pandect_pandect__["a" /* PandectPage */],
                // RecentPlanDetailsPage,
                __WEBPACK_IMPORTED_MODULE_7__pages_pandect_eventDetails__["a" /* EventDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pandect_eventSolve__["a" /* EventSolvePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_message_waterMonitor__["a" /* WaterMonitorPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_message_play_movie__["a" /* Play_moviePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_personalCenter_personal__["a" /* PersonalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_personalCenter_changePassword__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_document_document__["a" /* DocumentPage */],
                // TestPage,
                __WEBPACK_IMPORTED_MODULE_18__pages_pandect_newEvent__["a" /* NewEventPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_document_documentDetails__["a" /* DocumentDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_riverLog_riverLog__["a" /* RiverLogPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_riverLog_riverTrajectory__["a" /* RiverTrajectoryPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_statistics_statistics__["a" /* StatisticsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_riverLog_log__["a" /* LogPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_message_billboard__["a" /* BillboardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_message_messageDetails__["a" /* MessageDetailsPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_update__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_StorageService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_utils__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AppVersion } from '@ionic-native/app-version';
//import { File } from '@ionic-native/file';
//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
//import { FileOpener } from '@ionic-native/file-opener';
//import { AlertController } from 'ionic-angular';
// import { Toast } from '@ionic-native/toast';




//import { NativeStorage } from '@ionic-native/native-storage';//原生存储

// declare var cordova: any;
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, service, StorageService, update, 
        //private appVersion: AppVersion,
        // private toast: Toast,
        //private nativeStorage: NativeStorage,
        utilsService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.StorageService = StorageService;
        this.update = update;
        this.utilsService = utilsService;
        this.loadingCtrl = loadingCtrl;
        this.username = "";
        this.password = "";
        this.isSavePwd = false;
    }
    //获取权限
    // private getPermission() {
    //     //获取存储权限
    //     cordova.plugins.permiPlugin.getPermission(1, result => {
    //         console.log("re:", result);
    //         this.getv();
    //     }, error => {
    //         this.getv();
    //     });
    // }
    LoginPage.prototype.ionViewDidLoad = function () {
        document.getElementById('input_user').onfocus = function () {
            document.getElementById('login_logo').style.display = 'none';
        };
        document.getElementById('input_user').onblur = function () {
            document.getElementById('login_logo').style.display = 'block';
        };
        document.getElementById('input_password').onfocus = function () {
            document.getElementById('login_logo').style.display = 'none';
        };
        document.getElementById('input_password').onblur = function () {
            document.getElementById('login_logo').style.display = 'block';
        };
        // this.username = (this.utilsService.getCookie("username")==""||this.utilsService.getCookie("username")==null)?"":this.utilsService.getCookie("username");
        // this.password = (this.utilsService.getCookie("password")==""||this.utilsService.getCookie("password")==null)?"":this.utilsService.getCookie("password");
        // this.isSavePassword = (this.utilsService.getCookie("isSavePassword")=="1")?"1":"0";
        // if(this.isSavePassword=="1") {this.isSave=true;}
        // else {this.isSave=false;}
        this.username = (this.StorageService.read("userName") == "" || this.StorageService.read("userName") == null) ? "" : this.StorageService.read("userName");
        this.password = (this.StorageService.read("password") == "" || this.StorageService.read("password") == null) ? "" : this.StorageService.read("password");
        this.isSavePassword = (this.StorageService.read("isSavePassword") == "1") ? "1" : "0";
        if (this.isSavePassword == "1") {
            this.isSave = true;
        }
        else {
            this.isSave = false;
        }
        // //获取权限
        // try {
        //     this.getPermission();
        // } catch (err) {
        //     console.error(err);
        //     let t = setTimeout(() => { this.getPermission() }, 3000)
        //     //this.getPermission();
        // }
    };
    // 跳转
    LoginPage.prototype.Login = function () {
        if (this.username == "") {
            alert("请输入用户名！");
        }
        else if (this.password == "") {
            alert("请输入密码！");
            // } else if(this.randCode == ""){
            //   this.login_result="请输入验证码！";
        }
        else {
            // this.utilsService.setCookie("username",this.username,15);
            // this.utilsService.setCookie("username", this.username, 15);
            this.StorageService.write("userName", this.username);
            //this.logindo('username='+this.txt_username+'&password='+this.pwd_password);
            this.pushLoginTabsPage();
        }
    };
    LoginPage.prototype.pushLoginTabsPage = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: '页面载入中，请等待...'
        });
        loading.present();
        var p = "username=" + this.username
            + "&type=" + "app"
            + "&password=" + this.password;
        var url = 'http://' + this.service.serviceUrl + '/loginController/login.do';
        this.service.service(url, p).subscribe(function (data) {
            _this.result = data['result'];
            if (_this.result == 1) {
                console.log("登录成功", _this.isSave);
                if (_this.isSave == true) {
                    _this.isSavePassword = "1";
                }
                else {
                    _this.isSavePassword = "0";
                }
                _this.user = data['user'];
                // console.log("riverId",this.user['riverList'][0].riverId);
                _this.StorageService.write('user', _this.user);
                //去掉插件
                // this.nativeStorage.setItem('user', { user: this.user })
                //     .then(
                //     () => console.log('Stored item!'),
                //     error => console.error('Error storing item', error)
                //     );
                // ;
                var p1 = "userId=" + _this.user['userId']
                    + "&token=" + _this.user['token'];
                var url1 = 'http://' + _this.service.serviceUrl + '/notice/fountPageShow.do';
                _this.service.service(url1, p1).subscribe(function (data) {
                    _this.eventList = data['noticeList'];
                    _this.StorageService.write("adList", _this.eventList);
                    for (var i = 0; i < _this.eventList.length; i++) {
                        _this.StorageService.write("ad" + i, _this.eventList[i]['fountImgUrl']);
                        _this.StorageService.write("long", _this.eventList.length);
                        // console.log("this.adList[i]['ad_pic']",this.eventList[i]['fountImgUrl']);
                        // console.log("long",this.eventList.length);
                    }
                    // this.StorageService.write('eventList',this.eventList);
                    console.log("success!");
                    console.log("eventList:", _this.eventList);
                    _this.StorageService.write("isSavePassword", _this.isSavePassword);
                    if (_this.isSavePassword == "1") {
                        // this.StorageService.write("userName", this.username);
                        _this.StorageService.write("password", _this.password);
                    }
                    else {
                        // this.StorageService.write("userName", this.username);
                        _this.StorageService.write("password", "");
                        console.log("空");
                    }
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                }, function (err) {
                    console.error(err);
                });
            }
            else {
                alert("账号或密码不正确");
                _this.password = "";
                _this.isSave = false;
            }
            console.log(data);
            loading.dismiss();
        }, function (err) {
            console.error(err);
            loading.dismiss();
            alert("账号或密码不正确");
        });
    };
    //版本更新
    LoginPage.prototype.getv = function () {
        var _this = this;
        var p2 = "";
        var url = 'http://' + this.service.serviceUrl + '/appController/queryVersion.do';
        this.service.service(url, p2).subscribe(function (data) {
            //console.log("df",data);
            _this.ver = data['version'];
            console.log("服务器版本:", _this.ver);
            // this.appVersion.getVersionNumber().then(
            //     (version: string) => {
            //         console.log("本机版本:", version);
            //         //alert(version);
            //         this.version = version;
            //         this.StorageService.write("version", this.version);
            //         if (this.ver > this.version) {
            //             //alert("更新");
            //             this.update.update(version, this.ver);
            //             console.log(this.version, this.ver);
            //         } else {
            //             console.log(this.version, this.ver);
            //         }
            //     }
            // ).catch(err => {
            //     console.log('getVersionNumber:' + err);
            // });
        }, function (err) {
            console.error(err);
            //alert(err);
        });
    };
    //跳转等待
    LoginPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: '页面载入中，请等待...'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\login\login.html"*/'       <ion-content style="background-color: #ffffff">\n	<div class="login_bg" >\n		<div class="login_logo" id="login_logo">\n			<div>\n				<img src="./assets/imgs/login.png">\n			</div>\n			<span style="width:110px;">南平智慧河长</span>\n		</div>\n	</div>\n\n	<div class="login_user">\n		<div class="login_user0">\n			<img src="./assets/imgs/user.png" class="left">\n			<input id="input_user" type="text" [(ngModel)]="username" placeholder="手机号码/用户名" style="background-color: #f5f5f5">\n			<img src="./assets/imgs/clean.png" class="right" *ngIf="username.length!=0" (click)="username=\'\'">\n		</div>\n		<div class="login_user1">\n			<img src="./assets/imgs/password.png" class="left">\n			<input id="input_password" type="password" [(ngModel)]="password" placeholder="密码" style="background-color: #f5f5f5">\n			<img src="./assets/imgs/clean.png" class="right" *ngIf="password.length!=0" (click)="password=\'\'">\n		</div>\n		<div class="login_user2">\n			<ion-checkbox [(ngModel)]="isSave"></ion-checkbox>\n			<span>记住密码</span>\n			<span class="right">忘记密码</span>\n		</div>\n	</div>\n\n	<button class="login_btn" ion-button round (click)="Login()">登 录</button>\n	\n	<div style="position: absolute;bottom: 0px;right: 0px;">当前版本号：{{this.version}}</div>\n</ion-content>\n'/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* service */], __WEBPACK_IMPORTED_MODULE_4__update_update__["a" /* update */], __WEBPACK_IMPORTED_MODULE_6__service_utils__["a" /* UtilsService */], __WEBPACK_IMPORTED_MODULE_5__service_StorageService__["a" /* StorageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* service */],
            __WEBPACK_IMPORTED_MODULE_5__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__update_update__["a" /* update */],
            __WEBPACK_IMPORTED_MODULE_6__service_utils__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChongbaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_StorageService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_3_toast_3__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Camera, CameraOptions } from '@ionic-native/camera';


// import { Toast } from '@ionic-native/toast';

var ChongbaoPage = (function () {
    function ChongbaoPage(navCtrl, navParams, service, 
        // private camera: Camera,
        cd, StorageService, toast, 
        //private transfer: FileTransfer,
        //private file: File,
        actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.cd = cd;
        this.StorageService = StorageService;
        this.toast = toast;
        this.actionSheetCtrl = actionSheetCtrl;
        this.csrc = "";
        this.rPD_csrc_arr = [];
        this.eventContent = "";
        this.eventList = []; //所有事件
        this.nextuserList = [];
        this.show = false;
        this.btn_do_newEventByImg_disabled = false;
        this.btn_do_newEventByImg = "处理";
        this.eventId = this.navParams.get('eventId');
        this.user = this.StorageService.read('user');
        this.userId = this.user['userId'];
        this.token = this.user['token'];
        this.solve = this.navParams.get('solve');
        // console.log("solve",this.solve);
    }
    //fileTransfer: FileTransferObject = this.transfer.create();
    ChongbaoPage.prototype.ngOnInit = function () {
        var _this = this;
        var p = "userId=" + this.userId
            + "&token=" + this.token
            + "&eventId=" + this.eventId;
        var url = 'http://' + this.service.serviceUrl + '/eventController/queryWorkflowLog.do';
        this.service.service(url, p).subscribe(function (data) {
            if (data['result'] == -1) {
                _this.toast.toast2("其他用户登录了您的账号。");
                _this.navCtrl.popToRoot();
            }
            else if (data['result'] == 1) {
                _this.eventList = data['eventList'];
                _this.workFlow = data['workflowLog'];
                console.log("eventSolve:", _this.eventList);
                console.log("success!");
                console.log("eventSolveworkFlow:", _this.workFlow);
            }
        }, function (err) {
            console.error(err);
        });
    };
    ChongbaoPage.prototype.deletePhoto = function () {
        var _this = this;
        var p = 'userId=' + this.userId
            + '&token=' + this.token
            + '&eventId=' + this.eventId;
        var url = 'http://' + this.service.serviceUrl + '/eventController/deleteEventByImg.do';
        this.service.service(url, p).subscribe(function (data) {
            if (data['result'] == -1) {
                _this.toast.toast2("其他用户登录了您的账号。");
                _this.navCtrl.popToRoot();
            }
            else if (data['result'] == 1) {
                console.log(data);
                _this.solveDo();
            }
            (function (err) {
                console.error(err);
                //alert(err);
                alert("处理失败");
            });
        });
    };
    ChongbaoPage.prototype.solveDo = function () {
        var _this = this;
        if (this.rPD_csrc_arr.length == 0) {
            this.toast.toast2("请重新拍照");
        }
        else {
            var p = 'userId=' + this.userId
                + '&token=' + this.token
                + '&nextUserId=' + this.workFlow[0]['userId']
                + '&solve=' + this.solve
                + '&eventId=' + this.eventId;
            var url = 'http://' + this.service.serviceUrl + '/eventController/solveEventByImg.do';
            this.service.service(url, p).subscribe(function (data) {
                if (data['result'] == -1) {
                    _this.toast.toast2("其他用户登录了您的账号。");
                    _this.navCtrl.popToRoot();
                }
                else if (data['result'] == 1) {
                    console.log(data);
                    //去掉插件
                    // this.workflowLogId = data['workflowLogId'];
                    // // console.log("eventId", this.eventId);
                    // // console.log("图片路径", this.localFile);
                    // let options: FileUploadOptions = {
                    // 	// fileKey: 'file',
                    // 	// fileName: 'name.jpg',
                    // 	params: {
                    // 		userId: this.user["userId"],
                    // 		token: this.user["token"],
                    // 		eventId: this.eventId,
                    // 		eventStatus: 1
                    // 	}
                    // }
                    // for (let i = 0; i < this.rPD_csrc_arr.length; i++) {
                    // 	this.fileTransfer.upload(this.rPD_csrc_arr[i], 'http://' + this.service.serviceUrl + '/eventController/updateEventByFTPImg.do', options)
                    // 		.then((data) => {
                    // 			console.log("上传返回结果", data['response']);
                    // 			if (data['response'] == '-1') {
                    // 				this.toast.showShortBottom("其他用户登录了您的账号。").subscribe();
                    // 				this.navCtrl.popToRoot();
                    // 			}
                    // 			if (i == this.rPD_csrc_arr.length - 1) { //最后一个上传完成
                    // 				this.toast.showShortBottom("重报成功").subscribe();
                    // 				this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
                    // 			}
                    // 			console.log(data);
                    // 		}, (err) => {
                    // 			console.error('照片上传err', err);
                    // 		});
                    // }
                    // 自己实现
                    // this.workflowLogId = data['workflowLogId'];
                    // console.log("eventId", this.eventId);
                    // let fd = new FormData();
                    // let params = {
                    //	fileKey: 'file',
                    //	fileName: 'name.jpg',
                    // 	data: fd,
                    // 	userId: this.user["userId"],
                    //  	token: this.user["token"],
                    //  	eventId: this.eventId,
                    //  	eventStatus: 1
                    // }
                    // for (let i = 0; i < this.rPD_csrc_arr.length; i++) {	
                    // 	fd.append("upfile", this.rPD_csrc_arr[i]);
                    // 	this.service.service('http://' + this.service.serviceUrl + '/eventController/updateEventByFTPImg.do', params).subscribe(
                    // 		data => {
                    // 			console.log("上传返回结果", data['response']);
                    // 			if (data['response'] == '-1') {
                    // 				this.toast.showShortBottom("其他用户登录了您的账号。").subscribe();
                    // 				this.navCtrl.popToRoot();
                    // 			}
                    // 			if (i == this.rPD_csrc_arr.length - 1) { //最后一个上传完成
                    // 				this.toast.showShortBottom("重报成功").subscribe();
                    // 				this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
                    // 			}
                    // 			console.log(data);
                    // 		},
                    // 		err => {
                    // 			console.error('照片上传err', err);
                    // 		}
                    // 	)
                    // }
                }
            }, function (err) {
                console.error(err);
                //alert(err);
                alert("处理失败");
            });
        }
    };
    ChongbaoPage.prototype.getphoto = function (p) {
        // const options: CameraOptions = {
        // 	quality: 100,
        // 	destinationType: this.camera.DestinationType.NATIVE_URI,
        // 	encodingType: this.camera.EncodingType.JPEG,
        // 	mediaType: this.camera.MediaType.PICTURE,
        // 	saveToPhotoAlbum: true,
        // 	sourceType: p,
        // 	correctOrientation: true //Corrects Android orientation quirks
        // }
        // this.camera.getPicture(options).then((imageData) => {
        // 	let base64Image = imageData;
        // 	this.rPD_csrc_arr.push(base64Image);
        // 	// this.localFile = imageData;
        // }, (err) => {
        // 	console.log("err", err);
        // });
    };
    //拍照、选择图片、小视频
    ChongbaoPage.prototype.presentActionSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: '选择图片源',
            buttons: [
                {
                    text: '拍照',
                    role: 'destructive',
                    handler: function () {
                        // this.getphoto(this.camera.PictureSourceType.CAMERA);
                    }
                }, {
                    text: '从相册选择',
                    handler: function () {
                        // this.getphoto(this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ChongbaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chongbao',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\pandect\chongbao.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true" color="primary">\n\n        <!-- 去掉原来的返回按键并重新设定新的返回 -->\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)=" this.navCtrl.pop();">\n\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            事件处理\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n        <div id="div_2"></div>\n\n    <div>\n\n        <div style="margin-left:2rem;margin-top:2rem">\n\n            <label style="font-size:1.6rem;color:black">回退原因：</label>\n\n            <div *ngFor="let x of workFlow"  style="margin-left:1rem;">\n\n                <div *ngIf="x.logStatus==\'12\'">\n\n                    <label style="font-size:1.6rem;color:black">{{x.content}}</label>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <ion-item>\n\n            <ion-list style="text-align:center" *ngIf="rPD_csrc_arr!=null">\n\n                <ion-item text-wrap *ngFor="let x of rPD_csrc_arr;let count=index;">\n\n                    <ion-thumbnail item-start>\n\n                        <img [src]="x">\n\n                    </ion-thumbnail>\n\n                </ion-item>\n\n            </ion-list>\n\n            <p *ngIf="csrc==\'\'" style="font-size:1.6rem;color:black">是否上传图片</p>\n\n            <button ion-button clear (click)="presentActionSheet()">\n\n                <div>\n\n                    <img src="./assets/imgs/camera.jpg">\n\n                </div>\n\n            </button>\n\n\n\n        </ion-item>\n\n    </div>\n\n\n\n    <ion-item style="text-align:center">\n\n        <button *ngIf="show==false" ion-button (click)="deletePhoto();show=!show">处理</button>\n\n        <button *ngIf="show==true" ion-button>处理中</button>\n\n    </ion-item>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\pandect\chongbao.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */], __WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_4__toast_3_toast_3__["a" /* ToasT */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_4__toast_3_toast_3__["a" /* ToasT */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ChongbaoPage);
    return ChongbaoPage;
}());

//# sourceMappingURL=chongbao.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return update; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { File } from '@ionic-native/file';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { FileOpener } from '@ionic-native/file-opener';


// import { AppVersion } from '@ionic-native/app-version';


var update = (function () {
    // Resolve HTTP using the constructor
    function update(
        // private file: File,
        // private transfer: FileTransfer,
        // private fileOpener: FileOpener,
        alertCtrl, 
        // private toast: Toast,
        service) {
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.url = this.service.serviceUrl;
    }
    /**
     * private instance variable to hold base url
     * @param v1 本机版本
     * @param v2 服务器版本
     */
    update.prototype.update = function (v1, v2) {
        var apkUrl = 'http://' + this.url + '/android-debug-np.apk';
        this.detectionUpgrade(apkUrl, true, v1, v2); //提示升级
    };
    /**
     * 提示升级函数
     * @param apkUrl 更新地址
     * @param allowChoose 是否强制升级
     * @param v1 本机版本
     * @param v2 服务器版本
     */
    update.prototype.detectionUpgrade = function (apkUrl, allowChoose, v1, v2) {
        var _this = this;
        if (allowChoose) {
            this.alertCtrl.create({
                title: '升级提示',
                subTitle: '发现新版本,版本号:' + v2 + '是否立即升级？',
                buttons: [{
                        text: '取消'
                    }, {
                        text: '确定',
                        handler: function () {
                            _this.downloadApp(apkUrl);
                        }
                    }]
            }).present();
        }
        else {
            this.downloadApp(apkUrl);
        }
    };
    update.prototype.downloadApp = function (apkUrl) {
        var alert = this.alertCtrl.create({
            title: '下载进度：0%',
            enableBackdropDismiss: false,
            buttons: ['后台下载']
        });
        alert.present();
        // const fileTransfer: FileTransferObject = this.transfer.create();
        //const apk = this.file.externalRootDirectory+this.apk; //apk保存的目录
        // const apk = this.file.externalRootDirectory + 'app.apk'; //apk保存的目录  
        // fileTransfer.download(apkUrl, apk).then(() => {
        // 	this.fileOpener.open(apk, 'application/vnd.android.package-archive').then(() => {
        // 		console.log('File is opened')
        // 	}).catch(e => {
        // 		console.log('Error openening file', e)
        // 	});
        // });
        // fileTransfer.onProgress((event: ProgressEvent) => {
        // 	let num = Math.floor(event.loaded / event.total * 100);
        // 	if (num === 100) {
        // 		alert.dismiss();
        // 	} else {
        // 		let title = document.getElementsByClassName('alert-title')[0];
        // 		title && (title.innerHTML = '下载进度：' + num + '%');
        // 	}
        // });
    };
    update = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */]])
    ], update);
    return update;
}());

//# sourceMappingURL=update.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_StorageService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_utils__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Toast } from '@ionic-native/toast';
// import { Geolocation } from '@ionic-native/geolocation';
//注入服务




// declare var cordova: any;
var MessageDetailsPage = (function () {
    function MessageDetailsPage(navCtrl, utils, StorageService, service, params) {
        this.navCtrl = navCtrl;
        this.utils = utils;
        this.StorageService = StorageService;
        this.service = service;
        this.params = params;
        this.user = this.StorageService.read("user");
        this.userId = this.user['userId'];
        this.token = this.user['token'];
        this.id = this.params.get("id");
        this.type = this.params.get("type");
        this.code = this.params.get("code");
        if (this.type == 4) {
            this.title = "取水口";
        }
        else if (this.type == 5) {
            this.title = "排污口";
        }
        else if (this.type == 6) {
            this.title = "污染源";
        }
        else if (this.type == 7) {
            this.title = "水利工程";
        }
    }
    MessageDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        var p = "userId=" + this.userId
            + "&token=" + this.token
            + "&code=" + this.code
            + "&id=" + this.id;
        var url = 'http://' + this.service.serviceUrl + '/detailInformationController/getDetailInformation.do';
        console.log(p);
        this.service.service(url, p).subscribe(function (data) {
            if (data['result'] == 1) {
                if (_this.type == 6) {
                    _this.billboard = data['PollutantSource'];
                    _this.pollutant_source_name = _this.billboard['pollutant_source_name'];
                    _this.type_name = _this.billboard['type_name'];
                    _this.access = _this.billboard['access'];
                    _this.focus_level = _this.billboard['focus_level'];
                    _this.region_name = _this.billboard['region_name'];
                    _this.river_name = _this.billboard['river_name'];
                    _this.monitor = _this.billboard['monitor'];
                }
                else if (_this.type == 4) {
                    _this.billboard = data['WaterIntake'];
                    _this.WaterIntake_name = _this.billboard['name'];
                    _this.WaterIntake_type = _this.billboard['type'];
                    _this.WaterIntake_administration = _this.billboard['administration'];
                    _this.WaterIntake_area = _this.billboard['area'];
                    _this.WaterIntake_region_name = _this.billboard['region_name'];
                    _this.WaterIntake_river_name = _this.billboard['river_name'];
                    _this.WaterIntake_x = _this.billboard['longitute'];
                    _this.WaterIntake_y = _this.billboard['latitude'];
                }
                else if (_this.type == 7) {
                    _this.billboard = data['WaterProject'];
                    _this.WaterProject_name = _this.billboard['name'];
                    _this.WaterProject_base_info_type = _this.billboard['base_info_type'];
                    _this.WaterProject_progress = _this.billboard['progress'];
                    _this.WaterProject_investment = _this.billboard['investment'];
                    _this.WaterProject_personliable = _this.billboard['personliable'];
                    _this.WaterProject_telephone = _this.billboard['telephone'];
                    _this.WaterProject_site = _this.billboard['site'];
                    _this.WaterProject_start_time = _this.billboard['start_time_string'];
                    _this.WaterProject_imageurl = _this.billboard['imageurl'];
                    _this.WaterProject_company = _this.billboard['company'];
                    _this.WaterProject_content_and_scale = _this.billboard['content_and_scale'];
                    _this.WaterProject_problems = _this.billboard['problems'];
                }
                else if (_this.type == 5) {
                    _this.billboard = data['Outfall'];
                    _this.Outfall_name = _this.billboard['outfall_name'];
                    _this.Outfall_riverchief = _this.billboard['riverchief'];
                    _this.Outfall_area = _this.billboard['area'];
                    _this.Outfall_type = _this.billboard['outfall_type'];
                    _this.Outfall_intoriver_type = _this.billboard['intoriver_type'];
                    _this.Outfall_longitute = _this.billboard['longitute'];
                    _this.Outfall_latitude = _this.billboard['latitude'];
                    _this.Outfall_resource = _this.billboard['resource'];
                    _this.Outfall_target = _this.billboard['target'];
                    _this.Outfall_imgurl = _this.billboard['imgurl'];
                    _this.Outfall_identification = _this.billboard['identification'];
                    _this.Outfall_remark = _this.billboard['remark'];
                    _this.Outfall_region_name = _this.billboard['region_name'];
                    _this.Outfall_river_name = _this.billboard['river_name'];
                    _this.Outfall_type_name = _this.billboard['type_name'];
                }
                console.log("success!");
                console.log("billboard:", _this.billboard);
            }
            else {
                alert("该账号已被顶号,请重新登录！");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        }, function (err) {
            console.error(err);
        });
    };
    MessageDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messageDetails',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\message\messageDetails.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true" color="primary">\n\n        <!-- 去掉原来的返回按键并重新设定新的返回 -->\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)=" this.navCtrl.pop();">\n\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n            {{title}}\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="position_a width_100 height_100 padding_10p z_index_100" style="background-color:#fff;">\n\n        <div style="margin-left:4rem" *ngIf="type == 4">\n\n            <ion-list>\n\n                <span>取水口名称：{{WaterIntake_name}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>行政区域：{{WaterIntake_region_name}}-{{WaterIntake_river_name}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>取水口位置：{{WaterIntake_x}},{{WaterIntake_y}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>所在河流名称：{{WaterIntake_river_name}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>主要取水用途：{{WaterIntake_type}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>灌溉面积：{{WaterIntake_area}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>所属单位：{{WaterIntake_administration}}</span>\n\n            </ion-list>\n\n        </div>\n\n        <div style="margin-left:4rem" *ngIf="type == 5">\n\n            <ion-list>\n\n                <span>排污口名称：{{Outfall_name}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>行政区域：{{Outfall_region_name}}-{{Outfall_river_name}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>位置：{{Outfall_area}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>河长：{{Outfall_riverchief}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>污染成因：{{Outfall_resource}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>排入水体名称：</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>排放方式：{{Outfall_type}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>入河方式：{{Outfall_intoriver_type}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>治理目标：{{Outfall_target}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>其他：{{Outfall_remark}}</span>\n\n            </ion-list>\n\n\n\n            <!-- <div style="margin-top:2rem;text-align:center">\n\n                <img style="height:15rem;width:15rem;" [src]="\'http://\'+WaterProject_imageurl" />\n\n            </div> -->\n\n        </div>\n\n        <div style="margin-left:4rem" *ngIf="type == 6">\n\n            <ion-list>\n\n                <span>污染源名称：{{pollutant_source_name}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>污染源类型：{{type_name}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>是否入网：{{access}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>关注级别：{{focus_level}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>行政区域：{{region_name}}-{{river_name}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>是否监控：{{monitor}}</span>\n\n            </ion-list>\n\n        </div>\n\n        <div style="margin-left:4rem" *ngIf="type == 7">\n\n            <ion-list>\n\n                <span>项目名称：{{WaterProject_name}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>项目类型：{{WaterProject_base_info_type}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>年度进度：{{WaterProject_progress}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>总投资（万元）：{{WaterProject_investment}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>责任人：{{WaterProject_personliable}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>责任人电话：{{WaterProject_telephone}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>建设地点：{{WaterProject_site}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>计划开工时间：{{WaterProject_start_time}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>责任单位：{{WaterProject_company}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>建设内容和规模：{{WaterProject_content_and_scale}}</span>\n\n            </ion-list>\n\n            <ion-list>\n\n                <span>存在的困难和问题：{{WaterProject_problems}}</span>\n\n            </ion-list>\n\n            <!-- <div style="margin-top:2rem;text-align:center">\n\n                <img style="height:15rem;width:15rem;" [src]="\'http://\'+WaterProject_imageurl" />\n\n            </div> -->\n\n        </div>\n\n    </div>\n\n\n\n    <!-- <div *ngIf="type == 6">\n\n            <ion-list>\n\n                <div class="row" style="background-color:white">\n\n                    <div tappable class="w_mcol" style="border-left:0rem;">\n\n                        <a style="line-height:5rem;">污染源名称：</a>\n\n                    </div>\n\n                    <div tappable class="w_mcol" style="border-left:0rem;border-right:0rem;">\n\n                        <a style="line-height:5rem;">{{pollutant_source_name}}</a>\n\n                    </div>\n\n                    <div tappable class="w_mcol" style="border-right:0rem;">\n\n                        <a style="line-height:5rem;">污染源类型：</a>\n\n                    </div>\n\n                    <div tappable class="w_mcol" style="border-right:0rem;">\n\n                        <a style="line-height:5rem;">{{type_name}}</a>\n\n                    </div>\n\n                </div>\n\n                <div class="row" style="background-color:white">\n\n                    <div tappable class="w_mcol" style="border-left:0rem;border-top:0rem">\n\n                        <a style="line-height:5rem;">是否入网：</a>\n\n                    </div>\n\n                    <div tappable class="w_mcol" style="border-left:0rem;border-right:0rem;border-top:0rem">\n\n                        <a style="line-height:5rem;">{{access}}</a>\n\n                    </div>\n\n                    <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem">\n\n                        <a style="line-height:5rem;">关注级别：</a>\n\n                    </div>\n\n                    <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem">\n\n                        <a style="line-height:5rem;">{{focus_level}}</a>\n\n                    </div>\n\n                </div>\n\n                <div class="row" style="background-color:white">\n\n                    <div tappable class="w_mcol" style="border-left:0rem;border-top:0rem">\n\n                        <a style="line-height:5rem;">行政区域：</a>\n\n                    </div>\n\n                    <div tappable class="w_mcol" style="border-left:0rem;border-right:0rem;border-top:0rem">\n\n                        <a style="line-height:5rem;">{{region_name}}-{{river_name}}</a>\n\n                    </div>\n\n                    <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem">\n\n                        <a style="line-height:5rem;">是否监控：</a>\n\n                    </div>\n\n                    <div tappable class="w_mcol" style="border-right:0rem;border-top:0rem">\n\n                        <a style="line-height:5rem;">{{monitor}}</a>\n\n                    </div>\n\n                </div>\n\n            </ion-list>\n\n        </div> -->\n\n</ion-content>'/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\message\messageDetails.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */], __WEBPACK_IMPORTED_MODULE_4__service_utils__["a" /* UtilsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__service_utils__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_3__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* service */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MessageDetailsPage);
    return MessageDetailsPage;
}());

//# sourceMappingURL=messageDetails.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LANDMARKS_DO */
/* unused harmony export ICON_URL */
/* unused harmony export SERVER_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/*
* 	工具类
*	author: MT
*	start-date: 2017/6/23
*	last-author: MT
*	last-changeDate: 2017/6/23
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Camera, CameraOptions } from '@ionic-native/camera';
// import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureVideoOptions } from '@ionic-native/media-capture';


//Import RxJs required methods


//地标编号数组
var LANDMARKS_DO = [
    111, 112, 113, 114, 115, 116, 12, 13, 141, 142, 143, 144, 145, 146, 147, 21, 231, 232, 241, 242, 251, 252, 253, 254, 261, 262, 263
];
//地标前缀
var ICON_URL = "./assets/landmarks/";
//服务器地址
//export const SERVER_URL : string = "http://36.250.234.66:8083/RiverChiefSystem"; //泉州
// export const SERVER_URL : string = "http://36.250.234.66:8080/RiverChiefSystem"; //漳州
// export const SERVER_URL : string = "http://58.22.5.132:8081/RiverChiefSystem";//内部服务器
var SERVER_URL = "http://36.250.234.65:8082/RiverChiefSystem"; //南平
//export const SERVER_URL : string = "200.200.200.182:8080/RiverChiefSystem";
//export const SERVER_URL: string = "http://47.104.207.114:8082/RiverChiefSystem";//长乐
var UtilsService = (function () {
    /**
     * 构造函数
     * @param alertCtrl
     * @param http
     */
    function UtilsService(alertCtrl, 
        // private camera: Camera,
        // private mediaCapture: MediaCapture,
        http) {
        this.alertCtrl = alertCtrl;
        this.http = http;
    }
    /**
     * 获取地标数组
     */
    UtilsService.prototype.getLandmarks_do = function () {
        return LANDMARKS_DO;
    };
    /**
     * 获取服务器地址
     */
    UtilsService.prototype.getServerURL = function () {
        return SERVER_URL;
    };
    /**
     * 设置Cookie
     * @param c_name
     * @param value
     * @param expiredays
     */
    UtilsService.prototype.setCookie = function (c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + decodeURIComponent(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toUTCString());
    };
    /**
     * 获取Cookie
     * @param c_name
     */
    UtilsService.prototype.getCookie = function (c_name) {
        var c_start = -1, c_end = -1;
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                //检索cookie位置
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1)
                    c_end = document.cookie.length;
                return decodeURI(document.cookie.substring(c_start, c_end));
            }
        }
        return null;
    };
    /**
     * 删除Cookie
     * @param c_name
     */
    UtilsService.prototype.delCookie = function (c_name) {
        var date = new Date();
        date.setTime(date.getTime() - 10000);
        document.cookie = c_name + "=;expire=" + date.toUTCString();
    };
    /**
     * 设置LS
     * @param key
     * @param value
     */
    UtilsService.prototype.setLocalStorage = function (key, value) {
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    };
    /**
     * 获取LS
     * @param key
     */
    UtilsService.prototype.getLocalStorage = function (key) {
        var value;
        value = localStorage.getItem(key);
        if (value && value != "undefined" && value != "null") {
            return JSON.parse(value);
        }
        return null;
    };
    /**
     * 删除LS
     * @param key
     */
    UtilsService.prototype.delLocalStorage = function (key) {
        localStorage.removeItem(key);
    };
    /**
     * 删除所有LS
     */
    UtilsService.prototype.clearAllLocalStorage = function () {
        localStorage.clear();
    };
    /**
     * 拍照 | 相册
     * @param isCamera true:拍照 | false:从相册获取
     * @param fun_s
     */
    UtilsService.prototype.getPhoto = function (isCamera, fun_s) {
        // let options: CameraOptions = {
        // 	quality: 50,
        // 	destinationType: this.camera.DestinationType.NATIVE_URI,
        // 	encodingType: this.camera.EncodingType.JPEG,
        // 	mediaType: this.camera.MediaType.PICTURE,
        // 	saveToPhotoAlbum: true,
        // 	sourceType: (isCamera) ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY,
        // 	correctOrientation: true //Corrects Android orientation quirks
        // }
        // this.camera.getPicture(options).then(
        // 	(imageData) => {
        // 		fun_s(imageData);
        // 	}, (err) => {
        // 		console.error("拍照错误：", err);
        // 	}
        // );
    };
    ;
    /**
     * 录像
     * @param fun_s
     */
    UtilsService.prototype.getVideo = function (fun_s) {
        // let options: CaptureVideoOptions = {
        // 	duration: 10
        // };
        // this.mediaCapture.captureVideo(options).then(
        // 	(data: MediaFile[]) => {
        // 		//data[0]["fullPath"]
        // 		fun_s(data);
        // 	}, (err: CaptureError) => {
        // 		console.error("录像错误：", err);
        // 	}
        // );
    };
    /**
     * 接口-标准
     * @param url 相对接口地址
     * @param p 参数
     */
    UtilsService.prototype.do = function (url, p) {
        var headerscontent = 'application/x-www-form-urlencoded';
        if ((typeof p) == 'object') {
            p = JSON.stringify(p);
            headerscontent = 'application/json';
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': headerscontent // Set content type
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers }); // Create a request option
        var f_url = this.getServerURL() + url; //接口地址
        return this.http.post(f_url, p, options) // using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    /**
     * 接口-表单
     * @param url
     * @param formData
     */
    UtilsService.prototype.formDatado = function (url, formData) {
        return this.http.post(url, formData)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UtilsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], UtilsService);
    return UtilsService;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_3_toast_3__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_StorageService__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventSolve__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chongbao__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Toast } from '@ionic-native/toast';

//注入服务





var EventDetailsPage = (function () {
    function EventDetailsPage(navCtrl, StorageService, service, params, toast) {
        this.navCtrl = navCtrl;
        this.StorageService = StorageService;
        this.service = service;
        this.params = params;
        this.toast = toast;
        this.eventList = []; //所有事件
        this.img_show = false;
        this.img_show1 = false;
        this.show = false;
        this.user = this.StorageService.read("user");
        this.userId = this.user['userId'];
        this.token = this.user['token'];
        this.eventId = this.params.get('eventId');
        this.type = this.params.get('type');
        this.url = this.service.serviceUrl;
        // this.startTime = this.params.get('startTime');
        // this.endTime = this.params.get('endTime');
    }
    EventDetailsPage.prototype.solve = function (x) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__eventSolve__["a" /* EventSolvePage */], {
            eventId: this.eventId,
            solve: x,
        });
    };
    EventDetailsPage.prototype.chongbao = function (x) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chongbao__["a" /* ChongbaoPage */], {
            eventId: this.eventId,
            solve: x,
        });
    };
    EventDetailsPage.prototype.eventsolve = function (solve) {
        var _this = this;
        switch (solve) {
            case 61: /* 不受理 */
            case 4:/* 合格 */ 
                var p = "userId=" + this.userId
                    + "&token=" + this.token
                    + "&eventId=" + this.eventId
                    + "&solve=" + solve;
                break;
            // case 5:/* 不合格,要退回 */
            // this.nextuserId = this.workFlow[0]['nextUserId'];
            // console.log("this.nextuserId不合格", this.nextuserId)
            // var p = "userId=" + this.userId
            // 	+ "&token=" + this.token
            // 	+ "&eventId=" + this.eventId
            // 	+ "&solve=" + solve
            // 	+ "&nextUserId=" + this.nextuserId
            // break;
            default:
                alert('非已知处理流程，请按照流程操作！');
                break;
        }
        var url = 'http://' + this.service.serviceUrl + '/eventController/solveEventByImg.do';
        this.service.service(url, p).subscribe(function (data) {
            console.log(data);
            if (data['result'] == 1) {
                alert("处理成功");
                _this.navCtrl.pop();
            }
            else if (data['result'] == -1) {
                _this.toast.toast2("其他用户登录了您的账号。");
                _this.navCtrl.popToRoot();
            }
            else {
                alert("处理失败");
            }
        }, function (err) {
            console.error(err);
            //alert(err);
            alert("处理失败");
        });
    };
    EventDetailsPage.prototype.queryUserdo = function (t) {
        var _this = this;
        var p = 'userId=' + this.userId
            + '&token=' + this.token
            + '&riverId=' + this.eventList[0]['riverId']
            + '&regionId=' + this.eventList[0]['regionId']
            + '&organizationId=' + this.user['organizationId']
            + '&solve=' + t;
        var url = 'http://' + this.service.serviceUrl + '/userController/queryUser.do';
        this.service.service(url, p).subscribe(function (data) {
            if (data['result'] == 0) {
                _this.toast.toast2("其他用户登录了您的账号。");
                _this.navCtrl.popToRoot();
            }
            else {
                console.log('查询下一级处理人', data);
                if (data['userList'].length != 0) {
                    _this.solve(t);
                }
                else {
                    _this.toast.toast2("查无下一级处理人");
                }
                // console.log("this.nextuserList", this.nextuserList);
                // if (data['userList'] != null) {
                // 	this.nextuser = this.nextuserList[0]['realName'];
                // 	this.nextuserId = this.nextuserList[0]['userId'];
                // }
            }
        }, function (err) {
            alert('数据异常，请联系运维人员处理！');
            console.error(err);
        });
    };
    EventDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        var p = "userId=" + this.userId
            + "&token=" + this.token
            + "&eventId=" + this.eventId;
        var url = 'http://' + this.service.serviceUrl + '/eventController/queryWorkflowLog.do';
        this.service.service(url, p).subscribe(function (data) {
            if (data['result'] == -1) {
                alert("该账号已被顶号,请重新登录！");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
            }
            else {
                _this.eventList = data['eventList'];
                _this.workFlow = data['workflowLog'];
                _this.remark = _this.workFlow[0]['remark'];
                console.log("eventList:", _this.eventList);
                console.log("success!");
                console.log("workFlow:", _this.workFlow);
            }
        }, function (err) {
            console.error(err);
        });
    };
    EventDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventDetails',template:/*ion-inline-start:"D:\workspace\rcs_MT_np\src\pages\pandect\eventDetails.html"*/'<ion-header>\n\n    <ion-navbar hideBackButton="true" color="primary">\n\n        <!-- 去掉原来的返回按键并重新设定新的返回 -->\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)=" this.navCtrl.pop();">\n\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <!-- 根据传入的事件编号进行判断 更改标题   代办事项 跟进事项 事件结案 -->\n\n        <ion-title>\n\n            事件详情\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- 同上 根据传入的值不同，内容也不同 待办事项 到事件上报；跟进事项 到事件上报 事件结案 到事件结案 几个DIV都需要加上相应的判断-->\n\n<ion-content>\n\n        <div id="div_2"></div>\n\n    <div class="position_a width_100 height_100 padding_10p z_index_100" style="background-color:#fff;" [hidden]="img_show==false"\n\n        (click)="img_show=false">\n\n        <div style="text-align:center;margin-top:2rem;" *ngIf="beforeimgurl_2!=null">\n\n            <img style="margin-top:13rem;height:100%;width:100%;" [src]="\'http://\'+url+beforeimgurl_2" />\n\n            <!-- <img style="margin-top:13rem;height:100%;width:100%;" [src]="\'http://220.161.184.66:8081/RiverChiefSystem\'+beforeimgurl_2"\n\n            /> -->\n\n        </div>\n\n    </div>\n\n    <div class="position_a width_100 height_100 padding_10p z_index_100" style="background-color:#fff;" [hidden]="img_show1==false"\n\n        (click)="img_show1=false">\n\n        <div style="text-align:center;margin-top:2rem;" *ngIf="afterimgurl_2!=null">\n\n            <img style="margin-top:13rem;height:100%;width:100%;" [src]="\'http://\'+url+afterimgurl_2" />\n\n            <!-- <img style="margin-top:13rem;height:100%;width:100%;" [src]="\'http://220.161.184.66:8081/RiverChiefSystem\'+afterimgurl_2"\n\n            /> -->\n\n        </div>\n\n    </div>\n\n\n\n    <div *ngFor="let x of eventList;">\n\n        <div style="margin-left:2rem;font-size:1.6rem">\n\n            <p>河流名称：{{x.riverName}}</p>\n\n            <!-- <p>巡查范围：{{x.patrolRange}}</p> -->\n\n            <p>巡查人员：{{x.realName}}</p>\n\n            <p>开始时间：{{x.startTime | date: "yyyy/MM/dd HH:mm:ss"}}</p>\n\n            <p>结束时间：{{x.endTime | date: "yyyy/MM/dd HH:mm:ss"}}</p>\n\n            <p>巡河情况：{{x.eventContent}}</p>\n\n            <p>当前处理状态:{{x.eventTypeName}}</p>\n\n            <p>上报时间：{{x.eventTime | date: "yyyy/MM/dd HH:mm:ss"}}</p>\n\n            <p>事件发生坐标：{{x.eventPoint}}</p>\n\n            <!-- <p>事件序列：{{x.eventCode}}</p> -->\n\n            <p *ngIf="remark!=null">其他：{{remark}}</p>\n\n            <p *ngIf="x.eventFileList.length!=0">事件照片：</p>\n\n        </div>\n\n\n\n        <div *ngIf="x.eventFileList.length!=0" style="text-align:center;margin-top:1rem;">\n\n            <a style="font-size:1.6rem;">\n\n                <b>处理前</b>\n\n            </a>\n\n        </div>\n\n        <div *ngIf="x.eventFileList.length==1" style="margin-top:2rem;text-align:center">\n\n            <img style="height:8rem;width:8rem;" [src]="\'http://\'+url+x.eventFileList[0].fileUrl" (click)="img_show=true;beforeimgurl_2=x.eventFileList[0].fileUrl"\n\n            />\n\n            <!-- <img style="height:8rem;width:8rem;" [src]="\'http://220.161.184.66:8081/RiverChiefSystem\'+x.eventFileList[0].fileUrl" (click)="img_show=true;beforeimgurl_2=x.eventFileList[0].fileUrl"\n\n            /> -->\n\n        </div>\n\n\n\n        <div *ngIf="x.eventFileList.length!=1" style="margin-left:2rem;">\n\n            <div *ngFor="let a of x.eventFileList;" style="float:left;margin-top:2rem;text-align:center">\n\n                <img style="height:8rem;width:8rem;margin-right:0.5rem" [src]="\'http://\'+url+a.fileUrl" (click)="img_show=true;beforeimgurl_2=a.fileUrl"\n\n                />\n\n                <!-- <img style="height:8rem;width:8rem;margin-right:0.5rem" [src]="\'http://220.161.184.66:8081/RiverChiefSystem\'+a.fileUrl" (click)="img_show=true;beforeimgurl_2=a.fileUrl"\n\n                /> -->\n\n            </div>\n\n        </div>\n\n        <div style="clear:both"></div>\n\n\n\n        <div *ngIf="eventList!=null && type==3">\n\n            <div *ngIf="eventList[0].eventType==0" style="text-align:center">\n\n                <!-- 自处理未处理情况 -->\n\n                <button ion-button color="primary" (click)="solve(60)">自处理</button>\n\n                <button ion-button color="primary" (click)="queryUserdo(20)">上报河长办</button>\n\n            </div>\n\n            <div *ngIf="eventList[0].eventType==1" style="text-align:center">\n\n                <!-- 村级河段长处理 -->\n\n                <button ion-button color="primary" (click)="solve(60)">自处理</button>\n\n                <!-- <button ion-button color="primary" (click)="queryUserdo(20)">上报河长办</button> -->\n\n            </div>\n\n            <div *ngIf="eventList[0].eventType==2" style="text-align:center">\n\n                <!-- 河长办待办事项 -->\n\n                <button ion-button color="primary" (click)="queryUserdo(10)">下发村级河段长</button>\n\n                <button ion-button color="primary" (click)="queryUserdo(21)">请求上级河长办</button>\n\n                <button ion-button color="primary" (click)="queryUserdo(30)">下发下级河长办</button>\n\n                <button ion-button color="primary" (click)="queryUserdo(40)">下发单位</button>\n\n                <button ion-button color="primary" (click)="solve(62)">处理</button>\n\n            </div>\n\n            <div *ngIf="eventList[0].eventType==3" style="text-align:center">\n\n                <!-- 下级河长办待办事项 -->   \n\n                <button ion-button color="primary" (click)="queryUserdo(30)">下发下级河长办</button>\n\n                <button ion-button color="primary" (click)="queryUserdo(40)">下发单位</button>\n\n                <button ion-button color="primary" (click)="solve(62)">处理</button>\n\n            </div>\n\n            <div *ngIf="eventList[0].eventType==4" style="text-align:center">\n\n                <!-- 单位待办事项 -->\n\n                <button ion-button color="primary" (click)="queryUserdo(50)">反馈处理结果</button>\n\n            </div>\n\n            <div *ngIf="eventList[0].eventType==5" style="text-align:center">\n\n                <!-- 处理结果审核 -->\n\n                <button ion-button color="primary" (click)="eventsolve(61)">处理到位</button>\n\n                <button ion-button color="primary" (click)="solve(41)">处理不到位</button>\n\n            </div>\n\n        </div>\n\n\n\n        <div style="text-align:center;margin-top:1rem;" (click)="show=!show">\n\n            <a style="font-size:2rem;">\n\n                <b>处理流程</b>\n\n            </a>\n\n            <ion-icon *ngIf="show==true" ios="ios-arrow-up" md="md-arrow-up"></ion-icon>\n\n            <ion-icon *ngIf="show==false" ios="ios-arrow-down" md="md-arrow-down"></ion-icon>\n\n        </div>\n\n        <div class="line1"></div>\n\n\n\n        <div [hidden]="show==false" *ngFor="let b of workFlow" class="row" style="margin-left:2rem;">\n\n            <div [hidden]="img_show1==true" class="pandectcol" style="font-size:1.6rem">\n\n                <label>处理人：{{b.realName}}</label>\n\n                <p *ngIf="b.operaTime!=null">处理时间：{{b.operaTime | date: "yyyy/MM/dd HH:mm:ss"}}</p>\n\n                <p>处理状态：{{b.logStatusName}}</p>\n\n                <p *ngIf="b.content!=null">处理情况：{{b.content}}</p>\n\n                <p *ngIf="b.eventFileList.length!=0">处理图片：</p>\n\n                <div *ngIf="b.eventFileList.length==1" style="margin-top:2rem;text-align:center">\n\n                    <img style="height:8rem;width:8rem;" [src]="\'http://\'+url+b.eventFileList[0].fileUrl" (click)="img_show1=true;afterimgurl_2=b.eventFileList[0].fileUrl"\n\n                    />\n\n                    <!-- <img style="height:8rem;width:8rem;" [src]="\'http://220.161.184.66:8081/RiverChiefSystem\'+b.eventFileList[0].fileUrl" (click)="img_show1=true;afterimgurl_2=b.eventFileList[0].fileUrl"\n\n                    /> -->\n\n                </div>\n\n\n\n                <div *ngIf="b.eventFileList.length!=1&&b.eventFileList.length!=0" style="margin-left:2rem;">\n\n                    <div *ngFor="let a of b.eventFileList;" style="float:left;margin-top:2rem;text-align:center">\n\n                        <img style="height:8rem;width:8rem;margin-right:0.5rem" [src]="\'http://\'+url+a.fileUrl" (click)="img_show1=true;afterimgurl_2=a.fileUrl"\n\n                        />\n\n                        <!-- <img style="height:8rem;width:8rem;margin-right:0.5rem" [src]="\'http://220.161.184.66:8081/RiverChiefSystem\'+a.fileUrl" (click)="img_show1=true;afterimgurl_2=a.fileUrl"\n\n                        /> -->\n\n                    </div>\n\n                </div>\n\n                <div style="clear:both"></div>\n\n            </div>\n\n            <hr/>\n\n        </div>\n\n\n\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\workspace\rcs_MT_np\src\pages\pandect\eventDetails.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__service_StorageService__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* service */], __WEBPACK_IMPORTED_MODULE_2__toast_3_toast_3__["a" /* ToasT */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__service_StorageService__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* service */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__toast_3_toast_3__["a" /* ToasT */]])
    ], EventDetailsPage);
    return EventDetailsPage;
}());

//# sourceMappingURL=eventDetails.js.map

/***/ })

},[362]);
//# sourceMappingURL=main.js.map