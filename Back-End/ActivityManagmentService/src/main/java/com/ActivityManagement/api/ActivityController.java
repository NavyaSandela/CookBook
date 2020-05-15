package com.ActivityManagement.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ActivityManagement.model.Activity;
import com.ActivityManagement.service.ActivityService;

@CrossOrigin
@RestController
@RequestMapping("Activity")
public class ActivityController {

	@Autowired
	ActivityService activityService;
	
	@PostMapping("/addActivity")
	public void addActivity(@RequestBody Activity activity) {
		activityService.addActivity(activity);
	}	
	@PutMapping(value = "/updateActivity/{id}")
	public void updateActivity(@RequestBody Activity activity,@PathVariable int id) {
		activityService.updateActivity(activity, id);
	}	
	@DeleteMapping(value = "/deleteActivity/{id}")
	public void deleteActivity(@PathVariable int id) {
		activityService.deleteActivity(id);
	}
	@GetMapping(value = "/getAllActivities", produces = MediaType.APPLICATION_JSON_VALUE )
	public List<Activity> getAllActivity(){
		return activityService.getAllActivities();
	}
	@GetMapping(value = "/activitySortByDate", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Activity> activitySortByDate(){
		return activityService.activitySortByDate();
	}	
	@GetMapping(value = "/getActivityByID/{id}", produces = MediaType.APPLICATION_JSON_VALUE )
	public Optional<Activity> getActivityById(@PathVariable int id){
		return activityService.getActivityById(id);
	}
	@GetMapping(value = "/getActivityByUserCat/{userId}/{catId}", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Activity> getActivityUserCat(@PathVariable int userId, @PathVariable int catId) {
		return activityService.getActivityByUserCat(userId, catId);
	}
}
