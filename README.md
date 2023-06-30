# furation_tech Assignment ( Ticket Reservation System)
# Deployment Link 
https://exuberant-beanie-deer.cyclic.app/

# How to make a Reservation
To make Reservation user need to login first.
# steps to login 
1. Register (POST) =>> visit this ( /user/register ) rout.

 
   and send {name,email,password} in the body

   resposnse =>> {

    "msg": "Registration Success",

    "user": [

 {

            "name": "Akash",

            "email": "A@gmail.com",

            "password": "$2b$05$3WYnsZnBJ008zNmGoXd.f.70vgUWMH4C52g5y2DEaKo1U5IRXgpvS",

            "tickets": [],

            "_id": "649e9b4a9ac7c99845684600",

            "__v": 0

        }
        
    ]
    
}



2. Login (POST) =>> visit this ( /user/login ) rout.

   
 and send {email,password} in the body .

 
response =>> {

    "msg": "Login Success",
    
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODgxMTYzMTl9.HZWQw2u3cMOMuFpUwAnNqLVI03HyLvntcVheP1VC1sQ",
    
    "user": {

        "_id": "649e9b4a9ac7c99845684600",
        
        "name": "Akash",
        
        "email": "A@gmail.com",
        
        "password": "$2b$05$3WYnsZnBJ008zNmGoXd.f.70vgUWMH4C52g5y2DEaKo1U5IRXgpvS",
        
        "tickets": [],
        
        "__v": 0
        
    }
    
}


# ticket booking 
Rout ==>>  /booking/:id/:seatnumber/:userid.

/:id=> busid :- user can get the bus id by visiting the rout(/bus).

/:seatnumber=> user can select the seatnumber by own.

/:userid => when user will login he will recive the user details so user can take the user id from there.


and must send the token in headers with key (Authorization).

 Response => {
 
  "msg": "seat booked",
  
  "ticket": {
  
    "busid": "649d963d61fdcb008275dc3a",
    
    "seatnumber": "5"
    
  },
  
  "user": {
  
    "_id": "649e9b4a9ac7c99845684600",
    
    "name": "Akash",
    
    "email": "A@gmail.com",
    
    "password": "$2b$05$3WYnsZnBJ008zNmGoXd.f.70vgUWMH4C52g5y2DEaKo1U5IRXgpvS",
    
    "tickets": [],
    
    "__v": 0
    
  }
  
}

** Later on when user visit his profile he can see the details of tickets **
** And he can remove those tickets from his profile by visiting Users delete route ** 

Ex:- {
  "user": {
  
    "_id": "649e9b4a9ac7c99845684600",
    
    "name": "Akash",
    
    "email": "A@gmail.com",
    
    "password": "$2b$05$3WYnsZnBJ008zNmGoXd.f.70vgUWMH4C52g5y2DEaKo1U5IRXgpvS",
    
    "tickets": [
      {
        "busid": "649d963d61fdcb008275dc3a",
        "seatnumber": "5"
      }
    ],
    
    "__v": 0
    
  }
  
}


# All routes avalable for /bus 

GET /buses
Retrieves a list of buses.

GET /buses/:id
Retrieves information about a specific bus.

POST /buses
Adds a new bus to the system. Requires authentication using the watchman middleware.

PUT /buses/:id
Updates the details of a specific bus. Requires authentication using the watchman middleware.

DELETE /buses/:id
Deletes a specific bus. Requires authentication using the watchman middleware.

# All user routes avalable for /user

GET /users
Retrieves a list of users.

GET /users/:id
Retrieves information about a specific user.

GET /users/tickets/:id
Retrieves the ticket information of a specific user.

POST /users/register
Registers a new user

POST /users/login
Logs in a user.

PUT /users/update/:id
Updates the details of a specific user. Requires authentication using the watchman middleware.

DELETE /users/delete/:id
Deletes a specific user. Requires authentication using the watchman middleware.

# Search Feature 
for this feature visit this (/bus) and send the query.

Ex:- /bus/?Price=500 

