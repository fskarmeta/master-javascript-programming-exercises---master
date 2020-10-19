function checkAge(name, age) {
  return age < 21 ? ("Go home, " + name + "!") : ("Welcome, " + name + "!")
}

console.log(checkAge("Fabian", 18))