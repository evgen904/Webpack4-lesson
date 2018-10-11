import './my-styles.less';
import $ from 'jquery';
import avg from './some.js';
import some from './some.js';

$('.title').html('Text primer');


console.log(some.avg(1,4,8));
console.log(some.max(1,4,8));
console.log(some.merge({
    a: 1
},{
    b: 2
}));




