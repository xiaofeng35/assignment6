  Matter.use('matter-wrap');

  const Engine = Matter.Engine;
  const Render = Matter.Render;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;
  const Mouse = Matter.Mouse;
  const MouseConstraint = Matter.MouseConstraint;
  const Constraint = Matter.Constraint;
  const Composite = Matter.Composite;
  const Composites = Matter.Composites;

  const drawBody = Helpers.drawBody;
  // const drawMouse = Helpers.drawMouse;
  // const drawConstraint = Helpers.drawConstraint;

  let engine;

  let compositeConstruction;


  let circleA;

  let rect01;

  let rectbottom;
  let recttop;

  let rect02;
  let rect03;
  let rect04;
  let rect05;
  let rect06;
  let rect07;
  let rect08;
  let rect09;
  let rect10;
  let rect11;
  let rect12;


  let constraint1;
  let constraint2;
  let constraint03;
  let constraint04;
  let constraint05;
  let constraint06;
  let constraint07;
  let constraint08;
  let constraint09;
  let constraint10;
  let constraint11;
  let constraint12;
  let constraint13;

  let ground;
  let wall1;
  let wall2;

  let group1;

  function setup() {
    angleMode(DEGREES);
    createCanvas(800, 800);
    noStroke();
    rectMode(CENTER);
    ellipseMode(CENTER);

    // create an engine
    engine = Engine.create();

      engine.world.gravity.y = -1;


    group1 = Body.nextGroup(true);

    compositeConstruction = Composite.create();



    // create two boxes and a ground
    circleA = Bodies.circle(300, 185, 148, {collisionFilter: {
      group: group1
    }, density: 0.0002});




    rect01 = Bodies.rectangle(300, 208, 300, 313, {collisionFilter: {
      group: group1
    },density: 0.0002});



    // rect13 = Bodies.rectangle(300, 362, 300, 450, {collisionFilter: {
    //   group: group1
    // },density: 0.0002});


    rectbottom = Bodies.rectangle(300, 362, 140, 400,
              {collisionFilter: {
                group: group1
              },density: 0.0002,

             chamfer: { radius: [5, 5, 3, 3] }});






    recttop = Bodies.rectangle(300, 104, 140, 110,
    {collisionFilter: {
      group: group1
    },density: 0.0002,
              chamfer: { radius: [15, 15, 3, 3] }} );






    //
    // rect02 = Bodies.rectangle(398, 70, 60, 70, {
    //           chamfer: { radius: [5, 5, 5, 5] },
    //           collisionFilter: {
    //             group: group1
    //           },density: 0.0002,
    //           angle:-90});
    //
    //
    // rect03 = Bodies.rectangle(202, 70, 60, 70, {
    //           chamfer: { radius: [5, 5, 5, 5] },
    //           collisionFilter: {
    //             group: group1
    //           },density: 0.0002});


    rect04 = Bodies.rectangle(300, 114, 58, 90, {
              chamfer: { radius: [20, 20, 0, 0] },
              collisionFilter: {
                group: group1
              },density: 0.0002});

    rect05 = Bodies.rectangle(300, 119, 40, 78, {
              chamfer: { radius: [10, 10, 0, 0] },
              collisionFilter: {
                group: group1
              },density: 0.0002});

    rect06 = Bodies.rectangle(300, 116, 40, 70, {
              chamfer: { radius: [10, 10, 10, 10] },
              collisionFilter: {
                group: group1
              },density: 0.0002});

    rect07 = Bodies.rectangle(300, 140, 30, 8, {
              chamfer: { radius: [4, 4, 4, 4] },
              collisionFilter: {
                group: group1
              },density: 0.0002});
    rect08 = Bodies.rectangle(347, 132, 36, 34, {
              chamfer: { radius: [0, 7, 7, 0] },
              collisionFilter: {
                group: group1
              },density: 0.0002});

    rect09 = Bodies.rectangle(333, 132, 6, 33, {
              chamfer: { radius: [3, 3, 3, 3] },
              collisionFilter: {
                group: group1
              },density: 0.0002});
    rect10 = Bodies.rectangle(355, 132, 6, 33, {
              chamfer: { radius: [3, 3, 3, 3] },
              collisionFilter: {
                group: group1
              },density: 0.0002});

    rect11 = Bodies.rectangle(255, 104, 50, 2,
    {collisionFilter: {
      group: group1
    },density: 0.0002});


    rect12 = Bodies.rectangle(345, 104, 50, 2,
    {collisionFilter: {
      group: group1
    },density: 0.0002});


    constraint1 = Constraint.create({
      bodyA: recttop,
      pointA: { x: 0, y: 104 },
      bodyB: rect01,
      pointB: { x: 0, y: 0 },
      stiffness: 1,
      length:0
      // damping: 0.05,
    });
    World.add(engine.world, [ constraint1]);


    constraint2 = Constraint.create({
      bodyA: rectbottom,
      pointA: { x: 0, y: 258 },
      bodyB: recttop,
      pointB: { x: 0, y: 0 },
      stiffness: 1,
      length:0

    });



    constraint03 = Constraint.create({
      bodyA: circleA,
      pointA: { x: 0, y: -81 },
      bodyB: recttop,
      pointB: { x: 0, y: 0 },
      stiffness: 1,
      length:0

    });

    constraint04 = Constraint.create({
      bodyA: recttop,
      pointA: { x: 0, y: 0 },
      bodyB: rect04,
      pointB: { x: 0, y: 0 },
      stiffness: 1,});


      constraint05 = Constraint.create({
        bodyA: recttop,
        pointA: { x: 0, y: 0 },
        bodyB: rect05,
        pointB: { x: 0, y: 0 },
        stiffness: 1,
      });

      constraint06 = Constraint.create({
        bodyA: rectbottom,
        pointA: { x: 0, y: 0 },
        bodyB: rect01,
        pointB: { x: 0, y: 154 },
        stiffness: 1,
        length:0
      });

      constraint07 = Constraint.create({
        bodyA: rectbottom,
        pointA: { x: 0, y: 0 },
        bodyB: circleA,
        pointB: { x: 0, y: 177 },
        stiffness: 1,
        length:0
      });

      constraint08 = Constraint.create({
        bodyA: recttop,
        pointA: { x: 0, y: 0 },
        bodyB: rect06,
        pointB: { x: 0, y: -10 },
        stiffness: 1,
      });

      constraint09 = Constraint.create({
        bodyA: recttop,
        pointA: { x: 0, y: 0 },
        bodyB: rect07,
        pointB: { x: 0, y: 0 },
        stiffness: 1,
      });

      constraint10 = Constraint.create({
        bodyA: recttop,
        pointA: { x: 49, y: 18 },
        bodyB: rect08,
        pointB: { x: 0, y: 0},
        stiffness: 1,
      });

      constraint11 = Constraint.create({
        bodyA: rect08,
        pointA: { x: -10, y: 0.5 },
        bodyB: rect09,
        pointB: { x: 0, y: 0 },
        stiffness: 1,
      });
      constraint12 = Constraint.create({
        bodyA: rect08,
        pointA: { x: 10, y: 0.5 },
        bodyB: rect10,
        pointB: { x: 0, y: 0 },
        stiffness: 1,
      });
      constraint13 = Constraint.create({
        bodyA: rect04,
        pointA: { x: 0, y: 0 },
        bodyB: rect05,
        pointB: { x: 0, y: 0 },
        stiffness: 1,
      });


      constraint14 = Constraint.create({
        bodyA: recttop,
        pointA: { x: -45, y: 0 },
        bodyB: rect11,
        pointB: { x: 0, y: 0},
        stiffness: 1,
      });

      constraint15 = Constraint.create({
        bodyA: recttop,
        pointA: { x: 45, y: 0 },
        bodyB: rect12,
        pointB: { x: 0, y: 0},
        stiffness: 1,
      });


          //
          // circleA.plugin.wrap = {
          //   min: { x: width, y: height },
          //   max: { x: width, y: height }
          // };
          //
          // rect01.plugin.wrap = {
          //   min: { x: 0, y: 0 },
          //   max: { x: width, y: height }
          // };
          // rectbottom.plugin.wrap = {
          //   min: { x: 0, y: 0 },
          //   max: { x: width, y: height }
          // };
          // recttop.plugin.wrap = {
          //   min: { x: 0, y: 0 },
          //   max: { x: width, y: height }
          // };
          // rect04.plugin.wrap = {
          //   min: { x: 0, y: 0 },
          //   max: { x: width, y: height }
          // };
          // rect05.plugin.wrap = {
          //   min: { x: 0, y: 0 },
          //   max: { x: width, y: height }
          // };
          // rect06.plugin.wrap = {
          //   min: { x: 0, y: 0 },
          //   max: { x: width, y: height }
          // };
          // rect07.plugin.wrap = {
          //   min: { x: 0, y: 0 },
          //   max: { x: width, y: height }
          // };
          // rect08.plugin.wrap = {
          //   min: { x: 0, y: 0 },
          //   max: { x: width, y: height }
          // };
          // rect09.plugin.wrap = {
          //   min: { x: 0, y: 0 },
          //   max: { x: width, y: height }
          // };
          // rect10.plugin.wrap = {
          //   min: { x: 0, y: 0 },
          //   max: { x: width, y: height }
          // };
          // rect11.plugin.wrap = {
          //   min: { x: 0, y: 0 },
          //   max: { x: width, y: height }
          // };
          // rect12.plugin.wrap = {
          //   min: { x: 0, y: 0 },
          //   max: { x: width, y: height }
          // };





   World.add(engine.world, [ constraint2,constraint03,constraint04,constraint05,constraint06,constraint07,constraint08,constraint09,constraint10,constraint11,constraint12,constraint13,constraint14,constraint15,]);






    ground = Bodies.rectangle(400, 0, 1000, 10, {
      isStatic: true,
    });

    wall1 = Bodies.rectangle(1, 400, 10, 1600, {
      isStatic: true,
    });
    wall2 = Bodies.rectangle(799, 400, 10, 1600, {
      isStatic: true,
    });
    // add all of the bodies to the world
    World.add(engine.world, [ ground,wall1,wall2,]);



    World.add(engine.world, [ rectbottom,recttop,circleA,
    rect04,rect05,rect06,rect07,rect08,rect09,rect10,rect11,rect12,rect01, ]);


    // setup mouse
    let mouse = Mouse.create(canvas.elt);
    let mouseParams = {
      mouse: mouse,
      constraint: { stiffness: 0.1, angularStiffness: 0 }
    }
    mouseConstraint = MouseConstraint.create(engine, mouseParams);
    mouseConstraint.mouse.pixelRatio = pixelDensity();
    World.add(engine.world, mouseConstraint);


    // run the engine
    Engine.run(engine);
  }

  function draw() {
    background(0);
    fill(152);
    drawBody(circleA);

    fill(0);
    drawBody(rect01);
    // drawBody(rect13);




    fill(152);
    drawBody(recttop);
    drawBody(rectbottom);
    drawConstraint(constraint1);
    drawConstraint(constraint03);


    fill(0);

    // drawBody(rect02);
    // drawBody(rect03);
    drawBody(rect11);
    drawBody(rect12);


    fill(50);
    drawBody(ground);
    drawBody(wall1);
    drawBody(wall2);
    drawBody(rect04);





    fill(100);
    drawBody(rect05);

    fill(200);
    drawBody(rect06);

    fill(70);
    drawBody(rect08);


    fill(50);
    drawBody(rect07);
    drawBody(rect09);
    drawBody(rect10);

    drawMouse(mouseConstraint);


  }

  function drawConstraints(constraints) {
    for (let i = 0; i < constraints.length; i++) {
      drawConstraint(constraints[i]);
    }
  }

  function drawBodies(bodies) {
    for (let i = 0; i < bodies.length; i++) {
      drawVertices(bodies[i].vertices);
    }
  }

  function drawConstraint(constraint) {
    const offsetA = constraint.pointA;
    let posA = {x:0, y:0};
    if (constraint.bodyA) {
      posA = constraint.bodyA.position;
    }
    const offsetB = constraint.pointB;
    let posB = {x:0, y:0};
    if (constraint.bodyB) {
      posB = constraint.bodyB.position;
    }
    line(
      posA.x + offsetA.x,
      posA.y + offsetA.y,
      posB.x + offsetB.x,
      posB.y + offsetB.y
    );
  }

  function drawMouse(mouseConstraint) {
    if (mouseConstraint.body) {
      const pos = mouseConstraint.body.position;
      const offset = mouseConstraint.constraint.pointB;
      const m = mouseConstraint.mouse.position;
      stroke(65, 35, 46);
      strokeWeight(0);
      line(pos.x + offset.x, pos.y + offset.y, m.x, m.y);
    }
  }
