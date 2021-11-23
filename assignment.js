// problem 1.(Convert from Seer to Mon).........

function seerToMon(seer) {
    let convertSeerToMon = seer / 40;
  
    if (seer == true || seer == false) {
      return " enter any number";
    }if (seer < 0) {
      return "this is nagetive number press inter any positive number";
    }if (seer >= 0) {
        return convertSeerToMon;
      }if (seer == undefined) {
      return "enter any number";
    }
    return convertSeerToMon;
  }
  let finelResult = seerToMon(120);
  console.log(finelResult);
  
  // 2.Problem 2.................
  function totalSales(shart, pent, shoze) {
    let tShartPrice = shart * 100;
    let pentPrice = pent * 200;
    let shozePrice = shoze * 500;
  
    // total price................
    const totalPrice = tShartPrice + pentPrice + shozePrice;
  
    // error case................
    if (shart == 0 && pent == 0 && shoze == 0) {
      return "You didnt sell anything today";
    }
    if (shart < 0 || pent < 0 || shoze < 0) {
      return "Please give 0 or any positive number";
    }
    return totalPrice;
  }
  
  let yourTotalIncum = totalSales(1, 1, 1);
  console.log(yourTotalIncum);
  
  // problem 3. (T-shirt delivery calculation)
  
  function deliveryCost(shartDelivery) {
    let shartDeliveryOneToHanded = 100;
    let shartDeliveryOneHandedToTowHanded = 80;
    let shartDeliveryUpTowHanded = 50;
    // If it is below 100, the price will be 100
    if (shartDelivery < 0) {
      return "enter any positive number";
    } else if (shartDelivery <= 100) {
      const count = shartDelivery * shartDeliveryOneToHanded;
      return count;
    }
    // If it is between 100 to 200, the price will be 80
    else if (shartDelivery <= 200) {
      const firstHandedShart = 100 * shartDeliveryOneToHanded;
      const sellShart = shartDelivery - 100;
      const secondHandedShart = sellShart * shartDeliveryOneHandedToTowHanded;
      const totalShartPrice = firstHandedShart + secondHandedShart;
      return totalShartPrice;
    }
    //If it is above 200, the price will be 50
    else {
      const firstHandedShart = 100 * shartDeliveryOneToHanded;
      const secondHandedShart = 100 * shartDeliveryOneHandedToTowHanded;
      const sellShart = shartDelivery - 200;
      const upTowHandedShart = sellShart * shartDeliveryUpTowHanded;
      const totaShartPrice =
        firstHandedShart + secondHandedShart + upTowHandedShart;
      return totaShartPrice;
    }
  }
  let totaShartPrice = deliveryCost(300);
  console.log(totaShartPrice);
  
  // problem 4.......................
//   ..............................
  let friendList = ["Minhaz","Rakib","Taufiq","nilu","Mahbub"];
  function perfectFriend(selectPerfectFriend) {
    for (let friend of selectPerfectFriend) {
      if (friend.length == 5) {
        return friend;
      }
      // error case.............
      if (friend.length == "") {
        return "enter your any friend name";
      }
       if (typeof friend != "string") {
        return "giv any srting value";
      }
    }  
  }
  // return selectPerfectFriend;
  let selectMyBestFriend = perfectFriend(friendList);
  console.log(selectMyBestFriend);