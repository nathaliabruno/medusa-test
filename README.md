# Nat Store - A Medusa test

### A simple storefront integrated using `medusa-react`

---
## How to use it

Clone the repository then run into your terminal

```yarn install && yarn dev```

> You should have the medusa server running into your computer and have set the `STORE_CORS="http://localhost:3000"`

---

## Answers
#### Time spent: 
Something around 5/6 hours

#### Most challenging: 
The implementation of the variant selector, which is not completely done yet, I am figuring out how to get the selected variant id between 2 or more options.
#### Most Proud:
I would start saying the documentation of `medusa-react` could be improved to help people who have never built something using the API to get speed quickly, with that said, I am proud of being able to build the store regardless the dificult to get the documentation - In that case, I was looking for the functions navigating through node_modules directory. 

#### About the structure: 
I kept the Next.JS starter structure and I can say that I have some regrets related to that. I think that the "components" folder by itself is too ambiguos when it helps to maintain the code. so, I would have created another structure, with modules, to have components by pages/general/etc. 