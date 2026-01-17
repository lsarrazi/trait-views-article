/**
 * Trait Views - Reference Implementation
 * 
 * This is an experimental reference implementation for educational purposes.
 * Not intended for production use.
 * 
 * Demonstrates the concept of exposing behavior without inheritance by using
 * "trait views" - objects that provide a specific behavioral interface to an
 * underlying object without modifying the original.
 */

/**
 * Creates a trait view that exposes specific behavior for an object.
 * 
 * @param {Object} target - The underlying object
 * @param {Object} trait - The trait definition containing methods
 * @returns {Object} A view object with trait methods bound to the target
 * 
 * @example
 * const serializable = {
 *   toJSON: function() { return JSON.stringify(this); }
 * };
 * const obj = { name: "example", value: 42 };
 * const view = createTraitView(obj, serializable);
 * view.toJSON(); // Returns JSON string of obj
 */
function createTraitView(target, trait) {
  const view = Object.create(null);
  
  for (const key in trait) {
    if (typeof trait[key] === 'function') {
      view[key] = trait[key].bind(target);
    }
  }
  
  return view;
}

/**
 * Example trait: Serializable behavior
 */
const Serializable = {
  toJSON: function() {
    return JSON.stringify(this);
  },
  
  toString: function() {
    return `[Object: ${JSON.stringify(this)}]`;
  }
};

/**
 * Example trait: Comparable behavior
 */
const Comparable = {
  equals: function(other) {
    return JSON.stringify(this) === JSON.stringify(other);
  },
  
  compareTo: function(other) {
    const thisStr = JSON.stringify(this);
    const otherStr = JSON.stringify(other);
    return thisStr.localeCompare(otherStr);
  }
};

// Export for use in examples
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    createTraitView,
    Serializable,
    Comparable
  };
}
