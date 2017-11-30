CREATE TABLE 'usuarios' (
    'email' varchar(100) NOT NULL,
    'password' varchar (20) NOT NULL,
    'name' varchar(50) NOT NULL,
    'sex' char(1) NOT NULL,
    'birthdate' date DEFAULT NULL,
    'profile_picture' blob,
    'points' int(5) DEFAULT '0',
    PRIMARY KEY ('email')
)

CREATE TABLE 'amigos' (
    'user' varchar(100) NOT NULL,
    'friend' varchar(100) NOT NULL
    PRIMARY KEY ('user', 'friend'),
    

)