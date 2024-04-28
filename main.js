let data =[
    {
        title: "product 1",
        description: "Product 1 description",
        price: 30
    },
    {
        title: "product 2",
        description: "Product 2 description",
        price: 100
    },
    {
        title: "product 3",
        description: "Product 3 description",
        price: 45
    },
    {
        title: "product 4",
        description: "Product 4 description",
        price: 10
    },
];

let text = prompt("search about.....");

let res = data.filter(function(item){
        if(item.title.includes(text)){
            return item;
        }
        console.log(`title : ${item.title}`)
})
for(item of res){
    document.write(`title: ${item.title} <hr>`)
    document.write(`description: ${item.description}<hr>`)
    document.write(`price: ${item.price}<hr>`)

}