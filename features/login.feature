Feature: Login

    As a client I should be able to login using my credentials

    Scenario: A client must be able to login
        Given a client is on the login page
        When the right credentials are submitted
        Then the login attempt succeeded





        ##Need to create a cars.step file to hold the car steps.
        ##Create cars.feature file
        ##Create a cars.page.js file