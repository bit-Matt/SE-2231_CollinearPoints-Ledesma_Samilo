export default class Point {
  x: number;
  y: number;
  p;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw(): void {
    // DO NOT MODIFY

    p.stroke("black");
    p.strokeWeight(800);
    p.point(this.x, this.y);
  }

  drawTo(that: Point) {
    // DO NOT MODIFY

    p.stroke("black");
    p.strokeWeight(200);
    p.line(this.x, this.y, that.x, that.y);
  }

  slopeTo(that: Point): number {
    // Corner Case handling
    if (this.x === that.x) {
      if (this.y === that.y) {
        return Number.NEGATIVE_INFINITY;
      }
      return Number.POSITIVE_INFINITY;
    }
    if (this.y === that.y) {
      return 0;
    }

    // Acutal calculation lol
    return (that.y - this.y) / (that.x - this.x);
  }
}
