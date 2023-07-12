class Database {
    private static $instance;

    private function __construct() {
        // Initialize the database instance
    }

    public static function getInstance() {
        if (!self::$instance) {
            self::$instance = new Database();
        }
        return self::$instance;
    }

    public function query($query) {
        // Perform the database query
    }
}

// Usage:
$db = Database::getInstance();
$db->query("SELECT * FROM users;");