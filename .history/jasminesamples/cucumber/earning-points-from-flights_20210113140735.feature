Feature: Frequent Flyer status is calculated based on points
  As a Frequent Flyer member
  I want my status to be upgraded as soon as I earn enough points
  So that I can benefit from my higher status sooner

Scenario: New members should start out as BRONZE members
  Given Jill Smith is not a Frequent Flyer member
  When she registers on the Frequent Flyer program
  Then she should have a status of BRONZE
  