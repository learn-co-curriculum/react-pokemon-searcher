# React Pokemon Searcher

## React Code Challenge Practice

## Project goals:
  - create an index displaying pokemon 'cards'
    - render each pokemon name, picture, and hp in a card
    - when clicked, the card should toggle between displaying the front and back pictures
  - allow users to search in order to narrow down the cards shown on the page
  - wire up the form to add a missing pokemon (bulbasaur is missing, and you can probably intuit the image links to use based on the data you have). Since there aren't any validations, you may have to manually remove additions from the db.json file if you make a mistake on a post request, etc. When a new pokemon is added, it should show on the page without having to refresh.
  - BONUS: implement some way to sort or filter pokemon in addition to the name search

## Project requirements:
  - components using state and props
  - re-renders based on client-side events
  - can both get data from, and post data to the database


## Trying to figure out where to start?

  For the most part, the framework for this application is already made, with a simple json server, and a react app, with all the components needed. Our goal here is to, given a list of deliverables, navigate the existing code base and implement several new features. Take some time to familiarize yourself with the structure of the application, and think about where you will be making changes in order to implement the new features. While you could solve this lab without creating new components, or changing any existing ones to be functional components, you are encouraged to do so if it makes sense to do that at any point.

  Be sure to use good programming practices, such as clear variable names and single responsibility functions. We want our react app to be clean, easy to read and understand, and of course, easy to to debug, or even add more features to later.

## Styling
  We've imported the Semantic library to keep your pokemon looking pretty. It may be helpful to take a look at the [Semantic Docs](https://react.semantic-ui.com), particularly when working with the Search component, to see how to pass props into it, and plan how you might use the data that you can get when someone starts typing into it.