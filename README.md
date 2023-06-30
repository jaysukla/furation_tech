# furation_tech Assignment ( Ticket Reservation System)
# Deployment Link 
https://exuberant-beanie-deer.cyclic.app/

# How to make a Reservation
To make Reservation user need to login first.
# steps to login 
1. Register (POST) =>> visit this ( /user/register ) rout .
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

2. Login (POST) =>> visit this ( /user/login ) rout .
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
