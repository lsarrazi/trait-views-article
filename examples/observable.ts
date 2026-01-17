/**
 * Example: Observable Trait
 * 
 * This example demonstrates a simple observable pattern using trait views.
 * The Observable trait provides observation behavior that can be applied to any object.
 */

import { trait } from '../src/trait-views.js';

class Observable {
  static from = trait(Observable)

  observe(): number {
    return 0
  }

  // Note this one is optional
  observeTimesTwo?(): number {
    return this.observe() * 2
  }
}

class Sensor implements Observable {
  value = 21

  observe(): number {
    return this.value
  }
}

const sensor = new Sensor()

console.log(Observable.from(sensor).observeTimesTwo()) // 42
