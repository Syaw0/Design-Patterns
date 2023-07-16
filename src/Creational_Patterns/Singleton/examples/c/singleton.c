#include <stdio.h>

// * In many applications, you often need to have a single instance of a configuration
// * manager that handles all the application's configuration settings.
// * The Singleton design pattern ensures that only one instance of the configuration 
// * manager is created and that it can be accessed globally.


typedef struct {
    int setting1;
    char* setting2;
} ConfigurationManager;

ConfigurationManager* getConfigurationManagerInstance() {
    static ConfigurationManager instance; // static instance of the ConfigurationManager
    return &instance;
}

void configureSettings() {
    ConfigurationManager* configManager = getConfigurationManagerInstance();
    configManager->setting1 = 42;
    configManager->setting2 = "Hello, world!";
}

void printSettings() {
    ConfigurationManager* configManager = getConfigurationManagerInstance();
    printf("Setting 1: %d\n", configManager->setting1);
    printf("Setting 2: %s\n", configManager->setting2);
}

int main() {
    configureSettings();
    printSettings();
    return 0;
}