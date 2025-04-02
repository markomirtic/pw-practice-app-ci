import{test,expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'
import {faker} from '@faker-js/faker'
import { patch } from '@nebular/theme'

test.beforeEach(async({page})=>{
    await page.goto('/')
})

test('navigate to form page',{tag: ['@test1']},async({page})=>{
   const pm = new PageManager(page)
   await pm.navigateTo().formLayoutsPage()
   await pm.navigateTo().datepickerPage()
   await pm.navigateTo().smartTablePage()
   await pm.navigateTo().toastrPage()
   await pm.navigateTo().tooltipPage()

})

test('parametrized methods @test2',async({page})=>{
    const pm = new PageManager(page)
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`

    await pm.navigateTo().formLayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME,process.env.PASSWORD,'Option 2')
    //await page.screenshot({path: 'screenshots/formLayoutsPage.png'})
    //const buffer = await page.screenshot()
    //console.log(buffer.toString('base64'))
    await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckBox(randomFullName,randomEmail,false)
    //await page.locator('nb-card',{hasText: "Inline form"}).screenshot({path: 'screenshots/InlineForm.png'})
    // await pm.navigateTo().datepickerPage()
    // await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(15)
    // await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6,15)
})