var fs = require('fs');
var imgGen = require('js-image-generator');
var path = require('path');

for(var i=1;i<=10;i++){
    imgGen.generateImage(500, 500, 800, function(err, image) {
        console.log("Generating image #" +i);
        var img_path = path.join('images', `product-${i}.jpg`);
        console.log(img_path);
        fs.writeFileSync(img_path, image.data);
    });
}
