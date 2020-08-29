package io.spweb.repository;

import io.spweb.model.User;
import java.util.List;
import java.util.Optional;

public interface UserRepository {
  List<User> getAllUser();
  Optional<User> getUser(long userId);
  boolean addUser(User user);
  boolean removeUser(User userId);
}
