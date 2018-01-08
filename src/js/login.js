import $ from 'jquery';

$(document).ready(function() {

var placeholderText = $("label[for='username']").text();


$("label[for='username']").remove();


$("#username").attr('placeholder', placeholderText); 

var placeholderTextPwd = $("label[for='pwd']").text();


$("label[for='pwd']").remove();


$("#pwd").attr('placeholder', placeholderTextPwd); 
});
