const { last } = require('lodash');
const _ = require('lodash');


/*Build a simple terminal app that uses at least 5 lodash methods.

Use fake data or APIs you have worked with in previous projects or google fake data you can use. - [ ] Either make a fetch or save it in a few variables.

*/

const numbers = [8, 16, 24, 32, 40, 48, 56, 64, 72, 80]

//Console.log the output of each lodash method called on the fake data.

// console.log(_.chunk());
// console.log(_.reverse());
// console.log(_.without(numbers, 8, 16));
// console.log(_.shuffle(numbers));
// console.log(_.sortedIndexOf(numbers, 32));

//Use at least these methods: _.chunk(), _.reverse(), _.without(), _.shuffle().

//Create unit tests with Mocha for each function you build.


const assert = require('assert');

if (typeof describe === 'function'){
    describe('_.chunk()', function(){
      it('Creates an array of elements split into groups the length of size', function(){
        assert.deepEqual(_.chunk([1, 2, 3, 4, 5, 6], 3), [[1, 2, 3], [4, 5, 6]])
      });
    })

    describe('_.reverse()', function(){
        it('should reverse the array', function(){
          assert.deepEqual(_.reverse([1, 2, 3, 4, 5, 6]), [6, 5, 4, 3, 2, 1])
        });
      })

      describe('_.without()', function(){
        it('Creates an array excluding all given values using SameValueZero for equality comparisons.', function(){
          assert.deepEqual(_.without(numbers, 8, 16, 24), [32, 40, 48, 56, 64, 72, 80])
        });
      })

      describe('_.shuffle()', function(){
        it('Creates an array of shuffled values', function(){
          assert.notEqual(_.shuffle([8, 16, 24, 32, 40, 48, 56, 64, 72, 80]), [32, 56, 16, 72, 64, 80, 40 , 24, 48, 8])
        });
      })

      describe('_.sortedIndexOf()', function(){
        it('Should perform a binary search on a sorted array', function(){
          assert.deepEqual(_.sortedIndexOf([8, 16, 24, 32, 40, 48, 56, 64, 72, 80], 32), 3)
        });
      })
    



}