public class Logger
{
    private static readonly Lazy<Logger> lazyInstance = new Lazy<Logger>(() => new Logger());
    
    public static Logger Instance { get { return lazyInstance.Value; } }
    
    private Logger()
    {
        // Initialize the logger instance
    }
    
    public void Log(string message)
    {
        // Log the message
    }
}

// Usage:
Logger logger = Logger.Instance;
logger.Log("This is a log message.");


// * In this example, the `Logger` class represents our singleton. We use the `Lazy`
// * class to ensure lazy initialization of the singleton instance. The `lazyInstance`
// * field is declared as `readonly` and initialized with a lambda expression that 
// * creates a new instance of the `Logger` class.

// * The `Instance` property provides the public access point to the singleton instance.
// * It uses the `Value` property of the `lazyInstance` field to get the instance.
// * If the instance has not been created yet, it will be created on the first access.

// * To use the singleton, we can access the `Instance` property of the `Logger` class,
// * which returns the same instance every time it is called. We can then use this
// * instance to perform operations such as logging messages.

// * By using the Singleton design pattern with lazy initialization, we ensure that
// * the instance is created only when it is first accessed, improving performance and
// * resource utilization.

// * Note that this example demonstrates a basic implementation of the Singleton 
// * pattern using lazy initialization in C#. In real-world scenarios, you might need 
// * to handle multi-threading or implement additional features to suit your specific 
// * requirements.