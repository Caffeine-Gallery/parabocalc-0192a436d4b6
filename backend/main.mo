import Float "mo:base/Float";

actor ParabolicCalculator {
  public query func calculateParabola(a : Float, b : Float, c : Float, x : Float) : async Float {
    let result = a * x * x + b * x + c;
    return result;
  };
}
