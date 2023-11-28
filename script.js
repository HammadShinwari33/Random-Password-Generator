
let password = document.getElementById("password");

        function genPassword(){
            let chars = "0123456789abcdefghijklomnpqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let passwordLength = 9;

            let password = "";

            for(i = 0; i <= passwordLength; i++){
                let randomNumber = Math.floor(Math.random() * chars.length);
                password += chars.substring(randomNumber, randomNumber +1);
            }

        document.getElementById("password").value = password;

        }

        function copyPassword(){
            let copyText = document.getElementById("password");
            copyText.select();
            copyText.getSelectionRange(0,999);
            document.execCommand("copy");

        }