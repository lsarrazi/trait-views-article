/**
 * Example: CompleteTestTrait
 * 
 * This example demonstrates how to use trait views to expose
 * behavior for objects without modifying them or using inheritance.
 */

import { trait } from '../src/trait-views.js';

class CompleteTestTrait  {

    /*constructor(z: number) {
        console.log('z', z)
    }*/
  
    static from = trait(CompleteTestTrait, { stateful: true });

    public b? = 42;
    public c? = 42;

    observeA(): number { return 42; }
    observeA_FromTrait?() { return this.observeA(); }
    getObservableB?() { return this.b!; }
    mutateB?(v: number) { this.b = v; }
    mutateC?(v: number) { this.c = v; }
    observeC?() { return this.c; }

    get i() { return 42; }

    fakedByAGetter() {}
};

class ParentObj {
    get i () { return 1000 };
}

class Obj extends ParentObj  {
    public a = 1;
    public b = 10;


    observeA() { return this.a }
    getObjB() { return this.b }
    mutateB(v:number) { this.b = v; }

    tryhardObserveC(): number { return (this as any).c; }

    get fakedByAGetter() { return () => { return 1212; } }
}

const targetToMutate = new Obj
const completeTestTraitToMutate = CompleteTestTrait.from(targetToMutate) // Would need CompleteTestTrait.from(targetToMutate, z, h) if stateless was false and the constructor was uncommented

console.log(
    // Function binding
    new Obj().observeA(), // 1
    CompleteTestTrait.from(new Obj).observeA_FromTrait(), // 1
    
    // Getter binding
    new Obj().i, // 1000
    CompleteTestTrait.from(new Obj()).i, // 1000,

    // State independency
    new Obj().getObjB(), // 10
    CompleteTestTrait.from(new Obj).getObservableB(), // 42, or undefined if stateless

    // Fake trait
    new CompleteTestTrait().observeA(), // 42
    new CompleteTestTrait().observeA_FromTrait?.(), // 42
    new CompleteTestTrait().getObservableB?.(), // 42, because a fake trait is always stateful

    // Mutation and state independency
    (completeTestTraitToMutate.mutateB(666), targetToMutate.b), // 666, changed
    completeTestTraitToMutate.b, // 42, the mutation didn't affect b of the trait, as it is an independent state, (it is undefined if stateless)
    (targetToMutate.mutateB(999), targetToMutate.b), // 999, change successful
    (completeTestTraitToMutate.mutateC(666), completeTestTraitToMutate.c), // 666, changed the independent state of the trait "completeTestTraitToMutate"
    // in stateless mode, the last line would have thrown "Cannot add property c, object is not extensible"
    targetToMutate.tryhardObserveC(), // undefined

    
    // Getter on the object faking a trait function
    CompleteTestTrait.from(new Obj).fakedByAGetter() // 1212

)
