class User:
   def __init__(self, name, age, gender, weight, height, goals):
      self.name = name
      self.age = age
      self.gender = gender  # m/f
      self.weight = weight  # in lbs
      self.height = height  # in in
      self.goals = goals

      self.weight_kg = round(self.weight * 0.45359, 2)  #kg 
      self.height_cm = round(self.height * 2.54, 2)  #cm 

   def calculate_bmi(self):
      try:
         if self.weight <= 0:
            return "Error: Weight must be greater than zero."
         return round(703 * self.weight / (self.height ** 2), 2)
      except ZeroDivisionError:
         return "Error: Height cannot be zero."

   def calculate_bmr(self):
      if self.gender == "m":
         return round(88.362 + (13.397 * self.weight_kg) + (4.799 * self.height_cm) - (5.677 * self.age))
      elif self.gender == "f": 
         return round(447.593 + (9.247 * self.weight_kg) + (3.098 * self.height_cm) - (4.330 * self.age), 2)
      else:  
         return "Error: Gender must be entered as either m or f."

   def display_info(self):
      return (f" Name:   {self.name}\n"
              f" Age:    {self.age}\n" 
              f" Gender: {self.gender}\n"
              f" Weight: {self.weight} lbs ({self.weight_kg} kg)\n" 
              f" Height: {self.height} in ({self.height_cm} cm)\n" 
              f" Goals:  {self.goals}\n" 
              f" BMI:    {self.calculate_bmi()}\n" 
              f" BMR:    {self.calculate_bmr()} calories per day\n") 


def main():
   try: 
      name = input("Enter your name: ")

      age = int(input("Enter your age (7-121 yo): "))
      if age <= 6:
         raise ValueError("Age must be 7 years of age or older.")
      elif age >= 121:
         raise ValueError("Age must be 120 years of age or younger.")

      gender = input("Enter your gender (m/f): ")
      if gender not in ("m", "f"):
         raise ValueError("Gender must be entered as  either 'm' or 'f'.")

      weight = float(input("Enter your weight (lbs): "))
      if weight <= 30:
         raise ValueError("Weight must be greater than 30 lbs.")

      height = float(input("Enter your height (in): "))
      if height <= 30:
         raise ValueError("Height must be greater than 30 inches.")
      
      goals = input("Enter your fitness goal: ")

      user = User(name, age, gender, weight, height, goals)
      print("\nUser Data:")
      print(user.display_info())
   except ValueError as e:
      print(f"Input error: {e}")


if __name__ == "__main__":
    main()

