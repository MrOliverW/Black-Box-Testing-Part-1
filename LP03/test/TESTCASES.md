- Write at least one test case for each partition in your equivalence partition tables.
- Each test case must include:
  - Test-case ID
  - Classification
  - Partition
  - Input
  - Expected result

-Test Case #01
Classification: Number of nights
Partition: Valid
Input: '25' nights
Expected result: Number of Nights must be between 1 and 31 nights

-Test Case #02
Classification: Number of guests
Partition: Valid, standard rate
Input: '2'
Expected result:Number of guests must be between 1 and 12

-Test Case #03 
Classification: Check-in / Checkout
Partition: Valid
Input: Check-in date is before checkout date
Expected result:Check-in and checkout dates are chronologically linear

-Test Case #04 
Classification: Availability
Partition: Valid
Input: Room is available and is booked.
Expected result:Reservations can only occur is there is availability
