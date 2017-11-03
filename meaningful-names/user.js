const user = await fetch('http://localhost:8080/user/99');
const PURCHASES_TO_WIN_PRIZE = 1000;

if(user.purchases === PURCHASES_TO_WIN_PRIZE) {
  // GIVE A PRIZE
}