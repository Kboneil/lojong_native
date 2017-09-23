# Lojong Slogans

* This might be an option for daily slogan: [system notification](https://www.npmjs.com/package/react-native-system-notification)

### Data Model
```ts
Slogans: {
    $slogan: {
        category: $category,
        subcategory: $subcategory,
        number: number,
        sloganText: string,
        subtext: string
    },
},
Categories: {
    $category: {
        number: number,
        categoryText: string,
    },
},
Subcategories: {
    $subcategory: {
        subcategoryText: string,
    },
},
Users: {
    $user: {
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        isRandom: boolean,
        frequency: number,
        isNotified: boolean,
        notificationTime: string,
        notificationIsRepeated: boolean,
        notificationCount: number,
        //maybe these two should be pulled out?
    }
}
UserSlogans: {
        pastSlogans: {
            $slogan: string,
            time: string
        }
        upcomingSlogans: {
            $slogan: $slogan,
        },
        comments: {
            $slogan: {
                $comment: {
                    commentText: string,
                    time: string
                }
            }
        } 
}
```

### This will be the Application State...

```ts
enum Frequency {
    DAILY, EVERY_OTHER, EVERY_THIRD, WEEKLY
}

interface IApplicationStore {
    authorizationStore: IAuthorizationStore;
    sloganStore: ISloganStore;
}

IAutorizationStore {
    user: IUser;
    startAuthListener(): void;
    SignUp(email: string, password: string): IResponse;
    Login(email: string, password: string): IResponse;
    Logout(): void;
}

interface ISloganStore {
    getOrderedSlogans: ISlogan[];
    getRandomSlogans: ISlogan[];
    getUserSlogans: ISlogan[];
    getSloganById: ISlogan;
}

interface IUser {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    isRandom: boolean;
    frequency: number;
    isNotified: boolean;
    notificationTime: string;
    notificationIsRepeated: boolean;
    notificationCount: number;
    pastSlogans: IPastSlogan[]
    upcomingSlogans: string[],
    comments: IComment[] 

    edit(editUser: IEditUser): void;
    notify(): void;
    getSloganOfTheDay(): void;
}

interface IEditUser {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    isRandom: boolean;
    frequency: number;
    isNotified: boolean;
    notificationTime: string;
    notificationIsRepeated: boolean;
    notificationCount: number;
}

interface ISlogan {
    id: string;
    category: string;
    subcategory: string;
    number: number;
    sloganText: string;
    subtext: string;
    comments: IComment

    comment(): void;
    practice(): void;
}

interface IComment {
    id: string;
    commentText: string;
    time: number;

    edit(): void;
    delete(): void;
}

interface ICategory {
    id: string;
    number: number;
    categoryText: string;
}

interface ISubcategory {
    id: string;
    subcategoryText: string;
}

interface IPastSlogan {
    sloganId: string,
    time: string
}

```
