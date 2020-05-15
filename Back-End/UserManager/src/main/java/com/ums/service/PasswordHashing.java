package com.ums.service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class PasswordHashing {
	
	/**
	 * 
	 * @param password
	 * @return password after hashing
	 * @throws NoSuchAlgorithmException
	 */
	public static String getHashedPassword(String password) throws NoSuchAlgorithmException{
		return (md5(md5("added_salt"), md5(password)));
	}
	
	/**
	 * 
	 * @param plainText
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public static String md5(String plainText) throws NoSuchAlgorithmException {
	    return md5(null, plainText);
	}
	
	/**
	 * 
	 * @param salt
	 * @param plainText
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public static String md5(String salt, String plainText)
	        throws NoSuchAlgorithmException {
		
	    MessageDigest md = MessageDigest.getInstance("MD5");

	    if (salt != null) {
	        md.update(salt.getBytes());
	    }
	    md.update(plainText.getBytes());

	    byte byteData[] = md.digest();

	    StringBuffer sb = new StringBuffer();
	    for (int i = 0; i < byteData.length; i++) {
	        sb.append(Integer.toString((byteData[i] & 0xff) + 0x100, 16)
	                .substring(1));
	    }
	    return sb.toString();
	}

}
