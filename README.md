##### The current progect is a simple web application that allows users to create a simple. poll voutes
##### You can add new polls to any HTML page in script tag

#### The technologies used in this project are: 

###### - Scss (CSS preprocessor)
###### - React for frontend
###### - Webpack for bundling
###### - Babel for transpiling
###### - Jest for testing

## Installation
For starting the project you can use the following command:

```npm run start```

For testing the project you can use the following command:

```npm run test```

For building the project you can use the following command:

```npm run build```


#### How to add a new poll in HTML page?

```html  
<div class="poll-widget"></div>

<script src="https://cdn.jsdelivr.net/gh/krakadet/react-widget@widget/build/bundle_up.js" type="text/javascript"></script>

<script type="text/javascript">
    MyApp.init([
        {
            mainQuestion: "What is your favorite car?",
            answers: ['audi', 'kia', 'bmw'],
        }
    ]);
</script>
```
#### If you want to add more than one poll you can use the following code:

```html    
<div class="poll-widget"></div>
<div class="poll-widget"></div>

<script src="https://cdn.jsdelivr.net/gh/krakadet/react-widget@widget/build/bundle_up.js" type="text/javascript"></script>

<script type="text/javascript">
    MyApp.init([
        {
            mainQuestion: "What is your favorite color?",
            answers: ['Red', 'Green', 'Blue'],
        },
        {
            mainQuestion: "What is your favorite car?",
            answers: ['audi', 'kia', 'bmw'],
        }
    ]);
</script>
```
~~x~~
Important: The best practice to add script tag to the end of the HTML page.

### TODO:

1. Add some more unit tests
2. Add some more tests for the build process
3. Resolve the typescript issue 
4. Provide some additional variables for layout responsive
5. Update scss root stylesheets
6. Will try to more reduce the bundle size
7. Add prehooks for the build process

#### External example links:
##### - [Static HTML page with two polls](https://codesandbox.io/s/hidden-lake-2ozqri?file=/index.html)
##### - [Static HTML page with one poll](https://codesandbox.io/embed/unruffled-ully-7gz9c3?fontsize=14&hidenavigation=1&theme=dark)

#### Important Notice:
For run project on a local machine you need to redefined render method in the index.tsx.
On time, I will try to find a solution for this problem. 

```js
const config={
    mainQuestion: "What is your favorite color?",
    answers: ['Red', 'Green', 'Blue']
}

ReactDOM.render(<PollWidget {...config}   />, document.getElementsByClassName('poll-widget')[0]);

