# Rent-Car-App

Rent Car App Cypress + BDD + PageObects tests based on 3 Test Cases and few basic funcionality assumptions.

### Prerequisites

The only requirement for this project is to have [Node.js](https://nodejs.org/en/) installed on your machine.

### Installation

```shell
npm install
```

### Run Tests

```shell
npx cypress run
```

## Results

### TestCase#1

Test Case 1: Check if a user can find desired search results with valid data input.
1. Got to Rent a car app website
2. Enter valid data:
- specific country/city 
- specific car model 
- valid date range 
3. Click the Search button

Expected result:
Proper search results are returned

Actual result:
Invalid search results are returned. Search returned all car models instead of the cpecific one.

  Code: [Click!](cypress/e2e/features/TestCase1/TestCase1StepDef.js)
  
  <details> 
   <summary markdown="span">Screenshots</summary>
    
   ![Search page -- Valid Search (failed)](https://user-images.githubusercontent.com/99098000/212421415-9d3a6f04-2e3c-4c9e-b3d5-2854bd04fde3.png)

  </details>

<br>

### TestCase#2

Test Case 2: Check if the search functionality will work with invalid data input.
1. Got to Rent a car app website
2. Enter invalid data/enter no data:
- different country and city
- car model not in the database
- invalid date range
3. Click the Search button

Expected result:
Country and city drop-down lists will work properly.
Customers will be prompted about invalid data.
Search results won't be returned.

Actual result:
Search results show despite the invalid data:
    - past dates/ car model not in database/ invalid City and Country combination
The country was not changed to Germany after selecting Berlin.
Search results are not shown without any dates inputted and the user is prompted correctly.
Search results are not shown with a pickup date higher than the drop off date and the user is prompted correctly.

  Code: [Click!](cypress/e2e/features/TestCase2/TestCase2StepDef.js)
  
  <details> 
   <summary markdown="span">Screenshots</summary>
   
   ![Search page -- I enter invalid data#1 (failed)](https://user-images.githubusercontent.com/99098000/212421883-3480c052-1029-4303-9ba0-f06ebce2726f.png)
   
   ![Search page -- I enter invalid data#2 (failed)](https://user-images.githubusercontent.com/99098000/212421892-53f0071b-a032-4a98-a059-b637c81fb317.png)
   
   ![Search page -- I enter invalid data#3 (failed)](https://user-images.githubusercontent.com/99098000/212421896-61841dc0-e10d-445a-a54f-f54b6a9fffa7.png)

   
  </details>

<br>

### TestCase#3

Test Case 3: Check if car details are properly displayed after clicking rent on a car then
    confirm personal data rent form works correctly.
1. Got to Rent a car app website
2. Enter valid data
3. Click Rent button on the car in the search results
4. Click Rent! button on the offer details page
5. Fill out personal data rent form with valid/invalid data
6. Submit the form

Expected result:
Customer will be able to complete renting a car process with valid data and 
    be prompted about a success.
The customer will not be able to complete renting a car process with invalid data and
    will be prompted about issues.

Actual result:
Customer was able to provide valid data in the rent form and submit it.
Customer was not notified about the successful operation and the page was redirected to 404.
Invalid data that was properly blocked and customer was prompted about it:
- Name and Last Name values too long
- email without @
- card number value too long
- card number containing letters 
Invalid data that was not properly blocked and the customer was not prompted about it:
- Name and Last name made out of digits
- Email address not including domain (invalid@)

Code: [Click!](cypress/e2e/features/TestCase3/TestCase3StepDef.js)
  
  <details> 
   <summary markdown="span">Screenshots</summary>
   
  ![User's journey to renting a car -- Invalid data#2 (failed)](https://user-images.githubusercontent.com/99098000/212423011-9ede1944-ea71-4c12-afe0-66716fd91689.png)

  ![User's journey to renting a car -- Valid data (failed)](https://user-images.githubusercontent.com/99098000/212423020-55e8dd14-eecc-4bdf-b029-606901152a83.png)

  </details>

<br>

