# DATA MIGRATION

#### Assumptions: 

- I'm assuming we don't have the headroom to query the production DB in a tight loop AND that there aren't rows being added all the time -- so I instead chose a single costly query to load all the info into memory and compute the differences from there.

- There are no duplicate unique ID's in either database. 

#### Directions:
- Please pull the code from the repository
- Yarn install dependency's
- Ensure both docker images are running
    - Please run Old data set on 5432
    - New data set on 5433
- Npm run dev to start the server and boot up the react frontend
- server will run on localhost:5000 frontend will run on localhost:3000

- npm run test will start up and run the test suite
    - tests can be found in 
        - backend/utils/__tests__
        - frontend/src/App.test.js
        - frontend/src/components/Loader.test.js
        - test dataset: backend/utils/testData.js

- server will connect to Old data set and query in backend/getData/getOldData.js
- server will connect to New data set and query in backend/getData/getNewData.js
- backend/controllers/report.js will generate and server the report
- report will be generated in backend/utils/generateReport.js

