// chang plus in slidebar
{let li1 = document.querySelector('.li1'),fa1 = document.querySelector('.li1 .svg1'),fa2 = document.querySelector('.li1 .svg2')
let li2 = document.querySelector('.li2'),fa3 = document.querySelector('.li2 .svg1'),fa4 = document.querySelector('.li2 .svg2')
let li3 = document.querySelector('.li3'),fa5 = document.querySelector('.li3 .svg1'),fa6 = document.querySelector('.li3 .svg2')
li1.onclick=()=>{
  if(li1.ariaExpanded=='true'){
    fa1.style.display='none'
    fa2.style.display='block'
  }else{
    fa1.style.display='block'
    fa2.style.display='none'
  }
}
li2.onclick=()=>{
  if(li2.ariaExpanded=='true'){
    fa3.style.display='none'
    fa4.style.display='block'
  }else{
    fa3.style.display='block'
    fa4.style.display='none'
  }
}
li3.onclick=()=>{
  if(li3.ariaExpanded=='true'){
    fa5.style.display='none'
    fa6.style.display='block'
  }else{
    fa5.style.display='block'
    fa6.style.display='none'
  }
}
}

$('.main1').on('click',function(){
  $('.section1').fadeIn()
  $('.section2').hide()
  $('.section3').hide()
  $('.section4').hide()
  $('.section5').hide()
  $('.section6').hide()
  $('.section7').hide()
  $('.section8').hide()
  $('.section9').hide()
})
$('.main2').on('click',function(){
  $('.section2').fadeIn()
  $('.section1').hide()
  $('.section3').hide()
  $('.section4').hide()
  $('.section5').hide()
  $('.section6').hide()
  $('.section7').hide()
  $('.section8').hide()
  $('.section9').hide()
})
$('.main3').on('click',function(){
  $('.section3').fadeIn()
  $('.section2').hide()
  $('.section1').hide()
  $('.section4').hide()
  $('.section5').hide()
  $('.section6').hide()
  $('.section7').hide()
  $('.section8').hide()
  $('.section9').hide()
})
$('.main4').on('click',function(){
  $('.section4').fadeIn()
  $('.section2').hide()
  $('.section3').hide()
  $('.section1').hide()
  $('.section5').hide()
  $('.section6').hide()
  $('.section7').hide()
  $('.section8').hide()
  $('.section9').hide()
})
$('.main5').on('click',function(){
  $('.section5').fadeIn()
  $('.section2').hide()
  $('.section3').hide()
  $('.section4').hide()
  $('.section1').hide()
  $('.section6').hide()
  $('.section7').hide()
  $('.section8').hide()
  $('.section9').hide()
})
$('.main6').on('click',function(){
  $('.section6').fadeIn()
  $('.section2').hide()
  $('.section3').hide()
  $('.section4').hide()
  $('.section5').hide()
  $('.section1').hide()
  $('.section7').hide()
  $('.section8').hide()
  $('.section9').hide()
})
$('.main7').on('click',function(){
  $('.section7').fadeIn()
  $('.section2').hide()
  $('.section3').hide()
  $('.section4').hide()
  $('.section5').hide()
  $('.section6').hide()
  $('.section1').hide()
  $('.section8').hide()
  $('.section9').hide()
})
$('.main8').on('click',function(){
  $('.section8').fadeIn()
  $('.section2').hide()
  $('.section3').hide()
  $('.section4').hide()
  $('.section5').hide()
  $('.section6').hide()
  $('.section7').hide()
  $('.section1').hide()
  $('.section9').hide()
})
$('.main9').on('click',function(){
  $('.section9').fadeIn()
  $('.section2').hide()
  $('.section3').hide()
  $('.section4').hide()
  $('.section5').hide()
  $('.section6').hide()
  $('.section7').hide()
  $('.section8').hide()
  $('.section1').hide()
})
