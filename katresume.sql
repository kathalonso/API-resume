create database katresume;
CREATE USER 'katresume'@'localhost' IDENTIFIED WITH mysql_native_password BY 're$ume';
GRANT ALL ON katresume.* TO 'katresume'@'localhost';
use katresume; 
create table about (
    name VARCHAR(255),
    title VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME
);
create table experience (
	id INT,
    role VARCHAR(255),
    company VARCHAR(255),
    summary VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME
);
create table education (
	id INT,
    degree VARCHAR(255),
    fieldOfStudy VARCHAR(255),
    institution VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME
);
create table skills (
	natLanguages VARCHAR(255),
    scriptLanguages VARCHAR(255),
    servers VARCHAR(255),
    frameworks VARCHAR(255),
    tools VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME
);
create table interests (
	fieldsOfInterest VARCHAR(255),
    hobbies VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME
);
create table contact (
	number INT,
    email VARCHAR(255),
    social VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME
);
INSERT INTO experience (id, role, company, summary) VALUES (6, 'VUX Designer', 'A Great Company', 'Combining language and communication specialities with voice user experiences');

select * from experience;