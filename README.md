## Candidate Andres Ferrero

Here are the instructions to deploy the project locally and some comments about what i did to accomplish what is implemented.

I added a custom script to package.json named `dev-start`, launch it with `yarn dev-start` or `npm run dev-start` after deploying the <b>Mock-API</b>

First of all, i wanted to do a solid setup for you to see what i tend to use in a daily basis. From the most important aspects of it i can highlight:

- Eslint
- Prettier
- Airbnb linting rules
- Custom linting rules
- lint-staged
- Husky
- Customize create react app

Most of those are to guarantee code quality before pushing into repositories and accomplish homogeneity between implementations in teams, preventing conflicts on merges, etc.

I used customize-cra to not have the need to use relative routes on imports, having the symbol `~` representing the `src` folder

##Now, to the main course.

I cloned the technical test repo you provided and started to develop atop of it, changing its url origin to a new repo of mine in github, which i guess you'd be checking right now. You can watch the commits and merges on the repo to check the workflow i followed. I could've been a little more thorough with it but preferred to focus on the layout and implementation.

Having React not being a framework but instead a library leaves a lot of ground for teams to plow regarding folder organization, deciding where to do the async calls, etc.

What i propose in here is that every component should have its own folder containing the login it needs in an index file and a styles file containing the styles implemented with `styled-components`

There's also a pages folder containing more complex components that represent major Views, associated with routes. Each of those can have a components folder containing components only common for them.

I used redux-saga because i consider it to be a very potent tool, allowing you to isolate async calls and logic that you want to do in between. Preserving redux philosophy (having actions be pure) and leave reducers having the less logic possible.

## Further comments

I'm aware that the route /program/:id is a lacking a bit on design, but i felt that the home view was more than enough to prove the skills required for the test.

I'm delaying the data load into redux state to be able to showcase the loader/spinner i added ;)

I'm available for any questions regarding the tech used, the approach and/or the mindset between all implemented.