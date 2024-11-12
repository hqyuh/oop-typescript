CREATE TABLE Manufacturers (
  code INTEGER, 
  name VARCHAR(255) NOT NULL, 
  PRIMARY KEY (Code)   
);

CREATE TABLE Products (
  code INTEGER, name VARCHAR(255) NOT NULL, 
  price DECIMAL NOT NULL, 
  manufacturer INTEGER NOT NULL, 
  PRIMARY KEY (code), 
  FOREIGN KEY (manufacturer) REFERENCES Manufacturers(Code)
);

INSERT INTO Manufacturers(code, name) VALUES(1, 'Sony');
INSERT INTO Manufacturers(code, name) VALUES(2, 'Creative Labs');
INSERT INTO Manufacturers(code, name) VALUES(3, 'Hewlett-Packard');
INSERT INTO Manufacturers(code, name) VALUES(4, 'Iomega');
INSERT INTO Products(code, name, price, manufacturer) VALUES(1, 'Hard drive', 240, 1);
INSERT INTO Products(code, name, price, manufacturer) VALUES(2, 'Memory', 120, 2);
INSERT INTO Products(code, name, price, manufacturer) VALUES(3, 'ZIP drive', 150, 3);
INSERT INTO Products(code, name, price, manufacturer) VALUES(5, 'Monitor', 240, 1);
INSERT INTO Products(code, name, price, manufacturer) VALUES(8, 'Printer', 270, 3);