const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")



      if(navToggle){
        navToggle.addEventListener("click", () =>{
            navMenu.classList.add("show-menu")
        })

      }


      if(navClose){
        navClose.addEventListener("click",()=>{
         navMenu.classList.remove("show-menu")
        })
      }


      // =====Remove mobile menu
      const navLink = document.querySelectorAll(".list-item")
      const linkAction = () => {
        const navMenu = document.getElementById("nav-menu")
       // when we click on each list-item, we remove the show menu close
        navMenu.classList.remove("show-menu")
      }

      navLink.forEach(n => n.addEventListener("click", linkAction))

