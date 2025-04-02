import{test,expect} from '@playwright/test'
import { timeout } from 'rxjs/operators'

test.beforeEach(async({page},testInfo)=>{
    await page.goto(process.env.URL)
    await page.getByText('Button Triggering AJAX Request').click()
    testInfo.setTimeout(testInfo.timeout + 2000)
})

test('auto waiting',{tag: ['@regression']}, async({page})=>{
    const sucessButton = page.locator('.bg-success')

    await sucessButton.click()

     const textContent = await sucessButton.textContent()
    await sucessButton.waitFor({state: "attached"})
     const text = await sucessButton.allTextContents()


    expect(text).toContain('Data loaded with AJAX get request.')

     await expect(sucessButton).toHaveText('Data loaded with AJAX get request.',{timeout: 20000})

})

test.skip('alternative waits', async({page})=>{
    const sucessButton = page.locator('.bg-success')

    //__ wait for element
    //await page.waitForSelector('.bg-success')

    //__ wait for particular response
   // await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    // __ wait for network calls to be completed('NOT RECOMMENDED')
       // await page.waitForLoadState('networkidle')

   

    const text = await sucessButton.allTextContents()
     expect(text).toContain('Data loaded with AJAX get request.')
})

test.skip('timeouts',async({page})=>{
    test.setTimeout(10000)
    test.slow()
    const sucessButton = page.locator('.bg-success')
    await sucessButton.click()

})