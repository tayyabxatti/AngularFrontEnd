var fs = require('fs');
var path = './dist/SkolHub/';
const regex = /src="(.*?)"/gm;
const getFileUpdatedDate = (file) => {
    const stats = fs.statSync(file)
    return stats.mtime;

}

fs.readFile(path+'index.html', { encoding: 'utf-8' }, function (err, data) {
    if (!err) {
        let m;
        while ((m = regex.exec(data)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            m.forEach(filename => {
                if(!filename.includes('src'))
                {
                    var d = getFileUpdatedDate(path+filename);
                    var utcdate = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
                    data = data.replace(filename,filename + "?v=" + utcdate);
                }

            });
        }

        fs.writeFile(path+'index.html',data , (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;
        
            // success case, the file was saved
            console.log('data written!');
        });
    } else {
        console.log(err);
    }
});


