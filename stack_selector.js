document.addEventListener("DOMContentLoaded", () => {
  const stack_items = document.querySelectorAll(".stack-item");
  let stack_selected = document.getElementById('stack-selected');
  stack_items.forEach((item) => {
    item.addEventListener('click',()=>{
        stack_items.forEach((item)=>{
              item.classList.remove('active-stack')
        })
        item.classList.add('active-stack')

      const item_selected_index = item.getAttribute("data-stack-item");
      switch(item_selected_index){
        case "1":
          stack_selected.src="/assets/images/java-logo.png";
          break;
        case "2":
          stack_selected.src="/assets/images/angularjs.png";
          break;
        case "3":
          stack_selected.src="/assets/images/html-5.png";
          break;
        case "4":
          stack_selected.src="/assets/images/css-3.png";
          break;
        case "5":
          stack_selected.src="/assets/images/css-3.png";
          break;
        case "6":
          stack_selected.src="/assets/images/css-3.png";
          break;
        case "7":
          stack_selected.src="/assets/images/css-3.png";
          break;
        case "8":
          stack_selected.src="/assets/images/css-3.png";
          break;
        case "9":
          stack_selected.src="/assets/images/css-3.png";
          break;
        case "10":
          stack_selected.src="/assets/images/css-3.png";
          break;
        case "11":
          stack_selected.src="/assets/images/css-3.png";
          break;
        case "12":
          stack_selected.src="/assets/images/css-3.png";
          break;
        case "13":
          stack_selected.src="/assets/images/css-3.png";
          break;
        case "14":
          stack_selected.src="/assets/images/css-3.png";
          break;
        case "15":
          stack_selected.src="/assets/images/css-3.png";
          break;
        case "16":
          stack_selected.src="/assets/images/css-3.png";
          break;
      }
    })
  });

});
