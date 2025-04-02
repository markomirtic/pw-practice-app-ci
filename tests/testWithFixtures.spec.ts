import{test} from '../test-options'
import {faker} from '@faker-js/faker'
import { patch } from '@nebular/theme'


test('parametrized methods',async({pageManager})=>{
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`

    await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME,process.env.PASSWORD,'Option 2')
    await pageManager.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckBox(randomFullName,randomEmail,false)
})