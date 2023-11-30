
# npx
npx playwright test --project=demo-todo-app --workers=1 --headed

# Gitlab
trigger a pipline  from another projects pipeline
https://docs.gitlab.com/ee/ci/triggers/#when-used-with-multi-project-pipelines

yml .env variable handling
https://docs.gitlab.com/ee/ci/triggers/#when-used-with-multi-project-pipelines


# 2FA workflow
https://www.checklyhq.com/blog/how-to-bypass-totp-based-2fa-login-flows-with-playwright/

# pass github secrets within github workflow / acion
run: PASSWORD=${{secrets.PASSWORD}} USER=${{secrets.TEST}} npx playwright test login 

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