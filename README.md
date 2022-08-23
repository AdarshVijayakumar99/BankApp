# Angular case study - MultibankApp
	
## Problem Statement  
	
Accessing different accounts from different banks is quite a hassle and often leads to a wastage of time. ABC Bank wants to make accessing bank accounts easier for the customers. In order to do this, they are planning to launch a common platform.

This platform will help customers view the statements of accounts across the different banks transfer money across different banks.
 
## Features

1.	Accessing different accounts from different banks
2.	Help customers view the statements of accounts across the different banks
3.	Transfer money across different banks


## Prerequisites

1. Fork this boilerplate repository  
2. Clone the boilerplate repository and cd into it  
3. Install dependencies `npm install`  
4. Run the backend `npm run serve`  which shall run on port:3000  
5. Run the frontend `npm run start` which shall run on port:4200  

## Know your server  

On running `npm run serve`, following apis would be available for your use -  
1. To authenticate user - POST - http://localhost:3000/auth/v1 - expecting data - { username, password }  
2. To check if user is authenticated - POST - http://localhost:3000/auth/v1/isAuthenticated - expecting header - { 'Authorization', `Bearer ${token}` }  
3. To get notes - GET - http://localhost:3000/api/v1/notes - expecting header - { 'Authorization', `Bearer ${token}` }  
4. To add a note - POST - http://localhost:3000/api/v1/notes - expecting header - { 'Authorization', `Bearer ${token}` } and data - { note }  
	
## Assignment:	
	
1.  Keep should use Material Design for it's UI	 
2.  User shall be shown home page with register and login button 
3. 	Registered users can login using their credentials 
4.  After authentication, user is able to see all the back accounts on the 		page loaded from server as [Cards](https://material.angular.io/components/card/overview)  
5.  User is be able to create and persist bank accounts on server  
6.	User can also view their balance and do transaction between different 		bank accounts
