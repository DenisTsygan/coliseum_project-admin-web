import ISession from "@/types/ISession";

//err
export const ERR_NETWORK = "ERR_NETWORK"

//localstorage
export const LS_KEY_ACCESS_TOKEN ="access_token"

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
