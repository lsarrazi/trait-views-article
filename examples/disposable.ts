/**
 * Example: Disposable Trait
 * 
 * This example demonstrates how trait views can provide controlled access to behavior.
 * The Disposable trait exposes only the dispose method, hiding other dangerous operations.
 */

import { trait } from '../src/trait-views.js';

class Disposable {
  static from = trait(Disposable)

  dispose(): void {}
}

class Resource implements Disposable {
  secret = "do not touch"

  dispose() {
    console.log("OK");
  }

  dangerousOperation() {
    console.log(this.secret)
  }
}

const resource = new Resource()
const disposable = Disposable.from(resource)

disposable.dispose()            // OK
// disposable.dangerousOperation() // ❌ not accessible
