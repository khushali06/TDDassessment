// galacticSpacecraft.test.js
const { GalacticSpacecraft, executeCommands } = require('./galacticSpacecraft');

// Test Case 1: Test moveForward() method
test('Move forward', () => {
  const spacecraft = new GalacticSpacecraft(0, 0, 0, 'N');
  spacecraft.moveForward();
  expect(spacecraft.x).toBe(0);
  expect(spacecraft.y).toBe(1);
  expect(spacecraft.z).toBe(0);
});

// Test Case 2: Test moveBackward() method
test('Move backward', () => {
  const spacecraft = new GalacticSpacecraft(0, 0, 0, 'N');
  spacecraft.moveBackward();
  expect(spacecraft.x).toBe(0);
  expect(spacecraft.y).toBe(-1);
  expect(spacecraft.z).toBe(0);
});

// Test Case 3: Test turnLeft() method
test('Turn left', () => {
  const spacecraft = new GalacticSpacecraft(0, 0, 0, 'N');
  spacecraft.turnLeft();
  expect(spacecraft.direction).toBe('W');
});

// Test Case 4: Test turnRight() method
test('Turn right', () => {
  const spacecraft = new GalacticSpacecraft(0, 0, 0, 'N');
  spacecraft.turnRight();
  expect(spacecraft.direction).toBe('E');
});

// Test Case 5: Test turnUp() method
test('Turn up', () => {
  const spacecraft = new GalacticSpacecraft(0, 0, 0, 'N');
  spacecraft.turnUp();
  expect(spacecraft.direction).toBe('Up');
});

// Test Case 6: Test turnDown() method
test('Turn down', () => {
  const spacecraft = new GalacticSpacecraft(0, 0, 0, 'N');
  spacecraft.turnDown();
  expect(spacecraft.direction).toBe('Down');
});

// Test Case 7: Test executeCommands() function
test('Execute commands', () => {
  const startingPoint = [0, 0, 0];
  const initialDirection = 'N';
  const commands = ['f', 'r', 'u', 'b', 'l'];
  const result = executeCommands(startingPoint, initialDirection, commands);

  expect(result.finalPosition).toBe('(0, 1, -1)');
  expect(result.finalDirection).toBe('W');
});
