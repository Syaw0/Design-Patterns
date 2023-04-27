# when working with different database systems For instance, let's say you have an application that needs to support multiple databases such as MySQL and PostgreSQL. However, the two databases have different APIs and data structures for accessing data. In this case, we can use the Adapter pattern to make both databases work together seamlessly.

Here's an example code:


# MySQL database adapter
class MySQLAdapter
  def initialize(mysql)
    @mysql = mysql
  end

  def connect(host, username, password, database)
    # MySQL specific code to connect to database
    @mysql.connect(host, username, password, database)
  end

  def query(sql)
    # MySQL specific code to execute SQL query
    @mysql.query(sql)
  end
end

# PostgreSQL database adapter
class PostgreSQLAdapter
  def initialize(postgresql)
    @postgresql = postgresql
  end

  def connect(host, username, password, database)
    # PostgreSQL specific code to connect to database
    @postgresql.connect(host, username, password, database)
  end

  def query(sql)
    # PostgreSQL specific code to execute SQL query
    @postgresql.query(sql)
  end
end

# Adapter for MySQL database
class MySQLDatabaseAdapter
  def initialize
    require 'mysql'
    @mysql = Mysql.new('host', 'username', 'password', 'database')
    @mysql_adapter = MySQLAdapter.new(@mysql)
  end

  def connect
    @mysql_adapter.connect('host', 'username', 'password', 'database')
  end

  def query(sql)
    @mysql_adapter.query(sql)
  end
end

# Adapter for PostgreSQL database
class PostgreSQLDatabaseAdapter
  def initialize
    require 'pg'
    @postgresql = PG::Connection.new('host', 'port', nil, nil, 'database', 'username', 'password')
    @postgresql_adapter = PostgreSQLAdapter.new(@postgresql)
  end

  def connect
    @postgresql_adapter.connect('host', 'username', 'password', 'database')
  end

  def query(sql)
    @postgresql_adapter.query(sql)
  end
end

# Usage
mysql_adapter = MySQLDatabaseAdapter.new
postgresql_adapter = PostgreSQLDatabaseAdapter.new

mysql_adapter.connect
postgresql_adapter.connect

mysql_adapter.query('SELECT * FROM users')
postgresql_adapter.query('SELECT * FROM users')



# In this example, we have two databases: MySQL and PostgreSQL. We also have two Adapters: MySQLDatabaseAdapter and PostgreSQLDatabaseAdapter. Both Adapters implement a common interface that our application can use to connect to the database and execute SQL queries.

# When our application wants to connect to MySQL, it calls `connect()` on the MySQLDatabaseAdapter instance, which internally calls the `connect()` method on the MySQLAdapter instance and connects to the MySQL database. Similarly, when our application wants to connect to PostgreSQL, it calls `connect()` on the PostgreSQLDatabaseAdapter instance, which internally calls the `connect()` method on the PostgreSQLAdapter instance and connects to the PostgreSQL database.

# By using the Adapter pattern, we can make both databases work together seamlessly without having to change our application code every time we switch to a different database. We can simply create a new Adapter for the new database that implements the common interface and our application can use it without any changes.
