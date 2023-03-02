Shopify.Cart = Shopify.Cart || {};
    
      Shopify.Cart.InsuranceAddon = {};
    
      Shopify.Cart.InsuranceAddon.set = function() {
        var headers = new Headers({ 'Content-Type': 'application/json' });
    
        var request = {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({ updates: { {{ id }}: 1 }, attributes: { 'insurance-addon': true } })
        };
        fetch('/cart/update.js', request)
        .then(function() {
          location.href = '/cart';
        });
      }
    
      Shopify.Cart.InsuranceAddon.remove = function() {
        var headers = new Headers({ 'Content-Type': 'application/json' });
    
        var request = {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({ updates: { {{ id }}: 0 }, attributes: { 'insurance-addon': '' } })
        };
        fetch('/cart/update.js', request)
        .then(function() {
          location.href = '/cart';
        });
      }

				Shopify.Cart.InsuranceAddon.reset = function() {
					var headers = new Headers({ 'Content-Type': 'application/json' });
					var request = {
						method: 'POST',
						headers: headers,
						body: JSON.stringify({ updates: { {{ id }}: 0 }, attributes: { 'insurance-addon': true } })
					};
					fetch('/cart/update.js', request)
					.then(function() {
						location.href = '/cart';
					});
				}

      {% endif %}