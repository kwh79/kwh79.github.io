// This section of code is how we prepare our code
// so this it is prepared to react to user events.
$(document).ready(function() {
  $(".btn").on("click", addItem);
  $("ol").on("click", ".link-delete", deleteItem);
});

// This function prompts the user for a to-do item
// and then appends it to the existing list of items.
// It also updates the counter at the top of the screen.

function addItem() {
  var text = window.prompt("Add New Record to the List");
  var ebay_search = '<a href="http://www.ebay.com/sch/i.html?_ssn=&_sop=12&_nkw=">(Search eBay)</a>'
  var delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  // console.log("Yup!");
  $("ol").append("<li>" + text + " " + ebay_search + " " + delete_link + "</li>");
  var numItems = $("li").length;

  // Challenge: Differentiate between 1 item vs. more items
  if (numItems == 1) {
    $(".total").html(numItems + " item");
  }
  else {
    $(".total").html(numItems + " items");
  }
}

function sre() {
        var query = window._content.document.getSelection();
        var revQuery = query ? query : prompt("Search eBay", query);
        if (revQuery != null) {
        var myURL = "http://search.ebay.com/search/search.dll?query=" + revQuery;
        openNewTabWith(myURL, null, null, true);
        }
}

// This function deletes an item from the list.
// The "event" parameter holds information on which
// item the user wishes to remove.
function deleteItem(event) {
  console.info(event);
  // $(event.target).remove();
  $(event.target).parent().fadeOut();

}
