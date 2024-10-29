// Special class that represent a group of constraint.
// Enums comes in two favors : "STRING" & "NUMERIC".

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  };
  // logs 404
  console.log(StatusCodes.NotFound);
  // logs 200
  console.log(StatusCodes.Success);


  enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
  
  // logs "North"
  console.log(CardinalDirections.North);
  
  // logs "West"
  console.log(CardinalDirections.West);

// Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.