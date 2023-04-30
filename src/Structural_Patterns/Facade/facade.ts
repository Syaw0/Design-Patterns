// One real-world example of the Facade design pattern in TypeScript is a library that simplifies the process of interacting with a complex API. 

// Here's an example implementation:


class ApiFacade {
  private apiClient: ApiClient;

  constructor() {
    this.apiClient = new ApiClient();
  }

  public async getUsers(): Promise<User[]> {
    const response = await this.apiClient.get('/users');
    return response.data;
  }

  public async getUserById(id: number): Promise<User> {
    const response = await this.apiClient.get(`/users/${id}`);
    return response.data;
  }

  public async createUser(user: User): Promise<User> {
    const response = await this.apiClient.post('/users', user);
    return response.data;
  }

  public async updateUser(user: User): Promise<User> {
    const response = await this.apiClient.put(`/users/${user.id}`, user);
    return response.data;
  }

  public async deleteUser(id: number): Promise<void> {
    await this.apiClient.delete(`/users/${id}`);
  }
}


// In this implementation, the `ApiFacade` class acts as a simplified interface for interacting with a complex API. It uses an instance of the `ApiClient` class internally to make HTTP requests and handle responses.

// The `ApiFacade` class exposes methods for getting, creating, updating, and deleting users from the API. These methods take care of the low-level details of making HTTP requests and parsing responses, allowing developers to interact with the API in a simple and consistent way.

// By using this facade class instead of directly interacting with the `ApiClient` class, developers can simplify their code and avoid dealing with low-level implementation details. They can also benefit from the consistency and ease-of-use provided by the facade interface.
