import * as motor from "./motor";
import * as model from "./model";

describe("gameStatusCheck", () => {
  it("should return gameStatus.won if points are equal to target", () => {
    //Arrange
    const points: number = 7.5;
    const expectedResult: string = model.gameStatus.won;

    //Act
    const output: string = motor.gameStatusCheck(points);

    //Assert
    expect(output).toBe(expectedResult);
  });

  it("should return gameStatus.lost if points are above target", () => {
    //Arrange
    const points: number = 7.5 + 0.1; // added a decimal point to target points
    const expectedResult: string = model.gameStatus.lost;

    //Act
    const output: string = motor.gameStatusCheck(points);

    //Assert
    expect(output).toBe(expectedResult);
  });

  it("should return gameStatus.ongoing if points are below target", () => {
    // Arrange
    const points: number = 7.5 - 0.1; // substracted a decimal point to target points
    const expectedResult: string = model.gameStatus.ongoing;

    // Act
    const output: string = motor.gameStatusCheck(points);

    // Assert
    expect(output).toBe(expectedResult);
  });
});

describe("newCardNumberCalcCheck", () => {
  it("should return original randomly generated card number, case 1", () => {
    // Arrange
    const newCardValue: number = 1;
    const expectedResult: number = newCardValue;

    // Act
    const output: number = motor.newCardNumberCalc(newCardValue);

    // Assert
    expect(output).toBe(expectedResult);
  });

  it("should return original randomly generated card number, case 5", () => {
    // Arrange
    const newCardValue: number = 5;
    const expectedResult: number = newCardValue;

    // Act
    const output: number = motor.newCardNumberCalc(newCardValue);

    // Assert
    expect(output).toBe(expectedResult);
  });

  it("should return original randomly generated card number, case 7", () => {
    // Arrange
    const newCardValue: number = 7;
    const expectedResult: number = newCardValue;

    // Act
    const output: number = motor.newCardNumberCalc(newCardValue);

    // Assert
    expect(output).toBe(expectedResult);
  });

  it("should return 10 instead of 8", () => {
    // Arrange
    const newCardValue: number = 8;
    const expectedResult: number = 10;

    // Act
    const output: number = motor.newCardNumberCalc(newCardValue);

    // Assert
    expect(output).toBe(expectedResult);
  });

  it("should return 11 instead of 9", () => {
    // Arrange
    const newCardValue: number = 9;
    const expectedResult: number = 11;

    // Act
    const output: number = motor.newCardNumberCalc(newCardValue);

    // Assert
    expect(output).toBe(expectedResult);
  });

  it("should return 12 instead of 10", () => {
    // Arrange
    const newCardValue: number = 10;
    const expectedResult: number = 12;

    // Act
    const output: number = motor.newCardNumberCalc(newCardValue);

    // Assert
    expect(output).toBe(expectedResult);
  });
});

describe("newCardPointsToSUM", () => {
  it("should return original randomly generated card number as its value (points), case 1", () => {
    // Arrange
    const newCardValue: number = 1;
    const expectedResult: number = newCardValue;

    // Act
    const output: number = motor.newCardPointsToSUM(newCardValue);

    // Assert
    expect(output).toBe(expectedResult);
  });

  it("should return original randomly generated card number as its value (points), case 5", () => {
    // Arrange
    const newCardValue: number = 5;
    const expectedResult: number = newCardValue;

    // Act
    const output: number = motor.newCardPointsToSUM(newCardValue);

    // Assert
    expect(output).toBe(expectedResult);
  });

  it("should return original randomly generated card number as its value (points), case 7", () => {
    // Arrange
    const newCardValue: number = 7;
    const expectedResult: number = newCardValue;

    // Act
    const output: number = motor.newCardPointsToSUM(newCardValue);

    // Assert
    expect(output).toBe(expectedResult);
  });

  it("should return 0.5 instead of 10 as its value (points)", () => {
    // Arrange
    const newCardValue: number = 10;
    const expectedResult: number = 0.5;

    // Act
    const output: number = motor.newCardPointsToSUM(newCardValue);

    // Assert
    expect(output).toBe(expectedResult);
  });

  it("should return 0.5 instead of 11 as its value (points)", () => {
    // Arrange
    const newCardValue: number = 11;
    const expectedResult: number = 0.5;

    // Act
    const output: number = motor.newCardPointsToSUM(newCardValue);

    // Assert
    expect(output).toBe(expectedResult);
  });

  it("should return 0.5 instead of 12 as its value (points)", () => {
    // Arrange
    const newCardValue: number = 12;
    const expectedResult: number = 0.5;

    // Act
    const output: number = motor.newCardPointsToSUM(newCardValue);

    // Assert
    expect(output).toBe(expectedResult);
  });
});

describe("newCardValueCalcCheck", () => {
  it("should return the lowest possible number, 1", () => {
    //Arrange
    const expectedPoints: number = 1;
    vi.spyOn(global.Math, "random").mockReturnValue(0);

    //Act
    const output: string = motor.newCardValueCalc();

    //Assert
    expect(output).toBe(expectedPoints);
  });
  it("should return the highest possible number, 10", () => {
    //Arrange
    const expectedPoints: number = 10;
    vi.spyOn(global.Math, "random").mockReturnValue(1);

    //Act
    const output: string = motor.newCardValueCalc();

    //Assert
    expect(output).toBe(expectedPoints);
  });
});
