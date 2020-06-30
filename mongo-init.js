db.createUser(
    {
        user: "userdb",
        pwd: "passdb",
        roles: [
            {
                role: "readWrite",
                db: "mydb"
            }
        ]
    }
);