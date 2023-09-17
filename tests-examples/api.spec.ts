import { test, expect, type Page } from '@playwright/test';
var randomstring = require("randomstring");
const REPO = 'test';
const USER = 'ajodochus';

test('should create a bug report', async ({ request }) => {
  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
    data: {
      title: randomstring.generate(5),
      body: 'Bug ' + randomstring.generate(3),
    }
  });
  expect(newIssue.ok()).toBeTruthy();

  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
  expect(issues.ok()).toBeTruthy();
  expect(await issues.json()).toContainEqual(expect.objectContaining({
    title: '[Bug] report 1',
    body: 'Bug description'
  }));
});