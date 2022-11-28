// imagine we have application to create ui element for different operation system
// for implement the good pattern 
// we do this:

// first create abstract for your UiCreator

abstract class UiElementCreator {
 abstract createButton():Button;
 abstract createCheckBox():CheckBox;
 abstract createAlertBox():AlertBox;
}

// now time to create concrete classes
//(e.g: we have window op or mac os) that extend from abstract class

class WindowUi extends UiElementCreator{
  createAlertBox() {
    return new WindowAlertBox()
  }
  createButton() {
    return new WindowButton()
  }
  createCheckBox() {
    return new WindowCheckBox()
  }
}

class MacUi extends UiElementCreator{
  createAlertBox() {
    return new MacAlertBox()
  }
  createButton() {
    return new MacButton()
  }
  createCheckBox() {
    return new MacCheckBox()
  }
}
  
// then lets create abstract with Ui elements 

abstract class Button {

}

// and create concrete classes for operation systems

class WindowButton extends Button{
  
}

class MacButton extends Button{

}

abstract class CheckBox{

}

class WindowCheckBox extends CheckBox{
  
}

class MacCheckBox extends CheckBox{

}

abstract class AlertBox{

}

class WindowAlertBox extends AlertBox{
  
}

class MacAlertBox extends AlertBox{

}
