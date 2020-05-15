package com.ums.service;

import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ums.dao.UserManagerRepository;
import com.ums.model.User;

@Service
public class UserManagerService {

	@Autowired
	UserManagerRepository userRepository;

	/**
	 * check login
	 * @author avijay
	 * @param userName
	 * @param password
	 * @return user data
	 */
	public User login(String userName, String password) {
		String hashedPassword = "";
		try {
			hashedPassword = PasswordHashing.getHashedPassword(password);
		} catch(NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		return userRepository.login(userName, hashedPassword);
	}

	/**
	 * to create user
	 * @author avijay
	 * @param userData
	 */
	public void createUsers(User userData) {

		Optional<User> optionalUser = null;
		if (userData.getUserId() != null) {

			optionalUser = userRepository.findById(userData.getUserId());
		} else {

			optionalUser = Optional.of(new User());

		}

		optionalUser.ifPresent((user) -> {
			if (!"".equals(userData.getUserName())) {
				user.setUserName(userData.getUserName());
			}
			if (!"".equals(userData.getEmail())) {
				user.setEmail(userData.getEmail());
			}
			if (!"".equals(userData.getPassword())) {
				String hashedPwd = null;
				try {
					hashedPwd = PasswordHashing.getHashedPassword(userData.getPassword());
				} catch(NoSuchAlgorithmException e) {
					e.printStackTrace();
				}
				if(hashedPwd != null) {
					user.setPassword(hashedPwd);
				}
			}
	
			userRepository.save(user);

		});

	}

	
	/**
	 * to get all users
	 * @author avijay
	 * @return list of users
	 */
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	/**
	 * search users using name
	 * @author avijay
	 * @param userName
	 * @return list of users
	 */
	public List<User> getSearchedUsers(String userName) {
		return userRepository.getSearchedUsers(userName);
	}
	
	/**
	 * select user by userId
	 * @author avijay
	 * @param userId
	 * @return a user
	 */
	public User getUserById(int userId) {
		if(userRepository.findById(userId).isPresent()) {
			return userRepository.findById(userId).get();
		} else {
			return new User();
		}
	}

	/**
	 * delete user using user id
	 * @author avijay
	 * @param userId
	 */
	public void deleteUser(int userId) {
		userRepository.deleteById(userId);
	}

}
