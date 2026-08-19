const user1 = {
    name: 'meer',
    showName() {
        console.log(this.name)
    }
}

const user2 = {
    name: 'alex'
}

user2.showName = user1.showName

user2.showName()