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

 $(document).on('keyup', '.quantity', function(){
   updateTotalPrice();
 });
