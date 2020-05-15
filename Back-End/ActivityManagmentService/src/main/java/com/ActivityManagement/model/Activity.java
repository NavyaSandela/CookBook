package com.ActivityManagement.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
public class Activity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int act_id;
	private String act_name;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate act_date;
	private String act_duration;
	private String act_description;
	private int user_id;
	private int cat_id;
	public int getAct_id() {
		return act_id;
	}
	public void setAct_id(int act_id) {
		this.act_id = act_id;
	}
	public String getAct_name() {
		return act_name;
	}
	public void setAct_name(String act_name) {
		this.act_name = act_name;
	}	
	public LocalDate getAct_date() {
		return act_date;
	}
	public void setAct_date(LocalDate act_date) {
		this.act_date = act_date;
	}
	public String getAct_duration() {
		return act_duration;
	}
	public void setAct_duration(String act_duration) {
		this.act_duration = act_duration;
	}
	public String getAct_description() {
		return act_description;
	}
	public void setAct_description(String act_description) {
		this.act_description = act_description;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public int getCat_id() {
		return cat_id;
	}
	public void setCat_id(int cat_id) {
		this.cat_id = cat_id;
	}
	
	
}
