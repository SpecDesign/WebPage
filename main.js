/*
Folder - images for each add with text strings and links
List images PNG - rainseason summerbg summerbgshoes summerbgumb
Add text
Organize text with images on Cards
Place Cards in Slides
*/

/*
document.write("<img src="rainseason.png" height="25%" width="13%" border="10px" alt="Infographic"/>")
document.write("<a id="weblink" href="http://mysite.com">Click Next</a>")
document.write("<div>&nbsp;</div> ")
foreach(product in products)
{
document.write(product)
}

*/
upList = "Shop and Save!"
upList2 = "Browse and Buy!"
upList3 = "Find and Share!"
upList4 = "Deals and Promos!"
upList5 = "Clothing and Home wares!"

products = ["Electronics", "Home Products", "Clothing", "Food Products", "Repair Goods", "Toys", "Books"]

document.write("Buy Fine Things For Fine Prices.")
document.write("<br>")
document.write("Target is selling all the best products. Stuff Your Cart!")
document.write("<br>")
document.write("Make you Day. Make a list.")
document.write("<br>")
document.write("Do you know the Best Electronics are at eShop now!")
document.write("<br>")
document.write("Deals Deals And More Deals!")
document.write("<br>")

products.forEach(outputList)
function outputList(element, index, array)
{
console.log("Product at index " + index + " Says " + element + "<br>")	
}