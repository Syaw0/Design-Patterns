# One real-world example of the Proxy design pattern in Ruby is a caching proxy for expensive database queries. This proxy intercepts database queries and caches the results, improving performance and reducing the load on the database.

# Here's an example implementation:


class Database
  def query(sql)
    # Simulate an expensive database query
    sleep(5)
    puts "Executing query: #{sql}"
    ["result1", "result2", "result3"]
  end
end

class CachingProxy
  def initialize(database)
    @database = database
    @cache = {}
  end

  def query(sql)
    if @cache.key?(sql)
      puts "Returning cached results for query: #{sql}"
      return @cache[sql]
    end

    puts "Query not found in cache. Executing query: #{sql}"
    results = @database.query(sql)
    @cache[sql] = results
    results
  end
end


# In this implementation, the `Database` class simulates an expensive database query by sleeping for 5 seconds and returning a fixed set of results. The `query` method takes an SQL string as input and returns an array of results.

# The `CachingProxy` class wraps the `Database` class and implements the same `query` method. It also has a private `@cache` hash that stores cached query results.

# When the `query` method is called on the proxy, it first checks if the query is in the cache. If it is, it returns the cached results and logs a message indicating that the results were returned from the cache. If the query is not in the cache, it logs a message indicating that the query is not found in the cache, calls the `query` method on the real database, caches the results, logs a message indicating that the results were fetched from the database, and returns the results to the caller.

# This caching proxy can be used in applications that make expensive database queries to improve performance and reduce the load on the database. By intercepting database queries and caching the results, the proxy can avoid repeated expensive queries and provide faster response times to users.
