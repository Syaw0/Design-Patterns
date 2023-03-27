# Memento



Imagine you have a toy that can change colors. You can press a button to change its color to red, blue, or green. But sometimes you might change the color by mistake and want to go back to the previous color. This is where the Memento design pattern comes in!

The Memento design pattern is like a backup system for your toy's colors. Every time you change the color, the pattern takes a "snapshot" of the current color and saves it. If you want to go back to a previous color, you can ask the pattern to restore the color from one of the snapshots.

For example, let's say your toy is currently green. You press the button to change it to blue, and the Memento pattern takes a snapshot of the green color and saves it. You press the button again to change it to red, and the pattern takes another snapshot of the blue color and saves it. Now, if you want to go back to the blue color, you can ask the pattern to restore the color from the previous snapshot.

In programming terms, the Memento pattern is used to save the state of an object (like your toy's color) so that it can be restored later. It's useful when you need to undo or redo actions in your program, or when you want to save a snapshot of an object's state for future use.

