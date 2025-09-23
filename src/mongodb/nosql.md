#### show databases

#### use <name_db>

- use learn

#### show collections

#### db.<collection_name>.drop()

- db.my_collection.drop()

#### insert one

```
db.my_collection.insertOne({
    name: "A", age: 25, city: "Da Nang"
})
```

#### insert many

```
db.my_collection.insertMany([
    { name: "A", age: 25, city: "Da Nang"},
    { name: "B", age: 30, city: "Da Nang"},
    { name: "C", age: 25, city: "Ha Noi"},
    { name: "D", age: 50, city: "Sai Gon"}
])
```

#### db.<collection_name>.find()

- db.my_collection.find()

#### find limit

- db.my_collection.find().limit(2)

#### condition

```
db.my_collection.find({ name: "A" })

db.my_collection.find({ age: 50 })

db.my_collection.find({
   $and: [
    { name: "A" },
    { age: 25 }
   ]
})

db.my_collection.find({
   $or: [
    { name: "A" },
    { age: 50 }
   ]
})

db.my_collection.find({
   age: { $gt: 30 }
})

db.my_collection.find({
   age: { $lt: 30 }
})

```

#### sort

```
db.my_collection.find().sort({ age: 1 })  # asc
db.my_collection.find().sort({ age: -1 }) # desc

```

#### update one

```
db.my_collection.updateOne(
    { name: "A" },
    { $set: { age: 56 } }
)

```

#### update many

```
db.my_collection.updateMany(
    { city: "Da Nang" },
    { $set: { age: 26 } }
)

```

#### delete one

```
db.my_collection.deleteOne(
    { name: "A" }
)
```

#### delete many

```
db.my_collection.deleteMany(
    { age: { $gt: 20 } }
)
```

#### code 5_000_000 records

```js
// Step 1
function generateRandomCustomer() {
  const specificNames = ["A", "B", "C", "D", "E", "F"];
  const professions = ["Engineer", "Teacher", "Doctor", "Artist", "Chef"];
  const randomName = specificNames[Math.floor(Math.random() * specificNames.length)];
  const randomAge = Math.floor(Math.random() * 50 + 20);
  const randomEmail = randomName.toLowerCase() + "@example.com";
  const randomPhoneNumber = "123-456-7890";
  const randomProfession = professions[Math.floor(Math.random() * professions.length)];

  const randomAddress = {
    street: "Street " + Math.floor(Math.random() * 100),
    ward: "Ward " + Math.floor(Math.random() * 20),
    district: "District " + Math.floor(Math.random() * 10),
    city: "Hanoi",
  };

  return {
    name: randomName,
    age: randomAge,
    address: randomAddress,
    email: randomEmail,
    phoneNumber: randomPhoneNumber,
    profession: randomProfession,
  };
}

// Step 2
const randomCustomers = [];
for (let i = 0; i < 5000000; i++) {
  randomCustomers.push(generateRandomCustomer());
}

// Step 3
const batchSize = 10000;
for (let i = 0; i < randomCustomers.length; i += batchSize) {
  const batch = randomCustomers.slice(i, i + batchSize);
  db.customers.insertMany(batch);
}
```

#### get index

##### db.<collection_name>.getIndexes()

- db.customers.getIndexes()

#### check collections information

##### count, size

#### explain

```
db.customers.find({ name: "A" }).explain("executionStats")

db.customers.find({ email: "c@example.com", age: 49 }).explain("executionStats")

db.customers.find({ age: 49, email: "c@example.com" }).explain("executionStats")
```

#### check: executionStats

```
stage               => scanning algorithm (COLLSCAN => scan all) (IXSCAN => index)
totalDocsExamined   => total scan record
nReturned           =>
executionTimeMillis =>
```

####

#### create index

```
# age:1  => #asc

db.customers.createIndex(
    { age: 1 },
    { name: "IDX_AGE" }
);


db.customers.createIndex(
    { email: 1, age: 1 },
    { name: "IDX_EMAIL_AGE" }
);
```

#### drop index

```
db.customers.dropIndex("IDX_AGE")
```

docker exec -it mongodb mongosh -u root -p root --authenticationDatabase admin

docker exec mongodb \
 mongoexport \
 --db learn \
 --collection my_collection \
 --out ./mongo_backup/back_up.json \
 --username root \
 --password root \
 --authenticationDatabase admin \
 --jsonArray

docker exec -it mongodb cat /mongo_backup/back_up.json

mkdir -p ./mongo_backup
docker cp mongodb:/mongo_backup/back_up.json ./mongo_backup/back_up.json

docker exec mongodb \
 mongoimport \
 --db learn \
 --collection my_collection \
 --file ./mongo_backup/back_up.json \
 --username root \
 --password root \
 --authenticationDatabase admin \
 --jsonArray
