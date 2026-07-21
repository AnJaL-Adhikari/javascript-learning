 // Basic onclick event example
    document.getElementById('spiderman').onclick = function () {
        alert("Spiderman clicked");
    }


    /*
        Old event handling methods:

        attachEvent() - used in older Internet Explorer browsers

        jQuery:
        $("element").on("click", function(){ })

        Common event object properties:
        type - event type
        timestamp - time event happened
        defaultPrevented - checks if default action is prevented
        target - element that triggered event
        clientX/clientY - mouse position relative to browser window
        screenX/screenY - mouse position relative to screen
        altKey/ctrlKey/shiftKey - keyboard modifiers
        keyCode - keyboard key value
    */


    // addEventListener is the modern way to attach events
    document.getElementById('spiderman')
        .addEventListener('click', function (e) {

            // Prints complete event object
            console.log(e);

        }, false);



    /*
        EVENT BUBBLING

        Event moves from child element to parent element.

        Example:
        Clicking Spiderman:
        spiderman -> li -> ul -> body
    */

    document.getElementById('images')
        .addEventListener('click', function (e) {

            console.log('Clicked inside the ul');

        }, false);


    document.getElementById('spiderman')
        .addEventListener('click', function (e) {

            console.log('Spiderman clicked');

        }, false);



    /*
        EVENT CAPTURING

        Event moves from parent element to child element.

        Third parameter true enables capturing mode.
    */

    document.getElementById('images')
        .addEventListener('click', function (e) {

            console.log('Clicked inside the ul');

        }, true);


    document.getElementById('spiderman')
        .addEventListener('click', function (e) {

            console.log('Spiderman clicked');

        }, true);



    /*
        stopPropagation()

        Stops the event from moving further.
        It prevents bubbling/capturing to parent elements.
    */

    document.getElementById('spiderman')
        .addEventListener('click', function (e) {

            console.log('Spiderman clicked');

            // Stops event propagation
            e.stopPropagation();

        });



    /*
        preventDefault()

        Prevents the browser's default action.

        Example:
        Clicking Google normally opens google.com.
        preventDefault() stops that action.
    */

    document.getElementById('google')
        .addEventListener('click', function (e) {

            // Prevents opening the link
            e.preventDefault();

            // Stops event from reaching parent elements
            e.stopPropagation();

            console.log("Google clicked");

        }, false);


   // Selecting the parent element (ul with id="images")
// and adding a click event listener to it
document.querySelector('#images').addEventListener('click', function(e) {

    // e.target gives the exact element where the click happened
    // Example: if you click on an image, e.target will be that <img> element
    // console.log(e.target.parentNode);


    // Displays the tag name of the clicked element
    // Example: IMG, LI, A, etc.
    console.log(e.target.tagName);


    // Checking if the clicked element is an image
    // This prevents removing the list item when clicking somewhere else
    if(e.target.tagName === 'IMG') {


        // Prints the id of the clicked image
        // Example: spiderman, ironman, hulk, etc.
        console.log(e.target.id);


        // Selecting the parent element of the image
        // Here the parent of <img> is the <li> element
        let removeIt = e.target.parentNode;


        // Removes the complete <li> element from the DOM
        // So the clicked image will disappear from the list
        removeIt.remove();


        // Alternative old method:
        // removeIt.parentNode.removeChild(removeIt)
        // This also removes the <li> element from its parent
    }

}, false);
