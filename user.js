const user = await fetch('http://localhost:8080/user/99');
const PRCHSES_TO_WIN_PRZE = 1000;

if(user.purchases === PRCHSES_TO_WIN_PRZE) {
  // GIVE A PRIZE
}