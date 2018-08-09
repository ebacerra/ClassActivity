var object = {
    address: {
        street: {
            number: 123,
            name: "Elm Street",
            subdivision: {
                name: "Nightmares Only",
                board: {
                    members: [
                        "Freddy", "Jason", "Michael", "Jamie"
                    ]
                }
            }
        }
    }
}
console.log(address.street.subdivision.board.[0].members[3]);

var object = {
    address: {
        street: {
            number: 123,
            name: "Elm Street",
            subdivision: {
                name: "Nightmares Only",
                board: {
                    members: [
                        "Freddy", "Jason", "Michael", "Jamie"
                    ]
                }
            }
        }
    },
    homes: [
        {
            type: "Mansion",
            contractors: [
                {
                    name: "Joan Plumbing Co."
                },
                {
                    name: "Suzanne Electic Boutique"
                },
            ]
        }
    ]
}
console.log(object.home[0].contractors[1].name);