(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conversations-conversations-module"],{

/***/ "./src/app/conversations/collab-messaging/collab-messaging.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/conversations/collab-messaging/collab-messaging.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ol{\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  \n  ol li{\n    display:inline-block;\n    clear: both;\n    padding: 20px;\n    border-radius: 30px;\n    margin-bottom: 2px;\n    font-family: Helvetica, Arial, sans-serif;\n  }\n  \n  .him{\n    background: #eee;\n    float: left;\n  }\n  \n  .me{\n  \n    \n    float: right;\n    background:blue;\n    color: #fff;\n  }\n  \n  .him + .me{\n    border-bottom-right-radius: 5px;\n  }\n  \n  .me + .me{\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n  \n  .me:last-of-type {\n    border-bottom-right-radius: 30px;\n  }\n  \n  .message{\n    float: right;\n    color: #fff;\n  }\n  \n  .message{\n    border-bottom-right-radius: 5px;\n  }\n  \n  .message{\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n  \n  .message:last-of-type {\n    border-bottom-right-radius: 30px;\n  }\n  \n  .messa{\n    z-index: 0; \n      position: fixed; \n      display: flex;\n      align-self: flex-end; \n      bottom: 7%; \n      margin-bottom: 0px;\n      margin-left: 80%; \n  }\n  \n  /* Place the navbar at the bottom of the page, and make it stick */\n  \n  .navbar {\n    z-index: inherit 0;\n    background-color: #333;\n    position: fixed;\n    bottom: 5px;\n    max-width: 800px;\n  }\n  \n  .messageSender{\n      z-index: 5; \n      position: fixed; \n      display: flex;\n      align-self: flex-end; \n      bottom: 7%; \n      margin-bottom: 5px;\n      margin-left: 80%; \n      background-color: #0084ff\n  }\n  \n  .avatar {\n      vertical-align: middle;\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n    }\n  \n  .container-bottom {\n      float: right;\n      position: fixed;\n      bottom: 0;\n  }\n  \n  /* Chat containers */\n  \n  .container {\n    border: 2px solid #dedede;\n    background-color: #f1f1f1;\n    border-radius: 5px;\n    padding: 10px;\n    margin: 10px 0;\n  }\n  \n  /* Chat containers */\n  \n  .container2 {\n    border: 4px solid #dedede;\n    background-color: plum;\n    border-radius: 5px;\n    padding: 10px;\n    margin: 10px 0;\n    text-align: center;\n  }\n  \n  /* Darker chat container */\n  \n  .darker {\n    border-color: #ccc;\n    background-color: #ddd;\n  }\n  \n  /* Clear floats */\n  \n  .container::after {\n    content: \"\";\n    clear: both;\n    display: table;\n  }\n  \n  .right {\n    float: right;\n    margin-left: 20px;\n    margin-right:0;\n    font-size: 10px;\n  }\n  \n  .left {\n    float: left;\n    margin-right: 20px;\n    margin-left:0;\n    font-size: 10px;\n  }\n  \n  /* Style time text */\n  \n  .time-right {\n    float: right;\n    color: #aaa;\n  }\n  \n  /* Style time text */\n  \n  .time-left {\n    float: left;\n    color: #999;\n  }\n  \n  .mat-card {\n    max-width: 800px;\n    margin: auto;\n    padding: 0px;\n    height: 100%;\n    background: rgba(214, 212, 212, 0.048);\n    border: .4px solid rgb(59, 59, 59);\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n  \n  .mat-card-header {\n   \n    font-weight: bold;\n    display: inline;\n    \n  }\n  \n  .mat-card-title  {\n    margin-left: -16px;\n    margin-right: -16px;\n    margin-top: 0px;\n    color: rgba(0, 0, 0, 0.836);\n    background: rgba(34, 34, 34, 0.13);\n    padding: 5px;\n  }\n  \n  .mat-card-content {\n    margin: 0px;\n  }\n  \n  .mat-card>.mat-card-actions:last-child {\n    margin-bottom: 5px;\n   \n  }\n  \n  .mat-card-actions .mat-button, .mat-card-actions .mat-raised-button{\n    margin: 0px;\n    margin-left: 22px;\n  }\n  \n  .mat-expansion-panel {\n    background: rgba(255, 254, 254, 0.151);\n  }\n  \n  .requirements {\n    margin-left: 30px;\n    margin-right: 30px;\n    \n  }\n  \n  .content .description{\n    font-size: 20px;\n    margin-left: 30px;\n    margin-right: 30px;\n  }\n  \n  .content .date,.location,.duration{\n    margin-left: 40px;\n    margin-right: 40px;\n  }\n  \n  .mat-card {\n    font-family: Georgia, 'Times New Roman', Times, serif;\n  }\n  \n  \n  \n  \n  \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmVyc2F0aW9ucy9jb2xsYWItbWVzc2FnaW5nL2NvbGxhYi1tZXNzYWdpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5Q0FBeUM7RUFDM0M7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBOzs7SUFHRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QiwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7O0VBT0E7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsK0JBQStCO0VBQ2pDOztFQUVDO0lBQ0MsNEJBQTRCO0lBQzVCLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLFVBQVU7TUFDUixlQUFlO01BQ2YsYUFBYTtNQUNiLG9CQUFvQjtNQUNwQixVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGdCQUFnQjtFQUNwQjs7RUFFQSxrRUFBa0U7O0VBQ2xFO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtNQUNJLFVBQVU7TUFDVixlQUFlO01BQ2YsYUFBYTtNQUNiLG9CQUFvQjtNQUNwQixVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQjtFQUNKOztFQWdCRTtNQUNFLHNCQUFzQjtNQUN0QixXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtJQUNwQjs7RUFFQTtNQUNFLFlBQVk7TUFDWixlQUFlO01BQ2YsU0FBUztFQUNiOztFQUdBLG9CQUFvQjs7RUFDcEI7SUFDRSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztFQUNoQjs7RUFDQSxvQkFBb0I7O0VBQ3BCO0lBQ0UseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7O0VBRUEsMEJBQTBCOztFQUMxQjtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0VBRUEsaUJBQWlCOztFQUNqQjtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0VBQ2pCOztFQUlBLG9CQUFvQjs7RUFDcEI7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBLG9CQUFvQjs7RUFDcEI7SUFDRSxXQUFXO0lBQ1gsV0FBVztFQUNiOztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxrQ0FBa0M7SUFDbEMseUVBQXlFO0VBQzNFOztFQUlBOztJQUVFLGlCQUFpQjtJQUNqQixlQUFlOztFQUVqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixrQ0FBa0M7SUFDbEMsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCOztFQUVwQjs7RUFDQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCOztFQUVwQjs7RUFJQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFLQTtJQUNFLHFEQUFxRDtFQUN2RCIsImZpbGUiOiJzcmMvYXBwL2NvbnZlcnNhdGlvbnMvY29sbGFiLW1lc3NhZ2luZy9jb2xsYWItbWVzc2FnaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJvbHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICBvbCBsaXtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBjbGVhcjogYm90aDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuaGlte1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgXG4gIC5tZXtcbiAgXG4gICAgXG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJhY2tncm91bmQ6Ymx1ZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLmhpbSArIC5tZXtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICB9XG4gIFxuICAubWUgKyAubWV7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICB9XG4gIFxuICAubWU6bGFzdC1vZi10eXBlIHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgfVxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICAubWVzc2FnZXtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5tZXNzYWdle1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIH1cbiAgXG4gICAubWVzc2FnZXtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIH1cbiAgXG4gIC5tZXNzYWdlOmxhc3Qtb2YtdHlwZSB7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XG4gIH1cbiAgXG4gIC5tZXNzYXtcbiAgICB6LWluZGV4OiAwOyBcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7IFxuICAgICAgYm90dG9tOiA3JTsgXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogODAlOyBcbiAgfVxuICBcbiAgLyogUGxhY2UgdGhlIG5hdmJhciBhdCB0aGUgYm90dG9tIG9mIHRoZSBwYWdlLCBhbmQgbWFrZSBpdCBzdGljayAqL1xuICAubmF2YmFyIHtcbiAgICB6LWluZGV4OiBpbmhlcml0IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgfVxuICBcbiAgLm1lc3NhZ2VTZW5kZXJ7XG4gICAgICB6LWluZGV4OiA1OyBcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7IFxuICAgICAgYm90dG9tOiA3JTsgXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogODAlOyBcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg0ZmZcbiAgfVxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICBcbiAgXG4gIFxuICAgIC5hdmF0YXIge1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgICBcbiAgICAuY29udGFpbmVyLWJvdHRvbSB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBib3R0b206IDA7XG4gIH1cbiAgXG4gIFxuICAvKiBDaGF0IGNvbnRhaW5lcnMgKi9cbiAgLmNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG4gIC8qIENoYXQgY29udGFpbmVycyAqL1xuICAuY29udGFpbmVyMiB7XG4gICAgYm9yZGVyOiA0cHggc29saWQgI2RlZGVkZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwbHVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLyogRGFya2VyIGNoYXQgY29udGFpbmVyICovXG4gIC5kYXJrZXIge1xuICAgIGJvcmRlci1jb2xvcjogI2NjYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICB9XG4gIFxuICAvKiBDbGVhciBmbG9hdHMgKi9cbiAgLmNvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZGlzcGxheTogdGFibGU7XG4gIH1cbiAgXG4gIC5yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDowO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAubGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OjA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIFxuICBcbiAgXG4gIC8qIFN0eWxlIHRpbWUgdGV4dCAqL1xuICAudGltZS1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjYWFhO1xuICB9XG4gIFxuICAvKiBTdHlsZSB0aW1lIHRleHQgKi9cbiAgLnRpbWUtbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6ICM5OTk7XG4gIH1cbiAgLm1hdC1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjE0LCAyMTIsIDIxMiwgMC4wNDgpO1xuICAgIGJvcmRlcjogLjRweCBzb2xpZCByZ2IoNTksIDU5LCA1OSk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgfVxuICBcbiAgXG4gIFxuICAubWF0LWNhcmQtaGVhZGVyIHtcbiAgIFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBcbiAgfVxuICBcbiAgLm1hdC1jYXJkLXRpdGxlICB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODM2KTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAzNCwgMzQsIDAuMTMpO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICBcbiAgLm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIFxuICAubWF0LWNhcmQ+Lm1hdC1jYXJkLWFjdGlvbnM6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgXG4gIH1cbiAgLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1idXR0b24sIC5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbntcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMjJweDtcbiAgfVxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjE1MSk7XG4gIH1cbiAgXG4gIC5yZXF1aXJlbWVudHMge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBcbiAgfVxuICBcbiAgXG4gIFxuICAuY29udGVudCAuZGVzY3JpcHRpb257XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgfVxuICBcbiAgLmNvbnRlbnQgLmRhdGUsLmxvY2F0aW9uLC5kdXJhdGlvbntcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gIH1cbiAgXG4gIFxuICBcbiAgXG4gIC5tYXQtY2FyZCB7XG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gIH1cbiAgXG4gIFxuICBcbiAgXG4gIFxuIl19 */"

/***/ }),

/***/ "./src/app/conversations/collab-messaging/collab-messaging.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/conversations/collab-messaging/collab-messaging.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<form class=\"navbar\"  [formGroup] = \"form\" (ngSubmit) = \"SendMessage()\">    \n    <mat-form-field class=\"messa\"> \n        <input \n            \n            formControlName = \"message\"\n            matInput\n            id=\"message\" \n            type=\"text\" \n            placeholder=\"Enter message\">\n   \n    <div class=\"alert alert-danger\">\n</div>\n<button class=\"right\" mat-raised-button color = \"primary\" type=\"submit\" [disabled] = \"!form.valid\">send</button>\n</mat-form-field>\n</form>\n\n<div class=\"mat-card\">\n        <ol   *ngFor=\"let messages of  OneToOneMess\">\n                <div *ngIf=\"messages.sender===sender\">\n                        <li class=\"me\">\n                                {{messages.message[\"message\"]}}<br>\n                                <span class=\"right\"> {{messages.dispName}}</span>\n                               \n                            </li>\n                </div>\n                <div *ngIf=\"messages.sender!==sender\">\n                        <li class=\"him\">\n                                        \n                                        {{messages.message[\"message\"]}}<br>\n                                        <span class=\"left\"> {{messages.dispName}}</span>\n                                \n                            </li>\n                </div>\n                        \n                        \n            \n        </ol>\n\n</div>\n\n\n<div class=\"mat-card\">\n        <ol   *ngFor=\"let messages of  groupmess\">\n            \n                <div *ngIf=\"messages.sender===sender\">\n                        <li class=\"me\">\n\n                                {{messages.message[\"message\"]}}<br>\n                                <span class=\"right\"> {{messages.dispName}}</span>\n                               \n                            </li>\n\n                </div>\n                <div *ngIf=\"messages.sender!==sender\">\n                        <li class=\"him\">\n                         <div *ngIf = \"messages.message[message]\">\n                                {{messages.message[\"message\"]}}<br>\n                                <span class=\"left\"> {{messages.dispName}}</span>\n                         </div>\n                                \n                        </li>\n\n                </div>\n                            \n                 \n                                \n                \n            \n        </ol>\n\n</div>\n\n\n\n<!--\n\n     <ng-template #thenBlock>\n                            <li class=\"me\">\n                                {{messages.message[\"message\"]}}<br>\n                                <span class=\"right\"> {{messages.sender}}</span>\n                                {{messages.sender}}\n                                </li>\n                        </ng-template>\n                        \n                        <ng-template #elseBlock>\n                        <li class=\"him\">\n                                {{messages.message[\"message\"]}}<br>\n                                <span class=\"right\"> {{messages.sender}}</span>\n                        </li>\n                        </ng-template>\n-->"

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

module.exports = "\n  .avatar {\n    vertical-align: middle;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n  }\n  .mat-card-avatar {\n    background-image: url('/assets/userPhoto.png');\n    vertical-align: middle;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n}\n  .container-bottom {\n    float: right;\n    position: fixed;\n    bottom: 0;\n}\n  /* Chat containers */\n  .container {\n  border: 2px solid #dedede;\n  background-color: #f1f1f1;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 0;\n}\n  /* Chat containers */\n  .container2 {\n  border: 4px solid #dedede;\n  background-color: plum;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 0;\n  text-align: center;\n}\n  /* Darker chat container */\n  .darker {\n  border-color: #ccc;\n  background-color: #ddd;\n}\n  /* Clear floats */\n  .container::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n  .right {\n  float: right;\n  margin-left: 20px;\n  margin-right:0;\n}\n  .message{\n  z-index: 5; \n    position: fixed; \n    display: flex;\n    align-self: flex-end; \n    bottom: 7%; \n    margin-bottom: 5px;\n    margin-left: 80%; \n}\n  /* Style time text */\n  .time-right {\n  float: right;\n  color: #aaa;\n}\n  /* Style time text */\n  .time-left {\n  float: left;\n  color: #999;\n}\n  .mat-card {\n  max-width: 800px;\n  margin: auto;\n  padding: 0px;\n  height: 100%;\n  background: rgba(214, 212, 212, 0.048);\n  background-repeat: repeat-x;\n  background-repeat: repeat-y;\n}\n  .mat-card2 {\n  max-width: 600px;\n  margin: auto;\n  padding: 0px;\n  height: 100%;\n  background: rgba(214, 212, 212, 0.048);\n  border: .4px solid rgb(59, 59, 59);\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n  .mat-card-header {\n \n  font-weight: bold;\n  display: inline;\n  \n}\n  .mat-card-title  {\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: 0px;\n  color: rgba(0, 0, 0, 0.836);\n  background: rgba(34, 34, 34, 0.13);\n  padding: 5px;\n}\n  .mat-card-content {\n  margin: 0px;\n}\n  .mat-card>.mat-card-actions:last-child {\n  margin-bottom: 5px;\n \n}\n  .mat-card-actions .mat-button, .mat-card-actions .mat-raised-button{\n  margin: 0px;\n  margin-left: 22px;\n}\n  .mat-expansion-panel {\n  background: rgba(255, 254, 254, 0.151);\n}\n  .requirements {\n  margin-left: 30px;\n  margin-right: 30px;\n  \n}\n  .content .description{\n  font-size: 20px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n  .content .date,.location,.duration{\n  margin-left: 40px;\n  margin-right: 40px;\n}\n  .table{\n  width: 100%;\n  height: 100%;\n  overflow-x:  auto;\n  overflow-y:  auto;\n}\n  .mat-card {\n  font-family: Georgia, 'Times New Roman', Times, serif;\n}\n  .mat-list{\n  height: 100%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmVyc2F0aW9ucy9tZXNzZW5nZXIvbWVzc2VuZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSw4Q0FBOEM7SUFDOUMsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0VBRUU7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFNBQVM7QUFDYjtFQUdBLG9CQUFvQjtFQUNwQjtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0VBQ0Esb0JBQW9CO0VBQ3BCO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7RUFFQSwwQkFBMEI7RUFDMUI7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0VBRUEsaUJBQWlCO0VBQ2pCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0VBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7RUFFQTtFQUNFLFVBQVU7SUFDUixlQUFlO0lBQ2YsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtFQUlBLG9CQUFvQjtFQUNwQjtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7RUFFQSxvQkFBb0I7RUFDcEI7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiO0VBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLDJCQUEyQjtFQUMzQiwyQkFBMkI7QUFDN0I7RUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsa0NBQWtDO0VBQ2xDLHlFQUF5RTtBQUMzRTtFQUVBOztFQUVFLGlCQUFpQjtFQUNqQixlQUFlOztBQUVqQjtFQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7RUFFQTtFQUNFLFdBQVc7QUFDYjtFQUVBO0VBQ0Usa0JBQWtCOztBQUVwQjtFQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtFQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0VBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCOztBQUVwQjtFQUlBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7RUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7RUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtFQUVBO0VBQ0UscURBQXFEO0FBQ3ZEO0VBR0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb252ZXJzYXRpb25zL21lc3Nlbmdlci9tZXNzZW5nZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuYXZhdGFyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgLm1hdC1jYXJkLWF2YXRhciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3VzZXJQaG90by5wbmcnKTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59IFxuXG4gIC5jb250YWluZXItYm90dG9tIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbn1cblxuXG4vKiBDaGF0IGNvbnRhaW5lcnMgKi9cbi5jb250YWluZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGVkZWRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLyogQ2hhdCBjb250YWluZXJzICovXG4uY29udGFpbmVyMiB7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNkZWRlZGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHBsdW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogRGFya2VyIGNoYXQgY29udGFpbmVyICovXG4uZGFya2VyIHtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4vKiBDbGVhciBmbG9hdHMgKi9cbi5jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4ucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6MDtcbn1cblxuLm1lc3NhZ2V7XG4gIHotaW5kZXg6IDU7IFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDsgXG4gICAgYm90dG9tOiA3JTsgXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7IFxufVxuXG5cblxuLyogU3R5bGUgdGltZSB0ZXh0ICovXG4udGltZS1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICNhYWE7XG59XG5cbi8qIFN0eWxlIHRpbWUgdGV4dCAqL1xuLnRpbWUtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogIzk5OTtcbn1cbi5tYXQtY2FyZCB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjE0LCAyMTIsIDIxMiwgMC4wNDgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbn1cblxuLm1hdC1jYXJkMiB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjE0LCAyMTIsIDIxMiwgMC4wNDgpO1xuICBib3JkZXI6IC40cHggc29saWQgcmdiKDU5LCA1OSwgNTkpO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4ubWF0LWNhcmQtaGVhZGVyIHtcbiBcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgXG59XG5cbi5tYXQtY2FyZC10aXRsZSAge1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44MzYpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAzNCwgMzQsIDAuMTMpO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5tYXQtY2FyZC1jb250ZW50IHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5tYXQtY2FyZD4ubWF0LWNhcmQtYWN0aW9uczpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuIFxufVxuLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1idXR0b24sIC5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbntcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuMTUxKTtcbn1cblxuLnJlcXVpcmVtZW50cyB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIFxufVxuXG5cblxuLmNvbnRlbnQgLmRlc2NyaXB0aW9ue1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi5jb250ZW50IC5kYXRlLC5sb2NhdGlvbiwuZHVyYXRpb257XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG5cblxuLnRhYmxle1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiAgYXV0bztcbiAgb3ZlcmZsb3cteTogIGF1dG87XG59XG5cbi5tYXQtY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuXG5cbi5tYXQtbGlzdHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/conversations/messenger/messenger.component.html":
/*!******************************************************************!*\
  !*** ./src/app/conversations/messenger/messenger.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fullpage\">\n    <mat-card > \n        <mat-list >  \n            <mat-list-item *ngFor=\"let contact of ContactList\">\n              \n              <mat-icon mat-list-icon routerLink=\"/user/{{contact}}\">person</mat-icon>\n              <button (click)=\"PersonalmessagePageLink(contact)\">{{extractFirstNameAndLastName(contact)}} </button>\n             \n            </mat-list-item> \n        </mat-list>\n  </mat-card>\n\n</div>\n\n\n\n\n"

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