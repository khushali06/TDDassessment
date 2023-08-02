class GalacticSpacecraft {
    constructor(x, y, z, direction) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.direction = direction;
    }
  
    moveForward() {
      switch (this.direction) {
        case 'N':
          this.y++;
          break;
        case 'S':
          this.y--;
          break;
        case 'E':
          this.x++;
          break;
        case 'W':
          this.x--;
          break;
        case 'Up':
          this.z++;
          break;
        case 'Down':
          this.z--;
          break;
      }
    }
  
    moveBackward() {
      switch (this.direction) {
        case 'N':
          this.y--;
          break;
        case 'S':
          this.y++;
          break;
        case 'E':
          this.x--;
          break;
        case 'W':
          this.x++;
          break;
        case 'Up':
          this.z--;
          break;
        case 'Down':
          this.z++;
          break;
      }
    }
  
    turnLeft() {
      switch (this.direction) {
        case 'N':
          this.direction = 'W';
          break;
        case 'S':
          this.direction = 'E';
          break;
        case 'E':
          this.direction = 'N';
          break;
        case 'W':
          this.direction = 'S';
          break;
        case 'Up':
          this.direction = 'W';
          break;
        case 'Down':
          this.direction = 'W';
          break;
      }
    }
  
    turnRight() {
      switch (this.direction) {
        case 'N':
          this.direction = 'E';
          break;
        case 'S':
          this.direction = 'W';
          break;
        case 'E':
          this.direction = 'S';
          break;
        case 'W':
          this.direction = 'N';
          break;
         case 'Up':
          this.direction = 'E';
          break;
        case 'Down':
          this.direction = 'E';
          break;
      }
    }
  
    turnUp() {
      if (['N', 'S', 'E', 'W'].includes(this.direction)) {
        this.direction = 'Up';
      }
    }
  
    turnDown() {
      if (['N', 'S', 'E', 'W'].includes(this.direction)) {
        this.direction = 'Down';
      }
    }
  }
  
  function executeCommands(startingPoint, initialDirection, commands) {
    const spacecraft = new GalacticSpacecraft(startingPoint[0], startingPoint[1], startingPoint[2], initialDirection);
  
    for (const command of commands) {
      switch (command) {
        case 'f':
          spacecraft.moveForward();
          break;
        case 'b':
          spacecraft.moveBackward();
          break;
        case 'l':
          spacecraft.turnLeft();
          break;
        case 'r':
          spacecraft.turnRight();
          break;
        case 'u':
          spacecraft.turnUp();
          break;
        case 'd':
          spacecraft.turnDown();
          break;
      }
    }
  
    return {
      finalPosition: `(${spacecraft.x}, ${spacecraft.y}, ${spacecraft.z})`,
      finalDirection: spacecraft.direction
    };
  }
  
  // Example usage:
  const startingPoint = [0, 0, 0];
  const initialDirection = 'N';
  const commands = ['f', 'r', 'u', 'b', 'l'];
  const result = executeCommands(startingPoint, initialDirection, commands);
  
  console.log('Final Position:', result.finalPosition);
  console.log('Final Direction:', result.finalDirection);
  
