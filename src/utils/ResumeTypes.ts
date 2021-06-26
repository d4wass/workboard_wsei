export type Comments = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

export type Users = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}


export type CombineArrayType = {
    userName: string,
    userId: number,
    posts: WorkDataType[]
}

export type WorkDataType = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}
