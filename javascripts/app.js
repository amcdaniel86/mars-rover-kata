


const move = {
  N: [0, 1],
  E: [1, 0]
  S: [0, -1],
  W: [-1, 0],
};

const leftTurn = {
  N: "W",
  E: "N"
  S: "E",
  W: "S",
};

const rightTurn = {
  N: "E",
  E: "S",
  S: "W",
  W: "N"
};

function turnLeft(rover){
  return leftTurn[N];
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}
