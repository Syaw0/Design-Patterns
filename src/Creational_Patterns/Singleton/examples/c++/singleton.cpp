class Logger {
private:
    static Logger* instance; // static instance of the Logger

    // private constructor to prevent direct instantiation
    Logger() {}

public:
    static Logger* getInstance() {
        if (!instance) {
            instance = new Logger();
        }
        return instance;
    }

    void log(const std::string& message) {
        // implementation of logging logic
        std::cout << "Logging: " << message << std::endl;
    }
};

// Initialize the static instance of the Logger
Logger* Logger::instance = nullptr;

// * using it:
// * Logger* logger = Logger::getInstance();
// * logger->log("This is a log message");