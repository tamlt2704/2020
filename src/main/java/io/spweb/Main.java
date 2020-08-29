package io.spweb;
import io.spweb.repository.UserRepository;
import io.spweb.repository.UserRepositoryFileImpl;
import io.spweb.model.User;

public class Main{
  static UserRepositoryFileImpl userRepository = new UserRepositoryFileImpl();

  public static void main(String[] args) {
    System.out.println("Hello world");
    for(User user: userRepository.getAllUser()) {
      System.out.println(user.toString());
    }
  }
}
