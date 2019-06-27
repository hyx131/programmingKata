const blocksAway = function(directions) {
  let output = {
    east: 0,
    north: 0
  };
  let faceDir = "";

  for (let i = 0; i < directions.length; i += 2) {
    let dir = directions[i];
    let distance = directions[i + 1];

    if (i === 0) {
      if (dir === "right") {
        faceDir = "north";
      } else if (dir === "left") {
        faceDir = "east";
      }
    }

    switch (faceDir) {
    case "north":
      if (dir === "right") {
        output.east += distance;
        faceDir = "east";
      } else if (dir === "left") {
        output.east -= distance;
        faceDir = "west";
      }
      break;

    case "east":
      if (dir === "left") {
        output.north += distance;
        faceDir = "north";
      } else if (dir === "right") {
        output.north -= distance;
        faceDir = "south";
      }
      break;
      
    case "west":
      if (dir === "right") {
        output.north += distance;
        faceDir = "north";
      } else if (dir === "left") {
        output.north -= distance;
        faceDir = "south";
      }
      break;
      
    case "south":
      if (dir === "right") {
        output.east -= distance;
        faceDir = "west";
      } else if (dir === "left") {
        output.east += distance;
        faceDir = "east";
      }
    }
  }
  return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

// {east: 1, north: 3}
// {east: 3, north: 3}
// {east: 2, north: 0}