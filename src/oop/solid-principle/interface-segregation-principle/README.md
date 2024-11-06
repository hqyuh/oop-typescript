# I - Interface segregation

No class should be forced to implement interfaces or methods that it will not use.

## Advantages

- It ensures correct sub-hierarchy with relevant checks
- It becomes easy to extend new classes
- The maintainability of code becomes very easy
- There shall be no runtime surprises in the application

## Disadvantages

- Sometimes we need to update base class in order to support new extension
- You may need to refactor a lot of things
- Cost of refactor
