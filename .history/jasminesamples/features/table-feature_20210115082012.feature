Scenario Outline:
Give Joe Jones is a <initialStatus> FrequentFlyer member
and he has <initialStatusPoints> status points
When he earns <extrapoints> extra status points
Then he should have a status of <finalStatus>

Examples: Status points required for each level
  | initialStatus | initialStatusPoints | extraPoints | finalStatus
  | Bronze        | 0                   | 300         | Silver
  | Bronze        | 100                 | 200         | Silver
  | Silver        | 0                   | 700         | Gold
  | Gold          | 0                   | 1500        | Platinum