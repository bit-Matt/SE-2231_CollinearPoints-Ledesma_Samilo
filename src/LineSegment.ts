import Point from "./Point";

export default class LineSegment {
  p: Point;
  q: Point;

  constructor(p: Point, q: Point) {
    // DO NOT MODIFY

    this.p = p;
    this.q = q;
  }

  draw(): void {
    // DO NOT MODIFY

    p.stroke("black");
    p.strokeWeight(2);
    p.line(this.p.x, this.p.y, this.q.x, this.q.y);
  }

  toString(): string {
    // DO NOT MODIFY

    return `${this.p} -> ${this.q}`;
  }
}
