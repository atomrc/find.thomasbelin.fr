require("../scss/application.scss");
import { run } from "@cycle/xstream-run"
import { timeDriver } from "@cycle/time"
import { makeDOMDriver, a, div, img } from "@cycle/dom"

const  links = require("./links.json")

type Vector2D = [number, number]

interface Point {
  x: number,
  y: number
}

interface Link {
  position: Point,
  elastic: Point,
  velocity: Vector2D,
  link: string
}

interface VectorComponentOperation {
  (comp1: number, comp2: number): number
}

function applyForces(velocity: Vector2D, forces: Array<Vector2D>, op: VectorComponentOperation): Vector2D {
  return velocity.map((comp, i) => forces.reduce((acc, f) => op(acc, f[i]), comp));
}

function getElasticForce(link: Link): Vector2D {
    const elasticSize = 10;
    const dx = link.elastic.x - link.position.x
    const dy = link.elastic.y - link.position.y
    const dist = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))

    if (dist <= elasticSize) {
        return [0,0]
    }

    return [
      dx * ((dist - 10) * 0.0001),
      dy * ((dist - 10) * 0.0001)
    ]
}

function updateVelocity(link: Link): Link {
  let gravity: Vector2D
  gravity = [0, 1]
  const elasticForce = getElasticForce(link)

  return Object.assign({}, link, {
    velocity: applyForces(link.velocity, [gravity, elasticForce], (c1, c2) => c1 + c2)
  });
}

function applyFriction(link: Link): Link {
  const velocity = applyForces(link.velocity, [[0.95, 0.95]], (c1, c2) => c1 * c2)
  return Object.assign({}, link, {
    velocity: velocity
  });
}

function updatePosition(link: Link): Link {
  return Object.assign({}, link, {
    position: {
      x: link.position.x + link.velocity[0],
      y: link.position.y + link.velocity[1]
    }
  });
}

function updateState(links): Array<Link> {
  return links
    .map(updateVelocity)
    .map(applyFriction)
    .map(updatePosition);
}

function render(links) {
  const vnodes = links
    .map(link => a({
      attrs: {
        class: "link",
        title: link.title,
        href: link.link
      },
      style: {
        display: "block",
        transform: `translate(${link.position.x}px, ${link.position.y}px)`
      }
    }, [img({ attrs: { src: link.image }})]))

  return div(vnodes)
}

function main({ time }) {
  return {
    DOM: time
      .animationFrames()
      .fold(updateState, links)
      .map(render)
  }
}

run(main, {
    DOM: makeDOMDriver("#main"),
    time: timeDriver
});
