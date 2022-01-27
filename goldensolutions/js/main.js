function showPassword() {
          var a = document.getElementById("inputPassword");
          var b = document.getElementById("toggle");
          if (a.type == "password") {
                    a.type = "text";
                    b.src = "./img/senha aberta.png";
          } else {
                    a.type = "password";
                    b.src = "./img/mostrat senha.png";
          }
}