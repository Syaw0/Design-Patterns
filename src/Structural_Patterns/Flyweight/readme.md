# Flyweight Pattern


The Flyweight design pattern is like sharing toys with your friends. Imagine you have a lot of toy cars, but your friends don't have any. Instead of giving each friend their own car, you let them share your cars. That way, you don't have to buy as many cars and your friends can still play with them.

In programming, the Flyweight pattern is used to save memory by sharing objects that have the same properties. For example, if you have a game with a lot of trees, instead of creating a new tree object for each tree in the game, you can create one tree object and share it among all the trees. This saves memory because you only need to store the properties of the tree once, instead of storing them for every single tree in the game.

So, just like sharing toys with your friends, the Flyweight pattern is about sharing objects to save memory.




### How Its Work

```javascript


// Define a flyweight interface
interface Flyweight {
    public void operation();
}

// Define a concrete flyweight class
class ConcreteFlyweight implements Flyweight {
    private String intrinsicState;

    public ConcreteFlyweight(String intrinsicState) {
        this.intrinsicState = intrinsicState;
    }

    public void operation() {
        System.out.println("ConcreteFlyweight: " + intrinsicState);
    }
}

// Define a flyweight factory class
class FlyweightFactory {
    private Map<String, Flyweight> flyweights = new HashMap<String, Flyweight>();

    public Flyweight getFlyweight(String key) {
        if (flyweights.containsKey(key)) {
            return flyweights.get(key);
        } else {
            Flyweight flyweight = new ConcreteFlyweight(key);
            flyweights.put(key, flyweight);
            return flyweight;
        }
    }
}

// Client code
public class Client {
    public static void main(String args) {
        FlyweightFactory factory = new FlyweightFactory();

        Flyweight flyweight1 = factory.getFlyweight("A");
        Flyweight flyweight2 = factory.getFlyweight("B");
        Flyweight flyweight3 = factory.getFlyweight("A");

        flyweight1.operation();
        flyweight2.operation();
        flyweight3.operation();
    }
}
```
In this example, the Flyweight pattern is used to minimize memory usage by sharing objects with similar state. The ConcreteFlyweight class represents a shared object with intrinsic state, while the FlyweightFactory class creates and manages these shared objects. The Client class uses the FlyweightFactory to obtain instances of shared objects and calls their operation method. By reusing shared objects, the Flyweight pattern reduces the number of objects created and saves memory.



### Use Case
```javascript

// Define a flyweight interface for a music player
interface MusicPlayer {
    public void play(String song);
}

// Define a concrete flyweight class for playing MP3 files
class MP3Player implements MusicPlayer {
    private String fileName;

    public MP3Player(String fileName) {
        this.fileName = fileName;
    }

    public void play(String song) {
        System.out.println("Playing " + fileName + " for " + song);
    }
}

// Define a flyweight factory class for creating music players
class MusicPlayerFactory {
    private Map<String, MusicPlayer> players = new HashMap<String, MusicPlayer>();

    public MusicPlayer getPlayer(String type) {
        if (players.containsKey(type)) {
            return players.get(type);
        } else {
            if (type.equals("MP3")) {
                MusicPlayer player = new MP3Player("mp3file.mp3");
                players.put(type, player);
                return player;
            } else {
                throw new IllegalArgumentException("Invalid music player type");
            }
        }
    }
}

// Client code for playing music
public class MusicClient {
    public static void main(String args) {
        MusicPlayerFactory factory = new MusicPlayerFactory();

        MusicPlayer mp3Player1 = factory.getPlayer("MP3");
        MusicPlayer mp3Player2 = factory.getPlayer("MP3");
        MusicPlayer mp3Player3 = factory.getPlayer("MP3");

        mp3Player1.play("song1");
        mp3Player2.play("song2");
        mp3Player3.play("song3");
    }
}
```
In this example, the Flyweight pattern is used to minimize memory usage by sharing music player objects with similar state. The MP3Player class represents a shared object with intrinsic state (the file name), while the MusicPlayerFactory class creates and manages these shared objects. The MusicClient class uses the MusicPlayerFactory to obtain instances of shared objects and calls their play method with different songs. By reusing shared objects, the Flyweight pattern reduces the number of objects created and saves memory.






