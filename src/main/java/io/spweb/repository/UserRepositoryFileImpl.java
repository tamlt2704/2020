package io.spweb.repository;

import io.spweb.model.User;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class UserRepositoryFileImpl {
  public List<User> getAllUser() {
    List<User> users = new ArrayList();

    User user = new User();
    user.setId(1);
    user.setName("foo");
    user.setEmail("foo@gmail.com");
    users.add(user);

    User user2 = new User();
    user2.setId(2);
    user2.setName("bar");
    user2.setEmail("bar@gmail.com");
    users.add(user2);

    return users;
  }

  public Optional<User> getUser(long userId) {
    return Optional.empty();
  }

  public boolean addUser(User user) {
    return true;
  }

  public boolean removeUser(User userId) {
    return true;
  }
}
