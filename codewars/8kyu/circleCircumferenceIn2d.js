/*Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a number.

Write a function calculating circumference of a Circle.

Tests round answers to 6 decimal places.*/

circleCircumference = circle => 2 * Math.PI * circle.radius

+circleCircumference(new Circle(new Point(10, 10), 30)).toFixed(6), 188.495559