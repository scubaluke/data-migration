# DATA MIGRATION

#### Assumptions: 

- I'm assuming we don't have the headroom to query the production DB in a tight loop AND that there aren't rows being added all the time -- so I instead chose a single costly query to load all the info into memory and compute the differences from there.

#### Directions:
- please pull the code from the repository.
- npm install dependency's
- npm run dev to start the program
- visit localhost:5000 to check the api is running
- navigate to localhost:5000/compare to see the results from the program

- npm run test will start up and run the test suite