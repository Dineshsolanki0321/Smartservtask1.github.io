let url = 'https://s3.amazonaws.com/open-to-cors/assignment.json';
let propularity = []

fetch(url).then(res => {
    return res.json();
    // console.log(res);
})
.then(data => {
    // this.products = data
    console.log('data',data)
    let test = Object.values(data['products'])
    let test2 = Object.values(data['products'])
    // console.log(products[1], data['products'])
    console.log('test',test)
    // console.log('test2',test2)
    displayData(test)
    for (let product of Object.values(data['products'])){
        popularity.push(parseInt(product['popularity']))
        // console.log(product['popularity'])
    }
    console.log(popularity)
    // for(let product of products){
    //     console.log('product', product)
    // }

})

function displayData(products){
    var $table  =  $('<table></table>');
    var $tr1 =  $('<tr></tr>');
    var $th1 = $('<th>subcategory</th>');
    var $th2 = $('<th>title</th>');
    var $th3 = $('<th>price</th>');
    var $th4 = $('<th>propularity</th>');
    $tr1.append($th1,$th2,$th3,$th4);
    $table.append($tr1)
    for(let product of products)
    {
        // console.log('jquery',product['subcategory'])
        // console.log("received broadcast: " + msg + ", " + msg.data[i]);
        var $tr2 =  $('<tr></tr>');
        var $td1 =  $('<td></td>');
        var $td2 =  $('<td></td>');
        var $td3 =  $('<td></td>');
        var $td4 =  $('<td></td>');
        $td1.append(product['subcategory'])
        $td2.append(product['title'])
        $td3.append(product['price'])
        $td4.append(product['popularity']);
        $tr2.append($td1,$td2,$td3,$td4);
        $table.append($tr2);
    }

    $('div#target').empty().append($table);
}

