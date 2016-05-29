# JuniorFrontendTest

## GOALS


#### The main goal of this tech test is to create a client side web application that reproduces the screenshots below by using [GitHub API](https://developer.github.com/v3/) .

We will only evaluate the client side code and the criteria will be based mainly on:

1. Good use of **pure Javascript** language without external libraries and frameworks like jQuery, React...
2. Clean HTML and CSS markup
3. Clean, maintainable & easy­to­read
4. Good architectural practices 

## Live App on Heroku

1. Please visit [Heroku](https://marfeel-vanilla-js-tt.herokuapp.com/)

## Instructions to Run locally

1. Clone the repository
2. run `bundle install` (To install rack)
3. run `rackup`
4. Point the browser at http://localhost:9292/


### Unit Tests

1. open `SpecRunner.html` in the browser

### JShint

1. run `grunt jshint` to check for syntax with JShint


### Notes 

1. I used ES6 syntactic sugar for class declarations
1. I swapped the "bio" for "location" in the main User info panel, as many users leave it blank. 

## SCREENSHOTS

#### First Screen

The user can search a username of GitHub

![first](https://github.com/MarcoCode/GitHubReposVanillaJS/blob/master/images/initial.png?raw=true)

#### Success Screen

If the searched username does exist: The searched user profile is displayed with all his repositories

![success](https://github.com/MarcoCode/GitHubReposVanillaJS/blob/master/images/success.png?raw=true)

#### Error Screen

If the searched username does not exist: An error is shown

![error](https://github.com/MarcoCode/GitHubReposVanillaJS/blob/master/images/error.png?raw=true)




