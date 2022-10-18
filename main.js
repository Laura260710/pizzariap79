menuListArray = ["Pizza Vegetariana","Pizza de calabresa", "Pizza de carne", "Pizza de milho", "Pizza de frango"
                    ];

function getMenu(){
var htmldata=" ";
menuListArray.sort();
for(var i=0;i<menuListArray.length; i++){
    htmldata=htmldata+imgtags +menuListArray [i] + '<br>';
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;

}

function addItem(){
var htmldata;
var imgtags= '<img id="img1" src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/pizza-png-fundo-transparente19.png?fit=696%2C432&ssl=1"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=" "
for(var i=0;i<menuListArray.length; i++){
    htmldata=htmldata+imgtags +menuListArray [i] + '<br>';
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;

}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}