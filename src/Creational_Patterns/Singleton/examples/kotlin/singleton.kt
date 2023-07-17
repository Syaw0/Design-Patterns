object DatabaseManager {
    private var connection: Connection? = null

    fun getConnection(): Connection {
        if (connection == null) {
            // Create a new database connection
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase", "username", "password")
        }
        return connection!!
    }
}

// usage
// val connection = DatabaseManager.getConnection()