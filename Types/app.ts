enum Administration {ADMIN = 1, READ_ONLY, Authors}

let an_enum = {
    role: Administration.ADMIN
}

enum UserResponse {
    //Numeric enums
    No = 0,
    Yes = 1,
  }
   
  function respond(recipient: string, message: UserResponse): void {
    // ...
  }
   
  respond("Princess Caroline", UserResponse.Yes);


export {}