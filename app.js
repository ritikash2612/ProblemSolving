/*
What is callback ?

A callback function is another that is usually passed to a 
function as an argument and is invoked when the event we are waiting for is done.


Example from Node Documentation:
function asyncOperation ( a, b, c, callback ) {
// ... lots of hard work ...
// if (  an error occurs  ) {
//     return callback(new Error("An error has occurred"));
//   }
//   // ... more work ...
//   callback(null, d, e, f);
// }

// asyncOperation ( params.., function ( err, returnValues.. ) {
//   //This code gets run after the async operation gets run
// });

============================================================
My implementaion
============================================================
This is a script that simulates a nodejs call back.

removeDuplicatesCallback -> callback method to return/ print result of calling method

removeDuplicates -> method that removes duplicates and uses a call back to return results

============================================================
*/
// callback method to send a reponse when this is completed
let removeDuplicatesCallback = function (result) {

    console.log(result.join(''));
};

let removeDuplicates = function (data, callback) {

    // main work
    console.log('Input provided: '+ data);
    setTimeout(() => {
        

        var dict = {};
        var lenOfInput = data.length;

        if (lenOfInput == 0) {
            return data;
        }

        var count = 0;

        data.forEach(element => {

            if (element in dict) {
                dict[element] = dict[element] + 1;
            } else
                dict[element] = 1;
        });

        result = []
        for(key in dict){
            if(dict[key] %2 != 0){ result.push(key);}
        }

        callback(result);

    }, 5000);
};


var input = 'Iaabbcddeeddde'.split('');
removeDuplicates(input, removeDuplicatesCallback);

var input = 'MICROSOFT'.split('');
removeDuplicates(input, removeDuplicatesCallback);

var input = 'VIRTUSA'.split('');
removeDuplicates(input, removeDuplicatesCallback);

var input = 'SOCCERSTADIUMS'.split('');
removeDuplicates(input, removeDuplicatesCallback);

console.log('Code will execute before callback.');