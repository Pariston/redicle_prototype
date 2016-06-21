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
     
    .categories {
        padding: 0px;
        margin: -20px 0 0;
     }
     
     .categories > li {
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
        background-color: #1a1a1a;
        height: 100%;
        /*background-color: #4f4f4f;*/
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
       .post_header{
           color: #323336;
           font-size: 19px;
           letter-spacing: 0.2px;
           line-height: 50px;
       }
       .post_center >#header{
            width: calc(100% + 100px);
            max-width: 106%;
            margin: -20px -20px 20px -20px;
            max-height: 550px;
       }
       .post_center > p{
            font-size: 1.3em;
            line-height: 150%;
            color: #2d2d2d;
            margin-bottom: 20px;
       }
       .post_center > img {
           max-width: 100%;
           height: auto;
       }
       
       .right_section_span{
        border-bottom: 2px solid #385c7b;
        width:100%;
       }
       .right_section span {
        color: #fff;
        line-height: 17px;
        display: inline-block;
        padding: 7px 12px 4px 12px;
        background-color: #385c7b;
      
        
       }
       .right_section > ul {
        list-style: none;
      
       }
       .right_section > ul > li {
        line-height: 30px;
       }
       .right_section > ul > li > a {
        font-size: 18px;
        text-decoration: none;
          color:white;
       }
       .search{
            background-color: transparent;
            border-color: #333;
            color: #fff;
            border: 1px solid #e1e1e1;
            border-color: #333;
            width: 70%;
            height: 34px; 
       }
       .button{
            height: 32px;
            padding: 7px 15px 8px 15px;
            line-height: 16px;
            margin: 0;
            background-color: #444;
            color:white;
            border-color: #444;
       }
       .search_section{
            padding: 20px;
            
       }
       
       
       
    `]
})
export class HomePageComponent { }