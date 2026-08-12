
Feature: Reading the testdata from the feature file

Background: common steps
Given I Launch the browser
Then I Lunch automation playwright application

@method1
Scenario: Reading the testdata from the feature file 1st way
And I Reading the testdata from the feature file 1st way "<Name>","<Email>","<Phone>","<Address>","<Wikipidia>"
Examples:
    | Name      | Email                 | Phone       | Address  | Wikipidia |
    | Rajesh    | Testing@gmail.com     | 8523689525  |Veldanda  | playwright|
    | Veldanda  | Veldanda@gmail.com    | 8523689525  |Hyderabad | playwright|
    | Powerfull | Powerfull@gmail.com   | 8523867305  |Mumbai    | Quality assurance|


@method1
Scenario Outline: Reading the testdata from the feature file 2nd way
And I Reading the testdata from the feature file 2nd way "<Name>","<Email>","<Phone>","<Address>","<Wikipidia>"
Examples:
    | Name         | Email                 | Phone       | Address   | Wikipidia |
    | Maxivision   | Maxivision@gmail.com  | 8523689525  | Veldanda  | Selenium|
    | Done         | Done@gmail.com        | 8523867250  | Good      | Docker| 
    | Chotu        | Chotu@gmail.com       | 9894984984  | Mumbai    | Quality assurance|
