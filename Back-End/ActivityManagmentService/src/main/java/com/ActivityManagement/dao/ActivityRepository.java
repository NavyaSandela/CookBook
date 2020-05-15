package com.ActivityManagement.dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ActivityManagement.model.Activity;

public interface ActivityRepository extends JpaRepository<Activity, Integer> {
	@Query("SELECT a From Activity a order by act_date DESC")
	public List<Activity> getAllActivitiesDesc();
	
	@Query("SELECT a from Activity a where a.user_id =:userId and a.cat_id =:catId ")
	public List<Activity> getActivityByUserCat(@Param("userId") int userId,@Param("catId") int catId);
}
