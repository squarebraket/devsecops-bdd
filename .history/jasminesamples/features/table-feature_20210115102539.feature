Feature: Frequent Flyer status is calculated based on points
  As a Frequent Flyer member
  I want my status to be upgraded as soon as I earn enough points
  So that I can benefit from my higher status sooner

Scenario Outline:
Given "Joe Jones" is a "<initialStatus>" FrequentFlyer member
And "Joe Jones" has <initialStatusPoints> status points
When he earns <extraPoints> extra status points
Then he should have a status of "<finalStatus>"

Examples: Status points required for each level
  | initialStatus | initialStatusPoints | extraPoints | finalStatus |
  | Bronze        | 0                   | 300         | Silver     |
  | Bronze        | 100                 | 200         | Silver