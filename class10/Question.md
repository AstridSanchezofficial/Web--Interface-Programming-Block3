#Part 6 — Reflection Questions
Answer these briefly.

1. What problem do prototypes solve?
- They prevent duplication of methods and save memory by sharing behavior between objects.

2. What is the difference between an own property and a prototype method?
- An wn property exists inside of the object while a prototype method is shared among all instances

3. Where does JavaScript look if a method is not found directly on an object?
- JavaScript looks in the object's prototype.

4. Why is book1.displayInfo === book2.displayInfo useful evidence?
- It proves that both objects share the same method from the prototype instead of having separate copies.

5. What happened when you changed book1.category?
- It created/overrode the category property only inside book1.

6. Why is it better to put shared behavior on the prototype instead of inside every object?
- Because it avoids duplicating methods in every object and saves memory.
- Because shared behavior only needs to exist once in memory.