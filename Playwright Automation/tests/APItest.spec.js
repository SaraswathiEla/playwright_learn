import {test,expect} from '@playwright/test';
import { request } from 'http';

var userid;

test('Get users',async ({request})=>
{
  const response=  await request.get('https://reqres.in/api/users?page=2')
  console.log(await response.json())
  expect(response.status()).toBe(200)
})

test('Create users',async ({request})=>
{
   const response= await request.post('https://reqres.in/api/users',
                        {
                                    data:{"name": "pavan", "job":"trainer"},
                                    headers:
                                    {"Accept":"application/json",
                                        "x-api-key": "reqres-free-v1"

                                    }
                        });
                        console.log(await response.json())
                         var res=await response.json()
                        userid=res.id;
                        console.log(userid)
            expect(response.status()).toBe(201)
            

                        

})

test('Update users',async ({request})=>
{
    const response= await request.put('https://reqres.in/api/users/'+userid,
                        {
                                    data:{"name": "Byron", "job":"sara QA"},
                                    headers:{"Accept":"application/json",
                                        "x-api-key": "reqres-free-v1"

                                    }
                        });
                        console.log(await response.json())
                    expect(response.status()).toBe(200)

                        
                        


})

test('Delete users',async ({request})=>
{
 const response=await request.delete('https://reqres.in/api/users/'+userid,
                                        {
                                    headers:{"Accept":"application/json",
                                        "x-api-key": "reqres-free-v1"

                                    }
                                }

 )

 expect(await response.status()).toBe(204)
})