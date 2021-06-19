var labels_x = []
        var labels_y = []


        function Handleselectedfile(fobj) {
            var files = fobj.target.files; // FileList object


            // Loop through the FileList and render image files as thumbnails.
            for (var i = 0, f; f = files[i]; i++) {


                var reader = new FileReader();
                reader.onload = function (event) {
                    // NOTE: event.target point to FileReader 
                    var contents = event.target.result;
                    var lines = contents.split('\n');
                    //////////
                    console.log(contents)
                    console.log(typeof (Object.values(lines)))
                    console.log(lines.length)
                    console.log(lines)
                    for (i = 0; i < lines.length; i++) {
                        if (lines[i].includes(",")) {
                            var arr = lines[i].split(',');
                        } else {
                            var arr = lines[i].split('  ');
                        }
                        console.log(arr[0])
                        console.log(JSON.parse(lines));
                        console.log(arr)
                        console.log(typeof (arr))

                        labels_x.push(arr[0])
                        labels_y.push(arr[1])
                    }
                }
            }
        }
