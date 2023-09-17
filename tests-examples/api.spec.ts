import { test, expect, type Page } from '@playwright/test';
const REPO = 'repo_for_playwright';
const USER = 'ajodochus';

test('API test', async ({ page, request }) => {
  await test.step(`delete repo if exists `, async () => {
    const response1 = await request.delete(`/repos/${USER}/${REPO}`);
    if(response1.ok()){
      console.log("repo deleted");
    } else {
      console.log("repo does not exist");
    }
  });

  await test.step(`Create github item with api `, async () => {
    // Create a new repository
    const response = await request.post('/user/repos', {
      data: {
        name: REPO
      }
    });
    expect(response.ok()).toBeTruthy();
  });


  await test.step(`Create github bug item with api `, async () => {
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
      data: {
        title: '[Bug] report 1',
        body: 'Bug description',
      }
    });
    expect(newIssue.ok()).toBeTruthy();
  });

  await test.step(`check github item with api `, async () => {
    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
      title: '[Bug] report 1',
      body: 'Bug description'
    }));
  });

  await test.step(`check github item with api `, async () => {

  });

});



