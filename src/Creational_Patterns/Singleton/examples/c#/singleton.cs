public class Logger
{
    private static Logger instance;
    private static readonly object lockObject = new object();

    private Logger()
    {
        // Private constructor to prevent direct instantiation
    }

    public static Logger GetInstance()
    {
        if (instance == null)
        {
            lock (lockObject)
            {
                if (instance == null)
                {
                    instance = new Logger();
                }
            }
        }
        return instance;
    }

    public void Log(string message)
    {
        // Code to log the message
        Console.WriteLine($"Logging message: {message}");
    }
}

// Usage:
Logger logger = Logger.GetInstance();
logger.Log("This is a log message");
