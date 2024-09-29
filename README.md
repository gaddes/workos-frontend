# My Notes

use vite to create the project
pros - simple & blazing fast, allows me to pick & choose exactly what dependencies to use e.g. react-router for 
client-side navigation, RTK Query for data fetching, etc.
cons - takes a little longer to set up vs. something more fully-featured like remix or next

What would I do differently next time? Use Remix - I like their focus on web fundamentals and the fact that 
react-router is built-in. It would also allow us to render pages on the server, if we decide that's optimal for 
performance or SEO reasons.

Set default route to `/admin` - this gives us flexibility to change the homepage as needed in future. Maybe add a 
dashboard or similar. This particular table looks more like it belongs on an admin or settings page.

Use RTK Query for its features such as: built-in caching, ability to transform payloads, handling of loading/error
states, etc. In future could use whatever our chosen framework provides, e.g. loaders/actions with Remix.

# Ideas for Improvements

- Make root route a dashboard - move existing table to an `/admin` route
- In Users table, be more resilient to user name i.e. what if user doesn't have both a first/last name?
- Add timezone to rows in Users table
- Order table rows by name, role, date, etc.
- Filter pills for name, role, etc.
- Add local timestamp to users table (e.g. PST)
- Debounce search input
- Improve styling of "error" (Radix UI Toast primitive) and "no matching search results" messages
- Why do Radix buttons not have `cursor: pointer` by default? Could fix this!
- Both Search and TableFooter components assume that the data they receive has a certain structure, i.e. a `pages` 
  property for the prev/next buttons, and that all endpoints use the `search` key for queries. 
- TableFooter could be extended with a "slot" for other components e.g. total row count.