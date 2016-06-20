import { Component } from '@angular/core';
@Component({
    templateUrl: './components/HomePage/homePage.html',
    styles: [`
    body { padding: 0; margin: 0; }
    
    .header {
        background-color: #1f1f1f;
        color: #eaeaea;
        padding: 20px 10px;
    }
    
    .centerContainer {
        max-width: 1400px;
        padding: 20px;
        margin: 0 auto;
     }
     
    .categories {
        float: right;
     }
     
     .slider {
        height: 400px;
        background: #3f3f3f url("public/images/slide1.jpg") no-repeat center;
        border-top: 3px solid #eaeaea;
        border-bottom: 3px solid #eaeaea;
     }
     
     .logo {
        font-size: 25px;
        color: red;
        font-weight: bold;
     }
     
     ul {
        padding: 0px;
        margin: -20px 0 0;
     }
     
     ul li {
        display: inline-block;
        text-transform: uppercase;
        margin-left: 20px;
        font-size: 15px;
     }
     
     .sections {
        background-color: #fff;
        overflow: hidden;
      }
      
     .left_section {
        padding: 20px;
        float: left;
        color: #1f1f1f;
        word-wrap:break-word;
        width: 70%;
      }
      
      .right_section {
        background-color: #4f4f4f;
        padding: 20px;
        float: right;
        width: 300px;
        width: 23%;
       }
       
       .footer {
        margin-top: 20px;
        background-color: #1f1f1f;
        padding: 20px;
        height: 200px;
       }
    `]
})
export class HomePageComponent { }