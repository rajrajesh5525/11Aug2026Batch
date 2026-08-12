Feature: locator.feature
#scenario or scenario outline is nothing but a test case

@method1
Scenario: verify playwright locators
Given I Launch the browser 
Then I Launch the test automation practice application
And I verify playwright locators

@method1
Scenario: verify playwright locators part2
Given I Launch the browser 
Then I verify playwright locators part2

@method11
Scenario: verify selenium locators
Given I Launch the browser 
Then I Launch the test automation practice application
#Then I verify selenium locators






