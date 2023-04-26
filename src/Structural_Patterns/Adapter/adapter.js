// dealing with different database systems. For instance, let's say you have an application that needs to work with two different databases: MySQL and MongoDB. However, the two databases have different methods for querying data and returning data in different formats. In this case, we can use the Adapter pattern to make both databases work together seamlessly.




// MySQL database adapter
class MySQLAdapter {
  constructor() {
    this.mysql = require('mysql');
    this.connection = this.mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'mydatabase'
    });
  }

  query(sql, params, callback) {
    this.connection.query(sql, params, (err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  }
}

// MongoDB database adapter
class MongoDBAdapter {
  constructor() {
    this.mongodb = require('mongodb');
    this.url = 'mongodb://localhost:27017/mydatabase';
  }

  connect(callback) {
    this.mongodb.MongoClient.connect(this.url, (err, client) => {
      if (err) {
        return callback(err);
      }
      this.db = client.db('mydatabase');
      return callback(null);
    });
  }

  query(collectionName, query, projection, callback) {
    const collection = this.db.collection(collectionName);
    collection.find(query, projection).toArray((err, result) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  }
}

// Adapter for MySQL database
class MySQLDatabaseAdapter {
  constructor() {
    this.adapter = new MySQLAdapter();
  }

  query(queryString, queryParams, callback) {
    this.adapter.query(queryString, queryParams, callback);
  }
}

// Adapter for MongoDB database
class MongoDBDatabaseAdapter {
  constructor() {
    this.adapter = new MongoDBAdapter();
  }

  connect(callback) {
    this.adapter.connect(callback);
  }

  query(collectionName, query, projection, callback) {
    this.adapter.query(collectionName, query, projection, callback);
  }
}

// Usage
const mysqlAdapter = new MySQLDatabaseAdapter();
const mongodbAdapter = new MongoDBDatabaseAdapter();

mysqlAdapter.query('SELECT * FROM users', [], (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
});

mongodbAdapter.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  mongodbAdapter.query('users', {}, { _id: 0 }, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(result);
  });
});


// In this example, we have two databases: MySQL and MongoDB. We also have two Adapters: MySQLDatabaseAdapter and MongoDBDatabaseAdapter. Both Adapters implement a common interface that our application can use to query data.

// When our application wants to query data from MySQL database, it calls `query()` on the MySQLDatabaseAdapter instance, which internally calls the `query()` method on the MySQLAdapter instance and returns the result in a common format. Similarly, when our application wants to query data from MongoDB database, it calls `connect()` method to connect to the database and then calls `query()` on the MongoDBDatabaseAdapter instance, which internally calls the `query()` method on the MongoDBAdapter instance and returns the result in a common format.

// By using the Adapter pattern, we can make both databases work together seamlessly without having to change our application code every time we switch to a different database system. We can simply create a new Adapter for the new database system that implements the common interface and our application can use it without any changes.
