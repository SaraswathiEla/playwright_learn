//const {test.expect}=require('@playwright/test');
//or
import {test,expect} from '@playwright/test';


test.beforeAll(async()=>
{
    console.log('this is beforeAll hooks.........')
})

test.afterAll(async()=>{
console.log('this is afterall hooks..........')
})

test.beforeEach(async()=>
{
    console.log('this is beforeEach hooks.........')
})

test.afterEach(async()=>{
console.log('this is afterEach  hooks.............')
})

test.describe.skip('Group1',()=>
{

    test ('test1',async({page})=>
{
    console.log('this is test1...')
})
test ('test2',async({page})=>
{
    console.log('this is test2...')
})

})


test.describe('Group2',()=>
{
       test ('test3',async({page})=>
    {
    console.log('this is test3...')
    })
    test ('test4',async({page})=>
    {
    console.log('this is test4..')
    })
})


