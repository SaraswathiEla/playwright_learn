const {test,expect}=require('@playwright/test')

test('Test1@sanity',async({page})=>
{
    console.log("This is my test1")
})


test('Test2@sanity',async({page})=>
{
    console.log("This is my test2")
})


test('Test3@reg',async({page})=>
{
    console.log("This is my test3")
})


test('Test4@reg@sanity',async({page})=>
{
    console.log("This is my test4")
})


test('Test5@sanity@reg',async({page})=>
{
    console.log("This is my test5")
})