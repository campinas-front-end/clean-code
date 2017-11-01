const user = await fetch('http://localhost:8080/user/99');

if(user.purchases === 1000) {
  // GIVE A PRIZE
}