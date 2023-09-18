

# runs tests with script in pachage.json
npm run issues 

# runs github ui test to check if repo contains one closed item and uses storage state
# login has to be performed before 
# or
# dependencies: ['login'], hast to be set in playwright.config.ts
npx playwright test --project=issues --workers=1 --headed


# usefull
# random string package
npm install randomstring