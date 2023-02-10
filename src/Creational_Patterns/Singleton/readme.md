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

### Examples

[python](https://github.com/Syaw0/Design-Patterns/blob/master/src/Creational_Patterns/Singleton/examples/python/singleton.py)

[typescript](https://github.com/Syaw0/Design-Patterns/blob/master/src/Creational_Patterns/Singleton/examples/typescript/singleton.ts)
