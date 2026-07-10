(function(){
  const toast = document.querySelector('.toast');
  let timer;
  function showToast(message){
    if(!toast) return;
    clearTimeout(timer);
    toast.textContent = message;
    toast.classList.add('show');
    timer = setTimeout(()=>toast.classList.remove('show'), 2200);
  }
  document.querySelectorAll('[data-demo]').forEach(el=>el.addEventListener('click',e=>{
    e.preventDefault();
    showToast(el.dataset.demo || '原型交互已触发');
  }));
  document.querySelectorAll('form[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{
    e.preventDefault();
    showToast(form.dataset.message || '已提交（静态原型）');
    const target = form.dataset.redirect;
    if(target) setTimeout(()=>{ location.href = target; }, 650);
  }));
  document.querySelectorAll('.header-search input').forEach(input=>input.addEventListener('keydown',e=>{
    if(e.key === 'Enter'){
      e.preventDefault();
      location.href = 'search.html';
    }
  }));
})();
