import p5 from "p5";
import mergeSort from "./src/mergeSort";

const width: number = 800;
const height: number = 500;
const padding: number = 50;

let sketch = function (p) {
  p.setup = function () {
    p.createCanvas(width, height);

    p.strokeWeight(3);
    p.stroke("blue");

    // x and y axes
    p.line(padding, padding, padding, height - padding);
    p.line(padding, height - padding, width - padding, height - padding);

    // y-axis arrow head
    p.line(padding, padding, padding - 5, padding + 5);
    p.line(padding, padding, padding + 5, padding + 5);

    // x-axis arrow head
    p.line(
      width - padding,
      height - padding,
      width - padding - 5,
      height - padding + 5
    );
    p.line(
      width - padding,
      height - padding,
      width - padding - 5,
      height - padding - 5
    );

    p.strokeWeight(0);
    p.text("(0, 0)", padding + 10, height - 30);
  };

  class Point {
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

      // Acutal calculation
      return (that.y - this.y) / (that.x - this.x);
    }
  }

  class LineSegment {
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

  class BruteCollinearPoints {
    points: Point[];
    segments: LineSegment[];

    constructor(points: Point[]) {
      this.points = points;
      this.segments = [];

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          for (let k = j + 1; k < points.length; k++) {
            for (let l = k + 1; l < points.length; l++) {
              const p = points[i];
              const q = points[j];
              const r = points[k];
              const s = points[l];

              if (
                p.slopeTo(q) === p.slopeTo(r) &&
                p.slopeTo(q) === p.slopeTo(s)
              ) {
                this.segments.push(new LineSegment(p, s));
              }
            }
          }
        }
      }
    }

    numberOfSegments(): number {
      return this.segments.length;
    }

    segmentsRead(): LineSegment[] {
      return this.segments;
    }
  }

  class FastCollinearPoints {
    constructor(points: Point[]) {
      if (points === null) {
        throw new Error("Null argument");
      }
      if (points.some((point) => point.x === null || point.y === null)) {
        throw new Error("Null coordinate in point");
      }
      // if () {
      //   throw new Error('Contains duplicate points');
      // }
    }

    numberOfSegments(): number {
      // YOUR CODE HERE
      return 0;
    }

    segments(): LineSegment[] {
      // YOUR CODE HERE
      return [];
    }
  }

  // Declare your point objects here~
  // const point = new Point(19000, 10000);
  // const point2 = new Point(10000, 10000);

  // from input6.txt
  const points: Point[] = [
    new Point(19000, 10000),
    new Point(18000, 10000),
    new Point(32000, 10000),
    new Point(21000, 10000),
    new Point(1234, 5678),
    new Point(14000, 10000),
  ];

  // TEST BRUTE COLLIEAR POINTS
  // p.draw = function () {
  //   p.translate(padding, height - padding);
  //   p.scale(1 / 100, -1 / 100);

  //   for (const point of points) {
  //     point.draw();
  //   }

  //   const bruteCollinearPoints = new BruteCollinearPoints(points);
  //   const segments = bruteCollinearPoints.segmentsRead();

  //   segments.forEach((segment) => {
  //     console.log(segment.toString());
  //     segment.draw();
  //   });
  // };

  p.draw = function () {
    p.translate(padding, height - padding);
    p.scale(1 / 100, -1 / 100);

    // Call your draw and drawTo here.

    // point.draw();
    // point2.draw();
    // point.drawTo(point2);

    for (const point of points) {
      point.draw();
    }

    const collinear = new FastCollinearPoints(points);
    for (const segment of collinear.segments()) {
      console.log(segment.toString());
      segment.draw();
    }
  };
};

new p5(sketch);
