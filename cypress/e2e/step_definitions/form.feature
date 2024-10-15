Feature: Form

  Scenario: Successfully fill out and send insurance quote
    Given I'm on the form page
    When I fill out the Enter Vehicle Data form and proceed
    And I fill out the Enter Insurant Data form and proceed
    And I fill out the Enter Product Data form and proceed
    And I select the pricing option and proceed
    And I fill out the Send Quote form and send the quote
    Then the message Sending e-mail success! should be displayed
