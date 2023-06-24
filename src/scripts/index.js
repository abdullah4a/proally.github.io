// const MenuList={
//     "menuItems":[
//         {
//             "name":"Home",
//             "description":"",
//             "path":"#"
//         },
//         {
//             "name":"Services",
//             "description":"",
//             "path":"#"
//         },        {
//             "name":"Projects",
//             "description":"",
//             "path":"#"
//         },
//         {
//             "name":"Contact Us",
//             "description":"",
//             "path":"#"
//         }
//     ]
// }

// upload brand logo

const  getBrandLogo=()=>{
    const logoPath="src/assets/images/logo.jpeg"
    const brandLogo=document.getElementById("brand-logo")
    const footerLogo=document.getElementById("brand-logo-footer")
    brandLogo.src=logoPath
    footerLogo.src=logoPath
}
getBrandLogo()


// const loadMenu=()=>{
//     const listItems=document.getElementById("nav-items")
//     var listItem = document.createElement("LI");
//     const menus=MenuList;
//     menus.menuItems.forEach(menuItem => {
//         listItem.className="nav-item"
//         listItem.innerHTML=menuItem.name
//         listItem.addEventListener('onclick',goTO(menuItem.path))
//     });
//     listItems.appendChild(listItem)

// } 
// loadMenu()
// function goTO(path){
//     document.location.href=path   
// }
const navItems=document.querySelectorAll('.nav-items li')
for (let i = 0; i < navItems.length; i++) {
    navItems[i].onclick = function() {
      var c = 0;
      while (c < navItems.length) {
        navItems[c++].className = 'nav-item';
      }
      navItems[i].className = 'nav-item active';
    };
  }
