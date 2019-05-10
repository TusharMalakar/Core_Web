(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conversations-conversations-module"],{

/***/ "./src/app/conversations/collab-messaging/collab-messaging.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/conversations/collab-messaging/collab-messaging.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ol{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  ol li{\r\n    display:inline-block;\r\n    clear: both;\r\n    padding: 20px;\r\n    border-radius: 30px;\r\n    margin-bottom: 2px;\r\n    font-family: Helvetica, Arial, sans-serif;\r\n  }\r\n  \r\n  .him{\r\n    background: #eee;\r\n    float: left;\r\n  }\r\n  \r\n  .me{\r\n  \r\n    \r\n    float: right;\r\n    background:blue;\r\n    color: #fff;\r\n  }\r\n  \r\n  .him + .me{\r\n    border-bottom-right-radius: 5px;\r\n  }\r\n  \r\n  .me + .me{\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n  }\r\n  \r\n  .me:last-of-type {\r\n    border-bottom-right-radius: 30px;\r\n  }\r\n  \r\n  .message{\r\n    float: right;\r\n    color: #fff;\r\n  }\r\n  \r\n  .message{\r\n    border-bottom-right-radius: 5px;\r\n  }\r\n  \r\n  .message{\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n  }\r\n  \r\n  .message:last-of-type {\r\n    border-bottom-right-radius: 30px;\r\n  }\r\n  \r\n  .messa{\r\n    z-index: 0; \r\n      position: fixed; \r\n      display: flex;\r\n      align-self: flex-end; \r\n      bottom: 7%; \r\n      margin-bottom: 0px;\r\n      margin-left: 80%; \r\n  }\r\n  \r\n  /* Place the navbar at the bottom of the page, and make it stick */\r\n  \r\n  .navbar {\r\n    z-index: inherit 0;\r\n    background-color: #333;\r\n    position: fixed;\r\n    bottom: 5px;\r\n    max-width: 800px;\r\n  }\r\n  \r\n  .messageSender{\r\n      z-index: 5; \r\n      position: fixed; \r\n      display: flex;\r\n      align-self: flex-end; \r\n      bottom: 7%; \r\n      margin-bottom: 5px;\r\n      margin-left: 80%; \r\n      background-color: #0084ff\r\n  }\r\n  \r\n  .avatar {\r\n      vertical-align: middle;\r\n      width: 50px;\r\n      height: 50px;\r\n      border-radius: 50%;\r\n    }\r\n  \r\n  .container-bottom {\r\n      float: right;\r\n      position: fixed;\r\n      bottom: 0;\r\n  }\r\n  \r\n  /* Chat containers */\r\n  \r\n  .container {\r\n    border: 2px solid #dedede;\r\n    background-color: #f1f1f1;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin: 10px 0;\r\n  }\r\n  \r\n  /* Chat containers */\r\n  \r\n  .container2 {\r\n    border: 4px solid #dedede;\r\n    background-color: plum;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin: 10px 0;\r\n    text-align: center;\r\n  }\r\n  \r\n  /* Darker chat container */\r\n  \r\n  .darker {\r\n    border-color: #ccc;\r\n    background-color: #ddd;\r\n  }\r\n  \r\n  /* Clear floats */\r\n  \r\n  .container::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n  \r\n  .right {\r\n    float: right;\r\n    margin-left: 20px;\r\n    margin-right:0;\r\n    font-size: 10px;\r\n  }\r\n  \r\n  .left {\r\n    float: left;\r\n    margin-right: 20px;\r\n    margin-left:0;\r\n    font-size: 10px;\r\n  }\r\n  \r\n  /* Style time text */\r\n  \r\n  .time-right {\r\n    float: right;\r\n    color: #aaa;\r\n  }\r\n  \r\n  /* Style time text */\r\n  \r\n  .time-left {\r\n    float: left;\r\n    color: #999;\r\n  }\r\n  \r\n  .mat-card {\r\n    max-width: 800px;\r\n    margin: auto;\r\n    padding: 0px;\r\n    height: 100%;\r\n    background: rgba(214, 212, 212, 0.048);\r\n    border: .4px solid rgb(59, 59, 59);\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n  \r\n  .mat-card-header {\r\n   \r\n    font-weight: bold;\r\n    display: inline;\r\n    \r\n  }\r\n  \r\n  .mat-card-title  {\r\n    margin-left: -16px;\r\n    margin-right: -16px;\r\n    margin-top: 0px;\r\n    color: rgba(0, 0, 0, 0.836);\r\n    background: rgba(34, 34, 34, 0.13);\r\n    padding: 5px;\r\n  }\r\n  \r\n  .mat-card-content {\r\n    margin: 0px;\r\n  }\r\n  \r\n  .mat-card>.mat-card-actions:last-child {\r\n    margin-bottom: 5px;\r\n   \r\n  }\r\n  \r\n  .mat-card-actions .mat-button, .mat-card-actions .mat-raised-button{\r\n    margin: 0px;\r\n    margin-left: 22px;\r\n  }\r\n  \r\n  .mat-expansion-panel {\r\n    background: rgba(255, 254, 254, 0.151);\r\n  }\r\n  \r\n  .requirements {\r\n    margin-left: 30px;\r\n    margin-right: 30px;\r\n    \r\n  }\r\n  \r\n  .content .description{\r\n    font-size: 20px;\r\n    margin-left: 30px;\r\n    margin-right: 30px;\r\n  }\r\n  \r\n  .content .date,.location,.duration{\r\n    margin-left: 40px;\r\n    margin-right: 40px;\r\n  }\r\n  \r\n  .mat-card {\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmVyc2F0aW9ucy9jb2xsYWItbWVzc2FnaW5nL2NvbGxhYi1tZXNzYWdpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5Q0FBeUM7RUFDM0M7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBOzs7SUFHRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QiwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7O0VBT0E7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsK0JBQStCO0VBQ2pDOztFQUVDO0lBQ0MsNEJBQTRCO0lBQzVCLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLFVBQVU7TUFDUixlQUFlO01BQ2YsYUFBYTtNQUNiLG9CQUFvQjtNQUNwQixVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGdCQUFnQjtFQUNwQjs7RUFFQSxrRUFBa0U7O0VBQ2xFO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtNQUNJLFVBQVU7TUFDVixlQUFlO01BQ2YsYUFBYTtNQUNiLG9CQUFvQjtNQUNwQixVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQjtFQUNKOztFQWdCRTtNQUNFLHNCQUFzQjtNQUN0QixXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFlBQVk7TUFDWixlQUFlO01BQ2YsU0FBUztFQUNiOztFQUdBLG9CQUFvQjs7RUFDcEI7SUFDRSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztFQUNoQjs7RUFDQSxvQkFBb0I7O0VBQ3BCO0lBQ0UseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7O0VBRUEsMEJBQTBCOztFQUMxQjtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0VBRUEsaUJBQWlCOztFQUNqQjtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0VBQ2pCOztFQUlBLG9CQUFvQjs7RUFDcEI7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBLG9CQUFvQjs7RUFDcEI7SUFDRSxXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxrQ0FBa0M7SUFDbEMseUVBQXlFO0VBQzNFOztFQUlBOztJQUVFLGlCQUFpQjtJQUNqQixlQUFlOztFQUVqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixrQ0FBa0M7SUFDbEMsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCOztFQUVwQjs7RUFDQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCOztFQUVwQjs7RUFJQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFLQTtJQUNFLHFEQUFxRDtFQUN2RCIsImZpbGUiOiJzcmMvYXBwL2NvbnZlcnNhdGlvbnMvY29sbGFiLW1lc3NhZ2luZy9jb2xsYWItbWVzc2FnaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJvbHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICBvbCBsaXtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAuaGlte1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAubWV7XHJcbiAgXHJcbiAgICBcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQ6Ymx1ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuaGltICsgLm1le1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLm1lICsgLm1le1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZTpsYXN0LW9mLXR5cGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5tZXNzYWdle1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZXNzYWdle1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgIC5tZXNzYWdle1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZXNzYWdlOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1lc3Nhe1xyXG4gICAgei1pbmRleDogMDsgXHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kOyBcclxuICAgICAgYm90dG9tOiA3JTsgXHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDgwJTsgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFBsYWNlIHRoZSBuYXZiYXIgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSwgYW5kIG1ha2UgaXQgc3RpY2sgKi9cclxuICAubmF2YmFyIHtcclxuICAgIHotaW5kZXg6IGluaGVyaXQgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZXNzYWdlU2VuZGVye1xyXG4gICAgICB6LWluZGV4OiA1OyBcclxuICAgICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7IFxyXG4gICAgICBib3R0b206IDclOyBcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogODAlOyBcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODRmZlxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICAgIC5hdmF0YXIge1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWluZXItYm90dG9tIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogQ2hhdCBjb250YWluZXJzICovXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZGVkZWRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbiAgLyogQ2hhdCBjb250YWluZXJzICovXHJcbiAgLmNvbnRhaW5lcjIge1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2RlZGVkZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHBsdW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIERhcmtlciBjaGF0IGNvbnRhaW5lciAqL1xyXG4gIC5kYXJrZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ2xlYXIgZmxvYXRzICovXHJcbiAgLmNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDowO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICAubGVmdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjA7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIFN0eWxlIHRpbWUgdGV4dCAqL1xyXG4gIC50aW1lLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aW1lIHRleHQgKi9cclxuICAudGltZS1sZWZ0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgfVxyXG4gIC5tYXQtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMTQsIDIxMiwgMjEyLCAwLjA0OCk7XHJcbiAgICBib3JkZXI6IC40cHggc29saWQgcmdiKDU5LCA1OSwgNTkpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1jYXJkLXRpdGxlICB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44MzYpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzNCwgMzQsIDM0LCAwLjEzKTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtY2FyZD4ubWF0LWNhcmQtYWN0aW9uczpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgXHJcbiAgfVxyXG4gIC5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtYnV0dG9uLCAubWF0LWNhcmQtYWN0aW9ucyAubWF0LXJhaXNlZC1idXR0b257XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG4gIH1cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuMTUxKTtcclxuICB9XHJcbiAgXHJcbiAgLnJlcXVpcmVtZW50cyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAuY29udGVudCAuZGVzY3JpcHRpb257XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQgLmRhdGUsLmxvY2F0aW9uLC5kdXJhdGlvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICAubWF0LWNhcmQge1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/conversations/collab-messaging/collab-messaging.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/conversations/collab-messaging/collab-messaging.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<form class=\"navbar\"  [formGroup] = \"form\" (ngSubmit) = \"SendMessage()\">    \r\n    <mat-form-field class=\"messa\"> \r\n        <input \r\n            \r\n            formControlName = \"message\"\r\n            matInput\r\n            id=\"message\" \r\n            type=\"text\" \r\n            placeholder=\"Enter message\">\r\n   \r\n    <div class=\"alert alert-danger\">\r\n</div>\r\n<button class=\"right\" mat-raised-button color = \"primary\" type=\"submit\" [disabled] = \"!form.valid\">send</button>\r\n</mat-form-field>\r\n</form>\r\n\r\n<div class=\"mat-card\">\r\n        <ol   *ngFor=\"let messages of  OneToOneMess\">\r\n                <div *ngIf=\"messages.sender===sender\">\r\n                        <li class=\"me\">\r\n                                {{messages.message[\"message\"]}}<br>\r\n                                <span class=\"right\"> {{messages.dispName}}</span>\r\n                               \r\n                            </li>\r\n                </div>\r\n                <div *ngIf=\"messages.sender!==sender\">\r\n                        <li class=\"him\">\r\n                                        \r\n                                        {{messages.message[\"message\"]}}<br>\r\n                                        <span class=\"left\"> {{messages.dispName}}</span>\r\n                                \r\n                            </li>\r\n                </div>\r\n                        \r\n                        \r\n            \r\n        </ol>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"mat-card\">\r\n        <ol   *ngFor=\"let messages of  groupmess\">\r\n            \r\n                <div *ngIf=\"messages.sender===sender\">\r\n                        <li class=\"me\">\r\n\r\n                                {{messages.message[\"message\"]}}<br>\r\n                                <span class=\"right\"> {{messages.dispName}}</span>\r\n                               \r\n                            </li>\r\n\r\n                </div>\r\n                <div *ngIf=\"messages.sender!==sender\">\r\n                        <li class=\"him\">\r\n                         <div *ngIf = \"messages.message[message]\">\r\n                                {{messages.message[\"message\"]}}<br>\r\n                                <span class=\"left\"> {{messages.dispName}}</span>\r\n                         </div>\r\n                                \r\n                        </li>\r\n\r\n                </div>\r\n                            \r\n                 \r\n                                \r\n                \r\n            \r\n        </ol>\r\n\r\n</div>\r\n\r\n\r\n\r\n<!--\r\n\r\n     <ng-template #thenBlock>\r\n                            <li class=\"me\">\r\n                                {{messages.message[\"message\"]}}<br>\r\n                                <span class=\"right\"> {{messages.sender}}</span>\r\n                                {{messages.sender}}\r\n                                </li>\r\n                        </ng-template>\r\n                        \r\n                        <ng-template #elseBlock>\r\n                        <li class=\"him\">\r\n                                {{messages.message[\"message\"]}}<br>\r\n                                <span class=\"right\"> {{messages.sender}}</span>\r\n                        </li>\r\n                        </ng-template>\r\n-->"

/***/ }),

/***/ "./src/app/conversations/collab-messaging/collab-messaging.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/conversations/collab-messaging/collab-messaging.component.ts ***!
  \******************************************************************************/
/*! exports provided: CollabMessagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollabMessagingComponent", function() { return CollabMessagingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_models_message_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/models/message.model */ "./src/app/shared/models/message.model.ts");
/* harmony import */ var _shared_dbAccess_conversation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/dbAccess/conversation.service */ "./src/app/shared/dbAccess/conversation.service.ts");
/* harmony import */ var src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/dbAccess/collabs.service */ "./src/app/shared/dbAccess/collabs.service.ts");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var CollabMessagingComponent = /** @class */ (function () {
    function CollabMessagingComponent(userService, collabservice, conversation, router, mem_, collabSer, formBuilder) {
        this.userService = userService;
        this.collabservice = collabservice;
        this.conversation = conversation;
        this.router = router;
        this.mem_ = mem_;
        this.collabSer = collabSer;
        this.formBuilder = formBuilder;
        this.mess = new Array();
        this.allMess = new Array();
        this.OneToOneMess = new Array();
        this.OneToOneDate = new Array();
        this.OneToOneDisName = new Array();
        this.groupmess = new Array();
        this.alldata = new Array();
        this.partOf = false;
        this.isOwner = false;
        this.date = new Date();
        this.message = new _shared_models_message_model__WEBPACK_IMPORTED_MODULE_1__["Message"]();
    }
    CollabMessagingComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({ message: [this.message.message, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required] });
        this.LoadMyMessages();
    };
    //spliting username by @ 
    CollabMessagingComponent.prototype.getName = function (username) {
        var temp = username.substring(0, 2).toUpperCase();
        return temp;
    };
    //remove duplicate contact
    CollabMessagingComponent.prototype.remove_duplicates = function (arr) {
        var obj = {};
        var ret_arr = [];
        for (var i = 0; i < arr.length; i++) {
            obj[arr[i]] = true;
        }
        for (var key in obj) {
            ret_arr.push(key);
        }
        return ret_arr;
    };
    //Display a title
    CollabMessagingComponent.prototype.showTitle = function () {
        if (this.mem_.mem != null) {
            return this.getName(this.mem_.mem);
        }
        else if (this.mem_.collabId != null) {
            return this.mem_.Title_;
        }
        else
            this.router.navigate(['/home']);
    };
    //send message
    CollabMessagingComponent.prototype.SendMessage = function () {
        if (this.mem_.mem != null) {
            console.log("sending message to " + this.mem_.mem);
            this.sendPersonalMessage();
        }
        else if (this.mem_.collabId != null) {
            console.log("sending message to " + this.mem_.collabId);
            this.SendGroupMessage();
        }
        else
            this.router.navigate(['/home']);
    };
    //sendPersonalMessage()
    CollabMessagingComponent.prototype.sendPersonalMessage = function () {
        var message = this.form.value;
        this.conversation.sendPersonalMessage(message, this.mem_.mem).subscribe(function (message) { return console.log(message); });
    };
    //sendGroud message to collab members
    CollabMessagingComponent.prototype.SendGroupMessage = function () {
        var message = this.form.value;
        this.conversation.sendMessageToCollabGroup(message, this.mem_.collabId).subscribe(function (message) { return console.log(message); });
    };
    //based on user input e.g. collbId od individual, it will load messages
    CollabMessagingComponent.prototype.LoadMyMessages = function () {
        if (this.mem_.mem != null) {
            //this.showTitle();
            this.LoadIndividualMessage();
        }
        else if (this.mem_.collabId != null) {
            //this.showTitle();
            this.LoadGroupMessage();
        }
        else
            this.router.navigate(['/home']);
    };
    //return participients and messages of current user
    CollabMessagingComponent.prototype.LoadIndividualMessage = function () {
        var _this = this;
        if (this.mem_.sender != null) {
            //value from nav bar
            this.sender = this.mem_.sender;
            this.otherUser = this.mem_.mem;
        }
        else {
            //value from messanger-list
            // this.sender=
            // this.otherUser=
        }
        console.log(this.sender);
        for (var k = 0; k < 4; k++) { //user can loading last 200 messages
            this.conversation.LoadOtherUserMessage(k, this.otherUser).subscribe(function (message) {
                for (var i = 0; i < message.length; i++) {
                    _this.alldata = message[i];
                    console.log(message);
                    for (var j = 0; j < message[i].messages.length; j++) {
                        _this.OneToOneMess.push(message[i].messages[j]);
                        _this.OneToOneMess.reverse();
                    }
                }
            });
        }
    };
    CollabMessagingComponent.prototype.testOne = function () {
        console.log(this.OneToOneMess);
    };
    //return  collabId and  group messages of current user 
    CollabMessagingComponent.prototype.LoadGroupMessage = function () {
        var _this = this;
        this.collabID = this.mem_.collabId;
        for (var j = 0; j < 4; j++) { //user can loading last 200 messages
            this.conversation.LoadGroupMessage(j, this.collabID).subscribe(function (message) {
                _this.Title_ = _this.mem_.Title_;
                for (var i = 0; i < message.length; i++) {
                    _this.groupmess = message[i].messages;
                    _this.groupmess.reverse();
                }
                //console.log(this.Title_)
                //console.log(this.groupmess)
            });
        }
    };
    //need to write the fuc: it will take a username and will check if username is part of participantats
    CollabMessagingComponent.prototype.isPartof = function (username, participantats) {
        for (var i = 0; i < participantats.length; i++) {
            if (participantats[i] == username) {
                return true;
            }
            else
                return false;
        }
    };
    CollabMessagingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-collab-messaging',
            template: __webpack_require__(/*! ./collab-messaging.component.html */ "./src/app/conversations/collab-messaging/collab-messaging.component.html"),
            styles: [__webpack_require__(/*! ./collab-messaging.component.css */ "./src/app/conversations/collab-messaging/collab-messaging.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_3__["CollabsService"],
            _shared_dbAccess_conversation_service__WEBPACK_IMPORTED_MODULE_2__["ConversationService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
            src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_3__["CollabsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], CollabMessagingComponent);
    return CollabMessagingComponent;
}());



/***/ }),

/***/ "./src/app/conversations/conversations-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/conversations/conversations-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _collab_messaging_collab_messaging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collab-messaging/collab-messaging.component */ "./src/app/conversations/collab-messaging/collab-messaging.component.ts");
/* harmony import */ var _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messenger/messenger.component */ "./src/app/conversations/messenger/messenger.component.ts");





var routes = [
    {
        path: '',
        component: _collab_messaging_collab_messaging_component__WEBPACK_IMPORTED_MODULE_3__["CollabMessagingComponent"],
    },
    {
        path: 'messenger',
        component: _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_4__["MessengerComponent"]
    },
    {
        path: 'conversations',
        component: _collab_messaging_collab_messaging_component__WEBPACK_IMPORTED_MODULE_3__["CollabMessagingComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/conversations/conversations.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/conversations/conversations.module.ts ***!
  \*******************************************************/
/*! exports provided: ConversationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationsModule", function() { return ConversationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _conversations_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversations-routing.module */ "./src/app/conversations/conversations-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _collab_messaging_collab_messaging_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collab-messaging/collab-messaging.component */ "./src/app/conversations/collab-messaging/collab-messaging.component.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./messenger/messenger.component */ "./src/app/conversations/messenger/messenger.component.ts");














//Material Components










var ConversationsModule = /** @class */ (function () {
    function ConversationsModule() {
    }
    ConversationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_collab_messaging_collab_messaging_component__WEBPACK_IMPORTED_MODULE_4__["CollabMessagingComponent"],
                _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_23__["MessengerComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _conversations_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"],
                //Angular Material
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ScrollDispatchModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlNativeDateTimeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ]
        })
    ], ConversationsModule);
    return ConversationsModule;
}());



/***/ }),

/***/ "./src/app/conversations/messenger/messenger.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/conversations/messenger/messenger.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .avatar {\r\n    vertical-align: middle;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n  }\r\n  .mat-card-avatar {\r\n    background-image: url('/assets/userPhoto.png');\r\n    vertical-align: middle;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n}\r\n  .container-bottom {\r\n    float: right;\r\n    position: fixed;\r\n    bottom: 0;\r\n}\r\n  /* Chat containers */\r\n  .container {\r\n  border: 2px solid #dedede;\r\n  background-color: #f1f1f1;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin: 10px 0;\r\n}\r\n  /* Chat containers */\r\n  .container2 {\r\n  border: 4px solid #dedede;\r\n  background-color: plum;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin: 10px 0;\r\n  text-align: center;\r\n}\r\n  /* Darker chat container */\r\n  .darker {\r\n  border-color: #ccc;\r\n  background-color: #ddd;\r\n}\r\n  /* Clear floats */\r\n  .container::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n  .right {\r\n  float: right;\r\n  margin-left: 20px;\r\n  margin-right:0;\r\n}\r\n  .message{\r\n  z-index: 5; \r\n    position: fixed; \r\n    display: flex;\r\n    align-self: flex-end; \r\n    bottom: 7%; \r\n    margin-bottom: 5px;\r\n    margin-left: 80%; \r\n}\r\n  /* Style time text */\r\n  .time-right {\r\n  float: right;\r\n  color: #aaa;\r\n}\r\n  /* Style time text */\r\n  .time-left {\r\n  float: left;\r\n  color: #999;\r\n}\r\n  .mat-card {\r\n  max-width: 800px;\r\n  margin: auto;\r\n  padding: 0px;\r\n  height: 100%;\r\n  background: rgba(214, 212, 212, 0.048);\r\n  background-repeat: repeat-x;\r\n  background-repeat: repeat-y;\r\n}\r\n  .mat-card2 {\r\n  max-width: 600px;\r\n  margin: auto;\r\n  padding: 0px;\r\n  height: 100%;\r\n  background: rgba(214, 212, 212, 0.048);\r\n  border: .4px solid rgb(59, 59, 59);\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n  .mat-card-header {\r\n \r\n  font-weight: bold;\r\n  display: inline;\r\n  \r\n}\r\n  .mat-card-title  {\r\n  margin-left: -16px;\r\n  margin-right: -16px;\r\n  margin-top: 0px;\r\n  color: rgba(0, 0, 0, 0.836);\r\n  background: rgba(34, 34, 34, 0.13);\r\n  padding: 5px;\r\n}\r\n  .mat-card-content {\r\n  margin: 0px;\r\n}\r\n  .mat-card>.mat-card-actions:last-child {\r\n  margin-bottom: 5px;\r\n \r\n}\r\n  .mat-card-actions .mat-button, .mat-card-actions .mat-raised-button{\r\n  margin: 0px;\r\n  margin-left: 22px;\r\n}\r\n  .mat-expansion-panel {\r\n  background: rgba(255, 254, 254, 0.151);\r\n}\r\n  .requirements {\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n  \r\n}\r\n  .content .description{\r\n  font-size: 20px;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n}\r\n  .content .date,.location,.duration{\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n}\r\n  .table{\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-x:  auto;\r\n  overflow-y:  auto;\r\n}\r\n  .mat-card {\r\n  font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n  .mat-list{\r\n  height: 100%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmVyc2F0aW9ucy9tZXNzZW5nZXIvbWVzc2VuZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSw4Q0FBOEM7SUFDOUMsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0VBRUU7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFNBQVM7QUFDYjtFQUdBLG9CQUFvQjtFQUNwQjtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0VBQ0Esb0JBQW9CO0VBQ3BCO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7RUFFQSwwQkFBMEI7RUFDMUI7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0VBRUEsaUJBQWlCO0VBQ2pCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0VBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7RUFFQTtFQUNFLFVBQVU7SUFDUixlQUFlO0lBQ2YsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtFQUlBLG9CQUFvQjtFQUNwQjtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7RUFFQSxvQkFBb0I7RUFDcEI7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiO0VBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLDJCQUEyQjtFQUMzQiwyQkFBMkI7QUFDN0I7RUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsa0NBQWtDO0VBQ2xDLHlFQUF5RTtBQUMzRTtFQUVBOztFQUVFLGlCQUFpQjtFQUNqQixlQUFlOztBQUVqQjtFQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7RUFFQTtFQUNFLFdBQVc7QUFDYjtFQUVBO0VBQ0Usa0JBQWtCOztBQUVwQjtFQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtFQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0VBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCOztBQUVwQjtFQUlBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7RUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7RUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtFQUVBO0VBQ0UscURBQXFEO0FBQ3ZEO0VBR0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb252ZXJzYXRpb25zL21lc3Nlbmdlci9tZXNzZW5nZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5hdmF0YXIge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAubWF0LWNhcmQtYXZhdGFyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy91c2VyUGhvdG8ucG5nJyk7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn0gXHJcblxyXG4gIC5jb250YWluZXItYm90dG9tIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG5cclxuXHJcbi8qIENoYXQgY29udGFpbmVycyAqL1xyXG4uY29udGFpbmVyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZGVkZWRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuLyogQ2hhdCBjb250YWluZXJzICovXHJcbi5jb250YWluZXIyIHtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjZGVkZWRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHBsdW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBEYXJrZXIgY2hhdCBjb250YWluZXIgKi9cclxuLmRhcmtlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyAqL1xyXG4uY29udGFpbmVyOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBjbGVhcjogYm90aDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OjA7XHJcbn1cclxuXHJcbi5tZXNzYWdle1xyXG4gIHotaW5kZXg6IDU7IFxyXG4gICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgXHJcbiAgICBib3R0b206IDclOyBcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4MCU7IFxyXG59XHJcblxyXG5cclxuXHJcbi8qIFN0eWxlIHRpbWUgdGV4dCAqL1xyXG4udGltZS1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiAjYWFhO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aW1lIHRleHQgKi9cclxuLnRpbWUtbGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjE0LCAyMTIsIDIxMiwgMC4wNDgpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XHJcbn1cclxuXHJcbi5tYXQtY2FyZDIge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMTQsIDIxMiwgMjEyLCAwLjA0OCk7XHJcbiAgYm9yZGVyOiAuNHB4IHNvbGlkIHJnYig1OSwgNTksIDU5KTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaGVhZGVyIHtcclxuIFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBcclxufVxyXG5cclxuLm1hdC1jYXJkLXRpdGxlICB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODM2KTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAzNCwgMzQsIDAuMTMpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQ+Lm1hdC1jYXJkLWFjdGlvbnM6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gXHJcbn1cclxuLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1idXR0b24sIC5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbntcclxuICBtYXJnaW46IDBweDtcclxuICBtYXJnaW4tbGVmdDogMjJweDtcclxufVxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjE1MSk7XHJcbn1cclxuXHJcbi5yZXF1aXJlbWVudHMge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxuICBcclxufVxyXG5cclxuXHJcblxyXG4uY29udGVudCAuZGVzY3JpcHRpb257XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmNvbnRlbnQgLmRhdGUsLmxvY2F0aW9uLC5kdXJhdGlvbntcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcblxyXG4udGFibGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXg6ICBhdXRvO1xyXG4gIG92ZXJmbG93LXk6ICBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcblxyXG5cclxuLm1hdC1saXN0e1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/conversations/messenger/messenger.component.html":
/*!******************************************************************!*\
  !*** ./src/app/conversations/messenger/messenger.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fullpage\">\r\n    <mat-card > \r\n        <mat-list >  \r\n            <mat-list-item *ngFor=\"let contact of ContactList\">\r\n              \r\n              <mat-icon mat-list-icon routerLink=\"/user/{{contact}}\">person</mat-icon>\r\n              <button (click)=\"PersonalmessagePageLink(contact)\">{{extractFirstNameAndLastName(contact)}} </button>\r\n             \r\n            </mat-list-item> \r\n        </mat-list>\r\n  </mat-card>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/conversations/messenger/messenger.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/conversations/messenger/messenger.component.ts ***!
  \****************************************************************/
/*! exports provided: MessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerComponent", function() { return MessengerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/dbAccess/collabs.service */ "./src/app/shared/dbAccess/collabs.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MessengerComponent = /** @class */ (function () {
    function MessengerComponent(collab, userservice, router) {
        this.collab = collab;
        this.userservice = userservice;
        this.router = router;
        //place holder for myCollabs
        this.gropuMess = new Array();
        this.ContactList = new Array();
        this.user = null;
    }
    MessengerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userservice.getUserdetails().subscribe(function (data) {
            _this.user = data.username;
        });
        this.collab.myCollabs().subscribe(function (data) {
            //console.log(data[1].participants[0]);
            for (var i = 0; i < data.length - 1; i++) {
                if (data[i]._id != null && data[i]._id["$oid"] != null) {
                    _this.gropuMess.push(data[i]);
                }
                //making a personal contact-list
                else if (data[i].participants.length != 0 && data[i].messages.length > 0) {
                    for (var item = 0; item < data[i].participants.length; item++) {
                        //removing user-himself from contact list
                        if (data[i].participants[item] != _this.user) {
                            _this.ContactList.push(data[i].participants[item]);
                        }
                    }
                    //remove duplicate if any exist
                    _this.ContactList = _this.remove_duplicates(_this.ContactList);
                    //console.log(this.ContactList) 
                }
                else
                    return 0;
            }
        });
    };
    //remove duplicate contact
    MessengerComponent.prototype.remove_duplicates = function (arr) {
        var obj = {};
        var ret_arr = [];
        for (var i = 0; i < arr.length; i++) {
            obj[arr[i]] = true;
        }
        for (var key in obj) {
            ret_arr.push(key);
        }
        return ret_arr;
    };
    MessengerComponent.prototype.extractFirstNameAndLastName = function (username) {
        var temp = username.split("@");
        return temp[0];
    };
    MessengerComponent.prototype.PersonalmessagePageLink = function (contact) {
        console.log(contact);
        this.mem = contact;
        this.router.navigateByUrl("/conversations");
    };
    MessengerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-messenger',
            template: __webpack_require__(/*! ./messenger.component.html */ "./src/app/conversations/messenger/messenger.component.html"),
            styles: [__webpack_require__(/*! ./messenger.component.css */ "./src/app/conversations/messenger/messenger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_2__["CollabsService"],
            src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MessengerComponent);
    return MessengerComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/message.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/message.model.ts ***!
  \************************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());



/***/ })

}]);
//# sourceMappingURL=conversations-conversations-module.js.map