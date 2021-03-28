eruda.init();

eruda.show();

let elements = document.querySelectorAll('.btn')
elements.forEach(el=>{
var popover = new bootstrap.Popover(el,{
trigger:'focus',
html:true
})
popover.show()
})


