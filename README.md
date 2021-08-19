# DATA MIGRATION

#### Assumptions: 

- I'm assuming we don't have the headroom to query the production DB in a tight loop AND that there aren't rows being added all the time -- so I instead chose a single costly query to load all the info into memory and compute the differences from there.