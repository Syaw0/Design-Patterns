class Logger {
    static let shared = Logger()
    
    private init() {}
    
    func log(_ message: String) {
        print("[Logger] \(message)")
    }
}

// Usage:
Logger.shared.log("This is a log message.")