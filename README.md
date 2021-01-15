# CVS Health, DevSecOps Definitions and Examples Repository

## TLDR

Using BDD developers can create solid, tested business logic and also, test that same business logic to determine if it meets the acceptance critirea for the use story.

## Intro

This repo contains a set of Javascript files that show how to use unit and BDD tests in conjunction, to test application code. All the code is in the folder called `jasminesamples`.

All unit-test were written using `Jasmine`(https://jasmine.github.io). BDD test were written using `cucumber-js`(https://cucumber.io).

There are two BDD _features_ in this project:

1. earning-points-from-flights.feature
2. earning-points-from-flights-table.feature

The first feature is pretty simple and it only contains one "hard coded" scenario. The second feature(`earning-points-from-flights-table`) makes use of an _"examples" table_, a feature unique to BDD which makes it easier for the business to provide tangible businnes logic samples to development teams. Development teams can use BDD scenarios and their sample data as part of the acceptance critirea for the feature.

Each table row in the _feature_ file is treated as a "scenario" and it's executed as such by the BDD test(s). If the table contains 2 rows, the BDD test(s) will be run twice, once for each row in the table.

To test a _feature_ the developer writes a _step definition_ file which is then run by _cucumber_ to teste each scenario. The currespondent _step definition_ file for the `earn-points-from-flights-table` feature is called _earning-points-from-flights-table.js_. The currespondent _step definition_ file for the `earn-points-from-flights` feature is called _earning-points-from-flights.js_.

##### Folder Structure

Following accepted best practices for Javascript projects, the _app's_ code is stored in the `src` folder.

Inside `src`, you'll find the `controller` and `model` folders containing business logic and app models respectively.

_unit-tests_ (\*.spec.js) files are stored in the same folder as the source code. It's also OK to move _unit-tests_ files to a different folder to keep source code "clean", for now we're keep tests and source file together.

For BDD tests files, `cucumber` suggests to store all "features" and "step definitions" files in a folder called `features`(https://cucumber.io/blog/bdd/how-to-organise-your-step-definition-code/), this keeps the app's code clean from any BBD tests.

#### Developer Notes

**Code Base**
Even though this is a small POC, the code written follows an MVC(without the "V") approach to organize and store business logic. The controller and model classes in this POC, could easily be used in a REST base web-service or any UI framework. The controller and model are meant to work in tandem to encapsulate all business logic and to access the model's data via the controller only.

**About BDD and TDD**
Using TDD best practices I was able to create and test the business logic encapsulated in the controller as well as define a model class to store data. All unit-tests that came out as part of following TDD exist idenpendent of any BDD test, but that's not true for the controller and model (the "app's" business logic), which is the desire outcome.

Using BDD I was able to "exercise" the business logic encapsulated in the controller to ensure the _acceptance criteria_ for the "user story" was wet.

I concluded that, TDD allows the developer to "flesh out" solid and tested business logic (in this case in the form of a controller). The same business logic(controller code) is then used to validate acceptance criteria for user stories by testing this business logic(controller) using BDD tests.

In my opinion, BDD tests are similar to "integration test" with the **big** added bonus that acceptance criteria can be written in plain English and can include examples which are used to exercise BDD tests.

**About BDD**
Is my opinion that BDD is a great tool to use when BAs, developers, QA work together in the creation and validation of user stories because:

1. Plain english language can be used to describe scenarios and expectations
2. Scenarios can include sample data. The data in sample scenarios is used by developers while working on business logic for the application. Additionally, the same sample data is used by the developers when writting BDD tests to testing business logic.

**Challenges For The Organization**
BDD requires a different way to work and additional code. Teams interested in adapting BDD will benefit from more clear and consice user stories and acceptance criteria but, that comes at the cost of more test code.

The challenge is to recognize that even thought more time is spent in tests, the benefit of stable cleanner releases outweights the extra time need to write more tests.

The other challenge is the change in development culture. Teams need to be willing and able to recognize the benefit of BDD testing.
