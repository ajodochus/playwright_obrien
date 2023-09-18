import { test, expect, type Page } from '@playwright/test';
import exp from 'constants';
const REPO = 'repo_for_playwright';
const USER = process.env.USER as string;
const PASSWORD = process.env.PASSWORD as string;

test('1', async ({ page, request }) => {

    const response1 = await request.delete(`/repos/${USER}/${REPO}`);
    if(response1.ok()){
      console.log("repo deleted");
    } else {
      console.log("repo does not exist");
    }
  });

  test('2 @create_repo', async ({ page, request }) => {
    // Create a new repository
    const response = await request.post('/user/repos', {
      data: {
        name: REPO
      }
    });
    expect(response.ok()).toBeTruthy();
  });

  test('3', async ({ page, request }) => {
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
      data: {
        title: '[Bug] report 1',
        body: 'Bug description',
      }
    });
    expect(newIssue.ok()).toBeTruthy();
  });

  test('4', async ({ page, request }) => {
    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
      title: '[Bug] report 1',
      body: 'Bug description'
    }));
  });








