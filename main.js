           const myButton = document.querySelector('button');
            const myHeading = document.querySelector('h2');

            const setUsername = () =>{
                const myName = prompt('Masukan Nama Anda :');
                if(!myName){
                    setUsername()
                }else{
                    localStorage.setItem('nama',myName);
                    myHeading.textContent( 'Programmer Itu Mudah :' + myName);
                }
                
            }


            if(!localStorage.getItem('name')){
                setUsername()
            }else{
                let Name = localStorage.getItem('name')
                myHeading.innerHTML = 'Programmer Itu mudah :' + Name;
            }




            myButton.onclick = () =>{
                setUsername()
            }
