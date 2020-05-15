package com.ums.controller;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ums.exception.UserException;
import com.ums.model.User;
import com.ums.service.UserManagerService;

@RestController
@RequestMapping(value="users", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
@CrossOrigin
public class UserManagerController {
	
	private static final String SPLITER = "XYZ";
	private static final int TOKEN_LIFE_IN_HOUR = 1;
	
	@Autowired
	UserManagerService userService;
	
	@PostMapping("/add_user")
	public void createUsers(@RequestBody User userData) throws UserException{
		userService.createUsers(userData);
	}
	
	@GetMapping("/get_users")
	public List<User> getAllUsers() {
		 List<User> userList = userService.getAllUsers();
		 maskPassword(userList);
		 return userService.getAllUsers();	
	}
	
	@GetMapping("/search_users")
	public List<User> getSearchedUsers(@RequestParam String userName) {
		 return userService.getSearchedUsers(userName);	
	}
	
	@GetMapping("/search_userid")
	public User getUserById(@RequestParam int userId) {
		 return userService.getUserById(userId);	
	}
	
	@DeleteMapping("/delete_user/{userId}")
	public void deleteUser(@PathVariable("userId") int userId) {
		userService.deleteUser(userId);
	}
	
	@PostMapping("/login")
	public User login(@RequestBody User userData) {		
		User user =  userService.login(userData.getUserName(), userData.getPassword());
		mask(user);
		if(user!=null) {
			String token = generateAuthenticationToken(user.getUserName(), user.getPassword());
			user.setToken(token);
		}
		return user;
	}
	
	/**
	 * create token
	 * @param userName
	 * @param password
	 * @return token generated
	 */
	private String generateAuthenticationToken(String userName, String password) {
		String token = null;
		Calendar cal = Calendar.getInstance();
		cal.setTime(new Date());
		cal.add(Calendar.HOUR_OF_DAY, TOKEN_LIFE_IN_HOUR);
		long timeAddedTockenLife = cal.getTime().getTime();
		String tockenToEncrypt = userName + SPLITER + password + SPLITER + timeAddedTockenLife;
		try {
			token = EncriptDecriptUtil.encrypt(tockenToEncrypt);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return token;
	}
	
	/**
	 * to remove password from rendering
	 * @param userList
	 */
	private void maskPassword(List<User> userList) {
		for(User user: userList) {
			mask(user);
		}
	}
	
	private void mask(User user) {
		if(user != null) {
			user.setPassword("");
		}
	}
}