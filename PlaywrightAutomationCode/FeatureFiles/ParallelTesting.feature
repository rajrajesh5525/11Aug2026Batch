Feature: Parallel Testing

@method1
Scenario: Verify the test automation practice application1 chrome
Given I Launch the browser 
Then I Launch the test automation practice application
And I close the browser

@method1
Scenario: Verify the test automation practice application1 firefox
Given I Launch the firefox browser 
Then I Launch the test automation practice application
And I close the browser

@method1
Scenario: Verify the test automation practice application1 webkit
Given I Launch the webkit browser 
Then I Launch the test automation practice application
And I close the browser

@method1
Scenario: Verify the test automation practice application1 headless
Given I Launch the headless browser 
Then I Launch the test automation practice application
And I close the browser




