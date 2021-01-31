**CSS: Cascading Style Sheets.**
* used to style the website and make it visually appealing
* with CSS it makes our website stand out from another website/competitors
* most common way of using CSS is creating a file with .css extension and linking to an HTML file with a link tag

**Types of using CSS with HTML**        
1. Inline CSS
    * Inline CSS is used to specify the CSS properties of the HTML Tag inside the tag itself.
    * We insert the CSS properties with the style attribute
    ```html
    <p style="color:#ffff000;font-size:50px">This text is in black and font size if 50</p>```

2. Internal/Embedded CSS
    * Internal/Embedded CSS is used to specify the CSS properties of the Entire HTML Document inside the head tag of the document
    * Used when we want a single document to be styled uniquely
    * Here CSS is embedded inside the HTML file
    ```html
    <head>
    <style>
        p{
        color:darkcyan; font-size: 150px;
    }
    </style>
    </head>
    <body>
        <p>Test text</p>
    </body>
    ```

3. External CSS
    * External CSS is used to specify the CSS properties of multiple HTML files at once.
    * We write the css properties for a HTML tag in a file with .css extension,then this file is linked to HTML document with link tag
    ```html
    <link rel="stylesheet" type="text/css" href="main.css">
    ```
    * This is the most commonly used and most preferred way of implementing CSS.
    * There can be multiple css files for a website design but it is convention that the first/root css file should be called main.css
    ```html
    <head>
    <link rel="stylesheet" href="./main.css">
    </head>
    <body>
        <p>Test text</p>
    </body>
    ```
    ```css
    p{
    color:darkcyan; font-size: 50px;
    }
    ```

**Selectors**           
CSS selectors are used to select HTML tags/elements to apply(style) CSS properties.         
there are multiple ways we can select a HTML tag

1. Universal Selector
    universal selector is used to all HTML tags of a document       
    denoted with *      
    ```CSS
    * {
    color: green;
    font-size: 20px;
    line-height: 25px;
    }
    ```

2. Element(tag) selector            
    HTML tag selector is used to select all HTML tags with same name in document and apply styling to them.       
    ```CSS
    p{
    color:darkcyan; 
    font-size: 50px;
    }
    ```
    ```HTML
    <!-- here only the p tags content is styled -->
    <p>Test text</p>
    <div>something</div>
    <p>nothing</p>
    <h3>heading</h3>
    ```

3. ID selector          
    id selectors are used to access HTML tags with given id value.          
    a # sign is used to tell the selector is an id selector         
    it is one of the best practices to have all id's unique i.e only one tag per one id in a HTML document.         
    ```CSS
    #container{
    color:darkcyan; 
    font-size: 50px;
    }
    ```
    ```HTML
    <!-- only this p tag will be styled not the block p tag -->
    <p id="container">Test text</p>
    <div>something</div>
    <p id="block">nothing</p>
    <h3>heading</h3>
    ```

4. Class Selector       
    Class selectors are the most used CSS selectors         
    the class selector is used with a dot prefix.        
    class is used to group multiple tags to have the same styling.            
    we can have multiple classes for a single tag, this way we can focus on creating a single CSS class that styles specific thing           
    ```CSS
    .container{
    color:darkcyan; 
    font-size: 50px;
    }
    ```
    ```HTML
    <!-- only p tags with container class will be styled -->
    <p class="container">Test text</p>
    <div>something</div>
    <p>nothing</p>
    <h3 class="container">heading</h3>
    ```

5. Group Selector               
    Group selectors are used to styling multiple selectors at the same time with the same style.      
    we separate selectors with a comma                
    The selectors can be either element selectors,id selectors,class selectors             
    ```CSS
    p, div, h3{
    color:darkcyan; 
    font-size: 50px;
    }
    ```
    ```HTML
    <!-- p div h3 tags are styled -->
    <p>Test text</p>
    <div>something</div>
    <p>nothing</p>
    <h3>heading</h3>
    ```

**Advanced Selectors**              
Advanced selectors are used to selecting specific HTML elements in the document.       

1. Adjacent sibling selector:               
    The browser selects and applies styles to elements that are right after the specified tag.           

    ```html
    <style>
        /*adjacent sibling selector*/
        /* styles all a right after ul */        
        ul + a{
            color:green;
        }
    </style>
    <ul>
        <li>something</li>  
        <!-- this a tag is child to ul,so style is not applied -->
        <a href="#">inside the ul</a>
    </ul>
    <!-- this anchor a tag is directly after the ul tag so style will be applied -->
    <a href="#">something new</a>
    <!-- style won't be applied to this anchor as it is not directly after ul tag -->
    <a href="#">something new</a>

    <form>
        testing paragraph in form<br>
        <input type="text">
        <!-- won't apply styling because it is not directly after the ul tag -->
        <a href="#">inside form</a>
        
    </form>
    <p>testing paragraph</p>
    ```

2. General Sibling selector             
    General Sibling selector style elements that are siblings to each other(are inside a parent tag).                
    Elements only after the first tag will be styled, they don't have to right after each other as long as siblings.                

    ```html
    <style>
        /* General sibling Selector*/
        /* styles all span tags that are after a p tag*/
        p ~ span{color:red;}
    </style>

    <!-- won't style this span as it isn't after p tag -->
    <span>span outside p tag</span>
    <p>this is a p tag</p>
    <!-- will style this span -->
    <span>span after p tag</span>
    <h2>random text</h2>
    <!-- will style this span -->
    <span>span after p,span,h2 tags</span>
    <p>just a p tag</p>

    <!-- doesn't style the span inside the p -->
    <p>
        <span> span tag inside p tag</span>
    </p>
    ```

3. Descendant selector           
    Decendant selector styles elements that are inside the given selector                
    The decendant selectors can be child,grandchild to the given selector,i.e The depth of the element doesn't matter as long as it is inside the given selector.          
    ```html
    <style>
    /*decendant selector*/
    ul li{
        color:green;
    }
    </style>
    <ul>
        <!-- all li tags will be styled,doesn't matter the depth -->
        <li>style 1</li>
        <ol>
            <li>style 2 in level 2</li>
            <ul>
                <li>
                    style 3 in level 3
                </li>
            </ul>
        </ol>
    </ul>
    ```


4. Direct child selector                
    Direct child selector styles all matching first level child elements inside the selector.             
    These is different from Decendant selector as that styles children and children of children.        
    ```html
    <style>
        /*direct child selector*/
        /* styles all 1st level deep span tags*/
    div > span{
        color:red;
    }
    </style>
    <div>
        <!-- will be styled -->
        <span>inside div and is inside span</span>
        <p>inside div but not inside span
            <!-- won't be styled -->
            <span>inside div p</span>
        </p>
        <p>something</p>
        <!-- will be styled -->
        <span>inside div and is inside span</span>
    </div>
    <!-- won't be styled as it is out side of div-->
    <span>not inside div</span>
    ```

5. Attribute selector               
    Attribute selector styles elements in a document based on their attribute name and value.               
    These attribute selectors are of different types and used for different reason and scenarios.               
    ```html
    <!-- Syntax -->
    <style>
    selector[attributename=value]{property:value;}
    </style>
    ```
    * **[attributename] selector**              
        we use attributename selector to style all elements which contain this attribute                
        We can use this attributename selector for all elements,for a single element,for multiple elements                    
        ```html
        <style>
            /*applies to all tags with draggable attribute*/
        [draggable]{
            color:red
        }
        /*applies to all p tags with id attribute*/
        p[id]{
            color:blue;
        }
        /*applies to a,area,link tags with href attribute*/
        a, area, link[href]{
            color:pink;
        }
        </style>
        <div draggable="false">
            Hello this is a div tag
        </div>
        <p id="somethin">this is just a paragraph</p>
        <a href="#">testing anchor tag</a>
        ```

    * **[attributename="value"]** selector          
        We use this type of attribute selector when we know exactly which type of element we need to style.         
        This will only style the element with exact match of value,their are variations of this selector.                        
        ```html
        <style>
        /*styles if div contains test value for class*/                
        div[class="test"]{
            color:red;
        }
        </style>
        <!-- above selector styles both div tags -->
        <div class="test">this is test div tag</div>
        <!-- won't style as it is not a exact match -->
        <div class="test time">this is test time div tag</div> 
        <!-- won't style as it is not a exact match -->
        <div class="testtime">this is test time div tag</div>
        ```
        1. **attribute~=value:** this property, style elements if the value is one of the class attribute values.
            ```html
            <style>
            /*styles if div contains test value for class*/                
            div[class~="test"]{
                color:red;
            }
            </style>
            <!-- above selector styles both div tags -->
            <div class="test">this is test div tag</div>
            <div class="test time">this is test time div tag</div>
            ```
        2. **attribute|="value":** these style elements which begins with the given value in a whole word separated with a hyphen.    
            ```html
            <style>
            /*styles if div contains test value for class*/                
            div[class|="test"]{
                color:red;
            }
            </style>
            <!-- this div is styled -->
            <div class="test">this is test div tag</div>
            <!-- this div is styled because it is a big word separated by hyphen-->
            <div class="test-time">this is test time div tag</div>
            <!-- this div is not styled -->
            <div class="test time">this is test time div tag</div>
            <!-- this div is not styled as the beginning is not the value -->
            <div class="time-test-time">this is test time div tag</div>
            ```
        3. **attribute^="value":** this property, style elements that contain given value at the beginning, even in a single big word.   
            ```html
            <style>
            /*styles if div contains test value for class*/                
            div[class^="test"]{
                color:red;
            }
            </style>
            <!-- this div is styled -->
            <div class="test">this is test div tag</div>
            <!-- this div is styled as it begins with test-->
            <div class="testdata">this is test time div tag</div>
            <!-- this div is styled because it is starts with test-->
            <div class="test-time">this is test time div tag</div>
            ```
        4. **attribute$="value":** this property, style elements that contain given value at the end of the word, even in a single big word.   
            ```html
            <style>
            /*styles if div contains test value for class*/                
            div[class$="test"]{
                color:red;
            }
            </style>
            <!-- this div is styled -->
            <div class="test">this is test div tag</div>
            <!-- this div is styled because it is ends with test-->
            <div class="thisisatest">this is test time div tag</div>
            <!-- this div is not styled as it begins with test-->
            <div class="testdata">this is test time div tag</div>
            ```
        5. **attribute*="value":** this property, style elements that contain given value at any place in the world.   
            ```html
            <style>
            /*styles if div contains test value for class*/                
            div[class*="test"]{
                color:red;
            }
            </style>
            <!-- this div is styled as it contins test -->
            <div class="test">this is test div tag</div>
            <!-- this div is styled as it contins test-->
            <div class="testdata">this is test time div tag</div>
            <!-- this div is styled as it contins test-->
            <div class="thisisatest">this is test time div tag</div>
            ```
    * **[attribute][attribute]selector:** multiple attribute selectors are also allowed in css.             
        This way we can select an element with two attribute and two values just like above selectors.          
        Used rarely but quite easy to implement.            
        ```html
        <style>
        h1[rel="handsome"][title^="Important"] { color: red; }
        </style>
        <!-- styles this as this matches both attribute selectors -->
        <h1 rel="handsome" title="Important note">Multiple Attributes</h1>
        ```

**Specificity**         
Specificity is the concept of determining which style to apply for an HTML tag with multiple styles available.       
These rules are to be considered when applying multiple styles so that our website won't look confusing with non-cohesive design.           
The style with the highest priority overrides all other styles.             
If two or more styles are at the same specificity then the latest property gets applied.        

| Selector                                               | Priority              |
| ------------------------------------------------------ | --------------------- |
| Inline CSS                                             | 1st(highest) priority |
| ID selectors of Internal CSS                           | 2nd priority          |
| ID selectors of External CSS                           | 3rd priority          |
| Classes,pseudo-classes, and attributes of Internal CSS | 4th priority          |
| Classes,pseudo-classes, and attributes of External CSS | 5th priority          |
| Element selectors and pseudo-elements of Internal CSS  | 6th priority          |
| Element selectors and pseudo-elements of External CSS  | 7th priority          |
| Universal selectors of Internal CSS                    | 8th priority          |
| Universal selectors of External CSS                    | 9th(least) priority   |


```html   
<style>
    /* 2nd */
    #test{color:rgb(233, 89, 33);font-size: 70px;}
    /* 4th */
    .test{color:rgb(2, 247, 255);font-size: 70px;}
    /* 6th */
    p{color:rgb(255, 30, 143);font-size: 70px;}
</style>
<!-- 1st priority specificity -->
<p style="color:darkgreen" id="test" class="test">
This is just some text
</p>
```

```css
/* 3rd */
#test{color:rgb(233, 89, 33); font-size: 50px;}
/* 5th */
.test{color:rgb(2, 247, 255);font-size: 50px;}
/* 7th */
p{color:rgb(255, 30, 143); font-size: 50px;} 
```

**Pseudo Class selectors**                
Pseudo class selectors are used to styling our elements depending on specific states they are in.         
Ex:different style on hovering a element.       
```html         
<!-- Syntax -->         
selector:pseudo-selector{
    property:value;
}
```             

| pseudo-class  | description                                                       |
| ------------- | ----------------------------------------------------------------- |
| :hover        | apply style on hovering on element                                |
| :active       | applies style while click and holding the element                 |
| :focus        | applies style while the element is being focused, used with input |
| :link         | applies the style to a link before visiting, default is blue      |
| :visited      | applies style on visiting a link, the default color is purple     |
| :first-child  | applies the style to the first child tag in given tag             |
| :last-child   | applies the style to last child tag is given tag                  |
| :nth-child(n) | applies style to every nth-child of given tag                     |
| :only-child   | applies the style to the only child of given tag                  |

When using pseudo-selectors on anchor tags the order of pseudo selector matters.            
* link, visited, hover, active is the general order to apply all the styles and not conflict with each other.      
There are many more pseudo-classes but these are the most used.        

**Pseudo Elements**             
Pseudo elements are used to style specific parts of a html element          
Mostly used with P tags to make text/intoduction look attractive.       
```html         
<!-- Syntax -->         
selector::pseudo-element{
    property:value;
}
```
| pseudo element | Description                                              |
| -------------- | -------------------------------------------------------- |
| ::first-letter | styles first letter of paragraph                         |
| ::first-line   | styles first line of a paragraph                         |
| ::after        | insert something after paragraph content,ex:smiley face  |
| ::before       | insert something before paragraph content,ex:smiley face |
| ::selection    | styles content of a paragraph selected by user           |


**Colors**          
Colors are the most important part of an attractive website and CSS provides a lot of ways of coloring our website.           
Colors in CSS can be represented in different formats.          
All these formats are used to create a color on the screen. It is done by mixing the given base colors of that format.   

1. RGB          
    RGB stands for the Red, Green, Blue spectrum, We use these base colors to make other colors on our screen.         
    Syntax:RGB(red intensity,blue intensity,green intensity)      
    We specify the intensity of each color to create our own color.It is better to use a color pallatte to get these values.            
    The intensity ranges from 0 to 255,0 being no intensity of that color,255 being highest intensity of that color.    
    Ex: rgb(255,0,0)gives red,          
    rgb(0,255,0) gives green,               
    rgb(0,0,255) gives blue,                
    rgb(0,0,0) gives black,             
    rgb(255,255,255) gives white.               
    Shades of grey are created with equal values of all three colors.        
    ```css
    .text{
        /*makes the text color to teal*/
        color:rgb(0,150,150)
    }
    ```

2. RGBA             
    RGBA stands for Red,Green,Blue,Alpha spectrum,this is an extension for RGB.         
    We use RGBA when we want to provide the opacity(transparency) to text.         
    the opacity ranges from 0(fully transparent) to 1(fully opaque)         
    ex:rgba(255,0,0,0.2) this will give a red color with 20% opacity.       

3. HEX          
    Hex stands for Hexadecimal code.                        
    They are represented with a # symbol before the code.                   
    Hexadecimals are used to represent numbers of base 16.                      
    Hexadecimals has a range of 16 characters, they are 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f(0-15).these characters contain the given        value.             
    these hexadecimals are then used to convert to decimal and use in computation.          
    this is done by multiplying each character's value with 16th power of its position(counted from right to left),then adding the result.              
    ex: Hex #cd   is converted to decimal in this manner.             
    d=13\*16<sup>0</sup>=13         
    c=12\*16<sup>1</sup>=192             
    c+d=205   
    ex: Hex #ff is 15\*16<sup>0</sup>+15\*16<sup>1</sup>=255()             

4. HSL          
    HSL stands for Hue,Saturation,Lightness     
    * Hue is the degree on the color wheel from 0 to 360.                  
        Where 0,359 is red, 120 is blue,240 is green.           
    * Saturation is the intensity of the color(Hue) from 0 to 100%              
        here 0% means shade of grey,100% means full color           
    * Lightness is the brightness of the color,from 0 to 100%               
        here 0% means black,100% means white,50% is the optimal for any color.           
    ```css
    div{
        /*full red*/
        color:hsl(0, 100%, 50%);
        /*full green*/
        color:hsl(120, 100%, 50%);
        /*full blue*/
        color:hsl(240, 100%, 50%);
        /*full white*/
        color:hsl(0, 100%, 100%);
        /*full black*/
        color:hsl(0, 100%, 0%);
    }
    ```

5. HSLA             
    HSLA is the extension of HSL,similar to RGBA.           
    HSLA stands for Hue,Saturation,Lightness,Alpha(transparency).           
    the alpha channel ranges from 0 to 1.       
    0 being fully transparent,1 being fully opaque(not transparent).        
    ```css
    div{
        /*fully transparent*/
        color:hsla(0, 100%, 50%,0);
        /*fully opaque*/
        color:hsla(120, 100%, 50%,1);
        /*semi transparent*/
        color:hsl(240, 100%, 50%,0.5);
        /*full white*/
        color:hsl(0, 100%, 100%);
        /*full black*/
        color:hsl(0, 100%, 0%);
    }
    ```

**Backgrounds**             
The background property is used to specify the background effects for elements.         
There are several properties to define individual effects.       

*Shorthand Notation*                
Instead of writing single property value pair for a single category of styles we can write a single property with all the values to it,this reduces our code and makes for faster development.          
```css
body {
  background-color: #ffffff;
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}
/*Instead of above we can write shorthand notation of background style*/
body {
  background: #ffffff url("img_tree.png") no-repeat right top;
}
```     

1. *background-color*           
    This property colors the background of an element with given format,This can rgb,rgba,hsl,hsla format.          
    Most used is rgba.      
    ```css
    div {
    /*green color with 30% transparency*/   
     background: rgba(0, 128, 0, 0.3)
    }
    ```

2. *background-image*           
    this property puts an image as the background of an element.        
    By default, the image is repeated until it fills the entire content area of the element.      
    It is preferred to use an image that doesn't distract the end-user from the actual content of the web page.        
    ```CSS
    body {
    background-image: url("paper.gif");
    }
    ```

3. *background-repeat*    
    This property is used to repeat the given image the way we want.        
    * repeat(default): the image is repeated horizontally and vertically till it fills the content of the element
    * no-repeat: the image is not repeated. 
    * repeat-x: image is repeated until it fills the horizontal axis of the content area.
    * repeat-y: image is repeated till it fills the vertical axis of the content area
    ```CSS
    body {
    background-image: url("paper.gif");
    /*repeats the image on the vertical axis until it fills the content area*/
    background-repeat: repeat-y;
    }
    ``` 

4. *background-attachment*          
    This property is used to specify how the image is attached to the webpage,and how it is effected on scroll,This property is often used to no-repeat property.             
    * scroll: the background image will scroll with the page on scrolling 
    * fixed: the background image will be fixed while the web page content is being scrolled.   
    ```css
    body {
    background-image: url("img_tree.gif");
    background-repeat: no-repeat;
    background-attachment: fixed;
    }
    ```

5. *background-position*    
    background-position property is used to specify the starting position of the background image.              
    We have a combination of 9 positions to specify the starting position.        
    * *top-left(default)*:starts image on top left of content area
    * *top-right:*      starts image on top right of content area
    * *top-center:*     starts image on top center of content area
    * *bottom-left:*    starts image on bottom left of content area
    * *bottom-right:*   starts image on bottom right of content area
    * *bottom-center:*  starts image on bottom center of content area
    * *center-left:*    starts image on center left of content area
    * *center-right:*   starts image on center right of content area
    * *center-center:*  starts image on center center of content area

    ```css
    div{
        background-image:url("some.jpg");
        background-repeat:no-repeat;
        background-position:left bottom;
    }
    ```

6. *background-size*    
    background-size property is used to specify the size of the image in the content area.          
    * auto(default): images is showed in its original size
    * length: image is resized to  height and width pixels. 
    * percentage: image is resized by given percentage,of height and width or both
    * contain: resizes the image so that the image is fully visible,but the image will not occupy the entire content area
    * cover: resizes the image so that it fills the content area,the entire image may not be visible,as some of it is cropped.  
    ```css
    div{
    background: url(mountain.jpg);
    background-repeat: no-repeat;
    /*scales image to 300px 100px */
    background-size: 300px 100px;
    /*resizes image to 50% of its height and width*/
    background-size: 50%;
    /*resizes image to 70% height and 60% width*/
    background-size: 70% 60%;
    /*resizes image to fill the entire content area,may crop the image*/
    background-size: cover;
    /*resizes image to show the full image without cropping the image,
    may not fill the entire content area*/
    background-size:contain;
    }
    ```

**Gradients**           
Gradients are when two are more colors are used for a smooth transition of colors.       
There are two types of Gradients in CSS.                
to create gradients we need to provide at least two color stops(colors to render).        
1. **Linear Gradients:**     
    Linear gradients are rendered linearly with given color stops.   
    when using linear gradients we need to provide the direction in which the gradient starts with the first color stop and ends at the specified direction with the last color stop.       

    *Straight line gradient*            
    * to bottom(default): this will render a gradient from top to bottom
    * to right: this will render a gradient from left to right
    * to left: this will render a gradient from right to left
    * to top: this will render a gradient from bottom to top            
    ```css
    #grad {
        /*this displays a gradient of red starting from left and 
        transitioning to yellow toward the right*/
    background-image: linear-gradient(to right, red , yellow);
    }
    ```

        *diagonal gradient*        
    Instead of a straight line gradient, we can create a diagonal gradient by specifying the corners to end at.      
    * to bottom right: this will render a gradient from top left toward bottom right
    * to bottom left: this will render a gradient from the top right toward the bottom left
    * to top right: this will render a gradient from bottom left toward top right
    * to top left: this will render a gradient from bottom right to top left
    ```CSS
    #grad {
        /*this displays a gradient of red starting from left bottom and 
        transitioning to yellow toward the right top*/
    background-image: linear-gradient(to right top, red , yellow);
    }
    ```

        *angel gradient*        
    We can also specify the angle at which the gradient should end.                  
    Here degrees range from 0 to 360 and 0 to -360,where 0 means to top,180 means to bottom.        
    * number deg: specifies the gradient angle in number with deg after it and  
    ```css
    #grad {
        /*this displays a gradient at 83 degrees*/
    background-image: linear-gradient(83deg, red , yellow);
    }
    ```

        *multi-color gradient*      
    We can have multiple color stops to create a gradient,but this is not used that often as it makes things more cluttered.     
    ```css
    #grad {
        /*this displays a gradient of red,green,blue starting from left and 
        transitioning to yellow toward the right*/
    background-image: linear-gradient(to right, red ,green,blue, yellow);
    }
    ```

        *transparent gradient*                  
    We can also give two color stops of same color with different transparency,this is mostly used for background-color.        
    ```css
    #grad {
        /*this displays a gradient of red starting from left and 
        transitioning to yellow toward the right*/
    background-image: linear-gradient(to right, rgba(0,125,0,0.2) ,rgba(0,125,0,1));
    }
    ```

2. **Radial Gradients:**                
    Radial gradients are defined by their center.     
    This is similar to linear-gradient with multiple color stops, percentage of color.       
    Just the shape of the gradient is either circle or ellipse.     
    ```CSS
    #grad {
        /*this displays a gradient of red starting from left and 
        transitioning to yellow toward the right*/
    background-image: radial-gradient(circle, red , yellow);
    }
    ```
    * center: makes the gradient in circle shape
    * ellipse(default): makes the gradient in ellipse shape      

**Units**           
CSS has several units for expressing the size of text and data.     
There are two types of CSS Units            
1. **Absolute Units**           
    Absolute units are same across all the devices/screen sizes.    
    These are the most used but nowadays as many are moving to responsive webdesign,It is better to use relative units where every possible.    
    But still we can preffer absolute units when we are using for printing.         
    * cm: makes the font size in centimeters    
    * mm: makes the font size in millimeters    
    * px: makes the font size in pixels     
    ```css
    div{
        font-size:16px;
        font-size:2cm;
        font-size:14mm;
    }
    ```

2. **Relative Units**       
    Relative Units are relative to browser size,font,width etc.                 
    * em: Relative to font-size of the container                
        By default the font-size is 16px.           
    ```css
    div{
        font-size:30px;
    }
    span{
        /* here the font size will be 0.5*30px = 15px,
        since the container div is 30px so em is relative to that container*/
        font-size:0.5em;
    }
    ```

    * rem:  relative to root element font-size,i.e body tag     
    ```css
    div{
        font-size:30px;
    }
    span{
        /* here the font size will be 0.5*16px = 8px,
        since the root element body font size is 16px*/
        font-size:0.5em;
    }
    ```

    * vw:Relative to 1% of width of viewport
    ```css
    span{
        /* here the font size will be relative to viewport width of device,
        i.e as the window is resized the font size changes*/
        font-size:5vw;
    }
    ```

    * vh:Relative to 1% of height of viewport
    ```css
    span{
        /* here the font size will be relative to viewport height of device,
        i.e as the window is resized the font size changes*/
        font-size:5vh;
    }
    ```

    * %: relative to parent element    
    ```css
    span{
        /* here the font-size is 16px for 100%*/
        font-size:0.5em;
    }
    ```

**Text Formatting**             
We can use multiple formatting properties to make our text behave the way want. These are the most used.                  
1. **Text color**:          
    To change our text color we can use the color property.     
    ```css
    div{
        /*changes the text color*/
        color:rgba(0,123,123,0.2);
        /*changes the background color*/
        background-color:rgba(0,123,123,0.2);
    }
    ```

2. **Text Alignment**:      
    We can change the position/alignment of the text with text-align property.      
    We have multiple values to text-align that change how the text is displayed.        
    * left
        This makes our text start from left to right        
    * right
        This makes our text start from right to left
    * center
        This makes our text start from center,with out reaching the either end of the screen    
    * justified
        This value adds extra spaces to make the content fill the entire width of browser window.   
    ```css
        div{
        /*changes the text color*/
        color:rgba(0,123,123,0.2);
        /*text content is filled with enough spaces to the screen width*/
        text-align:justify;
        }
    ```

3. **Text Direction**:
    We can change the text render direction with **direction** and **unicode-bidi** properties.     
    * direction is used to tell the direction to render the text
    * ltr(default): renders the text on the website from left to right
    * rtl: renders the text from right to left
    * unicode-bdi is used to specify if the text direction should be changed or not used with direction property.
    * bidi-override: specifies that text can be bidirectional, overrides default setting.     
    
    ```css
    div{
        direction:rtl;
        unicode-bidi:bidi-override;
    }
    ```

4. **Vertical Alignment**:
    With the vertical-align property, we can specify the way text look in combination with an image or other element.     
    * top: text will be aligned to the topside of the element
    * center: text will be aligned to be at the center of the element
    * bottom(default): text will be aligned to be at the bottom side of the element
    ```CSS
    div{
        vertical-align:top;
    }
    ```

5. **Text-Decoration**          
    With the text-decoration property, we can apply multiple text-decorations.       
    The most popular use case of the text-decoration is to remove underlines of links.     
    Text-decoration is *shorthand* for text-decoration-line,text-decoration-color,text-decoration-style properties  

*text-decoration-line*
* underline: draws an underline
* overline: draws an overline(line above the text)
* line-through: renders a line that strikes the content        
* none: removes the decoration-line

*text-decoration-color:*            
This property is used to provide a color for the decoration line          

*text-decoration-style:*            
used to change the way the decoration(line) is styled.          
* solid(default): renders a solid line
* double: renders a double line
* dotted: renders a dotted line
* dashed: renders a dashed line
* wavy: renders a wavy line
```css
a{
    /* removes the underline of links */
    text-decoration-line:none;
    /*changes the links color from blue to this color*/
    text-decoration-color:rgb(23,53,125);
    /*changes the bottom line to a dashed line*/   
    text-decoration-style:dashed;

    /*can use shorthand notation to make less code*/        
    text-decoration: underline rgb(23,53,125) wavy;
}
```

6. **Text-transform**           
    with the text-transform property, we can apply text formatting to all the text in an element.        
    * uppercase: makes all the text to uppercase.
    * lowercase: makes all the text to lowercase
    * capitalize: capitalizes the starting character of all words in an element
    CSS
    p{
        text-transform:capitalize;
    }
    ```

7. **white-space**      
    white-space property is used to specify how to use the white space of a paragraph.      
    Can be used to wrap content.            
    * normal(default): multiple white spaces are rendered as single white space.
    * nowrap: text will not be wrapped into the next line. 
    * pre: text will only be wrapped on line breaks.    
    ```css
    p{
        white-space:nowrap;
    }
    ```

**Font-formatting**         
Text formatting and font formatting are two different concepts, while text formatting works the same for all browsers, font formatting may not,   as different fonts have different styles of rendering the text, bold, italics, spaces.         
Another difficulty is that the font we want to use might not be available to the browser of the end-user, which results in bundling the font from the server-side.      
*font* is used as the shorthand notation to font-family(required),font-size(required),font-style,font-weight properties        
1. **font-family**      
    used to specify the font-family to use for the font.    
    Multiple fonts can be applied to a single element,these are used as fallback if the previous ones are not available to the browser.     
    We can use external fonts in our code with link property,then just use the property with font-family.       
    ```html
    <head>
    <!--This will download the font from the link which browser can read  -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" 
    rel="stylesheet">
    </head>
    <style>
    div{
    /*we can use above fonts in our webpage now,
    roboto is default and sans-serif is the backup if roboto is not available*/
    font-family: 'Roboto', sans-serif;
    /*if we are using shorthand notation we must specify size and family in order*/
    font: 16px 'Roboto';
    }
    </style>
    ```
2. **font-size:**       
    This specifies the size of the font in our element,By default the browser renders most fonts at 16px,but some fonts use different default sizes.        
    we can use all CSS units to specify the font size of the element.       
    * medium(default): sets font size to browser medium size
    * xx-small,x-small,smaller,small,large,larger,x-large,xx-large: these values are specified by the browser.
    ```css
    div{
        /*all the below properties are valid,
        so experiment a bit before finalizing some value*/
        font-size:small;
        font-size:2em;
        font-size:100%;
        font-size:50px;
    }
    ```

3. **font-style**       
    font-style is used to specify the style of the font.        
    * normal(default): renders the font in normal style
    * italic: renders the text in italic style.     
    ```css
    div{
        font-style:italic;
    }
    ```

4. **font-weight**      
    font-weight defines how thick or thin our font should look like.        
    * normal(default): font size is default
    * bold:makes font size bold
    * bolder: makes font size bolder
    * lighter: makes font size thinner
    ```css
    div{
        font-weight:bolder; 
    }
    ```

**Box Model**           
In CSS everything is a box, So it is important to understand this concept.       
It is part of the design and layout of the Web.     
CSS Box Model wraps around every HTML element.      
Each Box model contains 4 elements.     
1. *Content*                
    Content is the actual HTML element's content.Ex: text or images.    
    When we are setting width and height of an element we are actually setting the width and height of the content area.        
    ```css
    div{
        width:500px;
        height:600px;
        border:15px solid green;
    }
    ```

2. *Border*         
    Border is the line that goes around the padding and content of the element.         
    This is used to show a border/frame around an element.          
    CSS *border* property is a shorthand notation of border-width,border-style,border-color       
    * *border-width*: border-width property is used to specify the width/thickness of the broder-style.       
        This property can value in different combinations.     
        1. single value: here a single value for border-width is given which is applied to top,right,bottom,left side borders.  
        2. two values: here first value is given for top,bottom sides, second value is given for right,left sides   
        3. three values: here first value is given for top side,2nd value is given to right and left sides,3rd value is to bottom side
        4. four values: here each value is given to top,right,bottom,left(clock wise) sides respectively    
        ```css
        div{
            /*single value*/
            border-width:10px
            /*two values*/
            border-width:10px 12px
            /*three values*/
            border-width:10px 12px 11px
            /*four values*/
            border-width:10px 12px 11px 18px
        }
        ```

    * *border-style*: the border-style property is used to specify the style of the border to display.             
        This property is mandatory while using borders. There are several.          
        1. single value: here a single value is applied to the top, right, bottom, left sides.  
        2. two values: here first value is given for the top, bottom sides, the second value is given for the right, left sides   
        3. three values: here first value is given for topside,2nd value is given to right and left sides,3rd value is to the bottom side
        4. four values: here each value is given to top,right,bottom,left(clockwise) sides respectively    

        There are several values to broder-style,they are           
        * none(default): no style to border
        * solid: renders a solid line
        * dotted: renders a dotted line
        * dashed: renders a dashed line
        * double: renders a double line
        ```css
        div{
            /*renders a solid line on all sides of border*/
            border-style: solid;
            /*renders a solid line on top,bottom sides,
            dashed line on right,left sides*/
            border-style: solid dashed;
        }

    * *border-color* : border-color property applies color to sides of border.      
        This works just like the above properties taking different values as input and working with them.       
        * transparent: makes the border color to transparent
        * color value: takes the general color format to color the side of the border.
        ```CSS
        div{
            border-color:red;
            border-color:red blue;
        }
        ```

    * *border-radius*: the border-radius property is used to specify the radius of elements corners.Used to created rounded squares.        
        This property takes values in this order(clockwise direction), top-left,top-right,bottom-right,bottom-left.     
        1. single value: here a single value is applied to the top-left,top-right,bottom-right,bottom-left.
        2. two values: here first value is given for the top-left, bottom-right, the second value is given for the top-right, bottom-left sides   
        3. three values: here first value is given for top-left,2nd value is given to top-right and bottom-left,3rd value is to the bottom-right
        4. four values: here each value is given to top-left,top-right,bottom-right,bottom-left(clockwise) sides respectively    

        ```css
        div{
            border-radius:10px;
            border-radius:20px 20px;
        }
        ```


    * *border-shorthand*        
        border is the shorthand for border-width,border-style,border-color properties in this order.        
        Instead of individual border property we can use a shorthand notation for convenience, but the order should be maintained.        
    ```css
    div{
        border: 3px dotted blue;
    }
    ```

3. *Padding*            
    Padding is the area between content and border.             
    Padding creates extra-space with in element,while margin creates extra space around the element.        
    Padding is the shorthand notation to padding-top,padding-right,padding-bottom,padding-left.         
    While using shorthand notation we can use the multiple values.        
    * padding-top:  sets the padding to top of element
    * padding-right: sets the padding to right side of the element
    * padding-bottom: sets the padding to bottom of the element
    * padding-left: sets the padding to left side of the element
    ```css
    div{
        padding:10px;
        padding:10px 20px;
    }
    ```

4. *Margin*             
    Margin is the area outside of the border of an element.     
    Margin is most often used to separate multiple elements.This is transparent.            
    Margin is the shorthand notation of margin-top,margin-right,margin-bottom,margin-left.          
    * margin-top: sets margin of top side of an element
    * margin-right: sets margin of right side of an element
    * margin-bottom: sets margin of bottom side of an element
    * margin-left: sets margin of left side of an element
    ```css
    div{
        margin:10px;
        margin:10px 15px;
    }
    ```

5. *Box-sizing*         
    Box-sizing property is used to specify how the width and height of a box is calculated.         
    this property specifies should we include padding and borders in calculation for width,height.          
    * content-box(Default): width and height properties are calculated with content only,padding and borders are included.
    * border-box: width and height properties include padding and borders in calculation,this is preferred     
    ```css
    div{
        box-sizing:content-box;
        width:100px;
        /*here the content alone will be 100px*/
        box-sizing:border-box;
        width:100px;
        /*here the entire box-model width is 100px,
        combined with padding and border,so ultimately the content may be 60-70px*/
    }
    ```

6. *Box-shadow*         
    box-shadow is used to create shadows for an element in a box.     
    Used mostly to create different UI, UX styles. Mostly used for neomorphism.       
    Syntax:`box-shadow:h-offset v-offset blur spread color`
    * none(default): no shadow
    * h-offset(required): specifies how much the shadow should be on the horizontal axis, positive value makes a shadow on the right side, negative value makes a shadow on the left of the box.       
    * v-offset(required): specifies how much the shadow should be on the vertical axis, positive value creates a shadow on the bottom side, negative value creates on the top side. 
    * blur: specifies the blur radius, the higher the value more blur effect.    
    * spread: specifies the size of the shadow, positive number increases shadow, negative number decreases shadow.   
    * color: provides a color for the shadow.

    ```css
    div{
    border-radius: 60px;
    background: #e3e4f2;
    box-shadow:  25px 25px 50px #94949d, 
                -25px -25px 50px #ffffff;
             /*this code makes a button with neomorphism style */
    }
    ```

<div style="background-color:#e3e4f2;
height:100px;">
<button
style="
border-radius: 60px;
background: #e3e4f2;
box-shadow:  25px 25px 50px #94949d, 
             -25px -25px 50px #ffffff;
             margin-left:35%;
             margin-top:30px;">Just a Button that is filling<br>entire row to make it easy to see</button></div>


1. *width*          
    width property is used to specify the width of an element.      
    If the browser window is less then the width of the element, a scroll bar is shown to view content.      
    The content of the website wouldn't be as intuitive with various device screens.       
    This is the reason we prefer responsive websites that change the content layout with device size.      
    ```css
    p{
        border:2px solid green;
        width:200px;
        /*paragraph(border) will take only 200px to display,
        if the browser window is more than 200px wide the content is shown normally,
        if the browser window is less than 200px,
        say 100px a scroll bar is shown on the bottom of the browser window,
        this can be used to view the content,
        The box with a 200px border won't be modified just hidden in the window.*/
    }
    ```

2.  *min-width*    
    min-width property is used to specify the minium width of an element.       
    min-width is used to specify css effects to be applied to elements having minimum width of a certain value.           
    Ex: consider a media query with min-width of 500px so a browser with width of 400px will not have any effect,           
    if the browser window is more than min-width(700px) the given effects/styles take place.        
    ```css
    p{
        border:2px solid green;
        min-width:200px;
        /*
        here border with 200px is shown normally if the browser width is less or equal to 200px,
        a scroll bar is shown to view the entire box of the paragraph,          
        if the browser width is more than 200px content in the box is unwrapped to fill the border-box. 
            
        */
    }
    ````

3.  *max-width*          
    max-width property is used to create a maximum width an element can take.           
    max-width is used to perform css effects/styles to be applied till the browser width reaches/less than max-width value.     
    Ex:consider a media query with max-width of 500px so browser width of 300px will have given css effects.                
    but a browser width greater than the given width(700px) will not have given css effects.        
    ```css
    div{
        /*Here div tag can have 500px content,
        if content is 400px nothing happens,
        if content is 600px then content is wrapped to fit 500px,
        */
        max-width:500px;
    }
    ```

4.  *height*            
    height property is used to provide the height of an element.    
    ```css
    p{
        height:200px;
    }
    ```

5.  *max-height*            
    max-height property is used to provide the maximum height an element should have.       
    Will fill the element till the given max-height value.      
    ```css
    body{
    border: 2px solid black;
    }
    p{
    max-height:200px;
    border:3px solid green;
    }
    /*here the p tag will only fill till 200px*/
    ```

6.  *min-height*         
    min-height property is used to provide the minimum height an element should have.       
    Will fill the element from the given min-height value.          
    applies styles if browser height is min-height+.    
    ```css
    body{
    border: 2px solid black;
    }
    p{
    min-height:200px;
    border:3px solid green;
    }
    /*here the p tag will fill till the body tags border from 200px.*/
    ```


**Float**               
CSS Float property is used to create layouts.       
Nowadays we use flexbox, grid properties to create layouts, But we still use float.     

The float property makes an element float above all other elements, this makes the elements go underneath the floated element.      
Text content won't go underneath the floated element.       

Float and clear properties go hand in hand for use.     

float property can have following values:            
1. left: element floats to the left of the container    
2. right: element floats to the right of the container  
3. none(default): The element doesn't float     
```css
div{
    /*floats the content to left side of browser window*/
    float:left;
    /*floats the content to right side of browser window*/
    float:right;
    /*element doesn't float*/
    float:none;
    }
```

**Clear**                   
The clear property is mostly used in combination with float property.       
Clear property specifies how new elements can be floated after a cleared element.       

When using clear property the values should match for better results,i.e if an element is floated to the right then we should clear right to it.     
Clear has the following values:
1. left: clear to the left of a floated element
2. right: clears to right of a floated element
3. both: clear to left and right of a floated element most used value.     
4. none(default): doesn't clear on either side of an element.       
```css
div{
    /*creates an element on right side of browser*/
    float:right;
    /*starts new float element below the floated element, instead of underneath or beside it*/
    clear:both;
    }
```

**overflow**            
overflow property is used to specify a clearfix for floats most of the time.            
Used to specify whether to increase the element's box or insert box if the content is larger than the box size.        
* visible(default): content is rendered out of the box, if the content is larger than the box.       
* hidden: hides extra content overflowed.       
* scroll: overflowed content is clipped with a scroll bar to view the rest of the content.  
* auto: most used value, if overflowed content a scroll bar is shown.
```css
p{
    overflow:auto;
}
```



**Display**         
The most important Layout property is the display property.         
This provides how an element is displayed.      
Every HTML element has a default display property in most cases it is either *block* or *inline*            
We can change an inline element to a block element and vice versa with this property.         

The display has the following values:       
1. *Block*: makes an element block element, gives spaces before and after the content
2. *Inline*: makes an element inline element, puts content before and after the element.   
3. *none*: hides an element, used with javascript to show content on an action, content with none value is present not displayed to the user, not even white space.           
    There is another property like this *visibility: hidden*, this will hide the content from the webpage but shows a space that it used to exist.   
4. *flex*: makes the current element as a block level flexbox container
5. *grid*: makes the current element as a block level grid container
6. *inline-block*: puts element in a series of inline elements in a block
7. *inline-flex*: makes element as a inline flex container
8. *inline-grid*: makes element to a inline grid container
9. *table*: creates a table element
```css
div{
    /*makes current element a flex container*/
    display:flex;
    /*makes current element a grid container*/
    display:grid;
    /*used to create menu bars in a single block with multiple inline elements*/
    display:inline-block;
}
```

**Position**        
CSS Position property is used to define the positioning of the element.                     
After specifying the type of positioning to use, we can define the position with top, right, bottom, left properties.        
There are five values to position property.         
1. *static(default)*             
    Element with static position is not affected by top,right,bottom,left properties.       
    A static element is always positioned in normal page flow.       
    ```css
    div{
        position:static;
    }
    ```

2. *relative*               
    Element with relative position is relative its normal position.     
    For example is a button is centered with relative position,then top,right,bottom,left values will move the button from that center position.            
    relative position with top,right,bottom,left values are not used often,as it moves the element out of flow.     
    But we will use relative position with a parent element then applies properties to child elements.      
    ```css
    div{
        position:relative;
        top:30px;
        /*If the div is at 150,150 by default,
        after appling the relative positioning and top value 
        div will be at 180,150 */
    }
    .parent{
        position:relative;
    }
    /*child element is positioned absolute to parent element which is relative,
    if not the child element will be absolute to html page at 0,0*/
    .child{
        position:absolute;
        top:0;
    }
    ```

3. *fixed*              
    fixed element is positioned relative to viewport,i.e element will be fixed even while scrolling.        
    fixed element is positioned by top,right,bottom,left.       
    The element first moves to the position(right,bottom) then sets the values to position.     
    Used for popups,menu,sidebars.      
    ```css
    div{
        postion:fixed;
        top:10px;
        right:10px;
        /*here the div element moves to top,right then pushes the element 10px from top and right*/
        }
    ```

4. *absolute*        
    An absolute element is positioned relative to nearest parent element,unlike fixed which is positioned to viewport.      
    This is mostly used to put positional elements inside a element.            
    ```css
    .relative{
        position:relative;
    }
    /*above div will be a relative box,
    inside which we are inserting this absolute element,
    if the position of below element is fixed it will be placed relative to viewport,
    i.e outside relative box.*/
    .absolute{
        postion:absolute;
        bottom:10px;
        right:15px;
    }
    ```

5. *sticky*             
    A sticky position element is positioned based on user scroll.       
    Sticky element toggles between relative and fixed depending on scroll.      
    This element is relative until it reaches a position in viewport then it is toggled to fixed.       
    The position is top,right,bottom,left.          
    ```css
    div{
        position:sticky;
        /*will be relative as the element is more than 20px from top,
        turns to fixed if the element is 20px from top*/
        top:20px;
    }
    ```

6. *z-index*            
    z-index property specifies the stack order of an element.   
    Default z-index value for all elements is 0.            
    An element with greater z-index value is at front,element with lowest z-index value is behind all other elements.           
    z-index only works with positioned elements i.e, absolute,fixed,relative,sticky.                
    If we want an image to be background for our text we can make it less than 0,i.e -1.     
    ```css
    img{
        position:relative;
        z-index:-1;
    }
    .text{
        position:relative;
        z-index:0;
    }
    .popup{
        position:relative;
        z-index:1;
    }
    /*Here image is background,text is above image(default),
    and a popup is above the text.*/
    ```


**inline-block**            
we can create a grid of boxes with float and clear but it was a bit hacky and not intuitive with inline-block we can do this easily.    
Inline-block elements are same as inline elements in a single line,this elements can be set width and height like a block element.      
```css
/*creating grid of boxes with float and inline-block*/
.box {
    float: left;
    width: 200px;
    height: 100px;
    margin: 1em;
}
.after-box {
    clear: left;  
}

.box2 {
    display: inline-block;
    width: 200px;
    height: 100px;
    margin: 1em;
}
```

**FlexBox**             
    FlexBox is a layout mechanism created to solve issues with previous layouts and make responsive websites easy to develop.           
    Before flexbox, we had to resort to math tricks on CSS floats to make the website responsive, and centering buttons was a nightmare.      
    there are hundreds of memes online how hard it is to make a button align to center vertically.         
    All these things lead to the development of the flexbox layout specification in 2009 which later got many more features down the line currently the latest flexbox specification was provided in 2017.          

    Using flexbox we can make our layout, content easy to structure and display.         
    Syntax:`display:flex;`            
    There are two components of the flexbox.        
    1. container: A container is used to group multiple flex items.
    2. items: all items in a flex container are flexible items.

    
**Flexbox-Container**           
flexbox container is used to group multiple elements for easy layout creation.          
We have the following properties that can be used on the container.                
1. *flex-direction*             
    Used to specify the direction of flex container items,container has to be flexible.     
    * row(default): items are aligned in horizontal direction,left to right
    * row-reverse: items are aligned in horizontal direction in reverse,right to left.
    * column: items are aligned in vertical direction,top to bottom
    * column-reverse:items are aligned in reverse vertical direction,bottom to top.     
    ```css
    div{
        display:flex;
        flex-direction:column;
    }
    ```

2. *flex-wrap*          
    flex-wrap property is used to wrap flex items in a container.           
    * nowrap(default):nowrap specifies that items should not be wrapped to newline,in this case the items are shrunk to fit the given space.
    * wrap:wraps items to new line.Most used.     
    * wrap-reverse:wraps items to new line but in reverse.Not used that often.      
    ```css
    div{
        flex-wrap:nowrap;
        flex-wrap:wrap;
        flex-wrap:wrap-reverse;
    }
    ```

    3. *flex-flow*     
    flex-flow is the shorthand notation for flex-direction and flex-wrap.       
    This is preferred to use,the order is direction and wrap values.        
    ```css
    div{
        display:flex;
        flex-flow:row wrap;
        flex-flow:column nowrap;
    }
    ```

4. *justify-content*            
    justify-content property is used to specify how the items of a container(horizontal axis) are displayed and space between items is taken care on the main-axis(horizontal).           
    * flex-start(default): Items are positioned at the containers beginning
    * flex-end: Items are positioned at the containers end location.     
    * center: Items are placed at the center of the container.  
    * space-between: Items start from the containers starting point and end at the ending point, while the space between items is evenly distributed
    * space-around: Space between items is evenly distributed across all items, except the first and last items which have the same amount of space from the starting and ending point of the container. Most used.        
    ```css
    div{
        display:flex;
        justify-content:space-around;
    }
    ```

5. *align-items*            
    align-items property is the same as justify-content but for the vertical axis(cross-axis), specifies how the items and space between them, will be taken care of.       
    * flex-start: items are placed at the beginning/top of the container
    * flex-end: items are placed at end/bottom of the container
    * center: items are placed at the center of the vertical axis.  
    * baseline: items are positioned in relation to the baseline of the container. i.e text of all items is in a line. not used much.      
    * stretch(default): items are stretched to fit the container.this only works if the items don't have a height value.    
    ```css
    div{
        display:flex;
        align-items:flex-start;
    }
    ```

6. *align-content*          
    align-content property is used to align the content in the container,both horizontal and vertical axis.
    removes the white space between vertical items.                 
    while justify-content aligns content on horizontal axis, align-items aligns items on vertical axis, align-content positions the flex lines,i.e the lines with flex items on them.            
    only works if container has more than one line of items.        
    Used in combination with justify-content.       
    ```css
    div{
        display:flex;
        justify-content:center;
        /*center items on horizontal axis*/
        align-items:center;
        /*centers items on vertical axis*/
        align-content:center;
        /*brings the line with flexitems to center of container.*/      
    }
    ```        

**Flexbox-items**           
Flexbox items are the elements in a flex container, these are individual elements can have their own styling.           
All the flexbox items/children are flexible by default.     
We have the following properties that can be used on items.     

1. *align-self*         
    align-self property is used to specify a single flex item how it should be positioned compared to others.   
    this is rarely used.            
    Won't work with align-content property, as that moves the entire line of items.      
    * stretch: stretches the height of the item to fill the content, works only if no height value is specified. 
    * baseline: item is positioned on the baseline of the container
    * flex-start: item is placed at flex containers top/beginning position
    * flex-end: item is placed at flex containers bottom/ending position
    * center: item is positioned at the center of the container.    

    ```css
    div{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .singleitem{
        align-self:flex-start;
        /*this single item will be on top and 
        all other items in container will be at the centre*/
    }
    ```
    
2. *order*          
    order property is used to specify the order in which the items of a flex container are rendered on the webpage.      
    * By default, all the items in a flex container have an order of zero.         
    * order takes negative and positive values.
    * elements order in HTML document doesn't have to be changed to change the order in CSS.       
    * The sequence and the range of the order value doesn't matter
    * browser renders the highest order item at the beginning and least order item at the last.        
    ```css
    #first{
        order:10;
    }
    #second{
        order:8;
    }
    #last{
        order:-8;
    }
    ```

3. *flex-grow*              
    flex-grow property is used to expand the item compared(in relation) to other items in a container to fill the remaining white space.      
    * default grow value of items is zero.Won't grow.won't accept negative values  
    * if all the items have same flex-grow than they all expand equally.        
    ```css
    #first{
        flex-grow:1;
    }
    #second{
        flex-grow:2;
    }
    /*here second will fill 2 parts of all empty white space,
    if available white space in the container is 150px,
    second item will occupy 100px more,
    first item will occupy 1part i.e 50px more of all empty white space.*/
    #third{
        flex-grow:1;
    /*here the third item will take same space as first*/
    }
    ```

4. *flex-shrink*            
    flex-shrink is the opposite of flex-grow. This property specifies if the item should shrink or not relative to other items in the container.     
    * default value is one, the item will shrink to fit the container size.
    * value of zero specifies that the item shouldn't be shrunk.    
    * Ex: 3 items with 50px in container of 100px will be fitted by shrinking the item to about 37px.       
    ```css
    #first{
        flex-shrink:0;
        /*item won't shrink*/
    }
    #second{
        flex-shrink:1;
        /*item will shrink*/
    }
    #third{
        flex-shrink:2;
        /*item will shrink two times as second item*/
    }
    ```

5. *flex-basis*             
    flex-basis property is used to specify the initial length of an item in a container.   
    flex-basis provides the default width before applying additional properties.    
    if flex-basis is zero all items will have the same width, no matter the content, useful for a website with blocks of explanation.       

    * auto(default): length is same as content inside it.
    * pixels:accepts the width in pixels
    ```css
    #first{
        /*sets the initial width/length of the item based on content*/
        flex-basis:auto;
        /*sets the initial width to 100px*/
        flex-basis:100px;
    }
    #second{
        /*will not give width of item based on its content*/
        flex-basis:0;
        /*will expand the item same as other items*/
        flex-grow:1;
    }
    ```

6. *flex*           
    flex property is a shorthand for flex-grow,flex-shrink,flex-basis in this order.        
    * It is preferred to use this instead of individual property for better code maintenance.  
    ```css
    #first{
        flex: 2 0 auto ;
        /*will grow the item twice the other items,won't shrink the item, initial length to auto*/
    }
    ```

**Grid**            
Grid is used to create a layout just like flexbox but with more manual control.           
Flexbox creates a container with single dimension items i.e items are either row aligned or column aligned.     
The grid creates a container with two dimension items i.e items can be positioned in a specific row and column at the same time.       
`display:grid;`     
Items in a grid container are grid items.       
Here we can use fr values:      
* fr units are relative units that are preferred to use when working with divs. They take the entire width of the container then divide it into specific ratios  

**Grid-Container**          
1. *grid-template-columns*       
    grid-template-columns property is used to specify how many columns and at what width each column should be created in a container.      
    the values are space separated width's of each column.      
    * auto: provides the width of each column depending on item sizes.Preferred to use this instead of absolute units.    
    * repeat: instead of writing auto 4 time we can use repeat value with how many times to repeat a certain value.  
    ```css
    div{
    display:grid;
    grid-template-columns:auto auto auto auto;
    grid-template-columns:repeat(4,auto);
    }
    div{
        grid-template-columns: 80px 200px auto 40px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        /*here fr is ratio of entire width i.e 25%*/
        grid-template-columns: 1fr 3fr 1fr 3fr;
        /*here entire width is divided in to 8 parts and
         are assigned to the 4 columns in 1part 3parts 1part 3parts manner*/
    }
    /*our grid can have four columns with specific widths or automatic widths.*/
    ```

1. *grid-template-rows*     
    grid-template-rows property is used to specify the number of rows of a grid container and their height.     
    Same as grid-template-columns, the values are separated heights of each row.     
    * auto is preferred to determine the height of each row on demand, instead of absolute heights.      
    * repeat: instead of writing auto 4 times we can use repeat value with how many times to repeat a certain value.  
    * 
    ```css
    div{
        display:grid;
        grid-template-rows:auto auto;
        grid-template-columns:auto auto auto;

        grid-template-rows:repeat(2,auto);
        grid-template-columns:repeat(3,auto);

        /*here a grid container with 3 columns and 2 rows is created*/
    }
    ```

1. *grid-template-areas*            
    grid-template-areas property is used to specify the area of a grid item in the layout.      
    We use the grid-area property to specify the name of the item, then use it to specify how much area this item uses in the grid.  
    * We can specify other unnamed items with period to use the area.       
    ```css
    .first{
        grid-area:firstitem;
    }
    div{
        display:grid;
        grid-template-areas:'firstitem firstitem';
        /*div with 9 elements, 
        here the first item will take 2 column width,and push other items down*/
        grid-template-areas:'firstitem firstitem . .';
        /*here the first row will have 4 columns,with firstitem occupying 2 column width*/
    }
    ```

1. *grid-template*      
    grid-template is a shorthand for grid-template-rows and grid-template-columns and grid-template-areas      
    We can either specify rows and columns of the grid or specify a grid layout with specific items at specific positions.  
    Syntax:`grid-template:grid-template-rows/ grid-template-columns | grid-template-areas`
    ```css
    .firstitem{
        grid-area:'myitem';
    }
    div{
        display:grid;
        grid-template:auto auto / auto auto;
        /*creates a 2x2 grid*/
        grid-template:'myitem myitem . .'/'. .'
        /*creates a 4x2 grid,where first two rows is occupied by firstitem*/
    }
    ```

1. *grid-gap*           
    grid-gap is a shorthand for grid-column-gap and grid-row-gap.       
    accepts one value which is given to both rows and columns,       
    accepts two value first value is given to row-gap and the second to column-gap          
    * grid-column-gap: defines the gap between columns of a grid
    * grid-row-gap: defines the gap between rows of a grid

    ```css
    div{
        display:grid;
        grid-column-gap:10px;
        grid-row-gap:10px
        
        /*same as above*/
        grid-gap:10px;
        grid-gap:10px 10px;
        /*both are same*/
    }
    ```

1. *grid-auto-rows*             
    grid-auto-rows is used to specify the height of each row.        
    By default, the content inside the item will determine the height and width of the item.         
    * fixed: we can provide a fixed value for the height of the grid, but the content will overflow if it can't fit in it.
    * auto: the height will be determined by the size of content will not look good.
    * minmax: to make the grid look even we use minmax function which takes the minimum value and maximum value of the height of the item.
    * `minmax(100px, auto): here the minimum height of each row is 100px but the maximum height of a specific row is changed automatically on need.           
    ```css
    div{
        display:grid;
        grid-auto-rows:minmax(150px,auto);
    }
    ```

1. *grid-auto-columns*              
    grid-auto-columns specifies the maximum width of each column.       
    Same as grid-auto-rows but for columns.     
    * fixed: can have a fixed value of width for all columns.
    * auto: determines the width of the column based on the content
    * minmax(100px,auto): here the width of each column is 100px and if content doesn't fit in 100px width size increases.      
    ```css
    div{
        display:grid;
        grid-auto-columns:minmax(100px,auto);
    }
    ```

1. *grid-auto-flow*         
    grid-auto-flow property is used to specify the process of inserting items in a grid with auto-placed items      
    * row(default): items are placed on row basis.  
    * column: items are placed in column order.
    * dense: items are placed to fill empty space(holes) that can occupy current item.   
    * row dense:items are placed in row order and any empty holes(space) is filled with items
    * column dense:items are placed in column order and any empty holes(space) is filled with items
    ```css
    div{
        display:grid;
        grid-auto-flow:dense;
        grid-auto-flow:column;
    }
    ```

1. *grid*           
    grid property is used as shorthand for          
    * grid-template-rows
    * grid-template-columns
    * grid-template-areas
    * grid-auto-rows
    * grid-auto-columns
    * grid-auto-flow        

    Syntax:         
    `grid:grid-template-rows / grid-template-columns | grid-template-areas | grid-template-rows / grid-auto-columns | grid-template-columns / grid-auto-rows`
    ```css
    div{
        display:grid;
        grid:auto auto / auto auto;
        /*creates a 2x2 grid*/
        grid: 'myarea myarea .';
        /*creates grid with 3 columns and filling two column with firstitem*/
        grid: auto auto / minmax(100px,auto);
        /* creates a grid with 2 columns/rows and minmax applied for rows/columns.*/
    }
    ```

1. *justify-content*            
    justify-content property is used to specify how the grid should be aligned on the horizontal axis.         
    grid columns are moved to position the items on the horizontal axis.    
    * start(default): items are aligned from the left of the container.
    * center: items are aligned from the center of the horizontal axis of the container
    * end: items are aligned from the right of the container.
    * space-between: items are given an equal amount of white space between them, except the first and last item which are aligned close to the left and right of the container.
    * space-around: items are given the same amount of space between them, except the first and last item which are given half-space between the left and right of the container.        
    * space-evenly: items are given the same amount of space between all items first and last items included.   

    ```css
    div{
        display:grid;
        justify-content:space-around;
        justify-content:start;
    }
    ```

1. *align-content*      
    align-content is used to specify how the items in a grid are aligned over the vertical axis.        
    Grid rows are moved to aligned items on the vertical axis.  
    Similar to justify-content.     
    * start(default): items are aligned from top of the container.
    * center: items are aligned from the center of the vertical axis of the container
    * end: items are aligned from the bottom of the container.
    * space-between: items are given an equal amount of white space between them, except the first and last item which are aligned close to the top and bottom of the container.
    * space-around: items are given the same amount of space between them, except the first and last item which are given half-space between the top and bottom of the container.        
    * space-evenly: items are given the same amount of space between all items first and last items included.       

    ```css
    div{
        display:grid;
        align-content:space-around;
        align-content:start;
    }
    ```
    

**Grid-items**          
By default, each column will have one grid item.     
Use a grid generator online its easy.       

1. *grid-area*      
    grid-area property is used to specify the grid items' size and location in the grid layout.      
    This is shorthand for grid-row-start,grid-column-start,grid-row-end,grid-row-end.           
    Grid-area can also be used to assign a grid name for an item. (not preferred.)           
    * grid-row-start: specifies on which row the item will start from
    * grid-column-start: specifies on which column the item will start from
    * grid-row-end: specifies on which row the item ends, or how many rows the item spans
    * gird-column-end: specifies on which column the item ends, or how many columns the item spans      
    * span: we use span to specify how many columns/rows the item should extend from the starting point.preferred.       
    ```css
        div{
            display:grid;
            grid-template: auto auto auto auto / auto auto auto auto ;
        }
        .firstitem{
            grid-area:2/1/4/3;
            /*in a grid of 4x4*/
            /*this item will start at 2nd row 1st column and end at 3rd row 2nd column,
            above 4/3 means that the item will extend till that column/row 
            with that column/row excluded.*/
            grid-area:2/1/span 3 /span 2;
            /*here the item will start at 2nd row 1st column and end at 3rd row 
            and 2nd column
            span option specifies that the item should 3 rows from 2nd row and
            2 columns from 1st column*/
        }
        .firstitem{
            grid-area:'myarea';
            /*used to name the item to use in template-area*/
        }
        div{
            display:grid;
            grid-template-area:'myarea myarea .';
            /*this will create a grid of 3 columns,
            where first item occupies two columns in first row.*/
        }
    ```
        
**Transitions**             
Transitions are used to show the transformation of a button or input.       
Transition property is shorthand for  transition-property,transition-duration,transition-timing-function,transition-delay.      
The default transition duration is 0s, their will be no effect if the duration isn't set.        
Syntax:`transition:property duration timing-function delay`             

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
}
/*here the transition will be red color expanding from 100px to 300px till 2s.*/
div:hover {
  width: 300px;
}
```
1. *Transition-property*        
    Transition-property is used to specify which property to apply the transition effect.        
    * CSS property: We specify which css property we are making a transition for,this can be any css property(keys like width,background,display etc.)           
    * all: instead of specifing individual css properties for a transition we can specify all to apply to all css properties        
    ```css
    div {
        width: 100px;
        height: 100px;
        background: red;
        transition-property: width;
        transition-property: background;
        /*this provides transition effect for background*/
        transition-duration: 2s;
    }
    /*on hover the div tag will apply a transition on width of element*/
    div:hover {
        width: 300px;
        background:black;
    }
    ```

2. *transition-duration*            
    transition-duration property is used to specify how much time in seconds/milliseconds the animation/transition should take place for.           
    * value is specified in seconds(5s) or milliseconds(500ms)      
    ```css
    div{
        width:100px;
        height:100px;
        background:red;
        transition-property:width;
        transition-duration:900ms;
    }
    /*on hover the transition takes place for 900milliseconds*/
    div:hover{
        width:300px;
    }
    ```

3. *transition-timing-function*     
    transition-timing-function is used to specify the speed curve of the transition effect, how fast or slow the transition takes place. 
    There are multiple effects/functions that can be used to display how the effect takes place.    
    * ease(default): transition starts slow, then speeds up and ends slowly
    * ease-in: transition effects with a slow start
    * ease-out: transition effects with a slow end
    * ease-in-out: transition effects with a slow start and slow end
    * linear: transition effects with the same speed from start to end
    * *cubic-bezier*: This function is used to specify the transition in numeric formats. The function takes 4 values for each one-fourth part of the transition effect, the value ranging from 0 to 1 is the speed multiplier.             
        cubic-bezier(0.42,0,1,1): means the transition starts with 40% speed for first part of effect,doesn't have any transition effect for 2nd part,3rd and 4th parts will have full transition speed 100%.This value is similar to ease-in starting slow and ending fast.        
    ```css
    div{
        width:100px;
        height:100px;
        background:red;
        transition-property:width;
        transition-duration:900ms;
        transition-timing-function:cubic-bezier(0.42,0,1,1);
        /*same as above*/
        transition-timing-function:ease-in;
    }
    /*on hover the transition effect is fast start and slow end*/
    div:hover{
        width:300px;
    }
    ```

4. *transition-delay*           
    transition-delay property is used to specify when the transition effect starts.     
    This is different from duration,while duration defines the time of effect,delay defines the time to start the effect.       
    The value is in seconds(s) or milliseconds(ms).         
    The transition waits the same amount of time after the effect to go back to normal.     
    ```css
        div{
        width:100px;
        height:100px;
        background:red;
        transition-property:width;
        transition-duration:900ms;
        transition-delay:2s;
    }
    /*on hover the transition takes 2 seconds to start the effect
     and takes 2s to go back to normal again*/
    div:hover{
        width:300px;
    }
    ```

**Transformation**              
Transformations are used to apply 2D or 3D tranformation to HTML elements,these transformations can be rotate,skew,move,scale etc.      
These are not that important and not used in day to day life, but these are the most used values of transform.       
* none(default): no transformation applied to the element.
* matrix(n,n,n,n,n,n): provides a 2D transformation with 6 values in matrix.
* translate(x,y): moves the element given number of pixels. 
* scale(x,y):   scales or enlarges the element given number of times applied to width and height.   
* rotate(angle): rotates the element with given angle, positive value rotates right side, negative value rotates left side.

```css
div{
    transform:none;
    /*rotates element 45degrees right side*/
    transform:rotate(45deg);
    /*moves the element with 20px width and 10px height */
    transform:translate(20px,10px);
    /*element is twice the width and height*/
    transform:scale(2,2);
}
```

**Animations**          
Animations are used to move some items or images to make it look like a video or gif.       
Animations are mostly used to display some animations on a specific time or process, example would be the progress bar.      

Animation property is the shorthand for 
* animation-name
* animation-duration
* animation-timing-function
* animation-delay
* animation-iteration-count
* animation-direction
* animation-fill-mode
* animation-play-state.            

Syntax:`animation:name duration timing-function delay iteration-count direction fill-mode play-state`


1. *@keyframes*     
    @keyframes is used to create an animation, then this animation is referred by animation property.         
    The animation is created by changing from one group of rules to another group of rules.       
    This change can be specified in two ways.       
    1. from-to: we specify the starting code in from block and ending animation code into block. This is used to create an animation.
    2. 0%-100%: we create multiple blocks on where to animate given code.at 0%,25%,40%,60%,85%,100% etc. Provides more granular control.        

    Create a good animation in a software creator and import the code.      
    ```css
    /*mymove is the name of this animation used by animation property,
    styles to display at multiple points are specified in a group,
    these are used in sequence to create an animation*/
    @keyframes mymove {
        0%   {top: 0px;}
        25%  {top: 200px;}
        50%  {top: 100px;}
        75%  {top: 200px;}
        100% {top: 0px;}
    }
    ```


2. *animation-name*     
    animation-name is used specify a name for the @keyframes animation.         
    ```css
    div {
    animation-name: mymove;
    }
    @keyframes mymove {
        0%   {top: 0px;}
        25%  {top: 200px;}
        50%  {top: 100px;}
        75%  {top: 200px;}
        100% {top: 0px;}
    }
    ```

3. *animation-duration*     
    animation-duration property specifies how long the given animation of @keyframes takes place,the time is given in seconds(s) or millisecond(ms)     
    ```css
    div {
    animation-name: mymove;
    animation-duration:2s;
    /*the animation takes two seconds to complete*/
    }
    @keyframes mymove {
        0%   {top: 0px;}
        25%  {top: 200px;}
        50%  {top: 100px;}
        75%  {top: 200px;}
        100% {top: 0px;}
    }
    ```

4. *animation-timing-function*      
    animation-timing-function property specifies the speed of an animation,how it starts and how it ends.       
    * *cubic-bezier(n,n,n,n)*: we use this to granularly controls what is the speed of animation till 25%,50%,75%,100%.The value ranges from 0 to 1 1 means full speed 0 means no speed.      
    * ease(default): animation starts slow and speeds up and slows down at end. 
    * ease-in:animation starts slow
    * ease-out: animation ends slow
    * ease-in-out: animation starts slow and ends slow
    * linear: animation starts and ends in same speed.
    ```css
    div {
    animation-name: mymove;
    animation-duration:2s;
    animation-timing-function:ease-in;
    }
    @keyframes mymove {
        0%   {top: 0px;}
        25%  {top: 200px;}
        50%  {top: 100px;}
        75%  {top: 200px;}
        100% {top: 0px;}
    }
    ```

5. *animation-delay*        
    animation-delay property is used to specify the time it takes to start the animation.       
    ```css
    div {
    animation-name: mymove;
    animation-duration:5s;
    animation-timing-function:ease-in;
    animation-delay:2s;
    /*animation starts after 2s*/
    }
    @keyframes mymove {
        0%   {top: 0px;}
        25%  {top: 200px;}
        50%  {top: 100px;}
        75%  {top: 200px;}
        100% {top: 0px;}
    }
    ```

6. *animation-iteration-count*      
    animation-iteration-count property specifies how many times an animation should be played.      
    * number: specifies a number of times an animation should be repeated.
    * infinite: repeats the animation infinitely.       
	```css
	    div {
	    animation-name: mymove;
	    animation-duration:2s;
	    animation-timing-function:ease-in;
	    animation-iteration-count:infinite;
	    }
	    @keyframes mymove {
	        0%   {top: 0px;}
	        25%  {top: 200px;}
	        50%  {top: 100px;}
	        75%  {top: 200px;}
	        100% {top: 0px;}
	    }
    ```

7. *animation-direction*        
    animation-direction is used to specify the direction of animation to play.Whether to render in forward direction backwards,alternate cycles.    
    * normal(default): animation is played from 0% to 100% of keyframes block
    * reverse:animation is played from 100% to 0% of keyframes block
    * alternate: animation is played from 0 to 100 then 100 to 0
    * alternate-reverse: animation is played from 100 to 0 and 0 to 100.        
    ```css
    div {
    animation-name: mymove;
    animation-duration:2s;
    animation-timing-function:ease-in;
    animation-direction:reverse;
    /*animation is played from 100% to 0% blocks*/
    }
    @keyframes mymove {
        0%   {top: 0px;}
        25%  {top: 200px;}
        50%  {top: 100px;}
        75%  {top: 200px;}
        100% {top: 0px;}
    }
    ```

8 *animation-fill-mode*     
    animation-fill-mode is used to specify the style of the element before the animation is started and/or after the animation is completed.        
    * none(default): no style is set to animated element.
    * forwards: the animated element will retain the last frame styling
    * backwards: the animated element will get the styling from the first frame 
    * both: the animated element will get the styling from the first frame and retains the last frame's styling.    

    ```css
    div {
    animation-name: mymove;
    animation-duration:2s;
    animation-fill-mode: forwards;
    /*div tag will have the style of 100% block.after the animation.*/
    }
    @keyframes mymove {
        0%   {top: 0px;}
        25%  {top: 200px;}
        50%  {top: 100px;}
        75%  {top: 200px;}
        100% {top: 0px;}
    }
    ```

9. *animation-play-state*       
    animation-play-state is used to specify if animation is running or paused.  
    This is used with javascript to make the animation stop and play on condition.      
    * paused: pauses the animation
    * running(default): resumes the animation.         
    ```css
    div {
    animation-name: mymove;
    animation-duration:2s;
    animation-play-state:running;
    }
    @keyframes mymove {
        0%   {top: 0px;}
        25%  {top: 200px;}
        50%  {top: 100px;}
        75%  {top: 200px;}
        100% {top: 0px;}
    }
    ```

**Variables**           
Instead of Hardcoding the values for properties, we can use variables in CSS.             
The major advantage of using a variable instead of hardcoding values is Once we create variables they can be accessed in javascript just like any other variable.                       
* All variables in CSS should be defined in a CSS selector scope.       
* To make a variable available globally it should be either put inside in body selector or :root selector.      
*  Variables in CSS Cascade down, so properties use the closest selector group value.
*  Syntax to  create a variable `--page-background-color:red;`          
*  Syntax to use the variable `background-color:var(--page-background-color,defaultvalue)`
*  the default value is optional if the variable is not present in the entire css file.
```css
:root{
    --page-background-color:red;
    --text-color:black;
    --hover-text-color:blue;
}
body{
    --text-color:blue;
}
p{
    background-color:var(--page-background-color,blue);
    color:var(--text-color);
    /*color would be blue since it is the latest value,
    but background color will be red as it is available 
    but if it isn't then the background-color would be blue.*/
}
```

**Responsive WebDesign**            
Responsive Webdesign is the concept of adapting the webpage depending on the end device, We use this to make our website look good regardless of device.         
* information should not be removed to fit to small screen device rather adapted or moved, shrunk, resize to fit the content that best suits the end-user device.
* This is called responsive because the website will respond to change in the device and adapts its content No javascript is used to accomplish this, Only HTML CSS.     

**viewport**            
viewport is the user's visible area of the webpage. The viewport varies from device to devise screen.         
So we adapt our page depending on different viewports or screen sizes.          
to use the viewport of the device we have to specify it in the HTML5 document meta tag.     
This is so important and widely used most text editors and emmet abbreviations include this with their boilerplate code         
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
* width=device-width: sets the width of webpage to screen width
* initial-scale=1.0: sets the initial zoom of the page when it is loaded.    

*some best practices*           
* shouldn't create content that is wider than the end-user device's viewport
* use media-queries to vary the page content depending on the viewport
* Don't create a webpage just for one viewport, rather create in a general sense and adapt it to fit different viewports.      
* always create a `box-sizing:border-box` for all elements to make sure the element's padding and margin are inside the elements actual width/height, This ensures our element size doesn't change with extra properties.     
* It's preferred to create a grid-view with 12 columns to have fine control on how the elements are sized and positioned 
* This is the same reason many CSS frameworks use a layout system with 12 columns.      
* Create a website with a mobile-first approach so when the viewport gets bigger we arrange them to fit, this makes for better design choices.  

**Media Queries**           
Media queries are the way of creating a responsive web design, this is the way of creating a website with styles that look good no matter the device, browser being used.       
This is a technique introduced in CSS3, where the styles in it are only applied when a specific condition is met.        
Syntax:`@media condition{styles}`               

We can create multiple media queries to make the website adapt to different viewports.          
It is preferred to use CSS variables to define the screen size and create their own respective web page design.         

Typical device viewports/breakpoints/media-queries.     
1. phones:`@media only screen and (max-width:600px)`
2. tablets:`@media only screen and (max-width:768px)`
3. laptops/desktops:`@media only screen and (max-width:1200px)`
4. Tvs:`@media only screen and (min-width:1200px)`  

*media-queries*         
@media rule is used to check for condition and apply styles depending on them.      


*Media type*: check the type of device          
* all(default): specifies the styles for all devices types
* print: specifies the style only while printing
* screen: specifies the style only for screens. Most used.
* speech: specifies the styling for speech readers.     

*Conditions*            
* and: styles only if both conditions are satisfied. Most used
* or: styles if at least one of the conditions is satisfied.
* not: styles if the condition is not satisfied.        

*Media Features*: this is used to specify the condition check to apply the style inside it.              
* max-height: max-height of the display area, styles if browser height is less than a given value.
* max-width: styles if the browser width is less than given width
* min-width: styles if the browser width is more than given width
* min-height: styles if browser height is more than given height    
* orientation: styles if browser orientation(landscape or portrait) matches given orientation.  
* resolution: styles if the screen resolution matches the given value.       

```css
div{
    background-color:red;
}
/*by default the bg color is red*/
@media only screen and (max-width:600px){
    /*bg color is blue if the browser width is less than 600px*/
    div{
        background-color:blue;
    }
}
@media only screen and (min-width:601px) and (max-width:900px){
    /*bg color is green if the browser width is between 600px and 900px */
    div{
        background-color:green;
    }
}
```
he
