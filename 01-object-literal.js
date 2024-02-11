
        var userOne ={
            email:"user1@gmail.com", 
            name: "User One", 
            login(){
                console.log(this.email, "has logged in");
            },
            logout(){
                console.log(this.email,'has logged out');
            }
        };

        console.log(userOne.name)