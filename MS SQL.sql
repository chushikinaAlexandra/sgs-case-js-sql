gitCREATE TABLE Conteiners
(
    id INT NOT NULL Primary Key,
    number INT,
    type NVARCHAR(20),
    length INT,
    width INT,
    height INT,
   	weight INT,
  	isEmpty BIT,
  	date DATETIME
)

CREATE TABLE Operations
(
    id INT NOT NULL Primary Key,
  	id_container INT REFERENCES Conteiners (id),
  	dateStart DATETIME,
  	dateEnd DATETIME,
    type NVARCHAR(20),
  	name NVARCHAR(20),
    place NVARCHAR(20)
)

SELECT id, number, type, length, width, height, weight, isempty, date 
FROM Conteiners
FOR JSON PATH;

SELECT id, datestart, dateend, type, name, place 
FROM Operations
Where id_container = 3
FOR JSON PATH;