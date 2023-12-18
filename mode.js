    //ilk once queriyselectorla biz bodini secirik sebeb
    //ise uzerinde emeliyatlar aparmagimiz ucun
    let body = document.querySelector("body");
    console.log(body);
    
    //birinci once divi yaradiriq
    let div = document.createElement("div");
    //ikinci buttony yaradiriq
    let button = document.createElement("button");
    //ucuncu buttonun ic yazisin yaziriq
    button.innerText = "ADD";

    //dorduncu bodyye div ve button elementlerini append ederek elave edirik
    body.append(div, button);

    // burda ise radio elementlerini elave edirik
    const radioBtns = [
        { value: "kicikler ucun", },
        { value: "boyukler ucun", },
        { value: "yaslilar ucun", }
    ];

    
    function createRadioButtons(radio) {
        //buradaysa dovur yaradiriq
        radio.forEach(element1 => {
            let label = document.createElement("label");
            let input = document.createElement("input");
            input.setAttribute("value", element1.value);
            input.setAttribute("type", "radio");
            input.setAttribute("name", "people");
            label.innerText = input.value;
            //BURDA YARATDIGIMIZ DIVE label ve inputu elave edirik
            div.append(label, input);
        }

        );

    }
    
    // bu hissede ise funksiyani yaziriq ve 
    //add buttonuna klik etdikde consola cihmasi ucun funksiya yaziriq


    createRadioButtons(radioBtns);

    let radioBtn = document.querySelectorAll("input[name='people']");

    button.addEventListener("click",()=>{

    
    radioBtn.forEach(element=>{

            if (element.checked){
                console.log(element.value);
            }
        }
        );
    }
    );