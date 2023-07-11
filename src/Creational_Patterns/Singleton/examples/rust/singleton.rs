// Cargo.toml ==>
// [dependencies]
//lazy_static = "1.4"

#[macro_use]
extern crate lazy_static;

use std::sync::Mutex;

lazy_static! {
    static ref DATABASE: Mutex<Database> = Mutex::new(Database::new());
}

struct Database {
    // Some fields and methods
    // ...
}

impl Database {
    fn new() -> Self {
        // Initialize the database instance
        Database {
            // ...
        }
    }

    fn query(&self, query: &str) {
        // Perform the database query
        // ...
    }
}

fn main() {
    // Access the singleton instance
    let db = DATABASE.lock().unwrap();

    // Use the singleton instance
    db.query("SELECT * FROM users;");
}