var updateItemSubtotal = function (price, quantity) {
    var itemPrice = Number(price.text().replace(/\$/,""));
    var quantity = Number(quantity.val());

    var subtotal = itemPrice * quantity;

    return subtotal;
  }

var updateTotalPrice = function () {

  var quantity = $('.quantity');
  var prices = $('.item-price');
  var total = 0;

  for (i=0; i<quantity.length; i++) {

    var subtotal = updateItemSubtotal($(prices[i]), $(quantity[i]));

    if (subtotal != 0) {
      $($('.item-subtotal')[i]).text("$" + subtotal);
    } else {
      $($('.item-subtotal')[i]).text("$--.--");
    }
    total += subtotal
  }

  $('#total-price').text("$ " + total);
  return total;

}

var addItem = function(name,cost) {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  $('#item-list').prepend('<div class="row item"> \
    <div class="item-name col-xs-3"> \ ' +  name + '\
    </div> \
    <div class="item-price col-xs-3"> \
      $' + cost + '.00 \
    </div> \
    <div class="item-qty col-xs-3"> \
      <label>QTY</label> \
      <input class="quantity" type="number"> \
    </div> \
    <div class="col-xs-1"> \
      <button class="remove"> \
        Remove \
      </button> \
    </div> \
    <div class="item-subtotal col-xs-2"> \
    $--.-- \
    </div> \
  </div>');
}


 $(document).on('keyup', '.quantity', function(){
   updateTotalPrice();
 });

 $(document).on('click', '#add', function() {
   addItem($('#name').val(), $('#cost').val());
 });
