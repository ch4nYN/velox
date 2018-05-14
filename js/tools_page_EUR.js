function convertToEUR() { // FUNCTION FOR CONVERTING FROM USD TO COINS
    "use strict";
    
    var selected = document.getElementById("dropmenu1");
    var choice = selected.options[selected.selectedIndex].text; // option choice ex: btc,golem, ltc, etc
    
    var amount = document.getElementById("amount1");
    
    $("#amountCRYPT1").html(choice); // changes name to according opt chioce
    
    //uses xmlhttp request to grab BITCOIN api from bitcoinaverage.com
    // and displays live price for BTC ONLY
    var xbtc = new XMLHttpRequest();
    var price;
    
    //conditionals for the choice word
    //  ADD IN APIS FOR THE COINS

    if (choice == "Bitcoin") { //BTC CONDITIONAL WORKS
        
        xbtc.open('GET', 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR', true);
        xbtc.onreadystatechange = function(){
        if(xbtc.readyState == 4){
            var ticker = JSON.parse(xbtc.responseText);
            price = ticker.EUR; // live price of bitcoin 
            
            //converts  from the amount USD to BTC amount.
            $("#amountEUR1").html("You get: " + amount.value / price + " BTC");
            $("#testing1").html("Live Price: €" + price);
         
        }
    };
    xbtc.send();
        
    } else if (choice == "Ethereum") { //ETH CONDITONAL WORKS
        xbtc.open('GET', 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR', true);
    xbtc.onreadystatechange = function(){
        if(xbtc.readyState == 4){
            var ticker = JSON.parse(xbtc.responseText);
            price = ticker.EUR; // live price of bitcoin 
            //converts  from the amount USD to BTC amount.
            $("#amountEUR1").html("You get: " + amount.value / price + " ETH");
            $("#testing1").html("Live Price: €" + price);
         
        }
    };
    xbtc.send();
            
    } else if (choice == "Golem") { //GNT CONDITIONAL WORKS
        xbtc.open('GET', 'https://min-api.cryptocompare.com/data/price?fsym=GNT&tsyms=EUR', true);
    xbtc.onreadystatechange = function(){
        if(xbtc.readyState == 4){
            var ticker = JSON.parse(xbtc.responseText);
            price = ticker.EUR; // live price of bitcoin 
            //converts  from the amount USD to BTC amount.
            $("#amountEUR1").html("You get: " + amount.value / price + " GNT");
            $("#testing1").html("Live Price: €" + price);
         
        }
    };
    xbtc.send();
    } else if (choice == "Litecoin") { //LTC CONDITONAL WORKS
       xbtc.open('GET', 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=EUR', true);
    xbtc.onreadystatechange = function(){
        if(xbtc.readyState == 4){
            var ticker = JSON.parse(xbtc.responseText);
            price = ticker.EUR; // live price of bitcoin 
            //converts  from the amount USD to BTC amount.
            $("#amountEUR1").html("You get: " + amount.value / price + " LTC");
            $("#testing1").html("Live Price: €" + price);
         
        }
    };
    xbtc.send(); 
    } else if (choice == "Dash") { //DASH CONDITONAL WORKS
       xbtc.open('GET', 'https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=EUR', true);
    xbtc.onreadystatechange = function(){
        if(xbtc.readyState == 4){
            var ticker = JSON.parse(xbtc.responseText);
            price = ticker.EUR; // live price of bitcoin 
            //converts  from the amount USD to BTC amount.
            $("#amountEUR1").html("You get: " + amount.value / price + " DASH");
            $("#testing1").html("Live Price: €" + price);
    
        }
    };
    xbtc.send();  
        
    } else if (choice =="Augur") { // AUGUR CONDITONAL WORKS
        xbtc.open('GET', 'https://min-api.cryptocompare.com/data/price?fsym=REP&tsyms=EUR', true);
    xbtc.onreadystatechange = function(){
        if(xbtc.readyState == 4){
            var ticker = JSON.parse(xbtc.responseText);
            price = ticker.EUR; // live price of bitcoin 
            //converts  from the amount USD to BTC amount.
            $("#amountEUR1").html("You get: " + amount.value / price + " REP");
            $("#testing1").html("Live Price: €" + price);
         
        }
    };
    xbtc.send();  
        
    } else if (choice == "Dogecoin") {
        xbtc.open('GET', 'https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=EUR', true);
    xbtc.onreadystatechange = function(){
        if(xbtc.readyState == 4){
            var ticker = JSON.parse(xbtc.responseText);
            price = ticker.EUR; // live price of bitcoin 
            //converts  from the amount USD to BTC amount.
            $("#amountEUR1").html("You get: " + amount.value / price + " DOGE");
            $("#testing1").html("Live Price: €" + price);
         
        }
    };
    xbtc.send();
        
    } 
}

function convertFromEUR() { // FUNCTION FOR CONVERTING FROM COINS TO USD
    "use strict";
    
    var selected = document.getElementById("dropmenu2");
    var choice = selected.options[selected.selectedIndex].text; // option choice ex: btc,golem, ltc, etc
    
    var amount = document.getElementById("amount2");
    
    $("#amountCRYPT2").html(choice); // changes name to according opt chioce
    
    //uses xmlhttp request to grab BITCOIN api from bitcoinaverage.com
    // and displays live price for BTC ONLY
    var xbtc = new XMLHttpRequest();
    var price;
    
    //conditionals for the choice word
    //  ADD IN APIS FOR THE COINS

    if (choice == "Bitcoin") { //BTC CONDITIONAL WORKS
        
        xbtc.open('GET', 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR', true);
        xbtc.onreadystatechange = function(){
        if(xbtc.readyState == 4){
            var ticker = JSON.parse(xbtc.responseText);
            price = ticker.EUR; // live price of bitcoin 
            
            //converts  from the amount USD to BTC amount.
            $("#amountEUR2").html("You get: " + amount.value * price + " EUR");
            $("#testing2").html("Live Price: €" + price);
         
        }
    };
    xbtc.send();
        
    } else if (choice == "Ethereum") { //ETH CONDITONAL WORKS
        xbtc.open('GET', 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR', true);
    xbtc.onreadystatechange = function(){
        if(xbtc.readyState == 4){
            var ticker = JSON.parse(xbtc.responseText);
            price = ticker.EUR; // live price of bitcoin 
            //converts  from the amount USD to BTC amount.
            $("#amountEUR2").html("You get: " + amount.value * price + " EUR");
            $("#testing2").html("Live Price: €" + price);
         
        }
    };
    xbtc.send();
            
    } else if (choice == "Golem") { //GNT CONDITIONAL WORKS
        xbtc.open('GET', 'https://min-api.cryptocompare.com/data/price?fsym=GNT&tsyms=EUR', true);
    xbtc.onreadystatechange = function(){
        if(xbtc.readyState == 4){
            var ticker = JSON.parse(xbtc.responseText);
            price = ticker.EUR; // live price of bitcoin 
            //converts  from the amount USD to BTC amount.
            $("#amountEUR2").html("You get: " + amount.value * price + " EUR");
            $("#testing2").html("Live Price: €" + price);
         
        }
    };
    xbtc.send();
    } else if (choice == "Litecoin") { //LTC CONDITONAL WORKS
       xbtc.open('GET', 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=EUR', true);
    xbtc.onreadystatechange = function(){
        if(xbtc.readyState == 4){
            var ticker = JSON.parse(xbtc.responseText);
            price = ticker.EUR; // live price of bitcoin 
            //converts  from the amount USD to BTC amount.
            $("#amountEUR2").html("You get: " + amount.value * price + " EUR");
            $("#testing2").html("Live Price: €" + price);
         
        }
    };
    xbtc.send(); 
    } else if (choice == "Dash") { //DASH CONDITONAL WORKS
       xbtc.open('GET', 'https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=EUR', true);
    xbtc.onreadystatechange = function(){
        if(xbtc.readyState == 4){
            var ticker = JSON.parse(xbtc.responseText);
            price = ticker.EUR; // live price of bitcoin 
            //converts  from the amount USD to BTC amount.
            $("#amountEUR2").html("You get: " + amount.value * price + " EUR");
            $("#testing2").html("Live Price: €" + price);
    
        }
    };
    xbtc.send();  
        
    } else if (choice =="Augur") { // AUGUR CONDITONAL WORKS
        xbtc.open('GET', 'https://min-api.cryptocompare.com/data/price?fsym=REP&tsyms=EUR', true);
    xbtc.onreadystatechange = function(){
        if(xbtc.readyState == 4){
            var ticker = JSON.parse(xbtc.responseText);
            price = ticker.EUR; // live price of bitcoin 
            //converts  from the amount USD to BTC amount.
            $("#amountEUR2").html("You get: " + amount.value * price + " EUR");
            $("#testing2").html("Live Price: €" + price);
         
        }
    };
    xbtc.send();  
        
    } else if (choice == "Dogecoin") {
        xbtc.open('GET', 'https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=EUR', true);
    xbtc.onreadystatechange = function(){
        if(xbtc.readyState == 4){
            var ticker = JSON.parse(xbtc.responseText);
            price = ticker.EUR; // live price of bitcoin 
            //converts  from the amount USD to BTC amount.
            $("#amountEUR2").html("You get: " + amount.value * price + " EUR");
            $("#testing2").html("Live Price: €" + price);
         
        }
    };
    xbtc.send();
        
    }
    
}


