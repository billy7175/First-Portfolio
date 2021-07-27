const ItemCtrl = (function(){
  const data = {
    items: [
      {id:0, engMeaning:'comare A to B', korMeaning:'A 와 B를 비교하다' },
      {id:1, engMeaning:'be interested in', korMeaning:'~에 관심이 있다'},
      {id:2, engMeaning:'be about to do',korMeaning:'막 ~하려고 하다'},
      {id:3, engMeaning:'spill the tea',korMeaning:'실수하다'},
      {id:4, engMeaning:'light of N',korMeaning:'~에 관하여'},
      {id:5, engMeaning:'be involved in',korMeaning:'~에 관련되다'},
      {id:6, engMeaning:'be going to do',korMeaning:'~할 것 이다'},
      {id:7, engMeaning:'spend time ~ing',korMeaning:'~하는데 시간을 보내다'},
      {id:8, engMeaning:'keep ~ing',korMeaning:'계속해서 ~하다'},
      {id:0, engMeaning:'comare A to B', korMeaning:'A 와 B를 비교하다' },
      {id:1, engMeaning:'be interested in', korMeaning:'~에 관심이 있다'},
      {id:2, engMeaning:'be about to do',korMeaning:'막 ~하려고 하다'},
      {id:3, engMeaning:'spill the tea',korMeaning:'실수하다'},
      {id:4, engMeaning:'light of N',korMeaning:'~에 관하여'},
      {id:5, engMeaning:'be involved in',korMeaning:'~에 관련되다'},
      {id:6, engMeaning:'be going to do',korMeaning:'~할 것 이다'},
      {id:7, engMeaning:'spend time ~ing',korMeaning:'~하는데 시간을 보내다'},
      {id:8, engMeaning:'keep ~ing',korMeaning:'계속해서 ~하다'}
      
    ],
    currentItem:null
  }

  return {
    setCurrentItem: function(id){
      const item = data.items.filter(item => item.id === id);
      data.currentItem = item[0];
      return data.currentItem;
    },
    getItems:function(){
      return data.items;
    },
    logData: function(){
      return data;
    }
  }
})();

const UICtrl = (function(){
  return {
    populateItemList: function(items){
      let html = '';
      items.forEach(function(item){
        // html += `<li class="card" id=${item.id}>${item.engWord}</li>`
        html += `<li class="card">
        <div id=${item.id}>
          <div>${item.engMeaning}</div>
        </div>
      </li>`
      });

      document.querySelector('.card-list').innerHTML = html;
    },
    hideCard(){
      document.querySelector('.modal-overlay').style.display='none';
    },
    showModal(item){
      document.querySelector('.modal-overlay').style.display='block';
      document.querySelector('.card-front').textContent = item.engMeaning;
      document.querySelector('.card-back').textContent = item.korMeaning;
    }
  }
})();

const App = (function(ItemCtrl, UICtrl){

  const loadEventListeners = function(){
    
    document.querySelector('.modal-close-btn').addEventListener('click', hideCard)

    document.querySelector('.card-list').addEventListener('click', showCard);
  
    document.querySelector('.modal-back-btn').addEventListener('click', flipCard)
  
  };

  function flipCard(e){
    console.log(e.target.parentElement.children[2].children[0].classList.contains('toggle'))
    if(!e.target.parentElement.children[2].children[0].classList.contains('toggle')){
      e.target.parentElement.children[2].children[0].classList.add('toggle');
    } else {
      e.target.parentElement.children[2].children[0].classList.remove('toggle')
    }
    // if(!e.target.parentElement.classList.contains('toggle')){
    //   e.target.parentElement.classList.add('toggle')
    // } else {
    //   e.target.parentElement.classList.remove('toggle')
    //}
  }

  function hideCard(){
    UICtrl.hideCard();
  }
  
  function showCard(e){
    const currentId = parseInt(e.target.parentElement.id);
    console.log(currentId);
    if(e.target.parentElement.parentElement.classList.contains('card')){
      const setItem = ItemCtrl.setCurrentItem(currentId);
      console.log("this is a setItem");
      console.log(setItem);
      UICtrl.showModal(setItem);
    }
    
  }


  return {
    init:function(){
      

      const items = ItemCtrl.getItems();
      UICtrl.populateItemList(items);
      loadEventListeners();
    }
  }
})(ItemCtrl, UICtrl);

App.init();
