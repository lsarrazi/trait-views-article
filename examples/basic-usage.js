/**
 * Example: Using Trait Views
 * 
 * This example demonstrates how to use trait views to expose
 * different behaviors for objects without modifying them or using inheritance.
 */

// If running in Node.js, require the implementation
const { createTraitView, Serializable, Comparable } = 
  typeof module !== 'undefined' 
    ? require('../src/trait-views.js') 
    : window;

// Example 1: Adding serialization behavior to a plain object
console.log('=== Example 1: Serializable trait ===');

const person = {
  name: 'Alice',
  age: 30,
  city: 'Paris'
};

// Create a view with serialization behavior
const serializablePerson = createTraitView(person, Serializable);

console.log('Original object:', person);
console.log('As JSON:', serializablePerson.toJSON());
console.log('As string:', serializablePerson.toString());

// Example 2: Adding comparison behavior
console.log('\n=== Example 2: Comparable trait ===');

const point1 = { x: 10, y: 20 };
const point2 = { x: 10, y: 20 };
const point3 = { x: 15, y: 25 };

const comparable1 = createTraitView(point1, Comparable);
const comparable2 = createTraitView(point2, Comparable);
const comparable3 = createTraitView(point3, Comparable);

console.log('point1 equals point2?', comparable1.equals(point2));
console.log('point1 equals point3?', comparable1.equals(point3));
console.log('point1 compareTo point3:', comparable1.compareTo(point3));

// Example 3: Multiple views of the same object
console.log('\n=== Example 3: Multiple views ===');

const data = { id: 1, content: 'Hello World' };

// Same object, different behavioral views
const serializableView = createTraitView(data, Serializable);
const comparableView = createTraitView(data, Comparable);

console.log('Serializable view:', serializableView.toJSON());
console.log('Can compare with another object:', 
  comparableView.equals({ id: 1, content: 'Hello World' }));

console.log('\n=== Key Benefits ===');
console.log('✓ Original objects remain unchanged');
console.log('✓ No inheritance required');
console.log('✓ Behaviors can be mixed and matched');
console.log('✓ Clear separation of concerns');
