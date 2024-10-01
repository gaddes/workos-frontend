# Summary

Hello! Thank you for taking the time to review my code. Please see a few notes and screen recordings below.

## Tech stack

- **Vite dev server** - Simple & fast, I can pick exactly which dependencies to use e.g. react-router for client-side navigation, RTK Query for data fetching, etc. The downside is that it takes a little longer to set up vs. a more fully-featured framework like Remix or Next.

- **React Router** - The gold standard for client-side routing. The latest version even contains patterns for data fetching & mutations, taken from Remix. I opted to use RTK Query instead, partly due to familiarity, but also due to powerful features such as the ability to combining multiple payloads and transform the shape of data in one place.

- **Radix UI** - I hadn't used Radix prior to this but thought I'd give it a go, since it's used at WorkOS. Really enjoyed it, beautifully designed components and a really well thought out developer experience. Minimal setup needed vs. something like Material UI or Ant Design.

- **React Testing Library w/ vitest** - Allows us to "test like a user" and encourages accessibility through the use of matchers such as `getByRole` and `.toBeVisible()`. Given more time I would add even more comprehensive tests.

- **Formik w/ yup** - Forms and client-side validation.

## Given more time I would...

1. Consider choosing a framework such as Remix. I like their focus on web fundamentals and the fact that react-router is built-in. It would also allow us to render pages on the server, if we decide that's optimal for performance or SEO reasons.

2. Add a homepage or dashboard! Currently if we land on the root route, we redirect immediately to `/users`. However these tables seem better suited to an admin or settings page.

## Ideas for improvements

1. Add timezone to rows in Users table (e.g. PST)
2. Order table rows by name, role, date, etc.
3. Add filter pills for name, role, etc.
4. Debounce search input
5. Improve styling of toast messages and empty states
6. In Users table, be more resilient to user name i.e. what if user doesn't have both a first/last name?
7. Unsure why Radix UI buttons don't have `cursor: pointer` by default? Not sure if this is an intentional pattern, but we might want to change/enforce this by adding a bit of CSS.
8. Both `Search` and `TableFooter` components assume that the data they receive has a certain structure, i.e. a `pages` property for the prev/next buttons, and that all endpoints use the `search` key for queries.
9. `TableFooter` could be extended with a "slot" for other components e.g. total row count.
10. All button text in Figma appears bold - make common `Button` component to enforce this.
11. Add more comprehensive tests: test error toasts, user clicking menu item, etc. (see `@testing-library/user-event`)

# Screen Recordings

## Users (w/ search, pagination & delete)

https://github.com/user-attachments/assets/0adb38f6-8993-4410-8c76-9d83f1ae049a

## Roles (w/ search & edit)

https://github.com/user-attachments/assets/9c3d98dd-e914-4a51-b58f-caa54c34f289

## Error handling

https://github.com/user-attachments/assets/43a9ccd5-85ba-4b93-9450-46e8824c9779

## Keyboard navigation

https://github.com/user-attachments/assets/c1f2219e-c429-43d9-a564-7629171c0487
