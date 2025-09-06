# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?

   > Kids.js contains the code to process the click event that targets the child's name. I made it so that as long as the clicked target contains the data-type is "child" it will display the targets inner text (which is the child's name) and accesses the child's wish which is under data-wish (which is also grabbed from the clickEvent).

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?

   > The findCelebrityMatch() requires a singular kidObject from the entire kids array. Invoking it within the for loop allows for the proper argument for the function to accessed.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?

   > Within the CelebrityList.js module, I accessed the celebrity's sport by targeting the data-sport from the clicked target. 

4. Can you describe, in detail, the algorithm that is in the `main` module?

   > Short Version: The algorithm imports the functions responsible for generating the html and then invokes them, which updates what is displayed as the functions run.

     Long Version: The mainContainer variable targets the id=container from index.html. We establish that the inner HTML of the main container will be whatever applicationHTML is. 
     The function listed we created will dynamically display the html generated in Kids.js, CelebrityList.js, and  Pairings.js using the data from the database. 
