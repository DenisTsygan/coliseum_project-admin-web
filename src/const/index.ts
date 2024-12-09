import IRole from "@/types/IRole";
import ISession from "@/types/ISession";
import IUser from "@/types/IUser";

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

export const TEST_ROLES:Array<IRole> = [
  {
    id: 1,
    name: "Admin",
    permissions: [
        {
            id: 1,
            name: "ADD_ACCOUNTANT"
        },
        {
            id: 4,
            name: "WATCH_SESSIONS"
        }
    ]
},
{
  id: 2,
  name: "Accountant",
  permissions: [
      {
          id: 2,
          name: "WATCH_DATA"
      },
      {
          id: 3,
          name: "SEND_NOTIFICATION"
      }
  ]
}
]

export const TEST_USERS:Array<IUser> = [
  {
      id: "00000000-0000-0000-0000-000000000001",
      userName: "admin",
      email: "admin",
      roles: [
          {
              id: 1,
              name: "Admin",
              permissions: [
                  {
                      id: 1,
                      name: "ADD_ACCOUNTANT"
                  },
                  {
                      id: 4,
                      name: "WATCH_SESSIONS"
                  }
              ]
          }
      ]
  },
  {
      id: "275da6dc-90ed-487b-b270-4fe6c57ce79a",
      userName: "gwrgwg",
      email: "wqrqwrqwr",
      roles: [
          {
              id: 1,
              name: "Admin",
              permissions: [
                  {
                      id: 1,
                      name: "ADD_ACCOUNTANT"
                  },
                  {
                      id: 4,
                      name: "WATCH_SESSIONS"
                  }
              ]
          }
      ]
  },
  {
      id: "e1dd880a-4561-48f7-827b-0ec3096bfbdc",
      userName: "haha",
      email: "lol",
      roles: [
          {
              id: 2,
              name: "Accountant",
              permissions: [
                  {
                      id: 2,
                      name: "WATCH_DATA"
                  },
                  {
                      id: 3,
                      name: "SEND_NOTIFICATION"
                  }
              ]
          }
      ]
  }
]
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
