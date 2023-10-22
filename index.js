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


      // change background header

      const bgHeader = () =>{
        const header = document.getElementById("header")
        // when the scroll is greater than 50 view height, add the bg.header

        this.scrollY >= 50 ? header.classList.add("bg-header")
                          : header.classList.remove("bg-header")
      }
      window.addEventListener("scroll", bgHeader)