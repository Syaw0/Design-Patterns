# Singleton

singleton let us to have One Class and at the same time we can sure that this class always has just ONE INSTANCE,no more no less.
</br>
so exciting ? wait there is more...
singleton share a one instance to all the application , you know its the bad practice to use global variables , its important to just use this pattern in some cases .because this pattern introduce an global object that can access across the application and all the part of your app can modified the state of this object.
also this pattern violates **Single Responsibility Principle**
but there is some case that you need to share a variable or state across your app , in this case this pattern will share this variables to the other part of application.

### But How Use it ?

we need to freeze constructor and use an static method to check if instance was created or not!
if its created before just return it else create new one and return it.

```typescript
class GlobalStates is
  private static field instance: GlobalStates

  private constructor GlobalStates() is

  public static method getInstance() is
    if(GlobalStates.instance==null) then
      GlobalStates.instance = new GlobalStates()
    return GlobalStates.instance


fo = GlobalStates.getInstance()
bar = GlobalStates.getInstance()
fo === bar // True


```

In this simplified example , the Singleton class has a private static variable named `instance`to hold the single instance of the class . The constructor of the class is made private to prevent direct instantiation of the class from outside . Instead , a public static method `getInstance ( )` is provided to create and return the single instance of the class if it doesn't exist , or simply return the existing instance if it does .

### Use Case

Suppose you have a requirement for a Logger class that will log all your application's events to a file or a database . However , you do not want to create multiple instances of the Logger class , as it could lead to multiple entries in the log file or database , causing confusion and ambiguity . In this case , you can use the Singleton pattern to ensure that only one instance of the Logger class is created , and that all events are logged in a single location . Here's the pseudocode for the Logger class that uses the Singleton pattern :

```typescript

class Logger {
 private static Logger instance ;
 private File logFile ;
private Logger ( ) {
 Prevent direct instantiation of the class
logFile = new File ( " logfile.txt " ) ;
}
public static Logger getLogger ( ) {
 if ( instance == null ) {
instance = new Logger ( ) ;
return instance ; }
public void log ( String message ) {
Write the message to the log file
 logFile.appendLine ( message ) ;
 } }
You can use the logger class in your application as follows :
Logger logger = Logger.getLogger ( ) ; logger.log ( " Application started " ) Log the event



```

### Examples

[Python](https://github.com/Syaw0/Design-Patterns/blob/master/src/Creational_Patterns/Singleton/examples/python/singleton.py)

[Typescript](https://github.com/Syaw0/Design-Patterns/blob/master/src/Creational_Patterns/Singleton/examples/typescript/singleton.ts)

[Rust](https://github.com/Syaw0/Design-Patterns/blob/master/src/Creational_Patterns/Singleton/examples/rust/singleton.rs)

[Go](https://github.com/Syaw0/Design-Patterns/blob/master/src/Creational_Patterns/Singleton/examples/go/singleton.go)

[Php](https://github.com/Syaw0/Design-Patterns/blob/master/src/Creational_Patterns/Singleton/examples/php/singleton.php)

[C#](https://github.com/Syaw0/Design-Patterns/blob/master/src/Creational_Patterns/Singleton/examples/c%23/singleton.cs)

[C#](https://github.com/Syaw0/Design-Patterns/blob/master/src/Creational_Patterns/Singleton/examples/c%23/singleton2.cs)

[Ruby](https://github.com/Syaw0/Design-Patterns/blob/master/src/Creational_Patterns/Singleton/examples/ruby/singleton.rb)

[Java](https://github.com/Syaw0/Design-Patterns/blob/master/src/Creational_Patterns/Singleton/examples/java/singleton.java)
