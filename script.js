
const socialLinks =document.querySelector('.social-links');
socialLinks.style.display = 'none';


const profileInfo = document.querySelector('.profile-info');
const shareButton =  document.querySelector('#profile-share');
const socialShareButton =  document.querySelector('#social-share');




shareButton.addEventListener('click',()=>{
    if(window.innerWidth < 1440 ) {
    profileInfo.style.display = 'none';
    socialLinks.style.display = 'flex';
    }
    else {

     if(window.innerWidth >= 1440 && socialLinks.style.display == 'none')
     {
        socialLinks.style.display = 'flex';
        socialLinks.style.position = 'absolute';
        socialLinks.style.left = "59.5%";
        socialLinks.style.bottom = "44.5%";
     }
     else {
         socialLinks.style.display = 'none';
     }
        
    }

})
  

socialShareButton.addEventListener('click',()=>{
     if(window.innerWidth < 1440) {
        profileInfo.style.display = 'flex';
        socialLinks.style.display = 'none';
     }

})









