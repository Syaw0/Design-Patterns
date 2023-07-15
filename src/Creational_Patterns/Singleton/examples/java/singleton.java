public class SingletonClass {
    private static SingletonClass instance;
    private String data;

    private SingletonClass() {
        data = "Singleton data";
    }

    public static SingletonClass getInstance() {
        if (instance == null) {
            synchronized (SingletonClass.class) {
                if (instance == null) {
                    instance = new SingletonClass();
                }
            }
        }
        return instance;
    }

    public String getData() {
        return data;
    }
}