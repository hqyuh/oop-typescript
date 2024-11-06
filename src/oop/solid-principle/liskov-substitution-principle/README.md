# L - Liskov Substitution

The Liskov substitution principle states that "objects of a superclass should be replaceable by objects of a subclass without affecting the correctness of the program".

## Advantages

- It ensures correct sub-hierarchy with relevant checks
- It becomes easy to extend new classes
- The maintainability of code becomes very easy
- There shall be no runtime surprises in the application

## Disadvantages

- Sometimes we need to update base class in order to support new extension
- You may need to refactor a lot of things
- Cost of refactor
