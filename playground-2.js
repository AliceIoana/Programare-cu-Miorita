// https://miorita.scoalaweb.ro/playgrounds/hatchet
// Scrie un program care să o ajute pe Miorița să ridice baltagul și să îl aducă Vitoriei
reset();

function superMove(times = 1) {
  for (var i = 0; i < times; i = i + 1) {
    move();
  }
}

move();
pick("hatchet");
turnRight();
superMove(4);
turnLeft();
superMove(2);
drop("hatchet");
