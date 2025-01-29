//your JS code here. If required.
        let counter = 0;
        let element = document.getElementById('level');
        while(element.parentNode){
            counter++;
            element = element.parentNode;
            console.log(element);
        }
        alert("The level of the element is : "+counter);
