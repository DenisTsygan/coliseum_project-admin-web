import ISession from "@/types/ISession";

//err
//export const ERR_NETWORK = "ERR_NETWORK"

export const FINGERPRINT = "123123123tests"
//localstorage
export const LS_KEY_ACCESS_TOKEN ="access_token"
export const LS_KEY_NEXT_PAGE_LOGIN ="next_page"

//navigation
export const NAVIGATE_ROUTE_SESSIONS:NAVIGATE_ROUTES = "sessions" 
export const NAVIGATE_ROUTE_USERS:NAVIGATE_ROUTES = "users" 
export const NAVIGATE_ROUTE_LOGIN:NAVIGATE_ROUTES = "login" 
export type NAVIGATE_ROUTES = "sessions" | "users"|"login" 


export const TEST_SESSIONS:Array<ISession> = [{
    id: "0ee18bce-123-4a7d-9400-das",
    refreshToken: "1872471c-59f2-483f-b48b-f5a084dca890",
    fingerPrint: "loploplop",
    ip:"::1",
    userAgent:"PostmanRuntime/7.43.0",
    expiresIn:new Date(),
    user:{
      id:"e1dd880a-4561-48f7-827b-0ec3096bfbdc",
      email:"lol",
      userName:"haha",
      roles:[{
        id: 1,
        name:"Accountant",
        permissions: [{
          id: 2,
          name:"rool"
        },
        ]
      }]
    }
  },
  {
    id: "fofro-7bd8-4a7d-9400-ea6f92f3a908",
    refreshToken: "1872471c-59f2-483f-b48b-f5a084dca890",
    fingerPrint: "loploplop",
    ip:"::1",
    userAgent:"PostmanRuntime/7.43.0",
    expiresIn:new Date(),
    user:{
      id:"e1dd880a-4561-48f7-827b-fw",
      email:"lol",
      userName:"haha",
      roles:[{
        id: 1,
        name:"Accountant",
        permissions: [{
          id: 2,
          name:"rool"
        },
        ]
      }]
    }
  },
  {
    id: "0ee18bce-7bd8-4a7d-9400-ea6f92f3a908",
    refreshToken: "1872471c-rwqe-483f-b48b-f5a084dca890",
    fingerPrint: "loploplop",
    ip:"::1",
    userAgent:"PostmanRuntime/7.43.0",
    expiresIn:new Date(),
    user:{
      id:"e1dd880a-4561-ewq-827b-0ec3096bfbdc",
      email:"lol",
      userName:"haha",
      roles:[{
        id: 1,
        name:"Accountant",
        permissions: [{
          id: 2,
          name:"rool"
        },
        ]
      }]
    }
  }];
