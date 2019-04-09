
/*var currentdate = 0;
var image_number = 0;
function ImageArray (n) {
  this.length = n;
  for (var i =1; i <= n; i++) {
    this[i] = ' '
  }
}
image = new ImageArray(7)
image[0] = '_DSC5440web.jpg'
image[1] = '_DSC5601web.jpg'
image[2] = '_DSC5702web.jpg'
image[3] = '_DSC5735web.jpg'
image[4] = '_DSC5587web.jpg'
image[5] = '_DSC5832web.jpg'
image[6] = '_DSC5880.jpg'
image[7] = '_DSC5789web.jpg'


var rand = 60/image.length
function randomimage() {
 currentdate = new Date()
 image_number = currentdate.getSeconds()
 image_number = Math.floor(image_number/rand)
 return(image[image_number])
}

//document.write("<img src='" + imlocation + randomimage()+ "'>");
