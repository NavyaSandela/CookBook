package com.ActivityManagement.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ActivityManagement.dao.ActivityRepository;
import com.ActivityManagement.model.Activity;

@Service
public class ActivityService {

	@Autowired
	ActivityRepository activityRepository;
	//-------------------------Add Activity----------------------------------------------------
	public void addActivity(Activity activity) {
		activityRepository.save(activity);
	}
	//------------------------Update Activity---------------------------------------------------- 
	public void updateActivity(Activity newActivity,int id) {
		Activity activity = activityRepository.getOne(id);
		
		activity.setAct_name(newActivity.getAct_name());
		activity.setAct_date(newActivity.getAct_date());
		activity.setAct_duration(newActivity.getAct_duration());
		activity.setAct_description(newActivity.getAct_description());
		activity.setUser_id(newActivity.getUser_id());
		activity.setCat_id(newActivity.getCat_id());
		
		activityRepository.save(activity);
	}
	//------------------------Delete Activity--------------------------------------------------
	public void deleteActivity(int id) {
		Optional<Activity> activity = activityRepository.findById(id);
		if (activity.isPresent()) {
			activityRepository.deleteById(id);
		}
	}
	//--------------------List of All activities-----------------------------------------------
	public List<Activity> getAllActivities(){
		return activityRepository.findAll();
	}
	//------------------Activities Sorted By Date-----------------------------------------------
	public List<Activity> activitySortByDate(){
		return activityRepository.getAllActivitiesDesc();
	} 
	//-------------------Get Activity By Id---------------------------------------------------
	public Optional<Activity> getActivityById(int id){
		return activityRepository.findById(id);
	}
	
	public List<Activity> getActivityByUserCat(int userId, int catId) {
		return activityRepository.getActivityByUserCat(userId, catId);
	}
}
