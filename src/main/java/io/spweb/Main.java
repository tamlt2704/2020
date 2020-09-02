package io.spweb;
import io.spweb.repository.UserRepository;
import io.spweb.repository.UserRepositoryFileImpl;
import io.spweb.model.User;

import org.apache.log4j.Logger;

public class Main{
  static UserRepositoryFileImpl userRepository = new UserRepositoryFileImpl();
  final static Logger logger = Logger.getLogger(Main.class);

  public static void main(String[] args) {
    System.out.println("Hello world");
    logger.info("Hello world from log");
    for(User user: userRepository.getAllUser()) {
      System.out.println(user.toString());
    }
  }
}
