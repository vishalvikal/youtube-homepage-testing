import {test, expect} from '@playwright/test'
//It is a simple youtube logo testing
test.only('Youtube Home Page testing', async({page}) =>{
    await page.goto('https://www.youtube.com/')
    await expect(page.getByRole('link', { name: 'YouTube Home' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();
  await expect(page.getByLabel('Search with your voice')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Home', exact: true })).toBeVisible();
  await expect(page.getByText('Shorts Shorts')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Subscriptions' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'You', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'History' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Home', exact: true })).toBeVisible();
    
    await page.pause()

    


})