# EAT DA BURGER!  (Node Express Handlebars)
![Madeby](https://img.shields.io/badge/MadeBy-haymanot-brightgreen.svg)
![License](https://img.shields.io/badge/License-none-blue.svg)

## Description
This is a burger logger application with MySQL, Node, Express, Handlebars and a homemade ORM. The Model View Controller(MVC) design pattern is appllied.Node and MySQL were used to query and route data in the app, and Handlebars to generate the HTML.
## Installation
The application is deployed on Heroku. You can run the application from the following link below.
* https://young-retreat-31053.herokuapp.com/
    
## Usage
* When the users visits the page for the first  time, they see a form where they can submit new burgers to be listed on the left side of the page until to be devoured or waiting to be devoured and list of burgers that are devoured if-any on the right side of the page.

* When user submits any kind of burger name in the user input area and hit the `Submit` button,he will see it on the left side of the page to be devoured.

![image1](https://drive.google.com/uc?export=view&id=1Qfil8gxjNpYxeU2E-ZCKsn1PbAzpdFJe)

* When user wants to eat one of the listed Burgers, he needs to click on the `Devour it` button appended to each one of the burger lists. once the button is clicked, that burger will be listed on the right side of the page.

![image2](https://drive.google.com/uc?export=view&id=1Q6xjv8ak_wvkw4yB4PJa8NaMHfXLZEvE)
## How To
* The following Routes are created at the server side:
  * `GET /` - Returns Page where the burgers waiting to be devoured are listed on the left side of the page and the burgers that are devoured are listed on the right side of the page.
  * `POST /api/burgers` - New burger entered by the user will match with this route and will be saved to the database and associated id will be returned which is not utilized in this application.
   * `PUT /api/burgers/:id`- When the burger is devoured, this route will be matched. The burger with the associated id which is passed as a parameter in the URL will be marked as devoured by
   assigning devoured property of the burger in the database to false.
## Credits
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

