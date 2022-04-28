'use strict';

const documentReady=()=>{
   const headerNavMenuIcon=document.getElementById('headerNavMenuIcon'); 
   const headerNavListContainer=document.getElementById('headerNavListContainer');

   const toggleMenu=()=>{

        headerNavListContainer.classList.toggle('header-nav__list-container--left-0');



   } 

   headerNavMenuIcon.addEventListener('click',toggleMenu);














}


document.addEventListener('DOMContentLoaded',documentReady)