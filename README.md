# Lojong Slogans

* This might be an option for daily slogan: [system notification](https://www.npmjs.com/package/react-native-system-notification)

# Data Model
```ts
Slogans: {
    $slogan: {
        category: $category,
        subategory: $subategory,
        number: number,
        sloganText: string,
        subtext: string
    },
},
SloganDetails: {
    $category: {
        number: number,
        title: string,
    },
    $subategory: {
        number: number,
        title: string,
    },
}
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
        pastSlogans: {
            $slogan: string,
            time: string
        }
        upcomingSlogans: {
            $slogan: $slogan,
        },
    }
}
comments: {
    $user: {
        $slogan: {
            $comment: {
                commentText: string,
                time: string
            }
        } 
    }
}
```

# This will be the Application State...

```ts
enum Frequency {
    DAILY, EVERY_OTHER, EVERY_THIRD, WEEKLY
}
```
