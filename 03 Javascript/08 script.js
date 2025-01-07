console.log("Hello");
            let a = document.getElementsByClassName("box");
            console.log(a);

            function getRandomColor() {
                const letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

            document.body.style.backgroundColor = getRandomColor();

            document.getElementById("1").style.backgroundColor = getRandomColor();

            document.getElementById("1").style.backgroundColor =getRandomColor();

            document.getElementById("2").style.backgroundColor = getRandomColor();

            document.getElementById("3").style.backgroundColor = getRandomColor();

            document.getElementById("4").style.backgroundColor = getRandomColor();
