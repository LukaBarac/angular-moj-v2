import { Injectable } from "@angular/core";

export interface User {
    id: number;
    email: string;
    password: string,
    date: Date,
    address?: string;
}

@Injectable()
export class UserService {

    currentUser: User = UserService.dummyUserList[0];

    static dummyUserList: Array<User> = [
        {
            id: 1,
            email: "korisnik@test.com",
            password: "123",
            date: new Date("2023-04-02 12:25")
        },
        {
            id: 2,
            email: "moderator@test.com",
            password: "12345",
            date: new Date("2023-23-01 10:45")
        }
    ]

    getuserName(user: User) : string {
        return user.email;
    }

    getUserById(id: number) : User {
        var foundUser!: User;
        UserService.dummyUserList.forEach(user => {
            if(user.id == id){
                foundUser = user;
            }
        });
        this.currentUser = foundUser;
        return foundUser;
    }

    getUser(userEmail: string) : User {
        //prva iteracija 
       /*  return UserService.dummyUserList.find(userToFind => 
            userToFind.email == userEmail  */
            this.currentUser = UserService.dummyUserList.find(userToFind => 
                userToFind.email == userEmail
        )!;
        return this.currentUser;
    }

    isPasswordCorrect(userEmail: string, password: string): boolean {
        return UserService.dummyUserList.find(userToFind => (
            userToFind.email == userEmail && userToFind.password == password
        )) != undefined;
    }

    registerUser(email: string, password: string, date: Date) : User {
        var maxId: number = 0;
        UserService.dummyUserList.forEach(user => {
            if(maxId < user.id){
                maxId = user.id
            }
        })
        var id = ++maxId;
        var user: User = {id, email, password, date};

        UserService.dummyUserList.push(user);
        
        this.currentUser = user;
        console.log(user);
        return user;
    }
}