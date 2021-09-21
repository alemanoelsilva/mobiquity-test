## Mobiquity Test

This repository contains the `Mobiquity` coding test to their challenge. 
It was implemented using Node.js (14.0.0) with TypeScript, TDD and Clean Architecture.

###  API functionality description

The class `Possibilities` generates all combinations of indexes and returns an array. `EvaluatePackageOption` filter all packages by the weight (if higher than the limit, it just does not consider as an option) and duplicates indexes adding the data to the Map structure using the index as an ID of the Map. The method also calculates all price and weight according to every combination generated by `Possibilities` class. Furthermore, the class `EvaluatePackageOption` sorts the valid packages by the highest to the lowest price and take the first as the best choice.

It also has some validators to validate some constraints, mapper to convert the plain text to JavaScript Object and some handlers to manage the file.

### Given the next data: 

```
81 : (1,53.38,€45) (2,88.62,€98) (3,78.48,€3) (4,72.30,€76) (5,30.18,€9) (6,46.34,€48)
8 : (1,15.3,€34)
75 : (1,85.31,€29) (2,14.55,€74) (3,3.98,€16) (4,26.24,€55) (5,63.69,€52) (6,76.25,€75) (7,60.02,€74) (8,93.18,€35) (9,89.95,€78)
56 : (1,90.72,€13) (2,33.80,€40) (3,43.15,€10) (4,37.97,€16) (5,46.81,€36) (6,48.77,€79) (7,81.80,€45) (8,19.36,€79) (9,6.76,€64)
```

### The API will returns 

```
4
-
2,7
8,9
```

### To run the API:

- dev: npm run dev:
- build: npm run start
- test: npm run test:coverage
