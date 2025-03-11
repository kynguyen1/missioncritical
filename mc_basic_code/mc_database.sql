CREATE TABLE users (
   user_id INT PRIMARY KEY AUTO_INCREMENT,
   firstName VARCHAR(255) NOT NULL,
   lastName VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL,
   passwordHash VARCHAR(255) NOT NULL,
   dateOfBirth DATE NULL,
   gender ENUM('M', 'F', 'Other') NULL,
   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE workouts (
   workoutID INT PRIMARY KEY AUTO_INCREMENT,
   userID INT FOREIGN KEY REFERENCES users(user_id),
   workoutType VARCHAR(100) NOT NULL,
   duration INT NOT NULL, -- in minutes
   caloriesBurned INT NOT NULL,
   startTime DATETIME NOT NULL,
   endTime DATETIME NOT NULL
);

CREATE TABLE exercises (
   exerciseID INT PRIMARY KEY AUTO_INCREMENT,
   workoutID INT FOREIGN KEY REFERENCES workouts(workoutID),
   exerciseName VARCHAR(100) NOT NULL,
   sets INT NOT NULL,
   reps INT NOT NULL,
   weight DECIMAL(5, 2) NULL -- in LBS
);

CREATE TABLE nutrition (
   nutritionID INT PRIMARY KEY AUTO_INCREMENT,
   userID INT FOREIGN KEY REFERENCES users(user_id),
   foodItem VARCHAR(255) NOT NULL,
   calories INT NOT NULL,
   protein DECIMAL(5, 2) NULL, -- in grams
   fats DECIMAL(5, 2) NULL, -- in grams
   mealTime DATETIME NOT NULL
);

CREATE TABLE progress (
   progressID INT PRIMARY KEY AUTO_INCREMENT,
   userID INT FOREIGN KEY REFERENCES users(user_id),
   weight DECIMAL(5, 2) NULL, -- in LBS
   bodyFat DECIMAL(5, 2) NULL, -- in percentage
   muscleMass DECIMAL(5, 2) NULL, -- in kg
   recordedAT DATETIME NOT NULL
);

CREATE TABLE subscription (
   subscriptionID INT PRIMARY KEY AUTO_INCREMENT,
   userID INT FOREIGN KEY REFERENCES users(user_id),
   planName VARCHAR(100) NOT NULL,
   price DECIMAL(6,2) NOT NULL,
   startDate DATETIME NOT NULL,
   endDate DATETIME NULL
);

CREATE TABLE payments (
   paymentID INT PRIMARY KEY AUTO_INCREMENT,
   userID INT FOREIGN KEY REFERENCES users(user_id),
   subscriptionID INT FOREIGN KEY REFERENCES subscription(subscriptionID),
   amountPaid DECIMAL(6,2) NOT NULL,
   paymentDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   paymentMethod VARCHAR(50) NOT NULL
);

CREATE TABLE admin (
   adminID INT PRIMARY KEY AUTO_INCREMENT,
   username VARCHAR(100) NOT NULL,
   passwordHash VARCHAR(255) NOT NULL,
   role ENUM('Super Admin', 'Support', 'Manager') NOT NULL,
);