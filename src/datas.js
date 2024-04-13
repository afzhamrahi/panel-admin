let xAxisData = [
    {
        "name": "Jan",
        "sale": 112_000
    },
    {
        "name": "Feb",
        "sale": 99_000
    },
    {
        "name": "Mar",
        "sale": 12_090
    },
    {
        "name": "Apr",
        "sale": 99_000
    },
    {
        "name": "May",
        "sale": 54_000
    },
    {
        "name": "Jun",
        "sale": 85_000
    },
    {
        "name": "Jul",
        "sale": 34_000
    },
    {
        "name": "Agu",
        "sale": 118_000
    },
    {
        "name": "Sep",
        "sale": 0
    },
    {
        "name": "Oct",
        "sale": 65_000
    },
    {
        "name": "Nov",
        "sale": 112_900
    },
    {
        "name": "Dev",
        "sale": 74_000
    },
]

let newMembers = [
    {
        id: 1,
        username: 'Amir Vali',
        title: "Front End Dev",
        img: "./logo192.png"
    },
    {
        id: 2,
        username: 'Ali Ahmadi',
        title: "Back End Dev",
        img: "logo192.png"
    },
    {
        id: 3,
        username: 'Haj Aliza',
        title: "Full Stak Dev",
        img: "logo192.png"
    },
    {
        id: 4,
        username: 'Ali Looper',
        title: "Full Stak Dev",
        img: "logo192.png"
    },
]

let transactions = [
    {
        id: 1,
        customer: 'Amir Vali',
        date: "12 Jun 2022",
        amount: 122,
        status: "Declined",
        img: "favicon.ico"
    },
    {
        id: 2,
        customer: 'Ali Ahmadi',
        date: "28 May 2022",
        amount: 182,
        status: "Pending",
        img: "favicon.ico"
    },
    {
        id: 3,
        customer: 'Haj Aliza',
        date: "1 Feb 2022",
        amount: 199,
        status: "Approved",
        img: "favicon.ico"
    },
    {
        id: 4,
        customer: 'Ali Looper',
        date: "22 Nov 2022",
        amount: 300,
        status: "Declined",
        img: "./favicon.ico"
    },
]
let userRows = [
    {
        id: 1,
        username: 'Amir Vali',
        email: 'AmirVali@gmail.com',
        transaction: '300$',
        status: "active",
        avatar: "favicon.ico"
    },
    {
        id: 2,
        username: 'Ali Ahmadi',
        email: 'AliAhmadi@gmail.com',
        transaction: '28$',
        status: "active",
        avatar: "favicon.ico"
    },
    {
        id: 3,
        username: 'Haj Aliza',
        email: 'HajAliza@gmail.com',
        transaction: '208.02$',
        status: "active",
        avatar: "favicon.ico"
    },
    {
        id: 4,
        username: 'Ali Looper',
        email: 'AliLooper@gmail.com',
        transaction: '188$',
        status: "active",
        avatar: "./favicon.ico"
    },
    {
        id: 5,
        username: 'Ali Looper',
        email: 'AliLooper@gmail.com',
        transaction: '188$',
        status: "active",
        avatar: "./favicon.ico"
    },
    {
        id: 6,
        username: 'Ali Looper',
        email: 'AliLooper@gmail.com',
        transaction: '188$',
        status: "active",
        avatar: "./favicon.ico"
    },
]
let products=[
    {
        id: 1,
        title: 'Asus',
        price: '300$',
        avatar: "favicon.ico"
    },
    {
        id: 2,
        title: 'Dell',
        price: '28$',
        avatar: "favicon.ico"
    },
    {
        id: 3,
        title: 'Hp',
        price: '208.02$',
        avatar: "favicon.ico"
    },
    {
        id: 4,
        title: 'Lenova',
        price: '188$',
        avatar: "./favicon.ico"
    },
]


export { newMembers, transactions, xAxisData ,userRows,products};
