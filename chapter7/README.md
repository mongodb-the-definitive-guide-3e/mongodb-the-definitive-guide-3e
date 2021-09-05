to import 'company.json', try the following method.    
this json format is type 'v1' of mongodb.

```
mongoimport ./companies.json -c companies -u [your_accounts] -p [your_password] --authenticationDatabase=admin --db=[your_database] --legacy
```

